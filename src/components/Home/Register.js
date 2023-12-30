import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MdArrowCircleLeft,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import axios from "axios";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkCoincide, setCheckCoincide] = useState(false);
  const handleCheck = () => {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setCheckCoincide(true);
    } else {
      setCheckCoincide(false);
    }
  };
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        nombre,
        email,
        password,
      });
      const data = response.data;
      console.log(data);
      if (data.msg === "Registro con exito") {
        navigate("/mail-verification", { replace: true });
      } else {
        console.log("Hubo un error en el registro");
      }
    } catch (error) {
      console.error("Error de inicio de sesión", error);
    }
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="w-full h-[100vh] py-8 flex justify-center bg-gray-200">
      {/* <div className="w-full max-w-[600px] h-full bg-white mr-4">
        <img
          className="w-full h-full object-cover object-center"
          src="./fondoportada.jpg"
          alt=""
        />
      </div> */}
      <div className="shadow-lg w-full max-w-[400px] bg-white px-6 py-6 flex flex-col gap-4">
        <img
          src="./LOGO.jpg"
          className="w-[50px] h-[50px] rounded-full mx-auto object-cover object-center"
          alt="logo"
        />
        <div className="leading h-[1px] bg-gray-300"></div>
        <h2 className="text-center font-bold text-lg">Registrate aqui</h2>

        {/* <p className="text-center w-full text-gray-600">Registrate aqui</p> */}
        <label htmlFor="Nombres" className="text-sm text-gray-700 font-bold">
          Nombre de la empresa
        </label>
        <input
          className="px-3 py-2 bg-gray-200 rounded text-sm"
          type="text"
          placeholder="Nombre de tu Hotel/Alojamiento Hotelero"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="Usuario" className="text-sm text-gray-700 font-bold">
          Correo electrónico
        </label>
        <input
          className="px-3 py-2 bg-gray-200 rounded text-sm"
          type="text"
          placeholder="empresa@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Usuario" className="text-sm text-gray-700 font-bold">
          Contraseña
        </label>
        <div className="relative">
          <input
            className={`w-full px-3 py-2 ${
              checkCoincide
                ? "bg-[#9eeec3ba] text-[#0c522d] font-bold"
                : "bg-gray-200"
            } rounded text-sm`}
            type={showPass ? "text" : "password"}
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyUp={handleCheck}
          />
          <div
            onClick={handleShowPass}
            className="cursor-pointer flex items-center justify-center px-3 py-2 absolute top-0 right-0 bottom-0   "
          >
            {showPass ? (
              <MdOutlineVisibility className="text-[#3419c0]" />
            ) : (
              <MdOutlineVisibilityOff className="text-[#3419c0]" />
            )}
          </div>
        </div>
        {password !== "" ? (
          <div>
            <label
              htmlFor="Usuario"
              className="text-sm text-gray-700 font-bold"
            >
              Confirmar Contraseña
            </label>
            <div className="relative">
              <input
                className={`w-full px-3 py-2 ${
                  checkCoincide
                    ? "bg-[#9eeec3ba] text-[#0c522d] font-bold"
                    : "bg-gray-200"
                } rounded text-sm`}
                type={showPass ? "text" : "password"}
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                onKeyUp={handleCheck}
              />
              <div
                onClick={handleShowPass}
                className="cursor-pointer flex items-center justify-center px-3 py-2 absolute top-0 right-0 bottom-0   "
              >
                {showPass ? (
                  <MdOutlineVisibility className="text-[#3419c0]" />
                ) : (
                  <MdOutlineVisibilityOff className="text-[#3419c0]" />
                )}
              </div>
            </div>

            {checkCoincide ? (
              <span className="block w-full text-start text-[#0c522d] mt-3 text-sm font-bold">
                Las contraseñas coinciden
              </span>
            ) : null}
          </div>
        ) : null}

        <button
          className="w-full px-3 py-2 rounded bg-[#3419c0] text-white text-sm"
          onClick={handleRegister}
        >
          Registrarse
        </button>

        <div className="leading h-[1px] bg-gray-300"></div>
        <Link
          to={"/login"}
          className="flex items-center gap-2 justify-center text-sm text-center text-gray-700"
        >
          <MdArrowCircleLeft /> Volver para iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;
