"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

// Product data for each category (same as before, keeping for reference)
const productData = {
    'stainless-steel': {
        name: "Stainless Steel",
        title: "Premium Stainless Steel Products",
        description: "Our high-quality stainless steel products offer exceptional corrosion resistance, durability, and aesthetic appeal for a wide range of applications.",
        image: "/gg.jpg",
        features: [
            "Superior corrosion resistance",
            "Excellent heat resistance",
            "High strength-to-weight ratio",
            "Hygienic and easy to clean",
            "100% recyclable material",
            "Low maintenance requirements"
        ],
        products: [
            {
                name: "SS 304/304L Sheets",
                description: "The most versatile and widely used stainless steel, offering good corrosion resistance and formability.",
                specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, No.8, Hairline"],
                applications: ["Food processing equipment", "Kitchen equipment", "Chemical containers", "Architectural applications"]
            },
            {
                name: "SS 316/316L Sheets",
                description: "Higher corrosion resistance than 304, particularly against chlorides and acids.",
                specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, No.8, Hairline"],
                applications: ["Marine environments", "Chemical processing equipment", "Pharmaceutical industry", "Surgical instruments"]
            },
            // Additional products same as before
        ],
        certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240"],
        industries: ["Automotive", "Aerospace", "Food & Beverage", "Pharmaceutical", "Chemical Processing", "Construction", "Marine"]
    },
    // other product categories (duplex-steel, etc.) same as before
};

// Related products mapping (same as before)
const relatedProducts = {
    'stainless-steel': ['duplex-steel', 'super-duplex-steel', 'alloy-steel'],
    // other relationships same as before
};

// Default product data for fallback (same as before)
const defaultProduct = {
    name: "Product Not Found",
    title: "Product Category Not Found",
    description: "The requested product category could not be found.",
    image: "/images/products/placeholder.jpg",
    features: [],
    products: [],
    certifications: [],
    industries: []
};

export default function ProductDetailPage() {
    const params = useParams();
    const category = params.category as string;

    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');
    const [activeProduct, setActiveProduct] = useState(0);

    const product = productData[category as keyof typeof productData] || defaultProduct;
    const relatedCategoryIds = relatedProducts[category as keyof typeof relatedProducts] || [];

    const relatedCategoryData = relatedCategoryIds.map(id => ({
        id,
        name: productData[id as keyof typeof productData]?.name || "Product",
        image: productData[id as keyof typeof productData]?.image || "/images/products/placeholder.jpg",
        href: `/products/${id}`
    }));

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#121212] flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#FF5912]/20 border-t-[#FF5912] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <main className="bg-[#121212] text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#0A0A0A]">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-1 rounded-full bg-[#FF5912]/10 text-[#FF5912] text-sm font-medium mb-4">
                            {product.name} Products
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            {product.title}
                        </h1>
                        <p className="text-xl text-[#FBF8F3]/80 max-w-3xl">
                            {product.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                            >
                                Request Quote
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border border-[#FBF8F3] hover:bg-[#FBF8F3]/10 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
                            >
                                Download Catalog
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Navigation Tabs - Fixed for mobile and with top margin when sticky */}
            <section className="bg-[#1A1A1A] sticky top-0 z-20 pt-3 md:top-[58px] md:pt-0">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-6 justify-start md:justify-center pb-1">
                        {['overview', 'specifications', 'applications', 'certifications'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-2 text-xs md:text-sm font-medium transition-all duration-300 border-b-2 whitespace-nowrap flex-shrink-0 ${activeTab === tab
                                        ? 'border-[#FF5912] text-[#FF5912]'
                                        : 'border-transparent text-[#FBF8F3]/70 hover:text-[#FBF8F3]'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Empty spacer on mobile to prevent content being hidden under tabs when scrolling */}
            <div className="h-1 md:h-0 bg-[#121212]"></div>
            {/* Main Content */}
            <section className="py-8 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Key Features
                                </h2>

                                <motion.ul
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                    className="space-y-4"
                                >
                                    {product.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            variants={fadeInUp}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-1 bg-[#FF5912]/20 rounded-full p-1 flex-shrink-0">
                                                <svg className="w-4 h-4 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <span className="text-[#FBF8F3]/90">{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-6">
                                    Industry Applications
                                </h2>

                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {product.industries.map((industry, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                            className="px-3 md:px-4 py-1.5 md:py-2 bg-[#2A2A2A] rounded-full text-xs md:text-sm"
                                        >
                                            {industry}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 lg:h-96">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-[#1A1A1A] rounded-3xl">
                                    <h3 className="text-xl font-bold mb-4">
                                        Quality Certifications
                                    </h3>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {product.certifications.map((cert, index) => (
                                            <div
                                                key={index}
                                                className="px-3 py-1.5 bg-[#2A2A2A] rounded-lg text-xs md:text-sm"
                                            >
                                                {cert}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-[#2A2A2A]">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-medium text-sm md:text-base">Need a customized solution?</h4>
                                            <Link
                                                href="/contact"
                                                className="text-[#FF5912] font-medium hover:underline flex items-center gap-1 group text-sm md:text-base"
                                            >
                                                Contact Us
                                                <svg
                                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* Specifications Tab */}
                    {activeTab === 'specifications' && (
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                                Product Specifications
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                                {product.products.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveProduct(index)}
                                        className={`p-3 md:p-4 rounded-xl text-left transition-all duration-300 ${activeProduct === index
                                                ? 'bg-[#FF5912] text-white'
                                                : 'bg-[#1A1A1A] text-[#FBF8F3]/80 hover:bg-[#2A2A2A]'
                                            }`}
                                    >
                                        <span className="text-sm md:text-base">{item.name}</span>
                                    </button>
                                ))}
                            </div>

                            {product.products[activeProduct] && (
                                <motion.div
                                    key={activeProduct}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-[#1A1A1A] rounded-3xl p-4 md:p-8"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                                        {product.products[activeProduct].name}
                                    </h3>
                                    <p className="text-[#FBF8F3]/80 mb-6 text-sm md:text-base">
                                        {product.products[activeProduct].description}
                                    </p>

                                    <h4 className="text-base md:text-lg font-semibold mb-3 text-[#FF5912]">
                                        Specifications
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6">
                                        {product.products[activeProduct].specifications.map((spec, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FF5912] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <h4 className="text-base md:text-lg font-semibold mb-3 text-[#FF5912]">
                                        Common Applications
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                        {product.products[activeProduct].applications.map((app, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FF5912] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>{app}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    )}

                    {/* Applications Tab */}
                    {activeTab === 'applications' && (
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                                Applications
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {product.products.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="bg-[#1A1A1A] rounded-3xl overflow-hidden"
                                    >
                                        <div className="p-4 md:p-6">
                                            <h3 className="text-lg md:text-xl font-bold mb-3">{item.name}</h3>
                                            <p className="text-[#FBF8F3]/70 mb-4 text-xs md:text-sm">{item.description}</p>

                                            <h4 className="text-[#FF5912] font-medium mb-3 text-sm md:text-base">Applications:</h4>
                                            <ul className="space-y-2">
                                                {item.applications.map((app, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-[#FF5912] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                        <span className="text-[#FBF8F3]/80">{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Certifications Tab */}
                    {activeTab === 'certifications' && (
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                                Certifications & Quality Standards
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                                <div>
                                    <p className="text-base md:text-lg text-[#FBF8F3]/80 mb-6">
                                        At Prabhat Steel, we maintain strict quality control procedures and adhere to international standards to ensure our {product.name} products meet the highest quality benchmarks.
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        {product.certifications.map((cert, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                                className="bg-[#1A1A1A] p-3 md:p-5 rounded-xl flex flex-col items-center text-center"
                                            >
                                                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF5912]/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                                                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                    </svg>
                                                </div>
                                                <span className="font-medium text-sm md:text-base">{cert}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#1A1A1A] rounded-3xl p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold mb-4">
                                        Quality Assurance Process
                                    </h3>

                                    <div className="space-y-4 md:space-y-6">
                                        {[
                                            { title: "Raw Material Inspection", desc: "Rigorous testing of incoming materials to ensure they meet our specifications." },
                                            { title: "In-Process Quality Control", desc: "Continuous monitoring throughout the manufacturing process." },
                                            { title: "Final Inspection", desc: "Comprehensive checks before products are cleared for dispatch." },
                                            { title: "Documentation", desc: "Detailed test reports and certificates for full traceability." }
                                        ].map((step, i) => (
                                            <div key={i} className="flex gap-3 md:gap-4">
                                                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FF5912] flex items-center justify-center font-bold text-sm md:text-base">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1 text-sm md:text-base">{step.title}</h4>
                                                    <p className="text-xs md:text-sm text-[#FBF8F3]/70">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Related Products */}
            <section className="py-10 md:py-16 bg-[#0A0A0A]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Related Products
                        </h2>
                        <Link
                            href="/products"
                            className="text-[#FF5912] font-medium hover:underline flex items-center gap-1 group text-sm md:text-base"
                        >
                            View All
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {relatedCategoryData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-[#1A1A1A] rounded-3xl overflow-hidden transition-all duration-300"
                            >
                                <Link href={item.href}>
                                    <div className="h-40 md:h-48 relative overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-lg md:text-xl font-bold mb-2">{item.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#FBF8F3]/70 text-xs md:text-sm">View Details</span>
                                            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-[#FF5912] to-[#FF8C12]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Need {product.name} Products for Your Project?
                    </h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact our team of experts to discuss your specific requirements and receive a competitive quote.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-[#FF5912] px-8 py-3 rounded-full font-medium transition-all duration-300"
                        >
                            Request a Quote
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                        >
                            Contact Sales Team
                        </motion.button>
                    </div>
                </div>
            </section>
        </main>
    );
}