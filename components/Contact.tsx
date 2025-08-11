"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
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
          <div className="md:w-1/2 text-left">
            <div
              className="mb-2 text-blue-600 tracking-[0.4em] uppercase"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              CONTACT
            </div>
            <h2 className="text-5xl font-extrabold mb-4">Let's get in touch</h2>
          </div>
          <div className="md:w-1/2 text-gray-600 text-lg max-w-2xl mx-auto md:mx-0 md:text-left">
            You can reach us anytime via info@codedrivenlabs.com
          </div>
          {/* <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your project and bring your vision to life
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full flex"
          >
            <Card className="shadow-xl border bg-gray-100 border-gray-200 flex flex-col h-full w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First Name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="number">Phone Number</Label>
                    <Input id="number" placeholder="Your Number" />
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave us a message..."
                      rows={4}
                    />
                  </div>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white mt-4">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full flex"
          >
            <Card className="shadow-xl border bg-gray-100 border-gray-200 flex flex-col h-full w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-center gap-3">
                <motion.div
                  className="text-center p-6 bg-gray-100 rounded-lg w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    3+
                    <span className="text-lg font-bold text-blue-600 mb-2 ml-2">
                      Years
                    </span>
                  </div>
                  <div className="text-gray-600">Field experience</div>
                </motion.div>
                <hr className="my-2 border-black w-1/2 mx-auto" />
                <motion.div
                  className="text-center p-6 bg-gray-100 rounded-lg w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    10+
                    <span className="text-lg font-bold text-blue-600 mb-2 ml-2">
                      Projects
                    </span>
                  </div>
                  <div className="text-gray-600">Done Around World</div>
                </motion.div>
                <hr className="my-2 border-black w-1/2 mx-auto" />
                <motion.div
                  className="text-center p-6 bg-gray-100 rounded-lg w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2
                    <span className="text-lg font-bold text-blue-600 mb-2 ml-1">
                      Mins
                    </span>
                  </div>
                  <div className="text-gray-600">Response TIme</div>
                </motion.div>
                <hr className="my-2 border-black w-1/2 mx-auto" />
                <motion.div
                  className="text-center p-6 bg-gray-100 rounded-lg w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    99%
                  </div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full flex"
          >
            <Card className="shadow-xl border bg-gray-100 border-gray-200 flex flex-col h-full w-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold">Visit our office</div>
                        <div className="text-gray-600">
                          Unit No. 405-411,
                          <br />
                          4th Floor HITEX Bizness Square Madhapur,
                          <br />
                          Shaikpet Hyderabad 500081
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <div>
                        <div className="font-semibold">Contact Info</div>
                        <div className="text-gray-600">+91-8699820778 </div>
                        <div className="text-gray-600">+91-7717368146 </div>
                        <div className="text-gray-600">
                          info@codedrivenlabs.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex flex-col space-y-4">
                      {[
                        {
                          icon: <Facebook className="h-5 w-5" />,
                          href: "https://www.facebook.com/codedrivenlabs",
                          name: "Facebook",
                        },
                        {
                          icon: <FaXTwitter className="h-5 w-5" />,
                          href: "https://x.com/CodeDrivenLabs",
                          name: "X.com",
                        },
                        {
                          icon: <Linkedin className="h-5 w-5" />,
                          href: "https://www.linkedin.com/company/codedrivenlabs/",
                          name: "LinkedIn",
                        },
                        {
                          icon: <Instagram className="h-5 w-5" />,
                          href: "https://www.instagram.com/codedrivenlabs",
                          name: "Instagram",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className="flex items-center gap-3 w-fit px-3 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="flex items-center">
                            {social.icon}
                          </span>
                          <span className="text-base font-medium">
                            {social.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
