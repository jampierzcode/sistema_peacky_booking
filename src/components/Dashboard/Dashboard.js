import React from "react";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// Icons
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

const Dashboard = () => {
  // const navigate = useNavigate();

  return (
    <div>
      {/* Section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
        {/* Card 1 */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-primary-100 p-8 rounded-xl text-gray-300"
        >
          <div className="change-component flex flex-col gap-6 animate-pulse hidden">
            <div className="h-4 w-8 bg-gray-400 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-400 rounded-full"></div>
            <div className="h-8 w-28 bg-gray-400 rounded-full"></div>
            <div className="h-16 w-full bg-gray-400 rounded-full"></div>
          </div>
          <div className="sucess-component flex flex-col gap-6">
            <RiLineChartLine className="text-3xl" />
            <h4 className="text-md md:text-xl">Ventas</h4>
            <span className="text-3xl text-white">S/ 8,350</span>
            <span className="py-2 text-sm px-4 bg-primary-300/80 rounded-full">
              + 10% since last month
            </span>
          </div>
        </motion.div>
        {/* Card 2 */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl"
        >
          <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
            <span className="bg-primary-100 text-gray-300 text-md md:text-xl font-bold p-4 rounded-xl">
              98
            </span>
            <div>
              <h3 className="font-bold">Clientes</h3>
              <p className="text-gray-500">In top 30%</p>
            </div>
          </div>
          <div className="bg-primary-100/10 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary-100 text-gray-300 text-md md:text-xl font-bold p-4 rounded-xl">
                32
              </span>
              <div>
                <h3 className="font-bold">Reservas</h3>
                <p className="text-gray-500">esta semana</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                Mobile app
              </span>
              <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                Branding
              </span>
            </div>
          </div>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="col-span-1 md:col-span-2 flex flex-col justify-between"
        >
          <h1 className="text-md md:text-xl font-bold mb-8">Your projects</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <img
                alt="imgaen"
                src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="font-bold">Logo design for Bakery</h3>
                <p className="text-gray-500">1 day remaining</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="font-bold">Logo design for Bakery</h3>
                <p className="text-gray-500">1 day remaining</p>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="hover:text-primary-100 transition-colors hover:underline"
              >
                See all projects
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="text-md md:text-xl font-bold mb-8">
            Reservas recientes
          </h1>
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-8 px-4 rounded-xl shadow-2xl mb-8 flex flex-col gap-4">
            {/* Card 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4 hover:bg-gray-200 transition-all px-4 py-4 rounded-xl">
              <div className="col-span-2 flex items-center gap-4 ">
                <img
                  src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Alexander Williams</h3>
                  <p className="text-gray-500">Habitacion Matrimonial</p>
                </div>
              </div>
              <div>
                <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                  Paid
                </span>
              </div>
              <div>
                <span className="font-bold">&euro; 1,200.87</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4 hover:bg-gray-200 transition-all px-4 py-4 rounded-xl">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Jhon Philips</h3>
                  <p className="text-gray-500">Inchor Techs</p>
                </div>
              </div>
              <div>
                <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                  Late
                </span>
              </div>
              <div>
                <span className="font-bold">&euro; 12,998.88</span>
              </div>
            </div>
          </div>
          <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
            <div>
              <RiHashtag className="text-4xl -rotate-12" />
            </div>
            <div>
              <h5 className="font-bold text-white">Engage with clients</h5>
              <h5>Join slack channel</h5>
            </div>
            <div className="w-full xl:w-auto">
              <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                Join now
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="text-md md:text-xl font-bold mb-8">
            Comentarios de clientes
          </h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Thomas Martin</h3>
                  <p className="text-gray-500">Updated 10m ago</p>
                </div>
              </div>
              <div>
                <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                  Design
                </span>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-bold">
                Need a designer to form branding essentials for my business.
              </h5>
              <p className="text-gray-500">
                Looking for a talented brand designer to create all the branding
                materials my new startup.
              </p>
            </div>
            <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
              <div>
                <sup className="text-sm text-gray-500">&euro;</sup>{" "}
                <span className="text-md md:text-xl font-bold mr-2">8,700</span>
                <span className="text-sm text-gray-500">/ month</span>
              </div>
              <div>
                <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                  Full time
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Dashboard;
