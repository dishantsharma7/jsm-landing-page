"use client"

import { useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Clients from "@/components/Clients"
import Services from "@/components/Services"
import Solutions from "@/components/Solutions"
import Industries from "@/components/Industries"
import Testimonials from "@/components/Testimonials"
import TechStack from "@/components/TechStack"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("languages")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-white text-black">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Clients />
      <Services />
      <Solutions />
      <Industries />
      <Testimonials />
      <TechStack activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contact />
      <Footer />
    </div>
  )
}
