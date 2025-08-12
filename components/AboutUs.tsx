"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  const stats = [
    {
      number: "10+",
      label: "Projects",
      description: "We are spread around the world.",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Our clients are happy with our service.",
    },
    {
      number: "1k",
      label: "Legal Customers",
      description: "Our customers are from many countries.",
    },
    {
      number: "2023",
      label: "We Established In",
      description: "Our company has a great history.",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white" id="about-us">
      <div className="container mx-auto px-6">
        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Our company provides the best
            <br />
            <span className="text-blue-600">horizon tech solutions</span>
          </h3>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Experience the transformative power of innovation and seamless
            solutions with dynamics. Our journey doesn't end with the delivery
            of a solution.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full flex"
            >
              <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white flex flex-col h-full w-full min-h-[240px]">
                <CardContent className="p-0 flex flex-col h-full justify-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-3">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 p-8 lg:p-12">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <div
                  className="text-blue-600 tracking-[0.4em] text-sm font-semibold uppercase mb-4"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  OUR COMPANY
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Why our company ?
                </h2>
                <p className="text-gray-600 text-lg">
                  Contact us today to begin your journey!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <img
                src="/about/office.jpg"
                alt="Modern Office Building"
                className="w-full h-auto max-h-96 object-contain mx-auto"
              />
              {/* New text below the image */}
              <div className="text-gray-800 text-base font-normal mt-6 mb-2 mx-8 text-center">
                At JSM Tech, our journey is rooted in a simple yet powerful
                objective: to make technology accessible and effortless for
                everyone. Founded with a passion for innovation and a commitment
                to simplifying the intricate world of tech, we have become a
                trusted name in the IT industry. Our unwavering dedication to
                this mission has led us to provide a diverse array of IT
                solutions that cater to the unique needs of businesses and
                individuals alike. With a team of seasoned experts at the helm,
                JSM Tech has established itself as a hub of creativity,
                expertise, and cutting-edge solutions. Our comprehensive suite
                of services encompasses a wide spectrum of IT needs, from
                seamless web development to intricate software solutions.
                Whether you're a startup aiming to establish your digital
                presence or an enterprise seeking to optimize operations, we've
                got you covered. At Code Driven Labs, we don't just offer
                services; we forge partnerships that drive success, transforming
                complex challenges into simplified solutions, one code at a
                time.
              </div>
              {/* Black horizontal rule */}
              <hr className="border-black w-5/6 mx-auto my-3" />
              {/* Three points with check icon */}
              <div className="flex flex-row w-full max-w-4xl mx-auto mt-2 justify-between">
                {[
                  "Managed Services and Products",
                  "Flexibility and Adaptability",
                  "Competitive Advantage",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-base text-left">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Additional Content Section
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h4>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h5 className="text-lg font-semibold text-blue-600 mb-3">
                  Mission
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth, efficiency, and innovation. We strive to be
                  the trusted partner that transforms digital challenges into
                  competitive advantages.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-blue-600 mb-3">
                  Vision
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in digital transformation, creating a
                  world where technology seamlessly integrates with business
                  processes to unlock unlimited potential and drive sustainable
                  success.
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
