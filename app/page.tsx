"use client";

import { useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  // Removed unused state and props for Header and TechStack

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Solutions />
      <Industries />
      <Testimonials />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
