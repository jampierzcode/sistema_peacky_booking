import React from "react";
import { useAuth } from "../../auth/AuthContext";

const Install = () => {
  const { usuario } = useAuth();
  const usuarioJson = JSON.parse(usuario);
  return (
    <>
      <div
        className={`bg-primary-900 h-full w-full transition-all z-50 duration-300`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center px-4 gap-2 h-[30vh]">
          <div className="w-full max-w-[800px] flex flex-col gap-4">
            <h1 className="text-3xl text-white">Instalacion</h1>
            <p className="text-white text-xl">
              Bienvenido{" "}
              <span className="text-2xl font-bold">{usuarioJson.nombre}</span>{" "}
              estas a pocos pasos para configurar tu Hotel
            </p>
            {/* <div className="h-1 w-full bg-gray-200 rounded-full"></div>
            <p className="text-white text-lg">
              A continuacion sigue estos pasos para continuar con la instalacion
            </p> */}
          </div>
        </div>
        {/* Nav */}
        <div className="w-full bg-primary-300 py-8 px-4 rounded-tr-[100px] h-[70vh] overflow-y-auto flex flex-col justify-between gap-8">
          {/* steps backs */}
          <div className="w-full max-w-[800px] mx-auto flex flex-col gap-4">
            <div className="w-full">
              <p className="text-white text-start text-lg">Paso 1/5</p>
            </div>
            {/* preguntas */}
            <div className="w-full flex flex-col gap-4">
              <h1 className=" text-white text-xl">
                En tu alojamiento, ¿tus habitaciones estan distribuidas en
                pisos?
              </h1>
              <div className="flex flex-col gap-4">
                <div className="option rounded-lg w-full px-3 py-2 bg-white text-gray-700 font-medium">
                  SI
                </div>
                <div className="option rounded-lg w-full px-3 py-2 bg-white text-gray-700 font-medium">
                  NO
                </div>
                <div className="aviso text-white text-ms">
                  Escoje una de las opciones
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <button className="px-3 py-2 rounded-lg bg-white text-primary-300 text-xl">
                  Atras
                </button>
                <button className="px-3 py-2 rounded-lg bg-primary-900 text-white text-xl">
                  Siguiente
                </button>
              </div>
              {/* <select
                name="confirmpisos"
                className="rounded-lg w-full px-3 py-2"
              >
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Install;
