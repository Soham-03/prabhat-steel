"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Product categories
// const productCategories = [
//   {
//     id: "stainless-steel",
//     name: "Stainless Steel",
//     image: "/stainless_steel.jpg",
//     description: "High-quality stainless steel products with excellent corrosion resistance and durability.",
//     popular: ["SS 304/304L Sheets", "SS 316/316L Sheets", "SS 321 Sheets", "SS 410 Sheets"]
//   },
//   {
//     id: "aluminium",
//     name: "Aluminium",
//     image: "/aluminium.jpg",
//     description: "Lightweight, highly recyclable material with good corrosion resistance for various applications.",
//     popular: ["Aluminium 1100 Sheets", "Aluminium 5052 Sheets", "Aluminium 6061 Sheets"]
//   },
//   {
//     id: "duplex-steel",
//     name: "Duplex Steel",
//     image: "/duplex-steel.jpg",
//     description: "Superior strength and corrosion resistance for demanding industrial applications.",
//     popular: ["Duplex 2205 Sheets", "Duplex 2304 Sheets", "Duplex S31803 Sheets"]
//   },
//   {
//     id: "super-duplex-steel",
//     name: "Super Duplex Steel",
//     image: "/super-duplex-steel.jpg",
//     description: "Enhanced performance in extreme environments with excellent resistance to pitting and crevice corrosion.",
//     popular: ["Super Duplex 2507 Sheets", "Super Duplex S32750 Sheets"]
//   },
//   {
//     id: "alloy-steel",
//     name: "Alloy Steel",
//     image: "/alloy-steel.webp",
//     description: "Specialized alloy compositions for high-temperature and high-pressure applications.",
//     popular: ["Alloy 20 Sheets", "Incoloy 800 Sheets", "Inconel 600 Sheets"]
//   },
//   {
//     id: "brass-copper",
//     name: "Brass & Copper",
//     image: "/brass-copper.webp",
//     description: "Excellent resistance to seawater corrosion and biofouling for marine applications.",
//     popular: ["Cupronickel 70/30 Sheets", "Cupronickel 90/10 Sheets"]
//   },
//   {
//     id: "hastelloy",
//     name: "Hastelloy",
//     image: "/hastealloy.jpg",
//     description: "Superior resistance to highly corrosive environments in chemical processing industries.",
//     popular: ["Hastelloy C276 Sheets", "Hastelloy C22 Sheets", "Hastelloy B2 Sheets"]
//   },
//   {
//     id: "titanium",
//     name: "Titanium",
//     image: "/titanium.jpg",
//     description: "Exceptional strength-to-weight ratio and corrosion resistance for aerospace and medical applications.",
//     popular: ["Titanium Gr 1 Sheets", "Titanium Gr 2 Sheets", "Titanium Gr 5 Sheets"]
//   },
//   {
//     id: "monel-products",
//     name: "Monel Products",
//     image: "/monel.jpg",
//     description: "Excellent resistance to acids and alkalis with high tensile strength for harsh environments.",
//     popular: ["Monel 400 Sheets", "Monel K500 Sheets"]
//   }
// ];


const productCategories = [
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    image: "/stainless_steel.jpg",
    description: "High-quality stainless steel products with excellent corrosion resistance and durability.",
    popular: ["SS 304/304L Sheets", "SS 316/316L Sheets", "SS 321 Sheets", "SS 410 Sheets"]
  },
  {
    id: "ms-gi-coated",
    name: "MS & GI Coated Products",
    image: "/ms_and_gi.jpg",
    description: "Cost-effective mild steel and galvanized iron solutions with excellent strength and corrosion protection.",
    popular: ["MS Sheets & Plates", "GI Sheets & Coils", "MS Pipes & Tubes", "GI Pipes & Fittings"]
  },
  {
    id: "aluminium",
    name: "Aluminium",
    image: "/aluminium.jpg",
    description: "Lightweight, highly recyclable material with good corrosion resistance for various applications.",
    popular: ["Aluminium 1100 Sheets", "Aluminium 5052 Sheets", "Aluminium 6061 Sheets"]
  },
  {
    id: "duplex-steel",
    name: "Duplex Steel",
    image: "/duplex-steel.jpg",
    description: "Superior strength and corrosion resistance for demanding industrial applications.",
    popular: ["Duplex 2205 Sheets", "Duplex 2304 Sheets", "Duplex S31803 Sheets"]
  },
  {
    id: "super-duplex-steel",
    name: "Super Duplex Steel",
    image: "/super-duplex-steel.jpg",
    description: "Enhanced performance in extreme environments with excellent resistance to pitting and crevice corrosion.",
    popular: ["Super Duplex 2507 Sheets", "Super Duplex S32750 Sheets", "Super Duplex S32760 Sheets"]
  },
  {
    id: "alloy-steel",
    name: "Alloy Steel",
    image: "/alloy-steel.webp",
    description: "Specialized alloy compositions for high-temperature and high-pressure applications.",
    popular: ["Alloy 20 Sheets", "Incoloy 800 Sheets", "Inconel 600 Sheets"]
  },
  {
    id: "brass-copper",
    name: "Brass & Copper",
    image: "/brass-copper.webp",
    description: "Excellent thermal and electrical conductivity with corrosion resistance for marine and electrical applications.",
    popular: ["Copper C11000 Sheets", "Brass C26000 Sheets", "Cupronickel 70/30 Sheets", "Cupronickel 90/10 Sheets"]
  },
  {
    id: "carbon-steel",
    name: "Carbon Steel",
    image: "/carbon-steel.jpg",
    description: "High-strength, cost-effective carbon steel products for structural and general engineering applications.",
    popular: ["Low Carbon Steel Sheets", "Medium Carbon Steel Sheets", "Carbon Steel Pipes", "Carbon Steel Plates"]
  },
  {
    id: "tool-steel",
    name: "Tool Steel",
    image: "/tool-steel.jpg",
    description: "Premium tool steel with superior hardness and wear resistance for cutting tools and precision manufacturing.",
    popular: ["D2 Tool Steel", "H13 Tool Steel", "O1 Tool Steel", "A2 Tool Steel"]
  },
  {
    id: "hastelloy",
    name: "Hastelloy",
    image: "/hastealloy.jpg",
    description: "Superior resistance to highly corrosive environments in chemical processing industries.",
    popular: ["Hastelloy C-276 Sheets", "Hastelloy C-22 Sheets", "Hastelloy B-3 Sheets"]
  }
];
// Industries served
const industries = [
  { name: "Oil & Gas", icon: "🛢️" },
  { name: "Marine", icon: "⚓" },
  { name: "Chemical", icon: "⚗️" },
  { name: "Power Generation", icon: "⚡" },
  { name: "Automotive", icon: "🚗" },
  { name: "Aerospace", icon: "✈️" },
  { name: "Pharmaceutical", icon: "💊" },
  { name: "Food Processing", icon: "🍽️" },
  { name: "Construction", icon: "🏗️" },
  { name: "Pulp & Paper", icon: "📄" },
  { name: "Desalination", icon: "💧" },
  { name: "Medical", icon: "🏥" }
];

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter products based on search and active filter
  const filteredProducts = productCategories.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.popular.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeFilter) {
      // For demo purposes, we're matching industries to products simplistically
      const industryMatches: Record<string, string[]> = {
        "Oil & Gas": ["duplex-steel", "super-duplex-steel", "alloy-steel", "hastelloy"],
        "Marine": ["cupro-nickel", "stainless-steel", "titanium"],
        "Chemical": ["hastelloy", "titanium", "alloy-steel"],
        "Automotive": ["stainless-steel", "aluminium"],
        "Aerospace": ["titanium", "alloy-steel"],
        // Add more industry matches as needed
      };
      
      const matches = industryMatches[activeFilter];
      if (matches) {
        return matchesSearch && matches.includes(product.id);
      }
      return false;
    }
    
    return matchesSearch;
  });

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
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="grid grid-cols-3 grid-rows-3 h-full w-full">
            {productCategories.slice(0, 9).map((category, index) => (
              <div key={index} className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#121212]/70"></div>
                <Image 
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover opacity-40"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-[#FF5912]">Products</span>
            </h1>
            <p className="text-xl text-[#FBF8F3]/80 mb-8">
              Explore our extensive range of high-quality metal products designed for exceptional performance across various industries.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-full py-3 px-6 text-[#FBF8F3] placeholder-[#FBF8F3]/50 focus:outline-none focus:ring-2 focus:ring-[#FF5912] transition-all duration-300"
              />
              <svg 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FBF8F3]/50" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            
            {/* Industry Filters */}
            <div className="py-4 overflow-x-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-2">
                <button 
                  onClick={() => setActiveFilter(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === null 
                      ? 'bg-[#FF5912] text-white' 
                      : 'bg-[#2A2A2A] text-[#FBF8F3]/80 hover:bg-[#FF5912]/20'
                  }`}
                >
                  All Industries
                </button>
                
                {industries.slice(0, 8).map((industry, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveFilter(industry.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === industry.name 
                        ? 'bg-[#FF5912] text-white' 
                        : 'bg-[#2A2A2A] text-[#FBF8F3]/80 hover:bg-[#FF5912]/20'
                    }`}
                  >
                    <span className="mr-2">{industry.icon}</span>
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-[#1A1A1A] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,89,18,0.15)]"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="h-48 relative overflow-hidden">
                      <Image 
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-[#FBF8F3]/70 text-sm mb-4">
                        {product.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#FF5912] mb-2">Popular Products:</h4>
                        <ul className="space-y-1">
                          {product.popular.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="text-xs text-[#FBF8F3]/60 flex items-start gap-1">
                              <svg className="w-3 h-3 text-[#FF5912] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              {item}
                            </li>
                          ))}
                          {product.popular.length > 3 && (
                            <li className="text-xs text-[#FBF8F3]/40">+ {product.popular.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-[#FF5912] font-medium hover:underline group flex items-center gap-1">
                          View Details
                          <svg 
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </span>
                        <span className="w-8 h-8 rounded-full bg-[#FF5912]/10 flex items-center justify-center text-[#FF5912]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-[#FF5912] mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">No products found</h3>
              <p className="text-[#FBF8F3]/70 mb-6">
                No products match your current search criteria. Try adjusting your search or filters.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter(null);
                }}
                className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#FBF8F3]/70 max-w-3xl mx-auto">
              Our premium metal products are designed to meet the demanding requirements of a wide range of industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-4 text-center hover:bg-[#2A2A2A] transition-all duration-300"
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <h3 className="font-medium">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#FF5912]/10 text-[#FF5912] text-sm font-medium mb-4">
                Why Choose Prabhat Steel
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Uncompromising Quality & Exceptional Service
              </h2>
              <p className="text-[#FBF8F3]/80 mb-8">
                We are committed to providing the highest quality metal products backed by exceptional customer service and technical expertise.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Premium Quality",
                    desc: "Sourced from the finest mills worldwide and rigorously tested to meet international standards.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    )
                  },
                  {
                    title: "Custom Solutions",
                    desc: "Tailored products to meet your specific project requirements and specifications.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                      </svg>
                    )
                  },
                  {
                    title: "Technical Expertise",
                    desc: "Support from industry experts with decades of experience in metal fabrication.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    )
                  },
                  {
                    title: "Global Shipping",
                    desc: "Reliable delivery to any location worldwide with efficient logistics solutions.",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#1A1A1A] rounded-xl p-5 transition-all duration-300 hover:bg-[#1E1E1E]"
                  >
                    <div className="w-12 h-12 bg-[#FF5912]/10 rounded-full flex items-center justify-center mb-4 text-[#FF5912]">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#FBF8F3]/70">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="relative rounded-3xl overflow-hidden">
                <Image 
                  src="/hero.jpg" 
                  width={600} 
                  height={500}
                  alt="Our manufacturing facility"
                  className="w-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent rounded-3xl"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { value: "25+", label: "Years Experience" },
                      { value: "1000+", label: "Projects Completed" },
                      { value: "50+", label: "Countries Served" }
                    ].map((stat, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-[#FBF8F3]/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-[#1A1A1A] rounded-xl p-5">
                  <div className="text-[#FF5912] font-semibold mb-2">ISO 9001:2015</div>
                  <div className="text-sm text-[#FBF8F3]/70">Certified quality management system</div>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl p-5">
                  <div className="text-[#FF5912] font-semibold mb-2">24/7 Support</div>
                  <div className="text-sm text-[#FBF8F3]/70">Technical assistance available around the clock</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#FF5912] to-[#FF8C12]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Metal Products for Your Project?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a competitive quote.
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
              Download Catalog
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
}