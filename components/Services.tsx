"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Smartphone,
  Globe,
  Shield,
  Cloud,
  GlobeLock,
  Link,
  Globe2,
  Users,
  Brain,
  Bot,
  CircleDollarSign,
  Settings,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description:
        "We design, develop, and deploy fully customized software solutions that solve real-world business challenges. From automation tools to business management systems, we create software that works for you.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom ERP Development Services",
      description:
        "Empower your business with our custom ERP systems that integrate finance, HR, inventory, sales, and CRM into one powerful platform. Our ERP solutions are scalable, efficient, and tailored for SMEs and MSMEs.",
    },
    {
      icon: <GlobeLock className="h-8 w-8" />,
      title: "Cybersecurity Solutions",
      description:
        "Protect your business from cyber threats with our end-to-end cybersecurity services, including risk assessment, threat mitigation, penetration testing, and 24/7 monitoring",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Computing Services",
      description:
        "Migrate your business to the cloud with confidence. We provide cloud strategy, migration, deployment, and management services across AWS, Azure, and Google Cloud platforms.",
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: "Blockchain Development",
      description:
        "Leverage blockchain technology for secure transactions, smart contracts, and decentralized applications. We help startups and enterprises implement blockchain solutions across industries.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description:
        "From idea to app store, we build engaging, high-performance mobile applications that deliver seamless user experiences.",
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Web Application Development",
      description:
        "We develop intuitive and robust web applications that enhance user engagement and support your business goals.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "IT Consulting Services",
      description:
        "Our IT consulting services help you make informed decisions about technology investments, software architecture, and digital transformation strategies.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI & Automation",
      description:
        "From implementing machine learning models to automating repetitive tasks, we help you harness the power of AI to improve efficiency, reduce costs, and stay competitive in a rapidly evolving digital landscape.",
    },
    {
      icon: <CircleDollarSign className="h-8 w-8" />,
      title: "Digital Marketing Services",
      description:
        "Through data-driven strategies, SEO, social media marketing, content creation, and performance analytics, we help you build brand visibility, generate leads, and achieve measurable business growth in the digital space.",
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 text-left">
            <div
              className="mb-2 text-blue-600 tracking-[0.4em] uppercase"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              WHAT WE&apos;RE OFFERING
            </div>
            <h2 className="text-5xl font-extrabold mb-4">Our Core Services.</h2>
          </div>
          <div className="md:w-1/2 text-gray-600 text-lg max-w-2xl mx-auto md:mx-0 md:text-left">
            One fundamental aspect of IT services is infrastructure management.
            This involves the design, implementation, and maintenance of the
            hardware, software, networks, and servers.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
