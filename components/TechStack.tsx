"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("languages");

  const techStack = {
    languages: [
      {
        name: "JavaScript",
        image: "/tech-stack/languages/js.png",
      },
      {
        name: "Python",
        image: "/tech-stack/languages/python.png",
      },
      {
        name: "Java",
        image: "/tech-stack/languages/java.png",
      },
      {
        name: "PHP",
        image: "/tech-stack/languages/php.png",
      },
      {
        name: "Swift",
        image: "/tech-stack/languages/swift.png",
      },
      { name: "Kotlin", image: "/tech-stack/languages/kotlin.png" },
    ],
    frameworks: [
      {
        name: "React",
        image: "/placeholder.svg?height=100&width=100&text=React",
      },
      {
        name: "Angular",
        image: "/placeholder.svg?height=100&width=100&text=Next",
      },
      {
        name: "Node.js",
        image: "/placeholder.svg?height=100&width=100&text=Node",
      },
      {
        name: "Django",
        image: "/placeholder.svg?height=100&width=100&text=Django",
      },
      {
        name: "Laravel",
        image: "/placeholder.svg?height=100&width=100&text=Spring",
      },
    ],
    cloud: [
      { name: "AWS", image: "/placeholder.svg?height=100&width=100&text=AWS" },
      {
        name: "Google Cloud",
        image: "/placeholder.svg?height=100&width=100&text=GCP",
      },
      {
        name: "Azure",
        image: "/placeholder.svg?height=100&width=100&text=Azure",
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        image: "/placeholder.svg?height=100&width=100&text=Postgres",
      },
      {
        name: "MongoDB",
        image: "/placeholder.svg?height=100&width=100&text=Mongo",
      },
      {
        name: "MySQL",
        image: "/placeholder.svg?height=100&width=100&text=MySQL",
      },
      {
        name: "Oracle",
        image: "/placeholder.svg?height=100&width=100&text=MySQL",
      },
    ],
    blockchain: [
      {
        name: "Ethereum",
        image: "/placeholder.svg?height=100&width=100&text=ETH",
      },
      {
        name: "Solidity",
        image: "/placeholder.svg?height=100&width=100&text=Sol",
      },
      {
        name: "Hyperledger",
        image: "/placeholder.svg?height=100&width=100&text=Hyper",
      },
    ],
    cybersecurity: [
      {
        name: "Firewall",
        image: "/placeholder.svg?height=100&width=100&text=OWASP",
      },
      {
        name: "IDS/IPS",
        image: "/placeholder.svg?height=100&width=100&text=PenTest",
      },
      {
        name: "SIEM",
        image: "/placeholder.svg?height=100&width=100&text=SSL",
      },
      {
        name: "Encryption",
        image: "/placeholder.svg?height=100&width=100&text=Encrypt",
      },
    ],
  };

  const tabs = [
    { id: "languages", label: "Languages", icon: "💻" },
    { id: "frameworks", label: "Frameworks", icon: "🚀" },
    { id: "cloud", label: "Cloud Platforms", icon: "☁️" },
    { id: "database", label: "Databases", icon: "🗄️" },
    { id: "blockchain", label: "Blockchain", icon: "⛓️" },
    { id: "cybersecurity Tools", label: "Security", icon: "🔒" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust and scalable
            solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Enhanced Content Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techStack[activeTab as keyof typeof techStack].map(
              (tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <div className="w-32 h-32 bg-white border border-blue-100 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                        <img
                          src={tech.image || "/placeholder.svg"}
                          alt={tech.name}
                          className="w-28 h-28 object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 text-center">
                        {tech.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
