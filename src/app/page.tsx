// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    "Stainless Steel Products",
    "Aluminium Products",
    "Duplex Steel Products",
    "Super Duplex Steel Products",
    "Alloy Steel Products",
    "Brass-Copper Products",
    "Hastelloy Products",
    "Titanium Products",
    "Monel Products",
  ];

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="bg-[#121212] text-white min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero2.jpg"
            alt="Steel manufacturing plant"
            fill
            className="object-cover"
            priority
          />
          {/* Simple dark overlay to make the image blend with dark background */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-[#FF5912]">Premium</span> Steel Solutions
            </h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 text-[#FBF8F3]/90">
              Industry-leading supplier of high-quality stainless steel and alloy products
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Explore Products
              </button>
              <button className="bg-transparent border border-[#FBF8F3] hover:bg-[#FBF8F3]/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer"
          >
            <svg className="w-10 h-10 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 bg-[#0A0A0A]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  src="/gg.jpg" 
                  width={600} 
                  height={400} 
                  alt="Stainless Steel Sheets"
                  className="w-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-[#FF5912]">Prabhat Steel</span> - Excellence in Metal
              </h2>
              <p className="text-[#FBF8F3]/80 mb-6">
                The stainless steel sheet is a highly sought-after product used globally by industrialists across various sectors. It plays a significant role in the manufacturing and production of diverse applications.
              </p>
              <p className="text-[#FBF8F3]/80 mb-8">
                Prabhat Steel is the top steel sheet supplier in India. We utilize premium raw materials and cutting-edge technology. Our team of experts is committed to delivering top-quality sheets that meet our customers' specific requirements and demands.
              </p>
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {["Premium Quality", "Custom Solutions", "Global Standards", "Expert Support"].map((item, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-[#FF5912]/10 text-[#FF5912] rounded-full text-sm font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
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
            <span className="text-[#FF5912] text-lg font-medium">Our Offerings</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Premium Metal Products</h2>
            <p className="text-[#FBF8F3]/70 max-w-2xl mx-auto">
              We provide a diverse range of high-quality metal products catering to various industries with exceptional durability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                className="bg-[#1A1A1A] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,89,18,0.15)]"
              >
                <div className="h-48 bg-gradient-to-r from-[#FF5912] to-[#FF8C12] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{product.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product}</h3>
                  <p className="text-[#FBF8F3]/60 mb-6">
                    High-quality {product.toLowerCase()} engineered for optimal performance and longevity.
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="text-[#FF5912] font-medium hover:underline flex items-center gap-2">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quality Section */}
      <motion.section 
        className="py-20 bg-[#0A0A0A]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Commitment to <span className="text-[#FF5912]">Quality Excellence</span>
              </h2>
              <p className="text-[#FBF8F3]/80 mb-6">
                Our sheets boast machined and stamped finishing, ensuring they can withstand high temperatures and pressures while delivering excellent performance and remaining undamaged.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Premium raw materials sourced globally",
                  "State-of-the-art manufacturing facility",
                  "Rigorous quality control processes",
                  "Compliance with international standards",
                  "Experienced technical team for custom solutions"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 bg-[#FF5912]/20 rounded-full p-1">
                      <svg className="w-4 h-4 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-[#FBF8F3]/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className="mt-8 bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Learn About Our Process
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  src="/hero.jpg" 
                  width={600} 
                  height={400} 
                  alt="Quality Control Process"
                  className="w-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[#FF5912] to-[#FF8C12]"
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
            Ready to Elevate Your Projects?
          </motion.h2>
          <motion.p 
            className="text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with our team of experts to discuss your specific metal requirements and discover how Prabhat Steel can provide tailored solutions for your industry needs.
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
              Contact Us Today
            </motion.button>
            <motion.button 
              className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}