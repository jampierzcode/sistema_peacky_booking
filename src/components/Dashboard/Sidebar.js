import React, { useEffect, useState } from "react";
// Icons
import { RiMore2Fill, RiCloseFill } from "react-icons/ri";
import {
  RiHotelBedLine,
  RiCalendar2Line,
  RiUser3Line,
  RiNotification2Line,
  RiPieChart2Line,
} from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../auth/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const { logout, usuario } = useAuth();
  const usuarioJson = JSON.parse(usuario);
  const [routesPage, setRoutesPage] = useState([
    {
      name: "Recepcion",
      path: "/recepcion",
      icon: <RiNotification2Line />,
      isActive: false,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <RiPieChart2Line />,
      isActive: false,
    },
    {
      name: "Habitaciones",
      path: "/habitaciones",
      icon: <RiHotelBedLine />,
      isActive: false,
    },
    {
      name: "Reservas",
      path: "/reservas",
      icon: <RiCalendar2Line />,
      isActive: false,
    },
    {
      name: "Clientes",
      path: "/clientes",
      icon: <RiUser3Line />,
      isActive: false,
    },
  ]);

  // UseEffect para actualizar isActive cuando cambia la ruta
  useEffect(() => {
    const updatedRoutes = routesPage.map((route) => ({
      ...route,
      isActive: location.pathname === route.path,
    }));
    setRoutesPage(updatedRoutes);
  }, [location.pathname, setRoutesPage]);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };
  const verifyRol = (rol) => {
    switch (rol) {
      case 1:
        return "SuperAdmin";
        break;
      case 2:
        return "Admin";
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center px-4 gap-2 h-[30vh]">
          <img
            src="https://img.freepik.com/foto-gratis/anciano-sonriente-gafas_23-2148740051.jpg"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-md text-white font-bold text-center">
            {usuarioJson.nombre}
          </h1>
          <p className="text-sm text-center text-white">
            {verifyRol(usuarioJson.rol)}
          </p>
          <p className="bg-primary-100 py-2 px-4 rounded-full text-white">
            {usuarioJson.empresa}
          </p>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 py-8 px-4 rounded-tr-[100px] h-[70vh] overflow-y-auto flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            {routesPage.map((route, index) => {
              if (index === 0) {
                return (
                  <Link
                    key={index}
                    to={route.path}
                    className={`flex items-center gap-4 text-white py-2 pl-4 mr-4 rounded-tr-[100px] rounded-xl hover:bg-primary-900/50 ${
                      route.isActive ? "bg-primary-900/50 " : ""
                    } transition-colors`}
                  >
                    {route.icon} {route.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={index}
                  to={route.path}
                  className={`flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 ${
                    route.isActive ? "bg-primary-900/50 " : ""
                  } transition-colors`}
                >
                  {route.icon} {route.name}
                </Link>
              );
            })}
          </nav>
          <button
            onClick={handleLogout}
            className="bg-primary-900/50 text-white p-4 rounded-xl"
          >
            <p className="text-white font-bold flex items-center gap-3">
              <RiLogoutBoxLine />
              Cerrar sesion
            </p>
            {/* <a href="#">Contact us</a> */}
          </button>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
