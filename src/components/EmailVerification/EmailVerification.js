import React, { useEffect, useState } from "react";

const EmailVerification = () => {
  const [codeToken, setCodeToken] = useState("");
  useEffect(() => {
    // Obtener la cadena de consulta de la URL
    const searchParams = new URLSearchParams(window.location.search);

    // Obtener el valor del token
    const token = searchParams.get("token");
    setCodeToken(token);

    console.log("Token:", token);

    // Aquí puedes realizar las acciones necesarias con el token
  }, []); // Asegúrate de proporcionar un array vacío como dependencia para ejecutar useEffect solo una vez

  return (
    <div className="w-full flex items-center justify-center bg-gray-300 min-h-[100vh]">
      <div className="w-full max-w-[600px] bg-white p-6 rounded">
        {/* <h1>Codigo de verificacion</h1> */}
        <img
          src="./LOGO.jpg"
          className="w-[50px] h-[50px] rounded-full mx-auto object-cover object-center"
          alt="logo"
        />

        <div className="leading h-[1px] bg-gray-300 my-4"></div>

        <h1 className="text-md text-center font-bold text-gray-700">
          Verifica tu correo electronico
        </h1>
        <p className="text-sm text-center text-gray-600">
          Da click en el boton para verificar tu correo electronico
        </p>
        <p>{codeToken}</p>
        <input
          type="text"
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded w-full my-4"
        />
        <div className="flex justify-center my-4">
          <button className="rounded mx-auto w-full max-w-[300px] bg-[#3419c0] text-white px-3 py-2 font-bold">
            Verificar
          </button>
        </div>
        <div className="leading h-[1px] bg-gray-300 my-4"></div>
      </div>
    </div>
  );
};

export default EmailVerification;
