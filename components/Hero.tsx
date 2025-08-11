"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="mb-2 text-blue-600 tracking-[0.4em] uppercase"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              EMPOWERMENT
            </div>
            <span className="text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              Enterprise Software Development{" "}
            </span>
            <span className="text-5xl lg:text-5xl font-normal mb-6 leading-tight">
              |
            </span>{" "}
            <span className="text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              {" "}
              IT Software Services Company{" "}
              {/* <span className="text-blue-600"> Future</span> */}
            </span>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We provide the expertise and support to propel your business
              forward in the digital landscape.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-black text-white px-8 py-4 text-lg"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/herosection/hero-1.png"
                alt="Hero"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* <motion.div
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="mb-1">✓ 500+ Projects Delivered</div>
                  <div className="mb-1">✓ 98% Client Satisfaction</div>
                  <div>✓ 24/7 Support</div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
