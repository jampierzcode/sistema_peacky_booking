import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[60vh]">
      <h1 className="text-xl">Bienvenido al hotel</h1>
      <Link className="p-4 rounded bg-black text-white text-sm" to={"./login"}>
        Iniciar sesion
      </Link>
      <button className="p-4 rounded bg-black text-white text-sm">
        Iniciar Sesion
      </button>
    </div>
  );
};

export default Home;
