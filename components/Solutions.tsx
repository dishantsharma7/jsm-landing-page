"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Solutions() {
  // const solutions = [
  //   { title: "Secure portals, data analytics, and public service apps" },
  //   { title: "CRM Platforms" },
  //   { title: "Web Portals" },
  //   { title: "E-commerce" },
  //   { title: "Analytics Dashboards" },
  //   { title: "API Integration" },
  // ];

  const solutions = [
    {
      title: "Enterprise",
    },
    {
      title: "ERP",
    },
    {
      title: "Financial Management",
    },
    {
      title: "Supply Chain Management",
    },
    {
      title: "Asset Management",
    },
    {
      title: "Fleet Management",
    },
    {
      title: "HR Software",
    },
    {
      title: "eLearning Software",
    },
    {
      title: "eCommerce",
    },
    {
      title: "Mobile Apps",
    },
    {
      title: "Content Management",
    },
    {
      title: "Document Management",
    },
    {
      title: "CRM",
    },
    {
      title: "Marketing & Advertising",
    },
    {
      title: "Web Portals",
    },
    {
      title: "Data Analytics",
    },
    {
      title: "IoT Development",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-4xl font-bold mb-4">Solutions We Deliver.</h2> */}
          {/* <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business objectives
          </p> */}
          <div className="md:w-1/2 text-left">
            <div
              className="mb-2 text-blue-600 tracking-[0.4em] uppercase"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              MAKING REVOLUTIONS
            </div>
            <h2 className="text-5xl font-extrabold mb-4">
              Solutions We Deliver.
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-28 flex items-center justify-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gray-50">
                <CardContent className="flex flex-1 items-center justify-center p-0">
                  <CardTitle className="text-xl text-black text-center w-full">
                    {solution.title}
                  </CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
