"use client";

import { motion } from "framer-motion";
export default function Clients() {
  const clients = [
    {
      name: "Arora Automobiles",
      logo: "/clients/Arora_auto.png",
    },
    {
      name: "GNDDCRI",
      logo: "/clients/GNDDCRI.png",
    },
    {
      name: "Pitambra",
      logo: "/clients/pitambra.png",
    },
    {
      name: "Ribango",
      logo: "/clients/ribango.png",
    },
    { name: "UDAK", logo: "/clients/udak.png" },
    { name: "UTG", logo: "/clients/UTG.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Renowned Clients</h2>
          {/* <p className="text-gray-600 text-lg">We're proud to work with amazing companies worldwide</p> */}
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-20 w-auto transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
