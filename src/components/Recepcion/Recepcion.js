import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useAuth } from "../../auth/AuthContext";

const Recepcion = () => {
  // usuario loguqeado

  const { usuario } = useAuth();
  // habitaciones
  const [habitaciones, setHabitaciones] = useState([]);
  const [filterHabitaciones, setFilterHabitaciones] = useState([]);
  const [pisos, setPisos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);
  const [numeroCuarto, setNumeroCuarto] = useState([]);
  const usuarioJson = JSON.parse(usuario);
  const [filterType, setFilterType] = useState("");
  const [itemsFilter, setItemsFilter] = useState([]);
  const handleFilter = (e) => {
    setFilterType(e);
    switch (e) {
      case "0":
        console.log("no hay seleccion");

        setItemsFilter([]);
        break;
      case "PISO":
        console.log("piso");

        setItemsFilter(pisos);
        break;
      case "N_CUARTO":
        console.log("n_cuarto");

        setItemsFilter(numeroCuarto);
        break;
      case "CATEGORIA":
        console.log("categoria");

        setItemsFilter(categorias);
        break;
      case "DISPONIBILIDAD":
        console.log("disponibilidad");

        setItemsFilter(estados);
        break;

      default:
        break;
    }
  };
  const getHabitaciones = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/habitaciones/allitems",
        {
          id: usuarioJson.empresa_id,
        }
      );
      console.log(response.data);
      const getHabitaciones = response.data;
      const categoriasUnicas = [
        "Todas",
        ...new Set(getHabitaciones.map((habitacion) => habitacion.categoria)),
      ];
      // Crear un array de objetos con name y isActive
      const categoriasConEstado = categoriasUnicas.map((categoria) => ({
        name: categoria,
        isActive: categoria === "Todas",
      }));

      setCategorias(categoriasConEstado);
      const pisosUnicos = [
        "Todos",
        ...new Set(getHabitaciones.map((habitacion) => habitacion.piso)),
      ];
      const pisosConEstado = pisosUnicos.map((piso) => ({
        name: piso,
        isActive: piso === "Todos",
      }));
      setPisos(pisosConEstado);
      const cuartosUnicos = [
        "Todos",
        ...new Set(getHabitaciones.map((habitacion) => habitacion.n_cuarto)),
      ];
      const cuartosConEstado = cuartosUnicos.map((piso) => ({
        name: piso,
        isActive: piso === "Todos",
      }));
      setNumeroCuarto(cuartosConEstado);
      const estadosUnicos = [
        "Todos",
        ...new Set(
          getHabitaciones.map((habitacion) => {
            switch (habitacion.estado) {
              case 1:
                return "Disponible";
                break;
              case 2:
                return "Ocupado";
                break;
              case 3:
                return "En mantenimiento";
                break;

              default:
                break;
            }
          })
        ),
      ];
      const estadosActivos = estadosUnicos.map((estado) => ({
        name: estado,
        isActive: estado === "Todos",
      }));
      setEstados(estadosActivos);
      setPisos(pisosConEstado);
      setHabitaciones(getHabitaciones);
      setFilterHabitaciones(getHabitaciones);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHabitaciones();
  }, [0]);
  // const filterHabs = () => {
  //   const newHabitaciones = filterHabitaciones.
  // }

  const handleOptionItem = (name) => {
    let newHabs;
    switch (filterType) {
      case "0":
        break;
      case "PISO":
        newHabs = habitaciones.filter((hab) => {
          if (name === "Todos") {
            return hab;
          } else {
            return hab.piso === name;
          }
        });
        setFilterHabitaciones(newHabs);
        break;
      case "N_CUARTO":
        newHabs = habitaciones.filter((hab) => {
          if (name === "Todos") {
            return hab;
          } else {
            return hab.n_cuarto === name;
          }
        });
        setFilterHabitaciones(newHabs);
        break;
      case "CATEGORIA":
        newHabs = habitaciones.filter((hab) => {
          if (name === "Todas") {
            return hab;
          } else {
            return hab.categoria === name;
          }
        });
        setFilterHabitaciones(newHabs);
        break;
      case "DISPONIBILIDAD":
        newHabs = habitaciones.filter((hab) => {
          let status;
          switch (hab.estado) {
            case 1:
              status = "Disponible";
              break;
            case 2:
              status = "Ocupado";
              break;
            case 3:
              status = "En mantenimiento";
              break;

            default:
              break;
          }
          if (name === "Todos") {
            return hab;
          } else {
            return status === name;
          }
        });
        setFilterHabitaciones(newHabs);
        break;

      default:
        break;
    }
    const updatedItems = itemsFilter.map((item) => ({
      ...item,
      isActive: item.name === name,
    }));

    setItemsFilter(updatedItems);
  };
  const verifyEstado = (estado) => {
    switch (estado) {
      case 1:
        return "Disponible";
        break;
      case 2:
        return "Ocupado";
        break;
      case 3:
        return "En mantenimiento";
        break;

      default:
        break;
    }
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700 my-4">
        Tus habitaciones
      </h1>
      <div className="text-lg text-gray-600 flex items-center gap-4">
        <p>Filtrar por </p>
        <select
          onChange={(e) => handleFilter(e.target.value)}
          value={filterType}
          className="bg-gray-100 border focus:no-underline  border-gray-500 rounded-lg shadow-lg px-4 py-2"
          name="tipo-filter"
          id="tipo-filter"
        >
          <option value="0">Todas las habitaciones</option>
          <option value="PISO">Piso</option>
          <option value="N_CUARTO">Número de Cuarto</option>
          <option value="CATEGORIA">Categoria</option>
          <option value="DISPONIBILIDAD">Disponibilidad</option>
        </select>
      </div>
      <div className="flex items center my-4 overflow-x-auto pb-4 gap-4">
        {itemsFilter.map((filter, index) => {
          return (
            <div
              onClick={() => handleOptionItem(filter.name)}
              key={index}
              aria-disabled
              className={`rounded-full ${
                filter.isActive ? "bg-primary-900" : "bg-primary-300"
              } text-white whitespace-nowrap text-sm md:text-lg font-medium px-4 py-2 cursor-pointer`}
            >
              {filter.name}
            </div>
          );
        })}
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-8">
        {/* Card 1 */}
        {filterHabitaciones.map((hab, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`p-8 rounded-xl text-gray-300 ${
                verifyEstado(hab.estado) === "Disponible"
                  ? "bg-[#12a13f]"
                  : verifyEstado(hab.estado) === "Ocupado"
                  ? "bg-[#d84343]"
                  : "bg-primary-300/80"
              }`}
            >
              <div className="sucess-component flex flex-col gap-4">
                <h4 className="text-lg md:text-2xl text-white font-bold">
                  Piso: {hab.piso}
                </h4>
                <div className="leading h-[1px] bg-gray-300"></div>
                <h4 className="text-xl md:text-3xl text-white font-bold">
                  N°: {hab.n_cuarto}
                </h4>
                <div className="leading h-[1px] bg-gray-300"></div>
                <h4 className="text-md md:text-xl text-white">
                  Habitación {hab.categoria}
                </h4>
                <span className="text-3xl text-white font-bold">
                  <span className="text-xl font-bold">S/</span>{" "}
                  {Math.round((hab.precio * 100) / 100).toFixed(2)}
                </span>
                <button
                  disabled={verifyEstado(hab.estado) === "Ocupado"}
                  className={`py-2 text-sm text-white px-4 ${
                    verifyEstado(hab.estado) === "Disponible"
                      ? "bg-[#1d562f]"
                      : verifyEstado(hab.estado) === "Ocupado"
                      ? "bg-[#8c0808]"
                      : "bg-primary-300/80"
                  }  rounded-full`}
                >
                  {verifyEstado(hab.estado)}
                </button>
              </div>
            </motion.div>
          );
        })}
      </section>
    </>
  );
};

export default Recepcion;
