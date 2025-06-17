"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Services() {
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

    const services = [
        {
            id: 1,
            title: "Steel Slitting Service",
            subtitle: "Precision Stainless Steel Slitting",
            description: "We offer precision Stainless Steel Slitting Services to meet the diverse needs of industries requiring customized strip widths and coil sizes. Our advanced slitting lines ensure clean, burr-free edges and tight tolerances, suitable for both decorative and industrial applications.",
            image: "/steel-slitting.jpg",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
            ),
            features: [
                "Material Handled: SS 201, SS 304, SS 316, SS 430 & other grades",
                "Thickness Range: 0.20 mm to 4 mm",
                "Width Range: 10 mm to 1250 mm",
                "Coil Weight Capacity: Up to 10 MT",
                "Finish Types: 2B, BA, No.4, Mirror, Matte",
                "Edge Finish: Mill edge / Slit edge"
            ],
            advantages: [
                "High accuracy and consistency",
                "Fast turnaround time",
                "Suitable for automotive, kitchenware, electrical, and fabrication sectors",
                "Custom widths as per client requirements"
            ],
            location: "Service available at our Mumbai-based facility with prompt delivery across India."
        },
        {
            id: 2,
            title: "Galvanising Service",
            subtitle: "Reliable Galvanized Iron Coating",
            description: "We offer reliable Galvanized Iron (GI) Coating Services for steel products to enhance corrosion resistance and extend durability. The zinc coating acts as a protective barrier, preventing rust formation and offering excellent surface protection in outdoor and industrial environments.",
            image: "/galvanising.jpg",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
            ),
            features: [
                "Process Type: Hot-Dip Galvanizing / Electro-Galvanizing (as per requirement)",
                "Coating Thickness: 80 GSM to 275 GSM (custom coating available)",
                "Applicable Materials: Steel sheets, coils, pipes, and fabricated components",
                "Standards: IS 277 / ASTM A653 / JIS G3302",
                "Finish Options: Regular spangle, zero spangle, matte finish"
            ],
            applications: [
                "Construction and infrastructure",
                "Automotive components",
                "Electrical panels and appliances",
                "HVAC and ducting",
                "Industrial fabrication"
            ],
            advantages: [
                "Superior corrosion resistance",
                "Long-lasting protection",
                "Cost-effective surface treatment",
                "Uniform and durable coating quality"
            ],
            location: "Coating service available at our Mumbai facility. Quick processing and dispatch with quality assurance."
        },
        {
            id: 3,
            title: "PVD Colour Coating",
            subtitle: "Premium Physical Vapor Deposition",
            description: "We offer high-quality PVD (Physical Vapor Deposition) Coating Services for stainless steel sheets, profiles, and components. PVD coating enhances the surface with a decorative, durable, and corrosion-resistant finish available in various colors.",
            image: "/pvd-coating.jpg",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"></path>
                </svg>
            ),
            features: [
                "Base Material: SS 304 / SS 316 and other stainless steel grades",
                "Coating Colors Available: Gold, Rose Gold, Black, Blue, Bronze, Champagne, Copper, and more",
                "Finish Types: Mirror, Matte, Hairline, Bead Blast",
                "Coating Thickness: Micron-level, uniform finish",
                "Application Methods: Vacuum-based PVD process ensuring excellent adhesion and durability",
                "Surface Hardness: Enhanced scratch resistance and wear resistance"
            ],
            applications: [
                "Interior design and luxury architecture",
                "Elevators and escalators",
                "Hotel and showroom decor",
                "Signage and nameplates",
                "Furniture, hardware, and fittings"
            ],
            advantages: [
                "Elegant, premium appearance",
                "Long-lasting finish with UV and corrosion resistance",
                "Eco-friendly and non-toxic process",
                "Low maintenance"
            ],
            location: "Available at our Mumbai facility with a wide range of design and customization options. Fast turnaround and quality assurance."
        },
        {
            id: 4,
            title: "Laser Cutting Service",
            subtitle: "Precision CNC Laser Cutting",
            description: "We provide precision Laser Cutting Services for stainless steel, mild steel, aluminum, and other metals with high accuracy and clean-edge finishes. Our advanced CNC laser machines ensure superior cutting quality, fast turnaround, and customization as per client specifications.",
            image: "/laser-cutting.jpg",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
            features: [
                "Materials: SS 304 / SS 316 / MS / Aluminum / Brass / Copper",
                "Thickness Capacity: SS: up to 12 mm, MS: up to 16 mm, Aluminum: up to 6 mm",
                "Cutting Area: Up to 1500 mm x 3000 mm",
                "Tolerances: High precision with tight tolerances",
                "Design Formats Accepted: DXF, DWG, CDR, PDF, AI"
            ],
            applications: [
                "Architectural and interior design panels",
                "Industrial parts and machine components",
                "Signage and decorative elements",
                "Electrical enclosures and custom fabrications",
                "Elevator panels, nameplates, and grills"
            ],
            advantages: [
                "Clean, burr-free edges",
                "High-speed, cost-effective production",
                "Capable of intricate and complex patterns",
                "Minimal material wastage"
            ],
            location: "Laser cutting available at our Mumbai facility. We offer both small-batch and bulk orders with timely delivery and quality control."
        },
        {
            id: 5,
            title: "Aluminum Lettering Rolls",
            subtitle: "Specialized Channel Roll Slitting",
            description: "We offer specialized Aluminum Letter Channel Roll Slitting Services tailored for signage, letter bending, and channel letter fabrication. Our slitted aluminum rolls are available in all required sizes, are hand bendable, and designed for easy forming and smooth letter shaping.",
            image: "/aluminum-lettering.jpg",
            icon: (
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
            ),
            features: [
                "Material: Soft, signage-grade Aluminum",
                "Thickness: 0.3 mm to 1 mm",
                "Width: Custom slitted from 20 mm to 300 mm",
                "Length: Coil form (as per requirement)",
                "Finish Options: Plain, Anodized, Color Coated, Brushed, Mirror",
                "Edge Finish: Burr-free, ready for manual or machine bending",
                "Availability: Indian and Imported material options"
            ],
            applications: [
                "3D Channel Letters",
                "Sign Boards and Advertising Displays",
                "Indoor & Outdoor Branding",
                "Architectural Signage"
            ],
            advantages: [
                "Easy to hand-bend for shaping letters",
                "Smooth surface and consistent width",
                "Available in ready stock or custom cut",
                "Fast processing and delivery"
            ],
            location: "Slitting service available at our Mumbai facility with precision machines and quality assurance. Bulk and small-batch orders accepted."
        }
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
                        alt="Prabhat Steel Services"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
                </div>
                
                <div className="container mx-auto px-6 z-10 relative">
                    <motion.div variants={fadeInUp} className="max-w-4xl">
                        <span className="text-[#FF5912] text-lg font-medium">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-2">
                            Premium <span className="text-[#FF5912]">Services</span>
                        </h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-[#FBF8F3]/90">
                            Comprehensive metal processing and fabrication services with cutting-edge technology and precision engineering.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Overview */}
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
                        <span className="text-[#FF5912] text-lg font-medium">What We Offer</span>
                        <h2 className="text-4xl font-bold mt-2 mb-4">Our Service Portfolio</h2>
                        <p className="text-[#FBF8F3]/70 max-w-2xl mx-auto">
                            From precision cutting to advanced coating solutions, we provide end-to-end metal processing services with unmatched quality and reliability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div 
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -10 }}
                                className="bg-[#1A1A1A] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,89,18,0.15)]"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <Image 
                                        src={service.image}
                                        width={400}
                                        height={200}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    
                                    {/* Icon overlay */}
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-[#FF5912]/90 backdrop-blur-sm rounded-2xl p-2">
                                            {service.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Service number */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-[#FF5912] text-3xl font-bold">0{service.id}</span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-[#FBF8F3]/60 mb-4 line-clamp-3">
                                        {service.description.substring(0, 120)}...
                                    </p>
                                    <button 
                                        onClick={() => {
                                            const element = document.getElementById(`service-${service.id}`);
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-[#FF5912] font-medium hover:underline flex items-center gap-2"
                                    >
                                        Learn More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Detailed Services */}
            <motion.section 
                className="py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <motion.div 
                                key={service.id}
                                id={`service-${service.id}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Section */}
                                <div className="lg:w-1/2">
                                    <motion.div
                                        className="relative rounded-3xl overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={service.image}
                                            width={600}
                                            height={400}
                                            alt={service.title}
                                            className="w-full h-[400px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        
                                        {/* Service number overlay */}
                                        <div className="absolute top-6 left-6">
                                            <span className="text-6xl font-bold text-[#FF5912]/80">0{service.id}</span>
                                        </div>
                                        
                                        {/* Icon overlay */}
                                        <div className="absolute top-6 right-6">
                                            <div className="bg-[#FF5912]/90 backdrop-blur-sm rounded-2xl p-3">
                                                {service.icon}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2">
                                    <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-[#2A2A2A]">
                                        <h2 className="text-3xl font-bold mb-4 text-[#FF5912]">{service.title}</h2>
                                        <h3 className="text-xl font-semibold mb-6">{service.subtitle}</h3>
                                        <p className="text-[#FBF8F3]/80 leading-relaxed mb-8">{service.description}</p>
                                        
                                        {/* Key Features */}
                                        <div className="mb-8">
                                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                Key Features
                                            </h4>
                                            <div className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="mt-2 w-1.5 h-1.5 bg-[#FF5912] rounded-full flex-shrink-0"></div>
                                                        <span className="text-[#FBF8F3]/70 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Applications */}
                                        {service.applications && (
                                            <div className="mb-8">
                                                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                                    </svg>
                                                    Applications
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {service.applications.map((app, idx) => (
                                                        <div key={idx} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 bg-[#FF5912] rounded-full"></div>
                                                            <span className="text-[#FBF8F3]/70 text-sm">{app}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Advantages */}
                                        <div className="mb-8">
                                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                                </svg>
                                                Advantages
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {service.advantages.map((advantage, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 bg-[#FF5912] rounded-full"></div>
                                                        <span className="text-[#FBF8F3]/70 text-sm">{advantage}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="pt-6 border-t border-[#2A2A2A]">
                                            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                Service Location
                                            </h4>
                                            <p className="text-[#FBF8F3]/70 text-sm">{service.location}</p>
                                        </div>
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
                        Ready to Experience Our Premium Services?
                    </motion.h2>
                    <motion.p 
                        className="text-white/90 mb-8 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Contact our expert team today to discuss your specific requirements and discover how our advanced services can enhance your projects.
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
                            Request Service Quote
                        </motion.button>
                        <motion.button 
                            className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/about')}
                        >
                            Learn About Us
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>
        </main>
    );
}