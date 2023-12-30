import React, { useState, useEffect } from "react";
import { Table, message } from "antd";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "Celular",
    dataIndex: "celular",
    key: "celular",
  },
  {
    title: "DNI",
    dataIndex: "dni",
    key: "dni",
  },
  {
    title: "Habitación",
    dataIndex: "habitacion",
    key: "habitacion",
  },
];

const Dashboard = () => {
  const [reservas, setReservas] = useState([]);

  const [audio] = useState(new Audio("/notificacion.mp3"));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reservas");
        setReservas(response.data);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Configuración de Socket.IO
    socket.on("nuevaReserva", (nuevaReserva) => {
      // Actualizar las reservas en tiempo real
      setReservas((prevReservas) => [nuevaReserva, ...prevReservas]);

      // Mostrar mensaje de alerta
      message.success(`Nueva reserva de ${nuevaReserva.nombre}`);
      playNotificationSound();
    });
    // Reproducir el sonido cuando haya una nueva reserva

    return () => {
      socket.off("nuevaReserva");
    };
  }, []);
  const playNotificationSound = () => {
    // Pausar y reiniciar el audio para reproducirlo desde el principio
    // audio.pause();
    // audio.currentTime = 0;
    audio.play();
  };

  return (
    <div>
      <h1>Dashboard - Reservas de Habitaciones</h1>
      <Table columns={columns} dataSource={reservas} />
      <audio ref={audio} src="/notificacion.mp3" />
    </div>
  );
};

export default Dashboard;
