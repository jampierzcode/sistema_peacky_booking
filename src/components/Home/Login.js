import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    if (token !== null && token !== "") {
      navigate("/dashboard", { replace: true });
    }
  }, [0]);
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      console.log(response.data);
      if (response.data.msg) {
        console.log(response.data.msg);
      } else {
        const { token, usuario } = response.data;
        login(token, usuario);
        const registersActive = await axios.post(
          "http://localhost:3001/data/verify",
          {
            empresa_id: usuario.empresa_id,
          }
        );
        const existData = registersActive.data.exist;
        console.log(existData);
        if (existData === 0) {
          navigate("/install", { replace: true });
        } else {
          navigate("/recepcion", { replace: true });
        }
      }
    } catch (error) {
      console.error("Error de inicio de sesión", error);
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-[400px] bg-white px-6 py-6 flex flex-col gap-4">
        <img
          src="./LOGO.jpg"
          className="w-[50px] h-[50px] rounded-full mx-auto object-cover object-center"
          alt="logo"
        />

        <div className="leading h-[1px] bg-gray-300"></div>
        <h2 className="text-center font-bold text-lg ">Iniciar sesión</h2>
        <label htmlFor="Usuario" className="text-sm text-gray-700 font-bold">
          Usuario
        </label>
        <input
          className="px-3 py-2 bg-gray-200 rounded text-sm"
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="Contraseña" className="text-sm text-gray-700 font-bold">
          Contraseña
        </label>
        <input
          className="px-3 py-2 bg-gray-200 rounded text-sm"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full px-3 py-2 rounded bg-[#3419c0] text-white text-sm"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>

        <div className="leading h-[1px] bg-gray-300"></div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <Link
            to={"#"}
            className="text-sm text-center font-bold text-[#170c6c] hover:text-[#3419c0]"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <p className="text-sm">
            ¿No tienes una cuenta?{" "}
            <Link
              to={"/register"}
              className="text-sm text-center font-bold text-[#170c6c] hover:text-[#3419c0]"
            >
              Registrate aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
