import React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  Building,
  Car,
  GraduationCap,
  ShoppingCart,
  Heart,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: (
        <img
          src="/industries/healthcare.png"
          alt="Healthcare"
          className="h-20 w-20"
        />
      ),
      title: "Healthcare",
      description:
        "EMR systems, telemedicine apps, and patient management software",
    },
    {
      icon: (
        <img
          src="/industries/finance.png"
          alt="Finance"
          className="h-20 w-20"
        />
      ),
      title: "Finance",
      description:
        "Fintech apps, digital wallets, and blockchain payment systems",
    },
    {
      icon: (
        <img src="/industries/retail.png" alt="Retail" className="h-20 w-20" />
      ),
      title: "Retail & eCommerce ",
      description: "Inventory systems, CRM, and mobile commerce platforms",
    },
    {
      icon: (
        <img
          src="/industries/manufacturing.png"
          alt="Manufacturing"
          className="h-20 w-20"
        />
      ),
      title: "Manufacturing",
      description: "Custom ERP, IoT integration, and automation tools",
    },
    {
      icon: (
        <img
          src="/industries/education.png"
          alt="Education"
          className="h-20 w-20"
        />
      ),
      title: "Education",
      description: "eLearning platforms, LMS, and virtual classroom solutions",
    },
    {
      icon: (
        <img
          src="/industries/real_estate.png"
          alt="Real estate"
          className="h-20 w-20"
        />
      ),
      title: "Real Estate",
      description: "Property management software, VR tours, and mobile apps",
    },
    {
      icon: (
        <img
          src="/industries/logistics.png"
          alt="Logistics"
          className="h-20 w-20"
        />
      ),
      title: "Logistics",
      description:
        "Fleet management, route optimization, and supply chain solutions",
    },
    {
      icon: (
        <img
          src="/industries/government.png"
          alt="government"
          className="h-20 w-20"
        />
      ),
      title: "Government",
      description: "Secure portals, data analytics, and public service apps",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering specialized solutions across diverse industry verticals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {React.cloneElement(industry.icon, {
                        className: "h-20 w-20 object-contain",
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
