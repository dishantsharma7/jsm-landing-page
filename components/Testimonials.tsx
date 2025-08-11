"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Balwant Singh",
      position: "CEO",
      company: "Ribango",
      image: "/testimonials/ribango.jpeg",
      heading:
        "JSM Tech has truly transformed my travel business with their outstanding travel booking software. The customized solution is user-friendly, efficient, and highly reliable.",
      description:
        "Their support is top-notch. I wholeheartedly recommend them to anyone in the travel industry. Thank you for making my business better!",
      rating: 5,
    },
    {
      id: 2,
      name: "Akhil Bansal",
      position: "Founder",
      company: "USA Tax Gurus",
      image: "/testimonials/utg.jpeg",
      heading: "JSM Tech created an outstanding CPA website for me.",
      description:
        "It's professional, user-friendly, and perfectly represents my services. I'm impressed with their work and highly recommend them for any web development project. Thanks for boosting my online presence!",
      rating: 5,
    },
    {
      id: 3,
      name: "Sanjeev Sharma",
      position: "CEO",
      company: "UDAK Pure",
      image: "/testimonials/udak.png",
      heading:
        "These people have truly impressed me with the creation of my e-commerce store for premium products.",
      description:
        "It's not just a website; it's an elegant shopping destination. Their work has elevated my business, and I wholeheartedly recommend them for e-commerce solutions. Thank you for making my online presence shine!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

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
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Businesses Across the Globe
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            What our client's say
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-xl border-0 bg-white">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      <div className="flex-shrink-0">
                        <img
                          src={
                            testimonials[currentIndex].image ||
                            "/placeholder.svg"
                          }
                          alt={testimonials[currentIndex].name}
                          className="w-20 h-20 rounded-full object-cover shadow-lg"
                        />
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonials[currentIndex].rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 text-yellow-400 fill-current"
                              />
                            )
                          )}
                        </div>

                        <div className="mb-2">
                          <span className="block text-lg md:text-xl font-bold text-gray-900 mb-1">
                            {testimonials[currentIndex].heading}
                          </span>
                          <span className="block text-base md:text-lg text-gray-700 leading-relaxed">
                            {testimonials[currentIndex].description}
                          </span>
                        </div>

                        <div>
                          <div className="font-semibold text-lg text-gray-900">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-blue-600 font-medium">
                            {testimonials[currentIndex].position}
                          </div>
                          <div className="text-gray-500">
                            {testimonials[currentIndex].company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
