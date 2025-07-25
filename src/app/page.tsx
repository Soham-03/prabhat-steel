// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

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
  {
    name: "Stainless Steel Products",
    slug: "stainless-steel",
    image: "/stainless_steel.jpg",
    description: "Premium stainless steel products offering exceptional corrosion resistance, durability, and aesthetic appeal for a wide range of applications",
    features: ["300 & 400 Series", "Food Grade", "Hygienic & Easy to Clean", "100% Recyclable"]
  },
  {
    name: "Aluminium Products",
    slug: "aluminium", 
    image: "/aluminium.jpg",
    description: "High-performance aluminium products combining lightweight properties with excellent corrosion resistance, thermal conductivity, and formability",
    features: ["Aerospace Grade", "Lightweight", "Excellent Conductivity", "Non-Magnetic Properties"]
  },
  {
    name: "Duplex Steel Products",
    slug: "duplex-steel",
    image: "/duplex-steel.jpg", 
    description: "Advanced duplex steel solutions offering optimal balance of strength, corrosion resistance, and ductility through unique dual-phase microstructure",
    features: ["Superior Strength", "Chloride Resistant", "Stress Corrosion Resistant", "Cost-Effective"]
  },
  {
    name: "Super Duplex Steel Products",
    slug: "super-duplex-steel",
    image: "/super-duplex-steel.jpg",
    description: "Premium super duplex steel products delivering exceptional corrosion resistance and superior mechanical properties for the most challenging environments",
    features: ["Ultra High Strength", "Offshore Grade", "Extreme Pitting Resistance", "Extended Service Life"]
  },
  {
    name: "Alloy Steel Products",
    slug: "alloy-steel", 
    image: "/alloy-steel.webp",
    description: "Specialized alloy steel solutions featuring custom compositions engineered for superior strength, heat resistance, and durability in extreme conditions",
    features: ["High Temperature", "Enhanced Mechanical Properties", "Custom Alloys", "Fatigue Resistant"]
  },
  {
    name: "Hastelloy Products",
    slug: "hastelloy",
    image: "/hastealloy.jpg",
    description: "Premium Hastelloy superalloy products delivering exceptional corrosion resistance and high-temperature strength for demanding chemical processing",
    features: ["Chemical Resistant", "High Temperature Stability", "Oxidizing & Reducing Environments", "Aerospace Grade"]
  },
  {
    name: "Brass & Copper Products",
    slug: "brass-copper",
    image: "/brass-copper.webp",
    description: "Premium brass and copper products combining excellent thermal and electrical conductivity with corrosion resistance for diverse applications",
    features: ["Electrical Conductivity", "Marine Grade", "Antimicrobial Properties", "Attractive Appearance"]
  },
  {
    name: "Carbon Steel Products",
    slug: "carbon-steel",
    image: "/carbon-steel.jpg", 
    description: "High-quality carbon steel products delivering exceptional strength, durability, and versatility for structural, mechanical, and general engineering",
    features: ["High Tensile Strength", "Excellent Weldability", "Cost-Effective", "Heat Treatable"]
  },
  {
    name: "Tool Steel Products",
    slug: "tool-steel",
    image: "/tool-steel.jpg",
    description: "Precision tool steel solutions engineered for superior hardness, wear resistance, and toughness, designed for cutting tools and precision manufacturing",
    features: ["Exceptional Hardness", "Wear Resistant", "Dimensional Stability", "High Temperature Performance"]
  },
  {
    name: "MS & GI Coated Products", 
    slug: "ms-gi-coated",
    image: "/ms_and_gi.jpg",
    description: "Comprehensive range of mild steel and galvanized iron products providing cost-effective solutions with excellent strength and corrosion protection",
    features: ["Galvanized Coating", "Structural Grade", "Easy to Fabricate", "Superior Corrosion Protection"]
  },
  {
    name: "Fasteners & Hardware",
    slug: "fasteners-hardware",
    image: "/fasteners_hardware.jpg",
    description: "Extensive range of fasteners and hardware engineered for superior corrosion resistance, strength, and reliability in demanding environments",
    features: ["High Tensile Strength", "Corrosion Resistant", "Multiple Grades Available", "Custom Manufacturing"]
  },
  {
    name: "Fittings & Flanges",
    slug: "fittings-flanges",
    image: "/fittings_flanges.jpg",
    description: "Comprehensive range of stainless steel, alloy, and specialty fittings and flanges engineered for leak-proof connections and reliable performance",
    features: ["Leak-Proof Connections", "Multiple Materials", "International Standards", "Custom Fabrication"]
  }
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

  const handleProductClick = (slug: string) => {
    router.push(`/products/${slug}`);
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
              <button className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
               onClick={() => window.open('https://wa.me/c/918369657425', '_blank')}
              >
                View Catalogue
              </button>
              <button className="bg-transparent border border-[#FBF8F3] hover:bg-[#FBF8F3]/10 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              onClick={()=> window.location.replace("/contact")}
              >
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
                <span className="text-[#FF5912]">Prabhat Steel</span> - Excellence in Metal and Steel Industry
              </h2>
              <p className="text-[#FBF8F3]/80 mb-6">
                Prabhat Steel, based in Mumbai, is a leading stockist and supplier of ferrous and non-ferrous metals, serving a wide range of industries including construction, infrastructure, manufacturing, engineering, and fabrication. With years of experience and a reputation for quality, we are committed to delivering premium materials and unmatched service.
              </p>
              <p className="text-[#FBF8F3]/80 mb-8">
                We deal in a comprehensive range of ferrous materials such as stainless steel, carbon steel, alloy steel, and mild steel, and also stock an extensive variety of non-ferrous metals including aluminium, copper, brass, titanium, and nickel alloys.
              </p>
              <p className="text-[#FBF8F3]/80 mb-6">
                Our products are available in sheet, coil, plate, pipe, rod, bar, angle, and fitting forms, catering to both standard and customized requirements. We maintain strong ties with reputed domestic and international mills, ensuring consistent quality and timely delivery.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#1A1A1A] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,89,18,0.15)] cursor-pointer"
                onClick={() => handleProductClick(product.slug)}
              >
                {/* Product Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={product.image}
                    width={400}
                    height={200}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Product number overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[#FF5912] text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#FF5912]/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 leading-tight">{product.name}</h3>
                  <p className="text-[#FBF8F3]/60 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-[#FF5912]/10 text-[#FF5912] rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-[#FF5912] font-medium hover:underline flex items-center gap-2 text-sm">
                      Explore Products
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Products Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => router.push('/products')}
              className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </motion.div>
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
                At Prabhat Steel, quality is more than a promise — it's the foundation of everything we do. With a focus on precision, reliability, and customer satisfaction, we ensure that every product meets the highest standards. Our commitment to excellence drives us to deliver superior ferrous and non-ferrous materials with consistency, integrity, and unmatched service.
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
                onClick={() => router.push('/about')}
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


      {/* Testimonials Section */}

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
              onClick={()=> window.location.replace("/contact")}
            >
              Contact Us Today
            </motion.button>
            <motion.button 
              className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=> window.location.replace("/contact")}
            >
              Request a Quote
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}