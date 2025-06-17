"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AboutUs() {
    const router = useRouter();
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

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    const stats = [
        { number: "15+", label: "Years of Excellence" },
        { number: "500+", label: "Happy Clients" },
        { number: "1000+", label: "Projects Completed" },
        { number: "50+", label: "Expert Team Members" }
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Quality Assurance",
            description: "We maintain the highest standards in material quality and precision manufacturing."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
            title: "Innovation",
            description: "Continuously evolving our processes and technology to meet industry demands."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            ),
            title: "Customer Focus",
            description: "Dedicated to understanding and exceeding our clients' expectations."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Global Reach",
            description: "Serving clients worldwide with reliable supply chain and logistics."
        }
    ];

    const industries = [
        {
            title: "Pharmaceutical Industry",
            subtitle: "Supply in Pharmaceutical IND.",
            description: "In the pharmaceutical industry, aluminum is used for packaging (e.g., blister packs) to protect medications, while stainless steel is used for equipment like mixers and storage tanks due to its durability, corrosion resistance, and easy cleaning. Both materials ensure safety, hygiene, and product integrity.",
            image: "/pharma.png",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"></path>
                </svg>
            )
        },
        {
            title: "Automotive Industry",
            subtitle: "Supply to Automotive IND.",
            description: "Aluminum is widely used in the automotive industry for its lightweight, corrosion-resistant, and high-strength properties. It helps improve fuel efficiency, enhance performance, and reduce emissions. Common applications include body panels, engine components, wheels, and frames, making aluminum essential for modern, sustainable vehicle design.",
            image: "/auto.png",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            )
        },
        {
            title: "Solar Industry",
            subtitle: "Supply to Solar Industry",
            description: "Aluminum is widely used in the solar industry for its lightweight, corrosion-resistant, and durable properties. It is primarily used in the manufacturing of solar panel frames, mounting systems, and supports, helping to ensure long-lasting performance and easy installation of solar energy systems.",
            image: "/solar.png",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            )
        },
        {
            title: "Signage Projects",
            subtitle: "Supply for Signage Projects",
            description: "We are a leading supplier of high-quality signage aluminum sheets, specializing in materials ideal for letter making and custom signage solutions. With a reputation for precision and durability, we provide top-grade aluminum sheets that meet the unique demands of the signage industry.",
            image: "/signage.png",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v1m0 0v16l-5-3-5 3V5a1 1 0 011-1h8a1 1 0 011 1z"></path>
                </svg>
            )
        },
        {
            title: "Turnkey Projects",
            subtitle: "Supply for Turnkey Projects",
            description: "Prabhat Steel is a top supplier for turnkey projects, offering a comprehensive range of hardware products, including SS fasteners, tapes, P.U. sealants, and all required ferrous and non-ferrous raw materials in aluminum and stainless steel. We assure exceptional service and consistent quality, delivering every product needed for your project with reliability and precision.",
            image: "/trunkey.png",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
            )
        },
        {
            title: "Facade & Store Fixtures",
            subtitle: "Supply for Facade & Store Fixtures",
            description: "Prabhat Steel is a leading supplier for façade and mall fixture projects, providing all materials in stainless steel, aluminum, GI, MS, CRCA, along with hardware and electrical components. We assure exceptional service and quality delivery, consistently meeting your company's precise requirements with precision and reliability.",
            image: "/facade.png",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0a2 2 0 002-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 00-2 2z"></path>
                </svg>
            )
        }
    ];

    const timeline = [
        { year: "2008", event: "Company Establishment", description: "Prabhat Steel founded with a vision to provide quality materials" },
        { year: "2012", event: "Industry Expansion", description: "Expanded operations to serve pharmaceutical and automotive industries" },
        { year: "2016", event: "Technology Upgrade", description: "Implemented advanced manufacturing and quality control systems" },
        { year: "2020", event: "Global Reach", description: "Extended services internationally with enhanced supply chain" },
        { year: "2024", event: "Sustainable Future", description: "Leading in green technology and sustainable manufacturing practices" }
    ];

    return (
        <main className="bg-[#121212] text-white min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="relative h-[70vh] flex items-center overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero2.jpg"
                        alt="Prabhat Steel About Us"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
                </div>

                <div className="container mx-auto px-6 z-10 relative">
                    <motion.div variants={fadeInUp} className="max-w-4xl">
                        <span className="text-[#FF5912] text-lg font-medium">Our Story</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-2">
                            About <span className="text-[#FF5912]">Prabhat Steel</span>
                        </h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-[#FBF8F3]/90">
                            Delivering excellence in metal solutions since 2008, with a commitment to quality, innovation, and customer satisfaction.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className="py-16 bg-[#0A0A0A]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#FF5912] mb-2">{stat.number}</div>
                                <div className="text-[#FBF8F3]/70">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Company Overview Section */}
            <motion.section
                className="py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="lg:w-1/2"
                            variants={slideInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="relative rounded-3xl overflow-hidden">
                                <Image
                                    src="/gg.jpg"
                                    width={600}
                                    height={400}
                                    alt="Company Overview"
                                    className="w-full object-cover rounded-3xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="text-[#FF5912] text-lg font-medium">COMPANY</span>
                            <h2 className="text-4xl font-bold mb-6 mt-2">OVERVIEW</h2>

                            <div className="space-y-6 text-[#FBF8F3]/80">
                                <p>
                                    Established in 2008, Prabhat Steel has been a trusted name in the supply and manufacturing of all kind of Ferrous and Non-Ferrous Raw Materials. We specialize in providing customized die solutions in all shapes and sizes, meeting the unique needs of our clients.
                                </p>

                                <p>
                                    At Prabhat Steel, we offer an extensive range of hardware, including stainless steel (SS) and galvanized iron (G.I.) fasteners, VHB tape, measuring tapes, wire ropes, welding rods, and much more, ensuring a one-stop solution for all your hardware requirements.
                                </p>

                                <p>
                                    We also cater to the fabrication of stainless steel items across all grades, including 202 and 304, delivering precision and quality for a wide array of industrial and commercial applications. Our dedication to excellence and customer satisfaction has made us a preferred partner in the industry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Values Section */}
            <motion.section
                className="py-20 bg-[#0A0A0A]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#FF5912] text-lg font-medium">Our Foundation</span>
                        <h2 className="text-4xl font-bold mt-2 mb-4">Core Values</h2>
                        <p className="text-[#FBF8F3]/70 max-w-2xl mx-auto">
                            The principles that guide our operations and drive our commitment to excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -10 }}
                                className="bg-[#1A1A1A] rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,89,18,0.15)]"
                            >
                                <div className="bg-[#FF5912]/10 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                <p className="text-[#FBF8F3]/70">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Business Overview Section */}
            <motion.section
                className="py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#FF5912] text-lg font-medium">BUSINESS</span>
                        <h2 className="text-4xl font-bold mt-2 mb-4">OVERVIEW</h2>
                        <p className="text-[#FBF8F3]/70 max-w-2xl mx-auto">
                            Serving diverse industries with specialized solutions and premium materials.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Section */}
                                <div className="lg:w-1/2">
                                    <motion.div
                                        className="relative rounded-3xl overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={industry.image}
                                            width={600}
                                            height={400}
                                            alt={industry.title}
                                            className="w-full h-[300px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        
                                        {/* Icon overlay */}
                                        <div className="absolute top-6 left-6">
                                            <div className="bg-[#FF5912]/90 backdrop-blur-sm rounded-2xl p-3">
                                                {industry.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Title overlay */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2">
                                    <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-[#2A2A2A]">
                                        <h3 className="text-2xl font-bold mb-6 text-[#FF5912]">{industry.subtitle}</h3>
                                        <p className="text-[#FBF8F3]/80 leading-relaxed">{industry.description}</p>
                                        
                                        {/* Additional visual element */}
                                        <motion.div 
                                            className="mt-6 pt-6 border-t border-[#2A2A2A]"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex items-center gap-3 text-[#FF5912]">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="font-medium">Specialized Solutions Available</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                        Partner with Prabhat Steel Today
                    </motion.h2>
                    <motion.p
                        className="text-white/90 mb-8 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Join hundreds of satisfied clients who trust us for their metal and hardware requirements. Experience the Prabhat Steel difference.
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
                            onClick={() => router.push('/contact')}
                        >
                            Get a Quote
                        </motion.button>
                        <motion.button
                            className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/products')}
                        >
                            View Our Products
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </main>
    );
}