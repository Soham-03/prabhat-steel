"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WhatsAppContactForm } from '@/components/WhatsAppContactForm';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: 'Select a product'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // Reset form after showing success message
            setTimeout(() => {
                setSubmitSuccess(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                    product: 'Select a product'
                });
            }, 3000);
        }, 1500);
    };

    const products = [
        "Stainless Steel Products",
        "Duplex Steel Products",
        "Super Duplex Steel Products",
        "Alloy Steel Products",
        "Cupro Nickel Products",
        "Hastelloy Products",
        "Titanium Products",
        "Monel Products",
        "Aluminium Products"
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <main className="bg-[#121212] text-white min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.jpg"
                        alt="Steel manufacturing contact"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Dark overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#121212]"></div>
                </div>

                <div className="container mx-auto px-6 z-10 relative">
                    <motion.div variants={fadeInUp} className="max-w-3xl">
                        <span className="text-[#FF5912] text-lg font-medium">Get In Touch</span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-2">
                            Contact <span className="text-[#FF5912]">Prabhat Steel</span>
                        </h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-[#FBF8F3]/90">
                            Our team of experts is ready to provide you with exceptional steel solutions tailored to your needs.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>


            {/* Contact Section */}
            <section className="py-16 bg-[#0A0A0A]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Info */}
                        <motion.div
                            className="lg:w-1/3"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>

                            <div className="space-y-8">
                                {/* WhatsApp Contact (Featured) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-[#1A1A1A] p-6 rounded-2xl border border-[#333333] relative overflow-hidden"
                                >
                                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#25D366]/10 rounded-full"></div>
                                    <div className="absolute -bottom-14 -left-14 w-28 h-28 bg-[#25D366]/5 rounded-full"></div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-[#25D366] rounded-2xl p-3 h-fit">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">WhatsApp</h3>
                                            <p className="text-[#FBF8F3]/70">Quick response within 1-2 hours</p>
                                        </div>
                                    </div>

                                    <p className="text-[#FBF8F3]/80 mb-4">
                                        Chat with our experts directly on WhatsApp for immediate assistance with your steel requirements.
                                    </p>

                                    <a
                                        href="https://wa.me/918369657425?text=Hello%20Prabhat%20Steel%2C%20I%20am%20interested%20in%20your%20products."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Message on WhatsApp
                                    </a>
                                </motion.div>

                                {/* Other Contact Methods */}
                                {[
                                    {
                                        icon: (
                                            <svg className="w-6 h-6 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        ),
                                        title: "Phone",
                                        details: ["+91 7021530230", "+91 9167029680"],
                                        link: "tel:+917021530230"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-6 h-6 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        ),
                                        title: "Email",
                                        details: ["prabhatsteelconnect@gmail.com"],
                                        link: "mailto:prabhatsteelconnect@gmail.com"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-6 h-6 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ),
                                        title: "Location",
                                        details: ["202, Panjrapole Road, Near,","Madhav Baug Post Office,", "Mumbai - 400004"],
                                        link: "https://maps.google.com/?q=202,PanjrapoleRoad,NearMadhavBaugPostOffice,Mumbai-400004"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                        viewport={{ once: true }}
                                        className="flex gap-4"
                                    >
                                        <div className="bg-[#1A1A1A] rounded-2xl p-3 h-fit">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                            <div className="space-y-1 text-[#FBF8F3]/70">
                                                {item.details.map((detail, i) => (
                                                    <p key={i}>{detail}</p>
                                                ))}
                                            </div>
                                            <a
                                                href={item.link}
                                                className="inline-block mt-2 text-[#FF5912] hover:underline"
                                            >
                                                {item.title === "Location" ? "Get Directions" : `Contact via ${item.title}`}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {/* Instagram */}
                                    <a
                                        href="https://www.instagram.com/prabhat.steel?igsh=YzJzbTl6MWNhNDJ5"
                                        className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#FF5912] transition-colors duration-300"
                                        aria-label="Follow us on Instagram"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>

                                    {/* YouTube */}
                                    <a
                                        href="https://www.youtube.com/@prabhatsteel"
                                        className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#FF5912] transition-colors duration-300"
                                        aria-label="Follow us on YouTube"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://in.linkedin.com/in/prabhatsteel-connect-720151339"
                                        className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#FF5912] transition-colors duration-300"
                                        aria-label="Follow us on LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* WhatsApp Form */}
                        <motion.div
                            className="lg:w-2/3"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="bg-[#1A1A1A] rounded-3xl p-8 relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#25D366]/10 rounded-full"></div>
                                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-[#25D366]/5 rounded-full"></div>

                                <h2 className="text-3xl font-bold mb-6">Contact via WhatsApp</h2>
                                <p className="text-[#FBF8F3]/70 mb-8">
                                    Fill in your details below to generate a pre-formatted WhatsApp message. Our team will respond quickly to your inquiry.
                                </p>

                                <WhatsAppContactForm />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="py-16"
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Visit Our <span className="text-[#FF5912]">Facility</span>
                        </h2>
                        <p className="text-[#FBF8F3]/70 max-w-2xl mx-auto">
                            Our state-of-the-art manufacturing facility is equipped with the latest technology to deliver the highest quality steel products.
                        </p>
                    </div>

                    <motion.div
                        className="rounded-3xl overflow-hidden h-[400px] relative"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Google Maps Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.447673425917!2d72.82610827520243!3d18.955826582224205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3d68addbe7%3A0x620b9399b5db34c9!2s202%2C%20Panjrapol%20Rte%2C%20near%20MADHAVBAUGH%20POST%20OFFICE%2C%20near%20Cawasji%20Patel%20Tank%2C%20Marine%20Lines%20East%2C%20Gulal%20Wadi%2C%20Bhuleshwar%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1746643335632!5m2!1sen!2sin"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Prabhat Steel Mumbai Location"
                        ></iframe>

                        {/* Map overlay with contact info card */}
                        <div className="absolute bottom-6 left-6 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-2xl p-6 max-w-md border border-[#333333] z-10">
                            <h3 className="text-xl font-bold mb-3">Mumbai Headquarters</h3>
                            <p className="text-[#FBF8F3]/70 mb-4">
                                202, Panjrapole Road, Near<br />
                                Madhav Baug Post Office,<br />
                                Mumbai - 400004<br />
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://maps.google.com/?q=202,PanjrapoleRoad,NearMadhavBaugPostOffice,Mumbai-400004"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Get Directions
                                </a>
                                <a
                                    href="tel:+919876543210"
                                    className="bg-[#1A1A1A] hover:bg-[#222222] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                className="py-16 bg-[#0A0A0A]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-[#FF5912] text-lg font-medium">Common Questions</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#FBF8F3]/70 max-w-2xl mx-auto">
                            Find answers to the most common questions about our products and services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                question: "What types of steel do you offer?",
                                answer: "We offer a wide range of steel products including Stainless Steel, Duplex Steel, Super Duplex Steel, Alloy Steel, Cupro Nickel, Hastelloy, Titanium, Monel, and Aluminium products. Each type is available in various grades and specifications to suit your requirements."
                            },
                            {
                                question: "Can you provide custom steel solutions?",
                                answer: "Yes, we specialize in custom steel solutions tailored to your specific requirements. Our team of experts works closely with you to understand your needs and deliver high-quality products that meet your exact specifications."
                            },
                            {
                                question: "What industries do you serve?",
                                answer: "We serve a wide range of industries including manufacturing, construction, automotive, aerospace, marine, oil and gas, chemical processing, pharmaceuticals, and many more. Our steel products are designed to meet the specific needs of each industry."
                            },
                            {
                                question: "Do you offer international shipping?",
                                answer: "Yes, we offer international shipping to clients worldwide. Our logistics team ensures safe and timely delivery of your orders regardless of your location. Contact us for specific shipping details for your region."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                className="bg-[#1A1A1A] rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(255,89,18,0.1)] transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                                <p className="text-[#FBF8F3]/70">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[#FF5912] font-medium hover:underline"
                        >
                            View all FAQs
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className="py-16 bg-gradient-to-r from-[#FF5912] to-[#FF8C12]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Ready to Partner with Prabhat Steel?
                    </motion.h2>
                    <motion.p
                        className="text-white/90 mb-8 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Our experts are ready to help you select the perfect steel solutions for your projects. Contact us today to get started.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="bg-white text-[#FF5912] px-8 py-3 rounded-full font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Consultation
                        </motion.button>
                        <motion.button
                            className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={()=> window.location.replace("https://wa.me/c/918369657425")}
                        >
                            View Product Catalog
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </main>
    );
}