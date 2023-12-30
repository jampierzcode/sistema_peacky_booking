// App.js
import React, { useState } from "react";
// import io from "socket.io-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Home/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import { AuthProvider } from "./auth/AuthContext";
import Home from "./components/Home/Home";
import Register from "./components/Home/Register";
import EmailVerification from "./components/EmailVerification/EmailVerification";
import Recepcion from "./components/Recepcion/Recepcion";
import Layout from "./components/utils/Layout";
import Habitaciones from "./components/Habitaciones/Habitaciones";
import Install from "./components/Instalacion/Install";
import InstallTwo from "./components/Instalacion/InstallTwo";

// const socket = io("http://localhost:3001");
// console.log("Intentando conectar con el servidor de Socket.IO");

function App() {
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [dni, setDni] = useState("");
  const [habitacion, setHabitacion] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Enviar reserva al servidor
  //   socket.emit("reserva", { nombre, celular, dni, habitacion });

  //   // Limpiar el formulario
  //   setNombre("");
  //   setCelular("");
  //   setDni("");
  //   setHabitacion("");
  // };

  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/installtwo" element={<InstallTwo />} />
            <Route path="/mail-verification" element={<EmailVerification />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <PrivateRoute component={Dashboard} />
                </Layout>
              }
            />
            <Route
              path="/install"
              element={<PrivateRoute component={Install} />}
            />
            <Route
              path="/recepcion"
              element={
                <Layout>
                  <PrivateRoute component={Recepcion} />
                </Layout>
              }
            />
            <Route
              path="/habitaciones"
              element={
                <Layout>
                  <PrivateRoute component={Habitaciones} />
                </Layout>
              }
            />
            {/* Otras rutas protegidas aquí */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
