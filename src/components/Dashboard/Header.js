import React from "react";
// Icons
import { RiSearch2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useAuth } from "../../auth/AuthContext";
const Header = () => {
  const { usuario } = useAuth();
  const usuarioJson = JSON.parse(usuario);
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.h1
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="text-md md:text-xl font-bold"
      >
        🌞 Buenos dias,{" "}
        <span className="text-primary-100">{usuarioJson.nombre}</span>
      </motion.h1>
      <form className="w-full md:w-auto">
        <div className="relative">
          <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto"
            placeholder="Search for projects"
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
