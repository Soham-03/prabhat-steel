"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { desc } from 'framer-motion/client';


// const productData = {
//     'stainless-steel': {
//         name: "Stainless Steel",
//         title: "Premium Stainless Steel Products",
//         description: "Our high-quality stainless steel products offer exceptional corrosion resistance, durability, and aesthetic appeal for a wide range of applications.",
//         image: "/stainless_steel.jpg",
//         features: [
//             "Superior corrosion resistance",
//             "Excellent heat resistance",
//             "High strength-to-weight ratio",
//             "Hygienic and easy to clean",
//             "100% recyclable material",
//             "Low maintenance requirements"
//         ],
//         our_range: [
//             "Sheets & Plates",
//             "Pipes & Tubes",
//             "Rods & Bars",
//             "Fasteners & Hardware",
//             "Fittings & Flanges"
//         ],
//         product_range: [
//             {
//                 name: "Sheets & Plates",
//                 description: "High-quality stainless steel sheets and plates for various industrial applications, available in multiple grades and finishes.",
//                 images: ["", ""]
//             },
//             {
//                 name: "Sheets & Plates",
//                 description: "High-quality stainless steel sheets and plates for various industrial applications, available in multiple grades and finishes.",
//                 images: ["", ""]
//             },
//             {
//                 name: "Sheets & Plates",
//                 description: "High-quality stainless steel sheets and plates for various industrial applications, available in multiple grades and finishes.",
//                 images: ["", ""]
//             }
//         ],
//         products: [
//             {
//                 name: "SS 304/304L Sheets",
//                 description: "The most versatile and widely used stainless steel, offering good corrosion resistance and formability.",
//                 specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, No.8, Hairline"],
//                 applications: ["Food processing equipment", "Kitchen equipment", "Chemical containers", "Architectural applications"]
//             },
//             {
//                 name: "SS 316/316L Sheets",
//                 description: "Higher corrosion resistance than 304, particularly against chlorides and acids.",
//                 specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, No.8, Hairline"],
//                 applications: ["Marine environments", "Chemical processing equipment", "Pharmaceutical industry", "Surgical instruments"]
//             },
//             {
//                 name: "SS 202 Sheets",
//                 description: "Economical austenitic grade with good corrosion resistance and formability for general purpose applications.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, Hairline"],
//                 applications: ["Kitchen equipment", "Decorative applications", "Automotive trim", "Household appliances"]
//             },
//             {
//                 name: "SS 321 Sheets",
//                 description: "Titanium-stabilized grade with excellent resistance to intergranular corrosion at high temperatures.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4"],
//                 applications: ["Heat exchangers", "Aircraft exhaust systems", "High-temperature chemical processing", "Furnace parts"]
//             },
//             {
//                 name: "SS 410 Sheets",
//                 description: "Martensitic stainless steel with good corrosion resistance and high strength after heat treatment.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Turbine blades", "Valve components", "Cutlery", "Surgical instruments"]
//             },
//             {
//                 name: "SS Pipes & Tubes",
//                 description: "Comprehensive range of stainless steel pipes in round, square, rectangular, and oval shapes.",
//                 specifications: ["Grades: 202, 304, 316, 321, 410", "Types: Seamless & Welded", "Finish: Mirror Polished, Matt", "Sizes: All standard and custom sizes"],
//                 applications: ["Structural applications", "Fluid transport", "Heat exchangers", "Architectural projects"]
//             },
//             {
//                 name: "SS Rods & Bars",
//                 description: "High-quality stainless steel rods and bars in various grades for machining and fabrication.",
//                 specifications: ["Grades: 202, 304, 316, 321, 410", "Diameters: 6mm to 300mm", "Lengths: Up to 6000mm", "Finish: Bright, Black, Peeled"],
//                 applications: ["Machining components", "Fastener manufacturing", "Shafts", "Structural elements"]
//             },
//             {
//                 name: "SS Fasteners & Hardware",
//                 description: "Complete range of stainless steel fasteners including bolts, screws, nuts, washers, and anchors.",
//                 specifications: ["Grades: 202, 304, 316", "Types: Hex bolts, Socket screws, Machine screws, Wood screws", "Sizes: M3 to M64", "Finishes: Plain, Passivated"],
//                 applications: ["Construction", "Marine applications", "Food processing", "Chemical equipment", "Architectural fastening"]
//             },
//             {
//                 name: "SS Fittings & Flanges",
//                 description: "Precision-manufactured stainless steel fittings and flanges for piping systems.",
//                 specifications: ["Grades: 202, 304, 316", "Types: Blind, Threaded, Weld Neck Flanges", "Fittings: Elbows, Tees, Unions, Reducers", "Standards: ASME, DIN, JIS"],
//                 applications: ["Process piping", "Water treatment", "Chemical processing", "Food and beverage industry"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240"],
//         industries: ["Automotive", "Aerospace", "Food & Beverage", "Pharmaceutical", "Chemical Processing", "Construction", "Marine"]
//     },
//     'ms-gi-coated': {
//         name: "MS & GI Coated Products",
//         title: "Mild Steel & Galvanized Iron Solutions",
//         description: "Our comprehensive range of mild steel and galvanized iron products provides cost-effective solutions with excellent strength and corrosion protection for various applications.",
//         image: "/ms_and_gi.jpg",
//         features: [
//             "Cost-effective material solutions",
//             "Excellent strength and durability",
//             "Superior corrosion protection (GI coating)",
//             "Easy to fabricate and weld",
//             "Wide range of sizes and specifications",
//             "Suitable for structural applications"
//         ],
//         products: [
//             {
//                 name: "MS Sheets & Plates",
//                 description: "High-quality mild steel sheets and plates for general engineering and construction applications.",
//                 specifications: ["Thickness: 0.5mm to 100mm", "Width: Up to 2500mm", "Length: Up to 12000mm", "Grades: IS 2062, ASTM A36"],
//                 applications: ["Structural fabrication", "General engineering", "Shipbuilding", "Construction"]
//             },
//             {
//                 name: "GI Sheets & Coils",
//                 description: "Galvanized iron sheets with zinc coating for enhanced corrosion resistance.",
//                 specifications: ["Thickness: 0.12mm to 4.0mm", "Width: Up to 1250mm", "Coating: 120-275 GSM", "Standards: IS 277, ASTM A653"],
//                 applications: ["Roofing", "Cladding", "Ductwork", "Automotive panels"]
//             },
//             {
//                 name: "MS Pipes & Tubes",
//                 description: "Mild steel pipes and tubes in various shapes for structural and fluid transport applications.",
//                 specifications: ["Types: ERW, Seamless", "Shapes: Round, Square, Rectangular", "Sizes: 15mm to 600mm OD", "Standards: IS 1239, ASTM A53"],
//                 applications: ["Water supply", "Structural framework", "Scaffolding", "General piping"]
//             },
//             {
//                 name: "GI Pipes & Fittings",
//                 description: "Galvanized iron pipes with superior corrosion resistance for water and gas applications.",
//                 specifications: ["Sizes: 15mm to 150mm NB", "Class: Light, Medium, Heavy", "Coating: Hot-dip galvanized", "Standards: IS 1239, BS 1387"],
//                 applications: ["Water supply systems", "Gas distribution", "Fire fighting systems", "Irrigation"]
//             },
//             {
//                 name: "MS & GI Fasteners",
//                 description: "Comprehensive range of mild steel and galvanized fasteners for construction and industrial applications.",
//                 specifications: ["Types: Hex bolts, Carriage bolts, Machine screws, Self-drilling screws", "Sizes: M6 to M64", "Coating: Zinc plated, Hot-dip galvanized", "Standards: IS 1367, DIN, ASTM"],
//                 applications: ["Construction fastening", "Structural connections", "General engineering", "Outdoor applications"]
//             },
//             {
//                 name: "MS Angles & Channels",
//                 description: "Structural mild steel angles and channels for construction and fabrication work.",
//                 specifications: ["Angles: Equal & Unequal", "Channels: ISMC, ISLB", "Sizes: 20x20mm to 200x200mm", "Standards: IS 2062"],
//                 applications: ["Building construction", "Industrial structures", "Transmission towers", "General fabrication"]
//             },
//             {
//                 name: "Hardware & Accessories",
//                 description: "Complete range of hardware items including hinges, handles, locks, and mounting accessories.",
//                 specifications: ["Materials: MS, GI, Brass", "Types: Door hardware, Cabinet fittings, Mounting brackets", "Finishes: Zinc plated, Powder coated", "Applications: Residential & Commercial"],
//                 applications: ["Door and window fittings", "Cabinet hardware", "Architectural applications", "General hardware needs"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "BIS Certification", "IS 2062", "ASTM Standards"],
//         industries: ["Construction", "Infrastructure", "Water Supply", "Agriculture", "General Engineering", "Automotive", "Shipbuilding"]
//     },
//     'aluminium': {
//         name: "Aluminium",
//         title: "High-Performance Aluminium Products",
//         description: "Our premium aluminium products combine lightweight properties with excellent corrosion resistance, thermal conductivity, and formability for diverse industrial applications.",
//         image: "/aluminium.jpg",
//         features: [
//             "Exceptional strength-to-weight ratio",
//             "Superior corrosion resistance",
//             "Excellent thermal and electrical conductivity",
//             "High reflectivity",
//             "100% recyclable and sustainable",
//             "Non-magnetic properties"
//         ],
//         products: [
//             {
//                 name: "Aluminium 1100 Sheets",
//                 description: "Commercially pure aluminium (99% minimum) with excellent formability, corrosion resistance, and weldability.",
//                 specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Polished"],
//                 applications: ["Food and chemical handling equipment", "Heat exchangers", "Light reflectors", "Decorative applications"]
//             },
//             {
//                 name: "Aluminium 5052 Sheets",
//                 description: "Aluminium-magnesium alloy with moderate strength and excellent corrosion resistance, particularly in marine environments.",
//                 specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Brushed"],
//                 applications: ["Marine components", "Aircraft parts", "Pressure vessels", "Electronic chassis"]
//             },
//             {
//                 name: "Aluminium 6061 Sheets",
//                 description: "Aluminium-magnesium-silicon alloy with good strength, formability, weldability, and corrosion resistance.",
//                 specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Polished"],
//                 applications: ["Structural components", "Marine applications", "Transportation", "Aerospace industry"]
//             },
//             {
//                 name: "Aluminium 6063 Sections",
//                 description: "Architectural grade aluminium with excellent extrudability and surface finish for structural applications.",
//                 specifications: ["Shapes: Round, Square, Rectangle, Oval, Custom profiles", "Sizes: All standard and custom", "Finish: Mill, Anodized, Powder coated", "Tolerance: ±0.1mm"],
//                 applications: ["Window and door frames", "Structural glazing", "Solar panel frames", "Architectural applications"]
//             },
//             {
//                 name: "Aluminium 7075 Sheets",
//                 description: "High-strength aerospace grade with excellent fatigue resistance and good machinability.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Mill finish"],
//                 applications: ["Aircraft structures", "Aerospace components", "High-stress applications", "Defense equipment"]
//             },
//             {
//                 name: "Aluminium Pipes & Tubes",
//                 description: "Lightweight aluminium pipes and tubes for various industrial and architectural applications.",
//                 specifications: ["Grades: 6061, 6063, 5052", "Shapes: Round, Square, Rectangular", "Wall thickness: 1mm to 25mm", "Finish: Mill, Anodized"],
//                 applications: ["Heat exchangers", "Structural frameworks", "Pneumatic systems", "Architectural elements"]
//             },
//             {
//                 name: "Aluminium Channels & Angles",
//                 description: "Structural aluminium profiles including channels and angles for construction and fabrication.",
//                 specifications: ["Types: C-channel, U-channel, Equal angles, Unequal angles", "Grades: 6061, 6063", "Sizes: Standard and custom", "Finish: Mill, Anodized"],
//                 applications: ["Building construction", "Industrial structures", "Solar mounting systems", "General fabrication"]
//             },
//             {
//                 name: "Aluminium Fasteners & Hardware",
//                 description: "Lightweight aluminium fasteners and hardware for specialized applications requiring corrosion resistance.",
//                 specifications: ["Grades: 2024, 6061, 7075", "Types: Hex bolts, Socket screws, Rivets, Nuts", "Sizes: M3 to M24", "Finish: Natural, Anodized"],
//                 applications: ["Aerospace applications", "Marine hardware", "Electrical panels", "Solar installations", "Architectural fastening"]
//             },
//             {
//                 name: "Aluminium Coils",
//                 description: "High-quality aluminium coils for various processing and manufacturing applications.",
//                 specifications: ["Grades: 1100, 3003, 5052, 6061", "Thickness: 0.2mm to 6mm", "Width: Up to 2000mm", "Temper: O, H14, H16, H18"],
//                 applications: ["Stamping and forming", "Packaging industry", "Automotive panels", "Electrical applications"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B209", "EN 573-3"],
//         industries: ["Aerospace", "Automotive", "Construction", "Electronics", "Packaging", "Marine", "Solar Energy", "Transportation"]
//     },
//     'duplex-steel': {
//         name: "Duplex Steel",
//         title: "Advanced Duplex Steel Solutions",
//         description: "Our duplex steel products offer an optimal balance of strength, corrosion resistance, and ductility through their unique dual-phase microstructure for demanding industrial environments.",
//         image: "/duplex-steel.jpg",
//         features: [
//             "Superior strength compared to austenitic stainless steels",
//             "Excellent resistance to stress corrosion cracking",
//             "High resistance to chloride pitting and crevice corrosion",
//             "Better thermal conductivity than austenitic grades",
//             "Good weldability and formability",
//             "Cost-effective due to lower nickel content"
//         ],
//         products: [
//             {
//                 name: "Duplex 2205 Sheets",
//                 description: "The most widely used duplex grade with excellent corrosion resistance and roughly twice the yield strength of austenitic stainless steels.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
//                 applications: ["Chemical processing vessels", "Oil and gas pipelines", "Desalination plants", "Heat exchangers"]
//             },
//             {
//                 name: "Duplex 2304 Sheets",
//                 description: "Lean duplex grade with lower nickel content but good corrosion resistance and mechanical properties.",
//                 specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
//                 applications: ["Storage tanks", "Water systems", "Architectural applications", "Pulp and paper industry"]
//             },
//             {
//                 name: "Duplex S31803 Sheets",
//                 description: "Standard duplex grade offering excellent resistance to corrosion in various aggressive environments.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
//                 applications: ["Pressure vessels", "Heat exchangers", "Chemical processing equipment", "Offshore oil and gas platforms"]
//             },
//             {
//                 name: "Duplex Steel Pipes & Tubes",
//                 description: "High-strength duplex steel pipes for demanding applications in corrosive environments.",
//                 specifications: ["Grades: 2205, 2304, S31803", "Types: Seamless, Welded", "Sizes: 15mm to 600mm OD", "Standards: ASTM A790, ASTM A928"],
//                 applications: ["Oil and gas transport", "Chemical processing", "Seawater systems", "Pulp and paper"]
//             },
//             {
//                 name: "Duplex Steel Fasteners",
//                 description: "High-strength duplex steel fasteners for critical applications requiring superior corrosion resistance.",
//                 specifications: ["Grades: 2205, 2304", "Types: Hex bolts, Stud bolts, Nuts, Washers", "Sizes: M8 to M64", "Standards: ASTM A276, ASTM F2281"],
//                 applications: ["Offshore platforms", "Chemical processing equipment", "Desalination plants", "Marine applications", "Oil and gas installations"]
//             },
//             {
//                 name: "Duplex Steel Fittings & Flanges",
//                 description: "Precision-engineered duplex steel fittings and flanges for high-pressure and corrosive service.",
//                 specifications: ["Grades: 2205, 2304, S31803", "Types: Elbows, Tees, Reducers, Flanges", "Pressure ratings: 150# to 2500#", "Standards: ASTM A815, ASTM A182"],
//                 applications: ["Process piping", "Offshore installations", "Chemical plants", "Water treatment facilities"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NORSOK M-630"],
//         industries: ["Oil & Gas", "Chemical Processing", "Pulp & Paper", "Desalination", "Marine", "Mining", "Power Generation"]
//     },
//     'super-duplex-steel': {
//         name: "Super Duplex Steel",
//         title: "Premium Super Duplex Steel Products",
//         description: "Our super duplex steel products deliver exceptional corrosion resistance and superior mechanical properties for the most challenging and aggressive industrial environments.",
//         image: "/super-duplex-steel.jpg",
//         features: [
//             "Outstanding resistance to pitting and crevice corrosion",
//             "Superior chloride stress corrosion cracking resistance",
//             "Excellent strength (approximately twice that of austenitic stainless steels)",
//             "High resistance to erosion and fatigue",
//             "Extended service life in extreme environments",
//             "Reduced maintenance costs in aggressive applications"
//         ],
//         products: [
//             {
//                 name: "Super Duplex 2507 Sheets",
//                 description: "Premium grade with exceptional corrosion resistance and high strength for the most demanding applications.",
//                 specifications: ["Thickness: 0.8mm to 40mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
//                 applications: ["Offshore oil and gas", "Chemical processing in hot acids", "Seawater desalination", "FGD systems"]
//             },
//             {
//                 name: "Super Duplex S32750 Sheets",
//                 description: "High-performance grade with excellent resistance to pitting, crevice corrosion, and stress corrosion cracking.",
//                 specifications: ["Thickness: 0.8mm to 40mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
//                 applications: ["Subsea oil and gas equipment", "Heat exchangers in aggressive media", "Chemical process vessels", "Pulp and paper digesters"]
//             },
//             {
//                 name: "Super Duplex S32760 Sheets",
//                 description: "Enhanced super duplex grade with improved resistance to pitting corrosion in high-chloride environments.",
//                 specifications: ["Thickness: 1mm to 30mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
//                 applications: ["Offshore platforms", "Flue gas scrubbers", "Chemical transport equipment", "High-chloride process streams"]
//             },
//             {
//                 name: "Super Duplex Steel Pipes",
//                 description: "Premium super duplex steel pipes for the most demanding corrosive environments.",
//                 specifications: ["Grades: 2507, S32750, S32760", "Types: Seamless, Welded", "Sizes: 25mm to 300mm OD", "Standards: ASTM A790, ASTM A928"],
//                 applications: ["Subsea pipelines", "Chemical processing", "Offshore installations", "Desalination systems"]
//             },
//             {
//                 name: "Super Duplex Fasteners",
//                 description: "Ultra-high performance fasteners for extreme service conditions in aggressive environments.",
//                 specifications: ["Grades: 2507, S32750, S32760", "Types: Hex bolts, Socket screws, Stud bolts, Nuts", "Sizes: M8 to M48", "Standards: ASTM A276, NACE MR0175"],
//                 applications: ["Offshore oil and gas", "Subsea equipment", "Chemical processing", "Desalination plants", "Marine installations"]
//             },
//             {
//                 name: "Super Duplex Fittings & Flanges",
//                 description: "Precision super duplex steel fittings and flanges for critical high-pressure applications.",
//                 specifications: ["Grades: 2507, S32750, S32760", "Types: Weld neck, Blind, Slip-on flanges", "Fittings: Elbows, Tees, Reducers", "Pressure: 150# to 2500#"],
//                 applications: ["Offshore piping systems", "Chemical process equipment", "Seawater service", "High-pressure applications"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NORSOK M-630", "DNV GL"],
//         industries: ["Oil & Gas", "Offshore", "Chemical Processing", "Desalination", "Pulp & Paper", "Pollution Control", "Power Generation"]
//     },
//     'alloy-steel': {
//         name: "Alloy Steel",
//         title: "Specialized Alloy Steel Solutions",
//         description: "Our high-performance alloy steel products feature custom compositions engineered for superior strength, heat resistance, and durability in extreme operating conditions.",
//         image: "/alloy-steel.webp",
//         features: [
//             "Enhanced mechanical properties through precise alloying",
//             "Superior performance in high-temperature applications",
//             "Excellent resistance to mechanical fatigue",
//             "Good weldability and formability",
//             "Customizable properties for specific applications",
//             "Extended service life in harsh environments"
//         ],
//         products: [
//             {
//                 name: "Alloy 20 Sheets",
//                 description: "Nickel-iron-chromium alloy with excellent resistance to sulfuric acid and many other corrosive chemicals.",
//                 specifications: ["Thickness: 0.6mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Chemical processing equipment", "Pharmaceutical reactors", "Food processing", "Pickling equipment"]
//             },
//             {
//                 name: "Incoloy 800 Sheets",
//                 description: "Nickel-iron-chromium alloy with exceptional resistance to high-temperature oxidation and carburization.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Heat treatment equipment", "Chemical and petrochemical processing", "Power generation", "Nuclear applications"]
//             },
//             {
//                 name: "Inconel 600 Sheets",
//                 description: "Nickel-chromium alloy with excellent resistance to oxidation and corrosion at elevated temperatures.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Gas turbine components", "Heat treatment fixtures", "Chemical processing", "Nuclear engineering"]
//             },
//             {
//                 name: "P91/T91 Alloy Sheets",
//                 description: "High-strength ferritic/martensitic steel with excellent creep resistance at elevated temperatures.",
//                 specifications: ["Thickness: 1mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Hot-rolled, Cold-rolled"],
//                 applications: ["Power plants", "Boiler components", "Steam pipes", "Heat exchangers"]
//             },
//             {
//                 name: "Alloy Steel Pipes & Tubes",
//                 description: "Specialized alloy steel pipes for high-temperature and high-pressure applications.",
//                 specifications: ["Grades: P5, P9, P11, P22, P91", "Types: Seamless, Welded", "Sizes: 15mm to 600mm OD", "Standards: ASTM A335, ASTM A213"],
//                 applications: ["Power generation", "Petrochemical processing", "High-temperature service", "Pressure vessels"]
//             },
//             {
//                 name: "Alloy Steel Fasteners",
//                 description: "High-strength alloy steel fasteners for critical applications requiring superior mechanical properties.",
//                 specifications: ["Grades: 4140, 4340, 8620, Inconel 600/625", "Types: Hex bolts, Socket screws, Stud bolts", "Sizes: M6 to M64", "Heat treatment: As per application"],
//                 applications: ["Aerospace applications", "Power generation", "Oil and gas equipment", "High-temperature service", "Chemical processing"]
//             },
//             {
//                 name: "Alloy Steel Bars & Rods",
//                 description: "Precision alloy steel bars and rods for machining and fabrication of critical components.",
//                 specifications: ["Grades: 4140, 4340, 8620, Alloy 20, Inconel", "Diameters: 10mm to 500mm", "Lengths: Up to 6000mm", "Condition: Annealed, Normalized, Hardened"],
//                 applications: ["Machined components", "Shafts", "Gears", "High-stress applications"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NACE MR0175/ISO 15156"],
//         industries: ["Power Generation", "Chemical Processing", "Oil & Gas", "Aerospace", "Heat Treatment", "Automotive", "Nuclear"]
//     },
//     'brass-copper': {
//         name: "Brass & Copper",
//         title: "Premium Brass & Copper Products",
//         description: "Our high-quality brass and copper products combine excellent thermal and electrical conductivity with corrosion resistance for applications ranging from plumbing to electrical systems.",
//         image: "/brass-copper.webp",
//         features: [
//             "Exceptional thermal and electrical conductivity",
//             "Excellent corrosion resistance, particularly in seawater",
//             "Antimicrobial properties",
//             "Good machinability and formability",
//             "Attractive appearance with various finish options",
//             "Long service life with minimal maintenance"
//         ],
//         products: [
//             {
//                 name: "Copper C11000 Sheets",
//                 description: "Commercially pure copper (99.9%) with excellent electrical and thermal conductivity.",
//                 specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Bright, Matte"],
//                 applications: ["Electrical conductors", "Heat exchangers", "Roofing and flashing", "Decorative architectural elements"]
//             },
//             {
//                 name: "Brass C26000 Sheets",
//                 description: "70/30 brass with good strength, formability, and machinability.",
//                 specifications: ["Thickness: 0.3mm to 40mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: Polished, Brushed"],
//                 applications: ["Fasteners", "Plumbing components", "Electrical connectors", "Decorative hardware"]
//             },
//             {
//                 name: "Cupronickel 70/30 Sheets",
//                 description: "70% copper, 30% nickel alloy with outstanding resistance to seawater corrosion and biofouling.",
//                 specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Bright finish"],
//                 applications: ["Marine condensers", "Seawater piping systems", "Desalination plants", "Heat exchangers"]
//             },
//             {
//                 name: "Cupronickel 90/10 Sheets",
//                 description: "90% copper, 10% nickel alloy with excellent resistance to erosion-corrosion in flowing seawater.",
//                 specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Bright finish"],
//                 applications: ["Marine equipment", "Ship hulls", "Offshore platforms", "Heat exchangers"]
//             },
//             {
//                 name: "Copper & Brass Pipes",
//                 description: "High-quality copper and brass pipes for plumbing, electrical, and marine applications.",
//                 specifications: ["Materials: Copper, Brass, Cupronickel", "Types: Seamless, Welded", "Sizes: 6mm to 300mm OD", "Standards: ASTM B88, ASTM B111"],
//                 applications: ["Plumbing systems", "Heat exchangers", "Marine applications", "Electrical conduits"]
//             },
//             {
//                 name: "Brass & Copper Fasteners",
//                 description: "Corrosion-resistant brass and copper fasteners for marine and electrical applications.",
//                 specifications: ["Materials: Brass C360, Copper C110, Bronze", "Types: Hex bolts, Machine screws, Wood screws, Nuts", "Sizes: M3 to M20", "Finish: Natural, Nickel plated"],
//                 applications: ["Marine hardware", "Electrical panels", "Plumbing fixtures", "Decorative fastening", "Boat building"]
//             },
//             {
//                 name: "Copper Rods & Bars",
//                 description: "High-conductivity copper rods and bars for electrical and thermal applications.",
//                 specifications: ["Grades: C101, C110, C11000", "Diameters: 3"]
//             },
//             {
//                 name: "Copper Rods & Bars",
//                 description: "High-conductivity copper rods and bars for electrical and thermal applications.",
//                 specifications: ["Grades: C101, C110, C11000", "Diameters: 3mm to 200mm", "Lengths: Up to 6000mm", "Condition: Hard, Soft, Half-hard"],
//                 applications: ["Electrical conductors", "Grounding systems", "Heat sinks", "Machined components"]
//             },
//             {
//                 name: "Brass Rods & Bars",
//                 description: "Free-machining brass rods and bars for precision components and decorative applications.",
//                 specifications: ["Grades: C360, C260, C464", "Diameters: 3mm to 150mm", "Lengths: Up to 6000mm", "Finish: Bright, Turned"],
//                 applications: ["Machined parts", "Valve components", "Decorative elements", "Plumbing fittings"]
//             },
//             {
//                 name: "Bronze Alloys",
//                 description: "High-strength bronze alloys with excellent wear resistance and corrosion properties.",
//                 specifications: ["Grades: C932, C954, Phosphor Bronze", "Forms: Sheets, Rods, Tubes", "Sizes: Custom and standard", "Finish: Mill, Polished"],
//                 applications: ["Bearings", "Bushings", "Marine hardware", "Electrical connectors"]
//             },
//             {
//                 name: "Copper & Brass Fittings",
//                 description: "Precision-manufactured copper and brass fittings for plumbing and industrial systems.",
//                 specifications: ["Materials: Copper, Brass, Bronze", "Types: Elbows, Tees, Unions, Couplings", "Connections: Solder, Threaded, Compression", "Standards: ASTM B75, ASTM B584"],
//                 applications: ["Plumbing systems", "HVAC installations", "Industrial piping", "Gas distribution"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM B152", "ASTM B36", "EN 12449"],
//         industries: ["Electrical", "Plumbing", "Marine", "HVAC", "Telecommunications", "Decorative", "Automotive"]
//     },
//     'carbon-steel': {
//         name: "Carbon Steel",
//         title: "High-Quality Carbon Steel Products",
//         description: "Our comprehensive range of carbon steel products delivers exceptional strength, durability, and versatility for structural, mechanical, and general engineering applications across industries.",
//         image: "/carbon-steel.jpg",
//         features: [
//             "High tensile strength and durability",
//             "Excellent weldability and machinability",
//             "Cost-effective material solution",
//             "Wide range of carbon content options",
//             "Good formability for various applications",
//             "Suitable for heat treatment processes"
//         ],
//         products: [
//             {
//                 name: "Low Carbon Steel Sheets",
//                 description: "Mild steel sheets with low carbon content (0.05-0.25%) offering excellent formability and weldability.",
//                 specifications: ["Carbon content: 0.05-0.25%", "Thickness: 0.5mm to 100mm", "Width: Up to 2500mm", "Standards: ASTM A36, IS 2062"],
//                 applications: ["Automotive body panels", "Construction materials", "General fabrication", "Deep drawing applications"]
//             },
//             {
//                 name: "Medium Carbon Steel Sheets",
//                 description: "Balanced carbon content (0.25-0.60%) providing good strength and moderate ductility.",
//                 specifications: ["Carbon content: 0.25-0.60%", "Thickness: 1mm to 80mm", "Width: Up to 2000mm", "Heat treatment: Normalized, Annealed"],
//                 applications: ["Machine parts", "Gears", "Shafts", "Structural components"]
//             },
//             {
//                 name: "High Carbon Steel Sheets",
//                 description: "High carbon content (0.60-1.00%) offering superior hardness and wear resistance after heat treatment.",
//                 specifications: ["Carbon content: 0.60-1.00%", "Thickness: 1mm to 50mm", "Width: Up to 1800mm", "Condition: Annealed, Hardened"],
//                 applications: ["Cutting tools", "Springs", "Wire", "High-wear components"]
//             },
//             {
//                 name: "Carbon Steel Pipes",
//                 description: "Seamless and welded carbon steel pipes for fluid transport and structural applications.",
//                 specifications: ["Grades: A53, A106, API 5L", "Types: Seamless, ERW, LSAW", "Sizes: 15mm to 1200mm OD", "Pressure ratings: Various"],
//                 applications: ["Oil and gas pipelines", "Water supply", "Structural applications", "Mechanical tubing"]
//             },
//             {
//                 name: "Carbon Steel Plates",
//                 description: "Heavy-duty carbon steel plates for pressure vessels, structural, and marine applications.",
//                 specifications: ["Grades: A516-70, A537, A572", "Thickness: 5mm to 200mm", "Width: Up to 3000mm", "Length: Up to 12000mm"],
//                 applications: ["Pressure vessels", "Shipbuilding", "Bridge construction", "Heavy machinery"]
//             },
//             {
//                 name: "Carbon Steel Bars & Rods",
//                 description: "Round, square, and hexagonal carbon steel bars for machining and construction applications.",
//                 specifications: ["Grades: 1018, 1045, 4140", "Sizes: 6mm to 300mm", "Lengths: Up to 6000mm", "Finish: Hot-rolled, Cold-drawn"],
//                 applications: ["Machined components", "Fastener manufacturing", "Construction reinforcement", "General engineering"]
//             },
//             {
//                 name: "Carbon Steel Fasteners",
//                 description: "High-strength carbon steel fasteners for construction and industrial applications.",
//                 specifications: ["Grades: Grade 2, Grade 5, Grade 8", "Types: Hex bolts, Cap screws, Threaded rods", "Sizes: M6 to M64", "Coating: Zinc plated, Black oxide"],
//                 applications: ["Structural fastening", "Machinery assembly", "Automotive applications", "General construction"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM A36", "ASTM A572", "IS 2062", "JIS G3101"],
//         industries: ["Construction", "Automotive", "Oil & Gas", "Machinery", "Shipbuilding", "Infrastructure", "Manufacturing"]
//     },
//     'tool-steel': {
//         name: "Tool Steel",
//         title: "Precision Tool Steel Solutions",
//         description: "Our premium tool steel products are engineered for superior hardness, wear resistance, and toughness, designed for cutting tools, dies, and precision manufacturing applications.",
//         image: "/tool-steel.jpg",
//         features: [
//             "Exceptional hardness and wear resistance",
//             "Superior toughness and impact resistance",
//             "Excellent dimensional stability",
//             "High-temperature performance",
//             "Precise chemical composition",
//             "Consistent mechanical properties"
//         ],
//         products: [
//             {
//                 name: "D2 Tool Steel",
//                 description: "High-carbon, high-chromium cold work tool steel with excellent wear resistance and moderate toughness.",
//                 specifications: ["Carbon: 1.50-1.60%", "Chromium: 11.0-13.0%", "Hardness: 58-62 HRC", "Sizes: Plates, rounds, flats"],
//                 applications: ["Blanking dies", "Forming dies", "Thread rolling dies", "Slitting cutters"]
//             },
//             {
//                 name: "H13 Tool Steel",
//                 description: "Premium hot work tool steel with excellent thermal shock resistance and toughness at elevated temperatures.",
//                 specifications: ["Carbon: 0.32-0.45%", "Chromium: 4.75-5.50%", "Hardness: 38-52 HRC", "Heat treatment: Air hardening"],
//                 applications: ["Die casting dies", "Forging dies", "Extrusion dies", "Hot shear blades"]
//             },
//             {
//                 name: "O1 Tool Steel",
//                 description: "Oil-hardening cold work tool steel with good machinability and moderate wear resistance.",
//                 specifications: ["Carbon: 0.85-1.00%", "Chromium: 0.40-0.60%", "Hardness: 57-64 HRC", "Heat treatment: Oil quench"],
//                 applications: ["Cutting tools", "Punches", "Gauges", "Small dies"]
//             },
//             {
//                 name: "A2 Tool Steel",
//                 description: "Air-hardening cold work tool steel with good toughness and dimensional stability.",
//                 specifications: ["Carbon: 0.95-1.05%", "Chromium: 4.75-5.50%", "Hardness: 57-62 HRC", "Heat treatment: Air hardening"],
//                 applications: ["Blanking dies", "Forming dies", "Trim dies", "Punches"]
//             },
//             {
//                 name: "S7 Tool Steel",
//                 description: "Shock-resistant tool steel with exceptional toughness and impact resistance.",
//                 specifications: ["Carbon: 0.45-0.55%", "Chromium: 3.00-3.50%", "Hardness: 54-58 HRC", "Properties: High impact resistance"],
//                 applications: ["Pneumatic tools", "Chisels", "Punches", "Rivet sets"]
//             },
//             {
//                 name: "M2 High Speed Steel",
//                 description: "Molybdenum-type high-speed steel with excellent cutting performance and heat resistance.",
//                 specifications: ["Carbon: 0.78-0.88%", "Tungsten: 5.50-6.75%", "Hardness: 62-65 HRC", "Red hardness: Excellent"],
//                 applications: ["Cutting tools", "Drill bits", "End mills", "Saw blades"]
//             },
//             {
//                 name: "P20 Mold Steel",
//                 description: "Pre-hardened mold steel with good machinability and polishability for plastic injection molds.",
//                 specifications: ["Carbon: 0.28-0.40%", "Chromium: 1.40-2.00%", "Hardness: 28-32 HRC", "Condition: Pre-hardened"],
//                 applications: ["Plastic injection molds", "Die casting dies", "Blow molds", "Compression molds"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM A681", "JIS SKD", "DIN 1.2379", "AISI Standards"],
//         industries: ["Tool & Die", "Automotive", "Aerospace", "Plastic Processing", "Metal Forming", "Cutting Tools", "Precision Manufacturing"]
//     },
//     'hastelloy': {
//         name: "Hastelloy",
//         title: "Premium Hastelloy Superalloy Products",
//         description: "Our high-performance Hastelloy products deliver exceptional corrosion resistance and high-temperature strength for the most demanding chemical processing and aerospace applications.",
//         image: "/hastealloy.jpg",
//         features: [
//             "Outstanding resistance to oxidizing and reducing environments",
//             "Exceptional high-temperature strength and stability",
//             "Superior resistance to stress corrosion cracking",
//             "Excellent fabricability and weldability",
//             "Thermal stability in extreme conditions",
//             "Long service life in aggressive chemical environments"
//         ],
//         products: [
//             {
//                 name: "Hastelloy C-276 Sheets",
//                 description: "Versatile nickel-molybdenum-chromium alloy with outstanding corrosion resistance in both oxidizing and reducing environments.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4"],
//                 applications: ["Chemical processing equipment", "Pollution control systems", "Pulp and paper production", "Sour gas environments"]
//             },
//             {
//                 name: "Hastelloy C-22 Sheets",
//                 description: "Enhanced corrosion-resistant alloy with superior performance in oxidizing aqueous media and excellent fabricability.",
//                 specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Chemical processing", "Pharmaceutical equipment", "Pollution control", "Waste treatment facilities"]
//             },
//             {
//                 name: "Hastelloy B-3 Sheets",
//                 description: "Nickel-molybdenum alloy with exceptional resistance to hydrochloric acid and other reducing chemicals.",
//                 specifications: ["Thickness: 0.8mm to 30mm", "Width: Up to 1200mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Hydrochloric acid processing", "Acetic acid production", "Chemical reactors", "Heat exchangers"]
//             },
//             {
//                 name: "Hastelloy X Sheets",
//                 description: "High-temperature alloy with excellent oxidation resistance and structural stability at elevated temperatures.",
//                 specifications: ["Thickness: 0.5mm to 25mm", "Width: Up to 1200mm", "Length: Up to 6000mm", "Surface: 2B, Annealed"],
//                 applications: ["Gas turbine components", "Industrial furnace equipment", "Petrochemical processing", "Heat treatment fixtures"]
//             },
//             {
//                 name: "Hastelloy Pipes & Tubes",
//                 description: "High-performance Hastelloy pipes and tubes for critical chemical processing and high-temperature applications.",
//                 specifications: ["Grades: C-276, C-22, B-3, X", "Types: Seamless, Welded", "Sizes: 15mm to 300mm OD", "Standards: ASTM B622, ASTM B626"],
//                 applications: ["Chemical processing piping", "Heat exchanger tubes", "Reactor vessels", "High-temperature gas handling"]
//             },
//             {
//                 name: "Hastelloy Rods & Bars",
//                 description: "Precision Hastelloy rods and bars for machined components in extreme service conditions.",
//                 specifications: ["Grades: C-276, C-22, B-3, X", "Diameters: 6mm to 200mm", "Lengths: Up to 6000mm", "Condition: Solution annealed"],
//                 applications: ["Pump shafts", "Valve components", "Chemical processing equipment", "High-temperature fasteners"]
//             },
//             {
//                 name: "Hastelloy Fasteners",
//                 description: "Ultra-high performance fasteners for extreme chemical and high-temperature environments.",
//                 specifications: ["Grades: C-276, C-22, B-3", "Types: Hex bolts, Socket screws, Stud bolts, Nuts", "Sizes: M6 to M48", "Standards: ASTM B574, NACE MR0175"],
//                 applications: ["Chemical processing equipment", "High-temperature furnaces", "Aerospace applications", "Pollution control systems", "Petrochemical plants"]
//             },
//             {
//                 name: "Hastelloy Fittings & Flanges",
//                 description: "Precision-engineered Hastelloy fittings and flanges for critical chemical processing applications.",
//                 specifications: ["Grades: C-276, C-22, B-3", "Types: Elbows, Tees, Reducers, Flanges", "Pressure ratings: 150# to 2500#", "Standards: ASTM B366, ASTM B564"],
//                 applications: ["Chemical process piping", "High-temperature systems", "Corrosive fluid handling", "Reactor connections"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM B575", "ASME SB-575", "NACE MR0175/ISO 15156", "AMS Standards"],
//         industries: ["Chemical Processing", "Petrochemical", "Aerospace", "Power Generation", "Pollution Control", "Pharmaceutical", "Pulp & Paper"]
//     }
// };

// Related products mapping


// const productData = {
//     'stainless-steel': {
//         name: "Stainless Steel",
//         title: "Premium Stainless Steel Products",
//         description: "Our high-quality stainless steel products offer exceptional corrosion resistance, durability, and aesthetic appeal for a wide range of applications.",
//         image: "/stainless_steel.jpg",
//         our_range: [
//             "Sheets",
//             "Plates",
//             "Shim Sheets",
//             "Pipes & Tubes",
//             "Rods & Bars",
//         ],
//         product_range: [
//             {
//                 name: "Sheets",
//                 description: "Prabhat Steel supplies a comprehensive range of stainless steel sheets in 300 and 400 series, ideal for fabrication, construction, industrial, and architectural use. These sheets are valued for their corrosion resistance, strength, and clean surface finish, and are available in various thicknesses and custom sizes.",
//                 Grades: [
//                     "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
//                     "400 Series: SS 409, SS 410, SS 420, SS 430",
//                     "200 Series: SS 202, SS 201, SS 201L"
//                 ],
//                 Finishes: [
//                     "2B (Mill Finish)",
//                     "BA (Bright Annealed)",
//                     "Matt Finish",
//                     "No. 4 (Brush Finish)",
//                     "Hairline Finish",
//                     "Mirror Finish",
//                     "PVD Coated (Gold, Rose Gold, Black, etc.)"
//                 ],
//                 Makes: [
//                     "Jindal Stainless",
//                     "Posco",
//                     "TISCO",
//                     "Aperam",
//                     "Imported & Domestic Mills"
//                 ],
//                 images: ["", ""]
//             },
//             {
//                 name: "Plates",
//                 description: "Prabhat Steel offers a wide range of stainless steel plates in 200, 300 and 400 series, suitable for heavy-duty fabrication, pressure vessels, construction, and industrial applications. Our plates are recognized for their superior corrosion resistance, strength, and uniform thickness, and are available in standard and custom sizes to meet diverse project requirements.",
//                 Grades: [
//                     "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
//                     "400 Series: SS 409, SS 410, SS 420, SS 430",
//                     "200 Series: SS 202, SS 201, SS 201L"
//                 ],
//                 Finishes: [
//                     "Hot Rolled (HR)",
//                     "Cold Rolled (CR)",
//                     "2B (Mill Finish)",
//                     "No. 1 (HRAP)",
//                     "Matt Finish",
//                     "Polished Finish",
//                     "PVD Coated (Gold, Rose Gold, Black, etc.)"
//                 ],
//                 Makes: [
//                     "Jindal Stainless",
//                     "Posco",
//                     "TISCO",
//                     "Aperam",
//                     "Imported & Domestic Mills"
//                 ],
//                 images: ["", ""]
//             },
//             {
//                 name: "Shim Sheets",
//                 description: "Prabhat Steel offers precision-quality **Stainless Steel Shim Sheets** in 300 series grades, widely used for high-accuracy applications across industries such as automotive, aerospace, chemical, electronics, and tooling. These shim sheets are known for their **exceptional corrosion resistance, high strength-to-weight ratio, and ease of fabrication**. Ideal for alignment, spacing, adjustment, and sealing in precision assemblies, our shim sheets are available in a wide range of thicknesses—from microns to millimeters—with tight tolerances",
//                 Grades: [
//                     "300 Series:* SS 304, SS 304L, SS 316, SS 316L, SS 321"
//                 ],
//                 Finishes: [
//                     "2B (Mill Finish)",
//                     "BA (Bright Annealed)",
//                     "Matt Finish",
//                     "Polished Finish (up to 600 grit)"
//                 ],
//                 Makes: [
//                     "Jindal Stainless",
//                     "Posco",
//                     "TISCO",
//                     "Imported & Domestic Mills"
//                 ],
//                 images: ["", ""]
//             },
//             {
//                 name: "Pipes & Tubes",
//                 description: "Prabhat Steel offers a wide range of Stainless Steel Pipes in both ERW (Electric Resistance Welded) and Seamless (SMLS) types, manufactured using high-grade 300 and 400 series stainless steel. These pipes are widely used in industries such as petrochemicals, food processing, pharmaceuticals, construction, and fluid transport. Designed for durability, corrosion resistance, and high-pressure performance, our SS pipes are available in various schedules and diameters to meet diverse project requirements.",
//                 Grades: [
//                     "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
//                     "400 Series: SS 409, SS 410, SS 430"
//                 ],
//                 Finishes: [
//                     "Mill Finish",
//                     "Polished Finish (180, 320, 400 grit)",
//                     "Annealed & Pickled",
//                     "Mirror Polish (for decorative use)",
//                     "Satin / Matt Finish"
//                 ],
//                 Makes: [
//                     "Jindal Stainless",
//                     "Ratnamani",
//                     "Maharashtra Seamless",
//                     "Imported & Domestic Mills"
//                 ],
//                 images: ["", ""]
//             },
//             {
//                 name: "Rods & Bars",
//                 description: "At Prabhat Steel, we supply top-grade Stainless Steel Round Bars in the versatile 300 and 400 series—engineered to meet the demanding needs of industries across fabrication, construction, machining, and precision engineering. These bars are valued for their exceptional strength, corrosion resistance, and excellent surface finish, making them ideal for critical components and structural use. Available in a wide range of diameters and custom lengths, our SS round bars ensure both reliability and performance in every application.",
//                 Grades: [
//                     "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
//                     "400 Series: SS 410, SS 416, SS 420, SS 430",
//                 ],
//                 Finishes: [
//                     "Bright Drawn - Smooth and precise surface finish",
//                     "Peeled & Polished - Enhanced appearance and dimensional accuracy",
//                     "Black (Hot Rolled) - Industrial-grade strength",
//                     "Centreless Ground - Precision-ground for tight tolerances"
//                 ],
//                 Makes: [
//                     "Jindal Stainless",
//                     "Viraj Profiles",
//                     "Shah Alloys",
//                     "Imported & Domestic Mills"
//                 ],
//                 images: ["", ""]
//             }
//         ],
//         features: [
//             "Superior corrosion resistance",
//             "Excellent heat resistance",
//             "High strength-to-weight ratio",
//             "Hygienic and easy to clean",
//             "100% recyclable material",
//             "Low maintenance requirements"
//         ],
//         products: [
//             {
//                 name: "SS 304/304L Sheets",
//                 description: "The most versatile and widely used stainless steel, offering good corrosion resistance and formability.",
//                 specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, No.8, Hairline"],
//                 applications: ["Food processing equipment", "Kitchen equipment", "Chemical containers", "Architectural applications"]
//             },
//             {
//                 name: "SS 316/316L Sheets",
//                 description: "Higher corrosion resistance than 304, particularly against chlorides and acids.",
//                 specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, No.8, Hairline"],
//                 applications: ["Marine environments", "Chemical processing equipment", "Pharmaceutical industry", "Surgical instruments"]
//             },
//             {
//                 name: "SS 202 Sheets",
//                 description: "Economical austenitic grade with good corrosion resistance and formability for general purpose applications.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, Hairline"],
//                 applications: ["Kitchen equipment", "Decorative applications", "Automotive trim", "Household appliances"]
//             },
//             {
//                 name: "SS 321 Sheets",
//                 description: "Titanium-stabilized grade with excellent resistance to intergranular corrosion at high temperatures.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4"],
//                 applications: ["Heat exchangers", "Aircraft exhaust systems", "High-temperature chemical processing", "Furnace parts"]
//             },
//             {
//                 name: "SS 410 Sheets",
//                 description: "Martensitic stainless steel with good corrosion resistance and high strength after heat treatment.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Turbine blades", "Valve components", "Cutlery", "Surgical instruments"]
//             },
//             {
//                 name: "SS Pipes & Tubes",
//                 description: "Comprehensive range of stainless steel pipes in round, square, rectangular, and oval shapes.",
//                 specifications: ["Grades: 202, 304, 316, 321, 410", "Types: Seamless & Welded", "Finish: Mirror Polished, Matt", "Sizes: All standard and custom sizes"],
//                 applications: ["Structural applications", "Fluid transport", "Heat exchangers", "Architectural projects"]
//             },
//             {
//                 name: "SS Rods & Bars",
//                 description: "High-quality stainless steel rods and bars in various grades for machining and fabrication.",
//                 specifications: ["Grades: 202, 304, 316, 321, 410", "Diameters: 6mm to 300mm", "Lengths: Up to 6000mm", "Finish: Bright, Black, Peeled"],
//                 applications: ["Machining components", "Fastener manufacturing", "Shafts", "Structural elements"]
//             },
//             {
//                 name: "SS Fasteners & Hardware",
//                 description: "Complete range of stainless steel fasteners including bolts, screws, nuts, washers, and anchors.",
//                 specifications: ["Grades: 202, 304, 316", "Types: Hex bolts, Socket screws, Machine screws, Wood screws", "Sizes: M3 to M64", "Finishes: Plain, Passivated"],
//                 applications: ["Construction", "Marine applications", "Food processing", "Chemical equipment", "Architectural fastening"]
//             },
//             {
//                 name: "SS Fittings & Flanges",
//                 description: "Precision-manufactured stainless steel fittings and flanges for piping systems.",
//                 specifications: ["Grades: 202, 304, 316", "Types: Blind, Threaded, Weld Neck Flanges", "Fittings: Elbows, Tees, Unions, Reducers", "Standards: ASME, DIN, JIS"],
//                 applications: ["Process piping", "Water treatment", "Chemical processing", "Food and beverage industry"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240"],
//         industries: ["Automotive", "Aerospace", "Food & Beverage", "Pharmaceutical", "Chemical Processing", "Construction", "Marine"]
//     },
//     'aluminium': {
//         name: "Aluminium",
//         title: "High-Performance Aluminium Products",
//         description: "Our premium aluminium products combine lightweight properties with excellent corrosion resistance, thermal conductivity, and formability for diverse industrial applications.",
//         image: "/aluminium.jpg",
//         our_range: [
//             "Sheets",
//             "Plates",
//             "Coils",
//             "Pipes & Tubes",
//             "Rods & Bars",
//             "Channels & Angles",
//             "Sections",
//             "Fasteners & Hardware"
//         ],
//         product_range: [
//             {
//             name: "Sheets",
//             description: "Prabhat Steel supplies a comprehensive range of aluminium sheets in grades such as 1100, 5052, 6061, 7075, and more. These sheets are valued for their lightweight, corrosion resistance, and excellent formability, making them ideal for fabrication, construction, transportation, and architectural use. Available in various thicknesses, tempers, and custom sizes.",
//             Grades: [
//                 "1100 (Commercially Pure)",
//                 "5052 (Al-Mg Alloy)",
//                 "6061 (Al-Mg-Si Alloy)",
//                 "6063 (Architectural Alloy)",
//                 "7075 (Aerospace Grade)"
//             ],
//             Finishes: [
//                 "Mill Finish",
//                 "Anodized",
//                 "Polished",
//                 "Brushed",
//                 "Coated"
//             ],
//             Makes: [
//                 "Hindalco",
//                 "NALCO",
//                 "BALCO",
//                 "Imported & Domestic Mills"
//             ],
//             images: ["", ""]
//             },
//             {
//             name: "Plates",
//             description: "High-quality aluminium plates in a variety of grades and thicknesses, suitable for heavy-duty fabrication, marine, aerospace, and industrial applications. Plates are known for their strength-to-weight ratio, corrosion resistance, and machinability, and are available in standard and custom sizes.",
//             Grades: [
//                 "1100",
//                 "5052",
//                 "6061",
//                 "7075"
//             ],
//             Finishes: [
//                 "Mill Finish",
//                 "Anodized",
//                 "Polished"
//             ],
//             Makes: [
//                 "Hindalco",
//                 "NALCO",
//                 "BALCO",
//                 "Imported & Domestic Mills"
//             ],
//             images: ["", ""]
//             },
//             {
//             name: "Coils",
//             description: "Premium aluminium coils for processing and manufacturing applications, available in a range of grades, tempers, and thicknesses. Coils are widely used in stamping, forming, packaging, and automotive industries.",
//             Grades: [
//                 "1100",
//                 "3003",
//                 "5052",
//                 "6061"
//             ],
//             Finishes: [
//                 "Mill Finish",
//                 "Anodized",
//                 "Coated"
//             ],
//             Makes: [
//                 "Hindalco",
//                 "NALCO",
//                 "Imported & Domestic Mills"
//             ],
//             images: ["", ""]
//             },
//             {
//             name: "Pipes & Tubes",
//             description: "Lightweight and corrosion-resistant aluminium pipes and tubes in round, square, and rectangular shapes. Suitable for structural, architectural, pneumatic, and heat exchanger applications. Available in seamless and welded types.",
//             Grades: [
//                 "6061",
//                 "6063",
//                 "5052"
//             ],
//             Finishes: [
//                 "Mill Finish",
//                 "Anodized",
//                 "Polished"
//             ],
//             Makes: [
//                 "Hindalco",
//                 "NALCO",
//                 "Imported & Domestic Mills"
//             ],
//             images: ["", ""]
//             },
//             {
//             name: "Rods & Bars",
//             description: "High-quality aluminium rods and bars in various grades and shapes (round, square, hexagonal) for machining, fabrication, and structural use. Known for their machinability, conductivity, and corrosion resistance.",
//             Grades: [
//                 "6061",
//                 "6063",
//                 "2014",
//                 "7075"
//             ],
//             Finishes: [
//                 "Mill Finish",
//                 "Bright",
//                 "Anodized"
//             ],
//             Makes: [
//                 "Hindalco",
//                 "NALCO",
//                 "Imported & Domestic Mills"
//             ],
//             images: ["", ""]
//             },
//             {
//             name: "Channels & Angles",
//             description: "Structural aluminium channels and angles for construction, solar mounting, and industrial frameworks. Available in standard and custom profiles, with excellent strength-to-weight ratio and corrosion resistance.",
//             Grades: [
//                 "6061",
//                 "6063"
//             ],
//             Finishes: [
//                 "Mill Finish",
//                 "Anodized",
//                 "Powder Coated"
//             ],
//             Makes: [
//                 "Hindalco",
//                 "NALCO",
//                 "Imported & Domestic Mills"
//             ],
//             images: ["", ""]
//             },
//             {
//             name: "Sections",
//             description: "Architectural and industrial aluminium sections including round, square, rectangular, oval, and custom profiles. Designed for window frames, doors, curtain walls, and structural glazing.",
//             Grades: [
//                 "6063",
//                 "6061"
//             ],
//             Finishes: [
//                 "Mill Finish",
//                 "Anodized",
//                 "Powder Coated"
//             ],
//             Makes: [
//                 "Hindalco",
//                 "NALCO",
//                 "Imported & Domestic Mills"
//             ],
//             images: ["", ""]
//             },
//             {
//             name: "Fasteners & Hardware",
//             description: "Comprehensive range of lightweight aluminium fasteners and hardware for specialized applications requiring corrosion resistance and non-magnetic properties. Includes bolts, screws, rivets, and custom hardware.",
//             Grades: [
//                 "2024",
//                 "6061",
//                 "7075"
//             ],
//             Finishes: [
//                 "Natural",
//                 "Anodized"
//             ],
//             Makes: [
//                 "Imported & Domestic Manufacturers"
//             ],
//             images: ["", ""]
//             }
//         ],
//         features: [
//             "Exceptional strength-to-weight ratio",
//             "Superior corrosion resistance",
//             "Excellent thermal and electrical conductivity",
//             "High reflectivity",
//             "100% recyclable and sustainable",
//             "Non-magnetic properties"
//         ],
//         products: [
//             {
//                 name: "Aluminium 1100 Sheets",
//                 description: "Commercially pure aluminium (99% minimum) with excellent formability, corrosion resistance, and weldability.",
//                 specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Polished"],
//                 applications: ["Food and chemical handling equipment", "Heat exchangers", "Light reflectors", "Decorative applications"]
//             },
//             {
//                 name: "Aluminium 5052 Sheets",
//                 description: "Aluminium-magnesium alloy with moderate strength and excellent corrosion resistance, particularly in marine environments.",
//                 specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Brushed"],
//                 applications: ["Marine components", "Aircraft parts", "Pressure vessels", "Electronic chassis"]
//             },
//             {
//                 name: "Aluminium 6061 Sheets",
//                 description: "Aluminium-magnesium-silicon alloy with good strength, formability, weldability, and corrosion resistance.",
//                 specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Polished"],
//                 applications: ["Structural components", "Marine applications", "Transportation", "Aerospace industry"]
//             },
//             {
//                 name: "Aluminium 6063 Sections",
//                 description: "Architectural grade aluminium with excellent extrudability and surface finish for structural applications.",
//                 specifications: ["Shapes: Round, Square, Rectangle, Oval, Custom profiles", "Sizes: All standard and custom", "Finish: Mill, Anodized, Powder coated", "Tolerance: ±0.1mm"],
//                 applications: ["Window and door frames", "Structural glazing", "Solar panel frames", "Architectural applications"]
//             },
//             {
//                 name: "Aluminium 7075 Sheets",
//                 description: "High-strength aerospace grade with excellent fatigue resistance and good machinability.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Mill finish"],
//                 applications: ["Aircraft structures", "Aerospace components", "High-stress applications", "Defense equipment"]
//             },
//             {
//                 name: "Aluminium Pipes & Tubes",
//                 description: "Lightweight aluminium pipes and tubes for various industrial and architectural applications.",
//                 specifications: ["Grades: 6061, 6063, 5052", "Shapes: Round, Square, Rectangular", "Wall thickness: 1mm to 25mm", "Finish: Mill, Anodized"],
//                 applications: ["Heat exchangers", "Structural frameworks", "Pneumatic systems", "Architectural elements"]
//             },
//             {
//                 name: "Aluminium Channels & Angles",
//                 description: "Structural aluminium profiles including channels and angles for construction and fabrication.",
//                 specifications: ["Types: C-channel, U-channel, Equal angles, Unequal angles", "Grades: 6061, 6063", "Sizes: Standard and custom", "Finish: Mill, Anodized"],
//                 applications: ["Building construction", "Industrial structures", "Solar mounting systems", "General fabrication"]
//             },
//             {
//                 name: "Aluminium Fasteners & Hardware",
//                 description: "Lightweight aluminium fasteners and hardware for specialized applications requiring corrosion resistance.",
//                 specifications: ["Grades: 2024, 6061, 7075", "Types: Hex bolts, Socket screws, Rivets, Nuts", "Sizes: M3 to M24", "Finish: Natural, Anodized"],
//                 applications: ["Aerospace applications", "Marine hardware", "Electrical panels", "Solar installations", "Architectural fastening"]
//             },
//             {
//                 name: "Aluminium Coils",
//                 description: "High-quality aluminium coils for various processing and manufacturing applications.",
//                 specifications: ["Grades: 1100, 3003, 5052, 6061", "Thickness: 0.2mm to 6mm", "Width: Up to 2000mm", "Temper: O, H14, H16, H18"],
//                 applications: ["Stamping and forming", "Packaging industry", "Automotive panels", "Electrical applications"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B209", "EN 573-3"],
//         industries: ["Aerospace", "Automotive", "Construction", "Electronics", "Packaging", "Marine", "Solar Energy", "Transportation"]
//     },
//     'ms-gi-coated': {
//         name: "MS & GI Coated Products",
//         title: "Mild Steel & Galvanized Iron Solutions",
//         description: "Our comprehensive range of mild steel and galvanized iron products provides cost-effective solutions with excellent strength and corrosion protection for various applications.",
//         image: "/ms_and_gi.jpg",
//         features: [
//             "Cost-effective material solutions",
//             "Excellent strength and durability",
//             "Superior corrosion protection (GI coating)",
//             "Easy to fabricate and weld",
//             "Wide range of sizes and specifications",
//             "Suitable for structural applications"
//         ],
//         products: [
//             {
//                 name: "MS Sheets & Plates",
//                 description: "High-quality mild steel sheets and plates for general engineering and construction applications.",
//                 specifications: ["Thickness: 0.5mm to 100mm", "Width: Up to 2500mm", "Length: Up to 12000mm", "Grades: IS 2062, ASTM A36"],
//                 applications: ["Structural fabrication", "General engineering", "Shipbuilding", "Construction"]
//             },
//             {
//                 name: "GI Sheets & Coils",
//                 description: "Galvanized iron sheets with zinc coating for enhanced corrosion resistance.",
//                 specifications: ["Thickness: 0.12mm to 4.0mm", "Width: Up to 1250mm", "Coating: 120-275 GSM", "Standards: IS 277, ASTM A653"],
//                 applications: ["Roofing", "Cladding", "Ductwork", "Automotive panels"]
//             },
//             {
//                 name: "MS Pipes & Tubes",
//                 description: "Mild steel pipes and tubes in various shapes for structural and fluid transport applications.",
//                 specifications: ["Types: ERW, Seamless", "Shapes: Round, Square, Rectangular", "Sizes: 15mm to 600mm OD", "Standards: IS 1239, ASTM A53"],
//                 applications: ["Water supply", "Structural framework", "Scaffolding", "General piping"]
//             },
//             {
//                 name: "GI Pipes & Fittings",
//                 description: "Galvanized iron pipes with superior corrosion resistance for water and gas applications.",
//                 specifications: ["Sizes: 15mm to 150mm NB", "Class: Light, Medium, Heavy", "Coating: Hot-dip galvanized", "Standards: IS 1239, BS 1387"],
//                 applications: ["Water supply systems", "Gas distribution", "Fire fighting systems", "Irrigation"]
//             },
//             {
//                 name: "MS & GI Fasteners",
//                 description: "Comprehensive range of mild steel and galvanized fasteners for construction and industrial applications.",
//                 specifications: ["Types: Hex bolts, Carriage bolts, Machine screws, Self-drilling screws", "Sizes: M6 to M64", "Coating: Zinc plated, Hot-dip galvanized", "Standards: IS 1367, DIN, ASTM"],
//                 applications: ["Construction fastening", "Structural connections", "General engineering", "Outdoor applications"]
//             },
//             {
//                 name: "MS Angles & Channels",
//                 description: "Structural mild steel angles and channels for construction and fabrication work.",
//                 specifications: ["Angles: Equal & Unequal", "Channels: ISMC, ISLB", "Sizes: 20x20mm to 200x200mm", "Standards: IS 2062"],
//                 applications: ["Building construction", "Industrial structures", "Transmission towers", "General fabrication"]
//             },
//             {
//                 name: "Hardware & Accessories",
//                 description: "Complete range of hardware items including hinges, handles, locks, and mounting accessories.",
//                 specifications: ["Materials: MS, GI, Brass", "Types: Door hardware, Cabinet fittings, Mounting brackets", "Finishes: Zinc plated, Powder coated", "Applications: Residential & Commercial"],
//                 applications: ["Door and window fittings", "Cabinet hardware", "Architectural applications", "General hardware needs"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "BIS Certification", "IS 2062", "ASTM Standards"],
//         industries: ["Construction", "Infrastructure", "Water Supply", "Agriculture", "General Engineering", "Automotive", "Shipbuilding"]
//     },
//     'duplex-steel': {
//         name: "Duplex Steel",
//         title: "Advanced Duplex Steel Solutions",
//         description: "Our duplex steel products offer an optimal balance of strength, corrosion resistance, and ductility through their unique dual-phase microstructure for demanding industrial environments.",
//         image: "/duplex-steel.jpg",
//         features: [
//             "Superior strength compared to austenitic stainless steels",
//             "Excellent resistance to stress corrosion cracking",
//             "High resistance to chloride pitting and crevice corrosion",
//             "Better thermal conductivity than austenitic grades",
//             "Good weldability and formability",
//             "Cost-effective due to lower nickel content"
//         ],
//         products: [
//             {
//                 name: "Duplex 2205 Sheets",
//                 description: "The most widely used duplex grade with excellent corrosion resistance and roughly twice the yield strength of austenitic stainless steels.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
//                 applications: ["Chemical processing vessels", "Oil and gas pipelines", "Desalination plants", "Heat exchangers"]
//             },
//             {
//                 name: "Duplex 2304 Sheets",
//                 description: "Lean duplex grade with lower nickel content but good corrosion resistance and mechanical properties.",
//                 specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
//                 applications: ["Storage tanks", "Water systems", "Architectural applications", "Pulp and paper industry"]
//             },
//             {
//                 name: "Duplex S31803 Sheets",
//                 description: "Standard duplex grade offering excellent resistance to corrosion in various aggressive environments.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
//                 applications: ["Pressure vessels", "Heat exchangers", "Chemical processing equipment", "Offshore oil and gas platforms"]
//             },
//             {
//                 name: "Duplex Steel Pipes & Tubes",
//                 description: "High-strength duplex steel pipes for demanding applications in corrosive environments.",
//                 specifications: ["Grades: 2205, 2304, S31803", "Types: Seamless, Welded", "Sizes: 15mm to 600mm OD", "Standards: ASTM A790, ASTM A928"],
//                 applications: ["Oil and gas transport", "Chemical processing", "Seawater systems", "Pulp and paper"]
//             },
//             {
//                 name: "Duplex Steel Fasteners",
//                 description: "High-strength duplex steel fasteners for critical applications requiring superior corrosion resistance.",
//                 specifications: ["Grades: 2205, 2304", "Types: Hex bolts, Stud bolts, Nuts, Washers", "Sizes: M8 to M64", "Standards: ASTM A276, ASTM F2281"],
//                 applications: ["Offshore platforms", "Chemical processing equipment", "Desalination plants", "Marine applications", "Oil and gas installations"]
//             },
//             {
//                 name: "Duplex Steel Fittings & Flanges",
//                 description: "Precision-engineered duplex steel fittings and flanges for high-pressure and corrosive service.",
//                 specifications: ["Grades: 2205, 2304, S31803", "Types: Elbows, Tees, Reducers, Flanges", "Pressure ratings: 150# to 2500#", "Standards: ASTM A815, ASTM A182"],
//                 applications: ["Process piping", "Offshore installations", "Chemical plants", "Water treatment facilities"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NORSOK M-630"],
//         industries: ["Oil & Gas", "Chemical Processing", "Pulp & Paper", "Desalination", "Marine", "Mining", "Power Generation"]
//     },
//     'super-duplex-steel': {
//         name: "Super Duplex Steel",
//         title: "Premium Super Duplex Steel Products",
//         description: "Our super duplex steel products deliver exceptional corrosion resistance and superior mechanical properties for the most challenging and aggressive industrial environments.",
//         image: "/super-duplex-steel.jpg",
//         features: [
//             "Outstanding resistance to pitting and crevice corrosion",
//             "Superior chloride stress corrosion cracking resistance",
//             "Excellent strength (approximately twice that of austenitic stainless steels)",
//             "High resistance to erosion and fatigue",
//             "Extended service life in extreme environments",
//             "Reduced maintenance costs in aggressive applications"
//         ],
//         products: [
//             {
//                 name: "Super Duplex 2507 Sheets",
//                 description: "Premium grade with exceptional corrosion resistance and high strength for the most demanding applications.",
//                 specifications: ["Thickness: 0.8mm to 40mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
//                 applications: ["Offshore oil and gas", "Chemical processing in hot acids", "Seawater desalination", "FGD systems"]
//             },
//             {
//                 name: "Super Duplex S32750 Sheets",
//                 description: "High-performance grade with excellent resistance to pitting, crevice corrosion, and stress corrosion cracking.",
//                 specifications: ["Thickness: 0.8mm to 40mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
//                 applications: ["Subsea oil and gas equipment", "Heat exchangers in aggressive media", "Chemical process vessels", "Pulp and paper digesters"]
//             },
//             {
//                 name: "Super Duplex S32760 Sheets",
//                 description: "Enhanced super duplex grade with improved resistance to pitting corrosion in high-chloride environments.",
//                 specifications: ["Thickness: 1mm to 30mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
//                 applications: ["Offshore platforms", "Flue gas scrubbers", "Chemical transport equipment", "High-chloride process streams"]
//             },
//             {
//                 name: "Super Duplex Steel Pipes",
//                 description: "Premium super duplex steel pipes for the most demanding corrosive environments.",
//                 specifications: ["Grades: 2507, S32750, S32760", "Types: Seamless, Welded", "Sizes: 25mm to 300mm OD", "Standards: ASTM A790, ASTM A928"],
//                 applications: ["Subsea pipelines", "Chemical processing", "Offshore installations", "Desalination systems"]
//             },
//             {
//                 name: "Super Duplex Fasteners",
//                 description: "Ultra-high performance fasteners for extreme service conditions in aggressive environments.",
//                 specifications: ["Grades: 2507, S32750, S32760", "Types: Hex bolts, Socket screws, Stud bolts, Nuts", "Sizes: M8 to M48", "Standards: ASTM A276, NACE MR0175"],
//                 applications: ["Offshore oil and gas", "Subsea equipment", "Chemical processing", "Desalination plants", "Marine installations"]
//             },
//             {
//                 name: "Super Duplex Fittings & Flanges",
//                 description: "Precision super duplex steel fittings and flanges for critical high-pressure applications.",
//                 specifications: ["Grades: 2507, S32750, S32760", "Types: Weld neck, Blind, Slip-on flanges", "Fittings: Elbows, Tees, Reducers", "Pressure: 150# to 2500#"],
//                 applications: ["Offshore piping systems", "Chemical process equipment", "Seawater service", "High-pressure applications"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NORSOK M-630", "DNV GL"],
//         industries: ["Oil & Gas", "Offshore", "Chemical Processing", "Desalination", "Pulp & Paper", "Pollution Control", "Power Generation"]
//     },
//     'alloy-steel': {
//         name: "Alloy Steel",
//         title: "Specialized Alloy Steel Solutions",
//         description: "Our high-performance alloy steel products feature custom compositions engineered for superior strength, heat resistance, and durability in extreme operating conditions.",
//         image: "/alloy-steel.webp",
//         features: [
//             "Enhanced mechanical properties through precise alloying",
//             "Superior performance in high-temperature applications",
//             "Excellent resistance to mechanical fatigue",
//             "Good weldability and formability",
//             "Customizable properties for specific applications",
//             "Extended service life in harsh environments"
//         ],
//         products: [
//             {
//                 name: "Alloy 20 Sheets",
//                 description: "Nickel-iron-chromium alloy with excellent resistance to sulfuric acid and many other corrosive chemicals.",
//                 specifications: ["Thickness: 0.6mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Chemical processing equipment", "Pharmaceutical reactors", "Food processing", "Pickling equipment"]
//             },
//             {
//                 name: "Incoloy 800 Sheets",
//                 description: "Nickel-iron-chromium alloy with exceptional resistance to high-temperature oxidation and carburization.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Heat treatment equipment", "Chemical and petrochemical processing", "Power generation", "Nuclear applications"]
//             },
//             {
//                 name: "Inconel 600 Sheets",
//                 description: "Nickel-chromium alloy with excellent resistance to oxidation and corrosion at elevated temperatures.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Gas turbine components", "Heat treatment fixtures", "Chemical processing", "Nuclear engineering"]
//             },
//             {
//                 name: "P91/T91 Alloy Sheets",
//                 description: "High-strength ferritic/martensitic steel with excellent creep resistance at elevated temperatures.",
//                 specifications: ["Thickness: 1mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Hot-rolled, Cold-rolled"],
//                 applications: ["Power plants", "Boiler components", "Steam pipes", "Heat exchangers"]
//             },
//             {
//                 name: "Alloy Steel Pipes & Tubes",
//                 description: "Specialized alloy steel pipes for high-temperature and high-pressure applications.",
//                 specifications: ["Grades: P5, P9, P11, P22, P91", "Types: Seamless, Welded", "Sizes: 15mm to 600mm OD", "Standards: ASTM A335, ASTM A213"],
//                 applications: ["Power generation", "Petrochemical processing", "High-temperature service", "Pressure vessels"]
//             },
//             {
//                 name: "Alloy Steel Fasteners",
//                 description: "High-strength alloy steel fasteners for critical applications requiring superior mechanical properties.",
//                 specifications: ["Grades: 4140, 4340, 8620, Inconel 600/625", "Types: Hex bolts, Socket screws, Stud bolts", "Sizes: M6 to M64", "Heat treatment: As per application"],
//                 applications: ["Aerospace applications", "Power generation", "Oil and gas equipment", "High-temperature service", "Chemical processing"]
//             },
//             {
//                 name: "Alloy Steel Bars & Rods",
//                 description: "Precision alloy steel bars and rods for machining and fabrication of critical components.",
//                 specifications: ["Grades: 4140, 4340, 8620, Alloy 20, Inconel", "Diameters: 10mm to 500mm", "Lengths: Up to 6000mm", "Condition: Annealed, Normalized, Hardened"],
//                 applications: ["Machined components", "Shafts", "Gears", "High-stress applications"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NACE MR0175/ISO 15156"],
//         industries: ["Power Generation", "Chemical Processing", "Oil & Gas", "Aerospace", "Heat Treatment", "Automotive", "Nuclear"]
//     },
//     'brass-copper': {
//         name: "Brass & Copper",
//         title: "Premium Brass & Copper Products",
//         description: "Our high-quality brass and copper products combine excellent thermal and electrical conductivity with corrosion resistance for applications ranging from plumbing to electrical systems.",
//         image: "/brass-copper.webp",
//         features: [
//             "Exceptional thermal and electrical conductivity",
//             "Excellent corrosion resistance, particularly in seawater",
//             "Antimicrobial properties",
//             "Good machinability and formability",
//             "Attractive appearance with various finish options",
//             "Long service life with minimal maintenance"
//         ],
//         products: [
//             {
//                 name: "Copper C11000 Sheets",
//                 description: "Commercially pure copper (99.9%) with excellent electrical and thermal conductivity.",
//                 specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Bright, Matte"],
//                 applications: ["Electrical conductors", "Heat exchangers", "Roofing and flashing", "Decorative architectural elements"]
//             },
//             {
//                 name: "Brass C26000 Sheets",
//                 description: "70/30 brass with good strength, formability, and machinability.",
//                 specifications: ["Thickness: 0.3mm to 40mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: Polished, Brushed"],
//                 applications: ["Fasteners", "Plumbing components", "Electrical connectors", "Decorative hardware"]
//             },
//             {
//                 name: "Cupronickel 70/30 Sheets",
//                 description: "70% copper, 30% nickel alloy with outstanding resistance to seawater corrosion and biofouling.",
//                 specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Bright finish"],
//                 applications: ["Marine condensers", "Seawater piping systems", "Desalination plants", "Heat exchangers"]
//             },
//             {
//                 name: "Cupronickel 90/10 Sheets",
//                 description: "90% copper, 10% nickel alloy with excellent resistance to erosion-corrosion in flowing seawater.",
//                 specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Bright finish"],
//                 applications: ["Marine equipment", "Ship hulls", "Offshore platforms", "Heat exchangers"]
//             },
//             {
//                 name: "Copper & Brass Pipes",
//                 description: "High-quality copper and brass pipes for plumbing, electrical, and marine applications.",
//                 specifications: ["Materials: Copper, Brass, Cupronickel", "Types: Seamless, Welded", "Sizes: 6mm to 300mm OD", "Standards: ASTM B88, ASTM B111"],
//                 applications: ["Plumbing systems", "Heat exchangers", "Marine applications", "Electrical conduits"]
//             },
//             {
//                 name: "Brass & Copper Fasteners",
//                 description: "Corrosion-resistant brass and copper fasteners for marine and electrical applications.",
//                 specifications: ["Materials: Brass C360, Copper C110, Bronze", "Types: Hex bolts, Machine screws, Wood screws, Nuts", "Sizes: M3 to M20", "Finish: Natural, Nickel plated"],
//                 applications: ["Marine hardware", "Electrical panels", "Plumbing fixtures", "Decorative fastening", "Boat building"]
//             },
//             {
//                 name: "Copper Rods & Bars",
//                 description: "High-conductivity copper rods and bars for electrical and thermal applications.",
//                 specifications: ["Grades: C101, C110, C11000", "Diameters: 3"]
//             },
//             {
//                 name: "Copper Rods & Bars",
//                 description: "High-conductivity copper rods and bars for electrical and thermal applications.",
//                 specifications: ["Grades: C101, C110, C11000", "Diameters: 3mm to 200mm", "Lengths: Up to 6000mm", "Condition: Hard, Soft, Half-hard"],
//                 applications: ["Electrical conductors", "Grounding systems", "Heat sinks", "Machined components"]
//             },
//             {
//                 name: "Brass Rods & Bars",
//                 description: "Free-machining brass rods and bars for precision components and decorative applications.",
//                 specifications: ["Grades: C360, C260, C464", "Diameters: 3mm to 150mm", "Lengths: Up to 6000mm", "Finish: Bright, Turned"],
//                 applications: ["Machined parts", "Valve components", "Decorative elements", "Plumbing fittings"]
//             },
//             {
//                 name: "Bronze Alloys",
//                 description: "High-strength bronze alloys with excellent wear resistance and corrosion properties.",
//                 specifications: ["Grades: C932, C954, Phosphor Bronze", "Forms: Sheets, Rods, Tubes", "Sizes: Custom and standard", "Finish: Mill, Polished"],
//                 applications: ["Bearings", "Bushings", "Marine hardware", "Electrical connectors"]
//             },
//             {
//                 name: "Copper & Brass Fittings",
//                 description: "Precision-manufactured copper and brass fittings for plumbing and industrial systems.",
//                 specifications: ["Materials: Copper, Brass, Bronze", "Types: Elbows, Tees, Unions, Couplings", "Connections: Solder, Threaded, Compression", "Standards: ASTM B75, ASTM B584"],
//                 applications: ["Plumbing systems", "HVAC installations", "Industrial piping", "Gas distribution"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM B152", "ASTM B36", "EN 12449"],
//         industries: ["Electrical", "Plumbing", "Marine", "HVAC", "Telecommunications", "Decorative", "Automotive"]
//     },
//     'carbon-steel': {
//         name: "Carbon Steel",
//         title: "High-Quality Carbon Steel Products",
//         description: "Our comprehensive range of carbon steel products delivers exceptional strength, durability, and versatility for structural, mechanical, and general engineering applications across industries.",
//         image: "/carbon-steel.jpg",
//         features: [
//             "High tensile strength and durability",
//             "Excellent weldability and machinability",
//             "Cost-effective material solution",
//             "Wide range of carbon content options",
//             "Good formability for various applications",
//             "Suitable for heat treatment processes"
//         ],
//         products: [
//             {
//                 name: "Low Carbon Steel Sheets",
//                 description: "Mild steel sheets with low carbon content (0.05-0.25%) offering excellent formability and weldability.",
//                 specifications: ["Carbon content: 0.05-0.25%", "Thickness: 0.5mm to 100mm", "Width: Up to 2500mm", "Standards: ASTM A36, IS 2062"],
//                 applications: ["Automotive body panels", "Construction materials", "General fabrication", "Deep drawing applications"]
//             },
//             {
//                 name: "Medium Carbon Steel Sheets",
//                 description: "Balanced carbon content (0.25-0.60%) providing good strength and moderate ductility.",
//                 specifications: ["Carbon content: 0.25-0.60%", "Thickness: 1mm to 80mm", "Width: Up to 2000mm", "Heat treatment: Normalized, Annealed"],
//                 applications: ["Machine parts", "Gears", "Shafts", "Structural components"]
//             },
//             {
//                 name: "High Carbon Steel Sheets",
//                 description: "High carbon content (0.60-1.00%) offering superior hardness and wear resistance after heat treatment.",
//                 specifications: ["Carbon content: 0.60-1.00%", "Thickness: 1mm to 50mm", "Width: Up to 1800mm", "Condition: Annealed, Hardened"],
//                 applications: ["Cutting tools", "Springs", "Wire", "High-wear components"]
//             },
//             {
//                 name: "Carbon Steel Pipes",
//                 description: "Seamless and welded carbon steel pipes for fluid transport and structural applications.",
//                 specifications: ["Grades: A53, A106, API 5L", "Types: Seamless, ERW, LSAW", "Sizes: 15mm to 1200mm OD", "Pressure ratings: Various"],
//                 applications: ["Oil and gas pipelines", "Water supply", "Structural applications", "Mechanical tubing"]
//             },
//             {
//                 name: "Carbon Steel Plates",
//                 description: "Heavy-duty carbon steel plates for pressure vessels, structural, and marine applications.",
//                 specifications: ["Grades: A516-70, A537, A572", "Thickness: 5mm to 200mm", "Width: Up to 3000mm", "Length: Up to 12000mm"],
//                 applications: ["Pressure vessels", "Shipbuilding", "Bridge construction", "Heavy machinery"]
//             },
//             {
//                 name: "Carbon Steel Bars & Rods",
//                 description: "Round, square, and hexagonal carbon steel bars for machining and construction applications.",
//                 specifications: ["Grades: 1018, 1045, 4140", "Sizes: 6mm to 300mm", "Lengths: Up to 6000mm", "Finish: Hot-rolled, Cold-drawn"],
//                 applications: ["Machined components", "Fastener manufacturing", "Construction reinforcement", "General engineering"]
//             },
//             {
//                 name: "Carbon Steel Fasteners",
//                 description: "High-strength carbon steel fasteners for construction and industrial applications.",
//                 specifications: ["Grades: Grade 2, Grade 5, Grade 8", "Types: Hex bolts, Cap screws, Threaded rods", "Sizes: M6 to M64", "Coating: Zinc plated, Black oxide"],
//                 applications: ["Structural fastening", "Machinery assembly", "Automotive applications", "General construction"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM A36", "ASTM A572", "IS 2062", "JIS G3101"],
//         industries: ["Construction", "Automotive", "Oil & Gas", "Machinery", "Shipbuilding", "Infrastructure", "Manufacturing"]
//     },
//     'tool-steel': {
//         name: "Tool Steel",
//         title: "Precision Tool Steel Solutions",
//         description: "Our premium tool steel products are engineered for superior hardness, wear resistance, and toughness, designed for cutting tools, dies, and precision manufacturing applications.",
//         image: "/tool-steel.jpg",
//         features: [
//             "Exceptional hardness and wear resistance",
//             "Superior toughness and impact resistance",
//             "Excellent dimensional stability",
//             "High-temperature performance",
//             "Precise chemical composition",
//             "Consistent mechanical properties"
//         ],
//         products: [
//             {
//                 name: "D2 Tool Steel",
//                 description: "High-carbon, high-chromium cold work tool steel with excellent wear resistance and moderate toughness.",
//                 specifications: ["Carbon: 1.50-1.60%", "Chromium: 11.0-13.0%", "Hardness: 58-62 HRC", "Sizes: Plates, rounds, flats"],
//                 applications: ["Blanking dies", "Forming dies", "Thread rolling dies", "Slitting cutters"]
//             },
//             {
//                 name: "H13 Tool Steel",
//                 description: "Premium hot work tool steel with excellent thermal shock resistance and toughness at elevated temperatures.",
//                 specifications: ["Carbon: 0.32-0.45%", "Chromium: 4.75-5.50%", "Hardness: 38-52 HRC", "Heat treatment: Air hardening"],
//                 applications: ["Die casting dies", "Forging dies", "Extrusion dies", "Hot shear blades"]
//             },
//             {
//                 name: "O1 Tool Steel",
//                 description: "Oil-hardening cold work tool steel with good machinability and moderate wear resistance.",
//                 specifications: ["Carbon: 0.85-1.00%", "Chromium: 0.40-0.60%", "Hardness: 57-64 HRC", "Heat treatment: Oil quench"],
//                 applications: ["Cutting tools", "Punches", "Gauges", "Small dies"]
//             },
//             {
//                 name: "A2 Tool Steel",
//                 description: "Air-hardening cold work tool steel with good toughness and dimensional stability.",
//                 specifications: ["Carbon: 0.95-1.05%", "Chromium: 4.75-5.50%", "Hardness: 57-62 HRC", "Heat treatment: Air hardening"],
//                 applications: ["Blanking dies", "Forming dies", "Trim dies", "Punches"]
//             },
//             {
//                 name: "S7 Tool Steel",
//                 description: "Shock-resistant tool steel with exceptional toughness and impact resistance.",
//                 specifications: ["Carbon: 0.45-0.55%", "Chromium: 3.00-3.50%", "Hardness: 54-58 HRC", "Properties: High impact resistance"],
//                 applications: ["Pneumatic tools", "Chisels", "Punches", "Rivet sets"]
//             },
//             {
//                 name: "M2 High Speed Steel",
//                 description: "Molybdenum-type high-speed steel with excellent cutting performance and heat resistance.",
//                 specifications: ["Carbon: 0.78-0.88%", "Tungsten: 5.50-6.75%", "Hardness: 62-65 HRC", "Red hardness: Excellent"],
//                 applications: ["Cutting tools", "Drill bits", "End mills", "Saw blades"]
//             },
//             {
//                 name: "P20 Mold Steel",
//                 description: "Pre-hardened mold steel with good machinability and polishability for plastic injection molds.",
//                 specifications: ["Carbon: 0.28-0.40%", "Chromium: 1.40-2.00%", "Hardness: 28-32 HRC", "Condition: Pre-hardened"],
//                 applications: ["Plastic injection molds", "Die casting dies", "Blow molds", "Compression molds"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM A681", "JIS SKD", "DIN 1.2379", "AISI Standards"],
//         industries: ["Tool & Die", "Automotive", "Aerospace", "Plastic Processing", "Metal Forming", "Cutting Tools", "Precision Manufacturing"]
//     },
//     'hastelloy': {
//         name: "Hastelloy",
//         title: "Premium Hastelloy Superalloy Products",
//         description: "Our high-performance Hastelloy products deliver exceptional corrosion resistance and high-temperature strength for the most demanding chemical processing and aerospace applications.",
//         image: "/hastealloy.jpg",
//         features: [
//             "Outstanding resistance to oxidizing and reducing environments",
//             "Exceptional high-temperature strength and stability",
//             "Superior resistance to stress corrosion cracking",
//             "Excellent fabricability and weldability",
//             "Thermal stability in extreme conditions",
//             "Long service life in aggressive chemical environments"
//         ],
//         products: [
//             {
//                 name: "Hastelloy C-276 Sheets",
//                 description: "Versatile nickel-molybdenum-chromium alloy with outstanding corrosion resistance in both oxidizing and reducing environments.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4"],
//                 applications: ["Chemical processing equipment", "Pollution control systems", "Pulp and paper production", "Sour gas environments"]
//             },
//             {
//                 name: "Hastelloy C-22 Sheets",
//                 description: "Enhanced corrosion-resistant alloy with superior performance in oxidizing aqueous media and excellent fabricability.",
//                 specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Chemical processing", "Pharmaceutical equipment", "Pollution control", "Waste treatment facilities"]
//             },
//             {
//                 name: "Hastelloy B-3 Sheets",
//                 description: "Nickel-molybdenum alloy with exceptional resistance to hydrochloric acid and other reducing chemicals.",
//                 specifications: ["Thickness: 0.8mm to 30mm", "Width: Up to 1200mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
//                 applications: ["Hydrochloric acid processing", "Acetic acid production", "Chemical reactors", "Heat exchangers"]
//             },
//             {
//                 name: "Hastelloy X Sheets",
//                 description: "High-temperature alloy with excellent oxidation resistance and structural stability at elevated temperatures.",
//                 specifications: ["Thickness: 0.5mm to 25mm", "Width: Up to 1200mm", "Length: Up to 6000mm", "Surface: 2B, Annealed"],
//                 applications: ["Gas turbine components", "Industrial furnace equipment", "Petrochemical processing", "Heat treatment fixtures"]
//             },
//             {
//                 name: "Hastelloy Pipes & Tubes",
//                 description: "High-performance Hastelloy pipes and tubes for critical chemical processing and high-temperature applications.",
//                 specifications: ["Grades: C-276, C-22, B-3, X", "Types: Seamless, Welded", "Sizes: 15mm to 300mm OD", "Standards: ASTM B622, ASTM B626"],
//                 applications: ["Chemical processing piping", "Heat exchanger tubes", "Reactor vessels", "High-temperature gas handling"]
//             },
//             {
//                 name: "Hastelloy Rods & Bars",
//                 description: "Precision Hastelloy rods and bars for machined components in extreme service conditions.",
//                 specifications: ["Grades: C-276, C-22, B-3, X", "Diameters: 6mm to 200mm", "Lengths: Up to 6000mm", "Condition: Solution annealed"],
//                 applications: ["Pump shafts", "Valve components", "Chemical processing equipment", "High-temperature fasteners"]
//             },
//             {
//                 name: "Hastelloy Fasteners",
//                 description: "Ultra-high performance fasteners for extreme chemical and high-temperature environments.",
//                 specifications: ["Grades: C-276, C-22, B-3", "Types: Hex bolts, Socket screws, Stud bolts, Nuts", "Sizes: M6 to M48", "Standards: ASTM B574, NACE MR0175"],
//                 applications: ["Chemical processing equipment", "High-temperature furnaces", "Aerospace applications", "Pollution control systems", "Petrochemical plants"]
//             },
//             {
//                 name: "Hastelloy Fittings & Flanges",
//                 description: "Precision-engineered Hastelloy fittings and flanges for critical chemical processing applications.",
//                 specifications: ["Grades: C-276, C-22, B-3", "Types: Elbows, Tees, Reducers, Flanges", "Pressure ratings: 150# to 2500#", "Standards: ASTM B366, ASTM B564"],
//                 applications: ["Chemical process piping", "High-temperature systems", "Corrosive fluid handling", "Reactor connections"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ASTM B575", "ASME SB-575", "NACE MR0175/ISO 15156", "AMS Standards"],
//         industries: ["Chemical Processing", "Petrochemical", "Aerospace", "Power Generation", "Pollution Control", "Pharmaceutical", "Pulp & Paper"]
//     }
// };

const productData = {
    'stainless-steel': {
        name: "Stainless Steel",
        title: "Premium Stainless Steel Products",
        description: "Our high-quality stainless steel products offer exceptional corrosion resistance, durability, and aesthetic appeal for a wide range of applications.",
        image: "/stainless_steel.jpg",
        our_range: [
            "Sheets",
            "Plates",
            "Shim Sheets",
            "Pipes & Tubes",
            "Rods & Bars",
        ],
        product_range: [
            {
                name: "Sheets",
                description: "High-quality Stainless Steel Sheets in the 300 and 400 series are available, well-suited for fabrication, construction, industrial, and architectural applications. These sheets are appreciated for their corrosion resistance, strength, and smooth surface finish, making them a reliable choice for a wide range of projects. Offered in various thicknesses and customizable sizes, they provide both functionality and consistency to meet specific application needs.",
                Grades: [
                    "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
                    "400 Series: SS 409, SS 410, SS 420, SS 430",
                    "200 Series: SS 202, SS 201, SS 201L"
                ],
                Finishes: [
                    "2B (Mill Finish)",
                    "BA (Bright Annealed)",
                    "Matt Finish",
                    "No. 4 (Brush Finish)",
                    "Hairline Finish",
                    "Mirror Finish",
                    "PVD Coated (Gold, Rose Gold, Black, etc.)"
                ],
                Makes: [
                    "Jindal Stainless",
                    "Posco",
                    "TISCO",
                    "Aperam",
                    "Imported & Domestic Mills"
                ],
                images: ["", ""]
            },
            {
                name: "Plates",
                description: "A wide selection of Stainless Steel Plates in the 200, 300, and 400 series is available, perfectly suited for heavy-duty fabrication, pressure vessels, construction, and other industrial applications. These plates are known for their superior corrosion resistance, high strength, and consistent thickness, ensuring reliable performance across varied environments. Offered in both standard and custom sizes, they are designed to meet diverse project requirements with precision and durability.",
                Grades: [
                    "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
                    "400 Series: SS 409, SS 410, SS 420, SS 430",
                    "200 Series: SS 202, SS 201, SS 201L"
                ],
                Finishes: [
                    "Hot Rolled (HR)",
                    "Cold Rolled (CR)",
                    "2B (Mill Finish)",
                    "No. 1 (HRAP)",
                    "Matt Finish",
                    "Polished Finish",
                    "PVD Coated (Gold, Rose Gold, Black, etc.)"
                ],
                Makes: [
                    "Jindal Stainless",
                    "Posco",
                    "TISCO",
                    "Aperam",
                    "Imported & Domestic Mills"
                ],
                images: ["", ""]
            },
            {
                name: "Shim Sheets",
                description: "Precision-quality stainless steel shim sheets in 300 series grades are available for high-accuracy applications across industries such as automotive, aerospace, chemical, electronics, and tooling. These sheets offer reliable corrosion resistance, a strong strength-to-weight ratio, and ease of fabrication. Commonly used for alignment, spacing, adjustment, and sealing in precision assemblies, they are offered in a wide range of thicknesses — from microns to millimeters — with tight tolerances to meet specific project requirements.",
                Grades: [
                    "300 Series:* SS 304, SS 304L, SS 316, SS 316L, SS 321"
                ],
                Finishes: [
                    "2B (Mill Finish)",
                    "BA (Bright Annealed)",
                    "Matt Finish",
                    "Polished Finish (up to 600 grit)"
                ],
                Makes: [
                    "Jindal Stainless",
                    "Posco",
                    "TISCO",
                    "Imported & Domestic Mills"
                ],
                images: ["", ""]
            },
            {
                name: "Pipes & Tubes",
                description: "A wide range of stainless steel pipes is available in both ERW (Electric Resistance Welded) and Seamless (SMLS) types, manufactured from high-quality 300 and 400 series stainless steel. These pipes are commonly used in industries such as petrochemicals, food processing, pharmaceuticals, construction, and fluid transport. Known for their durability, corrosion resistance, and ability to perform under high-pressure conditions, they are offered in various schedules and diameters to suit different application requirements.",
                Grades: [
                    "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
                    "400 Series: SS 409, SS 410, SS 430"
                ],
                Finishes: [
                    "Mill Finish",
                    "Polished Finish (180, 320, 400 grit)",
                    "Annealed & Pickled",
                    "Mirror Polish (for decorative use)",
                    "Satin / Matt Finish"
                ],
                Makes: [
                    "Jindal Stainless",
                    "Ratnamani",
                    "Maharashtra Seamless",
                    "Imported & Domestic Mills"
                ],
                images: ["", ""]
            },
            {
                name: "Rods & Bars",
                description: "Stainless steel round bars in 300 and 400 series are suitable for a wide range of applications across fabrication, construction, machining, and precision engineering. These bars offer a good balance of strength, corrosion resistance, and surface finish, making them ideal for both structural and component-based uses. The 300 series is known for its formability and resistance to corrosive environments, while the 400 series provides greater hardness and magnetic properties. Available in various diameters and custom lengths, they are manufactured to meet industry standards for reliability and performance.",
                Grades: [
                    "300 Series: SS 304, SS 304L, SS 316, SS 316L, SS 321",
                    "400 Series: SS 410, SS 416, SS 420, SS 430",
                ],
                Finishes: [
                    "Bright Drawn - Smooth and precise surface finish",
                    "Peeled & Polished - Enhanced appearance and dimensional accuracy",
                    "Black (Hot Rolled) - Industrial-grade strength",
                    "Centreless Ground - Precision-ground for tight tolerances"
                ],
                Makes: [
                    "Jindal Stainless",
                    "Viraj Profiles",
                    "Shah Alloys",
                    "Imported & Domestic Mills"
                ],
                images: ["", ""]
            }
        ],
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
            {
                name: "SS 202 Sheets",
                description: "Economical austenitic grade with good corrosion resistance and formability for general purpose applications.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4, Hairline"],
                applications: ["Kitchen equipment", "Decorative applications", "Automotive trim", "Household appliances"]
            },
            {
                name: "SS 321 Sheets",
                description: "Titanium-stabilized grade with excellent resistance to intergranular corrosion at high temperatures.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4"],
                applications: ["Heat exchangers", "Aircraft exhaust systems", "High-temperature chemical processing", "Furnace parts"]
            },
            {
                name: "SS 410 Sheets",
                description: "Martensitic stainless steel with good corrosion resistance and high strength after heat treatment.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
                applications: ["Turbine blades", "Valve components", "Cutlery", "Surgical instruments"]
            },
            {
                name: "SS Pipes & Tubes",
                description: "Comprehensive range of stainless steel pipes in round, square, rectangular, and oval shapes.",
                specifications: ["Grades: 202, 304, 316, 321, 410", "Types: Seamless & Welded", "Finish: Mirror Polished, Matt", "Sizes: All standard and custom sizes"],
                applications: ["Structural applications", "Fluid transport", "Heat exchangers", "Architectural projects"]
            },
            {
                name: "SS Rods & Bars",
                description: "High-quality stainless steel rods and bars in various grades for machining and fabrication.",
                specifications: ["Grades: 202, 304, 316, 321, 410", "Diameters: 6mm to 300mm", "Lengths: Up to 6000mm", "Finish: Bright, Black, Peeled"],
                applications: ["Machining components", "Fastener manufacturing", "Shafts", "Structural elements"]
            },
            {
                name: "SS Fasteners & Hardware",
                description: "Complete range of stainless steel fasteners including bolts, screws, nuts, washers, and anchors.",
                specifications: ["Grades: 202, 304, 316", "Types: Hex bolts, Socket screws, Machine screws, Wood screws", "Sizes: M3 to M64", "Finishes: Plain, Passivated"],
                applications: ["Construction", "Marine applications", "Food processing", "Chemical equipment", "Architectural fastening"]
            },
            {
                name: "SS Fittings & Flanges",
                description: "Precision-manufactured stainless steel fittings and flanges for piping systems.",
                specifications: ["Grades: 202, 304, 316", "Types: Blind, Threaded, Weld Neck Flanges", "Fittings: Elbows, Tees, Unions, Reducers", "Standards: ASME, DIN, JIS"],
                applications: ["Process piping", "Water treatment", "Chemical processing", "Food and beverage industry"]
            }
        ],
        certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240"],
        industries: ["Automotive", "Aerospace", "Food & Beverage", "Pharmaceutical", "Chemical Processing", "Construction", "Marine"]
    },
    'aluminium': {
        name: "Aluminium",
        title: "High-Performance Aluminium Products",
        description: "Our premium aluminium products combine lightweight properties with excellent corrosion resistance, thermal conductivity, and formability for diverse industrial applications.",
        image: "/aluminium.jpg",
        our_range: [
            "Sheets",
            "Plates",
            "Coils",
            "Pipes & Tubes",
            "Rods & Bars",
            "Channels & Angles",
            "Sections",
            "Fasteners & Hardware"
        ],
        product_range: [
            {
            name: "Sheets",
            description: "Prabhat Steel supplies a comprehensive range of aluminium sheets in grades such as 1100, 5052, 6061, 7075, and more. These sheets are valued for their lightweight, corrosion resistance, and excellent formability, making them ideal for fabrication, construction, transportation, and architectural use. Available in various thicknesses, tempers, and custom sizes.",
            Grades: [
                "1100 (Commercially Pure)",
                "5052 (Al-Mg Alloy)",
                "6061 (Al-Mg-Si Alloy)",
                "6063 (Architectural Alloy)",
                "7075 (Aerospace Grade)"
            ],
            Finishes: [
                "Mill Finish",
                "Anodized",
                "Polished",
                "Brushed",
                "Coated"
            ],
            Makes: [
                "Hindalco",
                "NALCO",
                "BALCO",
                "Imported & Domestic Mills"
            ],
            images: ["", ""]
            },
            {
            name: "Plates",
            description: "High-quality aluminium plates in a variety of grades and thicknesses, suitable for heavy-duty fabrication, marine, aerospace, and industrial applications. Plates are known for their strength-to-weight ratio, corrosion resistance, and machinability, and are available in standard and custom sizes.",
            Grades: [
                "1100",
                "5052",
                "6061",
                "7075"
            ],
            Finishes: [
                "Mill Finish",
                "Anodized",
                "Polished"
            ],
            Makes: [
                "Hindalco",
                "NALCO",
                "BALCO",
                "Imported & Domestic Mills"
            ],
            images: ["", ""]
            },
            {
            name: "Coils",
            description: "Premium aluminium coils for processing and manufacturing applications, available in a range of grades, tempers, and thicknesses. Coils are widely used in stamping, forming, packaging, and automotive industries.",
            Grades: [
                "1100",
                "3003",
                "5052",
                "6061"
            ],
            Finishes: [
                "Mill Finish",
                "Anodized",
                "Coated"
            ],
            Makes: [
                "Hindalco",
                "NALCO",
                "Imported & Domestic Mills"
            ],
            images: ["", ""]
            },
            {
            name: "Pipes & Tubes",
            description: "Lightweight and corrosion-resistant aluminium pipes and tubes in round, square, and rectangular shapes. Suitable for structural, architectural, pneumatic, and heat exchanger applications. Available in seamless and welded types.",
            Grades: [
                "6061",
                "6063",
                "5052"
            ],
            Finishes: [
                "Mill Finish",
                "Anodized",
                "Polished"
            ],
            Makes: [
                "Hindalco",
                "NALCO",
                "Imported & Domestic Mills"
            ],
            images: ["", ""]
            },
            {
            name: "Rods & Bars",
            description: "High-quality aluminium rods and bars in various grades and shapes (round, square, hexagonal) for machining, fabrication, and structural use. Known for their machinability, conductivity, and corrosion resistance.",
            Grades: [
                "6061",
                "6063",
                "2014",
                "7075"
            ],
            Finishes: [
                "Mill Finish",
                "Bright",
                "Anodized"
            ],
            Makes: [
                "Hindalco",
                "NALCO",
                "Imported & Domestic Mills"
            ],
            images: ["", ""]
            },
            {
            name: "Channels & Angles",
            description: "Structural aluminium channels and angles for construction, solar mounting, and industrial frameworks. Available in standard and custom profiles, with excellent strength-to-weight ratio and corrosion resistance.",
            Grades: [
                "6061",
                "6063"
            ],
            Finishes: [
                "Mill Finish",
                "Anodized",
                "Powder Coated"
            ],
            Makes: [
                "Hindalco",
                "NALCO",
                "Imported & Domestic Mills"
            ],
            images: ["", ""]
            },
            {
            name: "Sections",
            description: "Architectural and industrial aluminium sections including round, square, rectangular, oval, and custom profiles. Designed for window frames, doors, curtain walls, and structural glazing.",
            Grades: [
                "6063",
                "6061"
            ],
            Finishes: [
                "Mill Finish",
                "Anodized",
                "Powder Coated"
            ],
            Makes: [
                "Hindalco",
                "NALCO",
                "Imported & Domestic Mills"
            ],
            images: ["", ""]
            },
            {
            name: "Fasteners & Hardware",
            description: "Comprehensive range of lightweight aluminium fasteners and hardware for specialized applications requiring corrosion resistance and non-magnetic properties. Includes bolts, screws, rivets, and custom hardware.",
            Grades: [
                "2024",
                "6061",
                "7075"
            ],
            Finishes: [
                "Natural",
                "Anodized"
            ],
            Makes: [
                "Imported & Domestic Manufacturers"
            ],
            images: ["", ""]
            }
        ],
        features: [
            "Exceptional strength-to-weight ratio",
            "Superior corrosion resistance",
            "Excellent thermal and electrical conductivity",
            "High reflectivity",
            "100% recyclable and sustainable",
            "Non-magnetic properties"
        ],
        products: [
            {
                name: "Aluminium 1100 Sheets",
                description: "Commercially pure aluminium (99% minimum) with excellent formability, corrosion resistance, and weldability.",
                specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Polished"],
                applications: ["Food and chemical handling equipment", "Heat exchangers", "Light reflectors", "Decorative applications"]
            },
            {
                name: "Aluminium 5052 Sheets",
                description: "Aluminium-magnesium alloy with moderate strength and excellent corrosion resistance, particularly in marine environments.",
                specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Brushed"],
                applications: ["Marine components", "Aircraft parts", "Pressure vessels", "Electronic chassis"]
            },
            {
                name: "Aluminium 6061 Sheets",
                description: "Aluminium-magnesium-silicon alloy with good strength, formability, weldability, and corrosion resistance.",
                specifications: ["Thickness: 0.3mm to 100mm", "Width: Up to 2500mm", "Length: Up to 6000mm", "Surface: Mill finish, Anodized, Polished"],
                applications: ["Structural components", "Marine applications", "Transportation", "Aerospace industry"]
            },
            {
                name: "Aluminium 6063 Sections",
                description: "Architectural grade aluminium with excellent extrudability and surface finish for structural applications.",
                specifications: ["Shapes: Round, Square, Rectangle, Oval, Custom profiles", "Sizes: All standard and custom", "Finish: Mill, Anodized, Powder coated", "Tolerance: ±0.1mm"],
                applications: ["Window and door frames", "Structural glazing", "Solar panel frames", "Architectural applications"]
            },
            {
                name: "Aluminium 7075 Sheets",
                description: "High-strength aerospace grade with excellent fatigue resistance and good machinability.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Mill finish"],
                applications: ["Aircraft structures", "Aerospace components", "High-stress applications", "Defense equipment"]
            },
            {
                name: "Aluminium Pipes & Tubes",
                description: "Lightweight aluminium pipes and tubes for various industrial and architectural applications.",
                specifications: ["Grades: 6061, 6063, 5052", "Shapes: Round, Square, Rectangular", "Wall thickness: 1mm to 25mm", "Finish: Mill, Anodized"],
                applications: ["Heat exchangers", "Structural frameworks", "Pneumatic systems", "Architectural elements"]
            },
            {
                name: "Aluminium Channels & Angles",
                description: "Structural aluminium profiles including channels and angles for construction and fabrication.",
                specifications: ["Types: C-channel, U-channel, Equal angles, Unequal angles", "Grades: 6061, 6063", "Sizes: Standard and custom", "Finish: Mill, Anodized"],
                applications: ["Building construction", "Industrial structures", "Solar mounting systems", "General fabrication"]
            },
            {
                name: "Aluminium Fasteners & Hardware",
                description: "Lightweight aluminium fasteners and hardware for specialized applications requiring corrosion resistance.",
                specifications: ["Grades: 2024, 6061, 7075", "Types: Hex bolts, Socket screws, Rivets, Nuts", "Sizes: M3 to M24", "Finish: Natural, Anodized"],
                applications: ["Aerospace applications", "Marine hardware", "Electrical panels", "Solar installations", "Architectural fastening"]
            },
            {
                name: "Aluminium Coils",
                description: "High-quality aluminium coils for various processing and manufacturing applications.",
                specifications: ["Grades: 1100, 3003, 5052, 6061", "Thickness: 0.2mm to 6mm", "Width: Up to 2000mm", "Temper: O, H14, H16, H18"],
                applications: ["Stamping and forming", "Packaging industry", "Automotive panels", "Electrical applications"]
            }
        ],
        certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B209", "EN 573-3"],
        industries: ["Aerospace", "Automotive", "Construction", "Electronics", "Packaging", "Marine", "Solar Energy", "Transportation"]
    },
    'fasteners-hardware': {
        name: "Fasteners & Hardware",
        title: "Fasteners & Hardware",
        description: "Discover our extensive range of fasteners and hardware, engineered for superior corrosion resistance, strength, and reliability in demanding environments. Ideal for construction, marine, food processing, and industrial applications.",
        image: "/fasteners_hardware.jpg",
        our_range: [
            "Hex Bolts",
            "Socket Screws",
            "Machine Screws",
            "Wood Screws",
            "Nuts",
            "Washers",
            "Anchors",
            "Custom Fasteners",
            "Hardware Accessories"
        ],
        product_range: [
            {
                name: "Hex Bolts & Nuts",
                description: "Precision-manufactured hex bolts and nuts in various grades and sizes, suitable for structural, mechanical, and general fastening applications. Available with coarse and fine threads, and in multiple finishes.",
                Grades: [
                    "304",
                    "316",
                    "202"
                ],
                Finishes: [
                    "Plain",
                    "Passivated",
                    "Polished"
                ],
                Makes: [
                    "Unbrako",
                    "TVS",
                    "Imported & Domestic Manufacturers"
                ],
                images: ["", ""]
            },
            {
                name: "Socket Screws & Cap Screws",
                description: "High-strength socket head cap screws, button head, and countersunk screws for precision assemblies and machinery. Available in metric and imperial sizes.",
                Grades: [
                    "304",
                    "316"
                ],
                Finishes: [
                    "Plain",
                    "Black Oxide",
                    "Passivated"
                ],
                Makes: [
                    "Unbrako",
                    "TVS",
                    "Imported & Domestic Manufacturers"
                ],
                images: ["", ""]
            },
            {
                name: "Machine Screws & Wood Screws",
                description: "Versatile machine screws and wood screws for fastening in metal, plastic, and wood. Offered in pan head, flat head, and round head styles.",
                Grades: [
                    "304",
                    "316"
                ],
                Finishes: [
                    "Plain",
                    "Passivated"
                ],
                Makes: [
                    "Imported & Domestic Manufacturers"
                ],
                images: ["", ""]
            },
            {
                name: "Washers & Anchors",
                description: "Comprehensive range of washers (plain, spring, lock) and anchors (wedge, sleeve, drop-in) for secure and reliable fastening in construction and industrial projects.",
                Grades: [
                    "304",
                    "316"
                ],
                Finishes: [
                    "Plain",
                    "Passivated"
                ],
                Makes: [
                    "Imported & Domestic Manufacturers"
                ],
                images: ["", ""]
            },
            {
                name: "Custom Fasteners & Hardware Accessories",
                description: "Custom-designed fasteners and hardware accessories including studs, threaded rods, rivets, pins, hinges, handles, and brackets, tailored to your specifications.",
                Grades: [
                    "304",
                    "316",
                    "202"
                ],
                Finishes: [
                    "Plain",
                    "Polished",
                    "Passivated"
                ],
                Makes: [
                    "Imported & Domestic Manufacturers"
                ],
                images: ["", ""]
            }
        ],
        features: [
            "Superior corrosion resistance in harsh environments",
            "High tensile and shear strength",
            "Wide range of sizes and thread types",
            "Non-magnetic and hygienic options",
            "Custom manufacturing available",
            "Compliant with international standards (DIN, ASTM, ISO)"
        ],
        products: [
            {
                name: "Hex Bolts & Nuts",
                description: "Hex bolts and nuts for structural and general fastening.",
                specifications: ["Grades: 304, 316, 202", "Sizes: M3 to M64", "Threads: Metric & Imperial", "Finish: Plain, Passivated"],
                applications: ["Construction", "Machinery", "Marine", "Automotive"]
            },
            {
                name: "Socket Head Cap Screws",
                description: "High-strength socket head cap screws for precision assemblies.",
                specifications: ["Grades: 304, 316", "Sizes: M3 to M36", "Types: Allen, Button, Countersunk", "Finish: Plain, Black Oxide"],
                applications: ["Machinery", "Equipment assembly", "Automotive", "Industrial"]
            },
            {
                name: "Machine Screws & Wood Screws",
                description: "Versatile screws for fastening in metal, plastic, and wood.",
                specifications: ["Grades: 304, 316", "Sizes: M2 to M12", "Heads: Pan, Flat, Round", "Finish: Plain, Passivated"],
                applications: ["Electrical panels", "Furniture", "Cabinetry", "General fastening"]
            },
            {
                name: "Washers & Anchors",
                description: "Washers and anchors for secure and reliable fastening.",
                specifications: ["Grades: 304, 316", "Types: Plain, Spring, Lock, Wedge, Sleeve", "Sizes: M3 to M36", "Finish: Plain, Passivated"],
                applications: ["Construction", "Infrastructure", "Industrial equipment", "Marine"]
            },
            {
                name: "Custom Fasteners & Hardware Accessories",
                description: "Custom fasteners and hardware for specialized requirements.",
                specifications: ["Grades: 304, 316, 202", "Types: Studs, Threaded rods, Rivets, Pins, Hinges, Handles", "Finish: As required"],
                applications: ["OEM manufacturing", "Architectural hardware", "Special projects", "Industrial solutions"]
            }
        ],
        certifications: ["ISO 9001:2015", "ASTM A193", "ASTM A194", "DIN 933", "ISO 3506"],
        industries: ["Construction", "Marine", "Automotive", "Food Processing", "Chemical", "Infrastructure", "General Engineering"]
    },
    'fittings-flanges': {
        name: "Fittings & Flanges",
        title: "Fittings & Flanges",
        description: "Discover our comprehensive range of stainless steel, alloy, and specialty fittings and flanges, engineered for leak-proof connections and reliable performance in piping systems across industries.",
        image: "/fittings_flanges.jpg",
        our_range: [
            "Buttweld Fittings",
            "Forged Fittings",
            "Threaded Fittings",
            "Socket Weld Fittings",
            "Weld Neck Flanges",
            "Slip-On Flanges",
            "Blind Flanges",
            "Lap Joint Flanges",
            "Socket Weld Flanges",
            "Threaded Flanges",
            "Custom Fittings & Flanges"
        ],
        product_range: [
            {
                name: "Buttweld Fittings",
                description: "Seamless and welded buttweld fittings including elbows, tees, reducers, and caps for high-integrity welded piping systems. Available in stainless steel, carbon steel, alloy steel, and special alloys.",
                Grades: [
                    "SS 304/304L, 316/316L, 321, 347",
                    "Duplex & Super Duplex",
                    "Alloy Steel, Carbon Steel",
                    "Nickel Alloys, Hastelloy, Inconel"
                ],
                Standards: [
                    "ASME B16.9",
                    "MSS-SP-43",
                    "DIN, JIS"
                ],
                images: ["", ""]
            },
            {
                name: "Forged Fittings",
                description: "High-pressure forged fittings including elbows, tees, couplings, unions, and plugs in socket weld and threaded types. Suitable for critical applications in oil & gas, chemical, and power plants.",
                Grades: [
                    "SS 304/304L, 316/316L",
                    "Alloy Steel, Carbon Steel",
                    "Duplex, Super Duplex"
                ],
                Standards: [
                    "ASME B16.11",
                    "BS 3799"
                ],
                images: ["", ""]
            },
            {
                name: "Flanges",
                description: "Comprehensive range of flanges: weld neck, slip-on, blind, lap joint, socket weld, and threaded. Precision-machined for leak-proof connections in process piping and pressure vessels.",
                Grades: [
                    "SS 304/304L, 316/316L, 321",
                    "Duplex, Super Duplex",
                    "Alloy Steel, Carbon Steel",
                    "Nickel Alloys"
                ],
                Standards: [
                    "ASME B16.5",
                    "ASME B16.47",
                    "DIN, JIS"
                ],
                images: ["", ""]
            },
            {
                name: "Custom Fittings & Flanges",
                description: "Tailor-made fittings and flanges as per customer drawings and specifications for specialized and non-standard applications.",
                Grades: [
                    "All Stainless, Alloy, and Special Grades"
                ],
                Standards: [
                    "As required"
                ],
                images: ["", ""]
            }
        ],
        features: [
            "Leak-proof and high-strength connections",
            "Wide range of sizes and pressure ratings",
            "Manufactured to international standards (ASME, DIN, JIS)",
            "Available in stainless steel, alloy steel, carbon steel, and special alloys",
            "Corrosion and temperature resistant options",
            "Custom fabrication available"
        ],
        products: [
            {
                name: "Stainless Steel Fittings & Flanges",
                description: "Precision-engineered stainless steel fittings and flanges for process piping and fluid handling.",
                specifications: [
                    "Grades: 304, 304L, 316, 316L, 321, 347",
                    "Types: Elbows, Tees, Reducers, Caps, Weld Neck, Slip-On, Blind, Lap Joint, Threaded, Socket Weld",
                    "Sizes: 1/2\" to 48\"",
                    "Standards: ASME B16.9, B16.5, B16.11"
                ],
                applications: [
                    "Chemical processing",
                    "Water treatment",
                    "Oil & gas",
                    "Pharmaceutical",
                    "Food & beverage"
                ]
            },
            {
                name: "Alloy & Special Fittings & Flanges",
                description: "High-performance alloy and special material fittings and flanges for demanding environments.",
                specifications: [
                    "Materials: Duplex, Super Duplex, Inconel, Hastelloy, Monel, Alloy 20",
                    "Types: All standard and custom",
                    "Pressure ratings: 150# to 2500#",
                    "Standards: ASME, DIN, JIS"
                ],
                applications: [
                    "Offshore & marine",
                    "Desalination",
                    "Power generation",
                    "Petrochemical",
                    "High-corrosion service"
                ]
            },
            {
                name: "Carbon Steel Fittings & Flanges",
                description: "Cost-effective carbon steel fittings and flanges for general engineering and structural piping.",
                specifications: [
                    "Grades: ASTM A234 WPB, ASTM A105",
                    "Types: Elbows, Tees, Reducers, Flanges",
                    "Sizes: 1/2\" to 48\"",
                    "Standards: ASME B16.9, B16.5"
                ],
                applications: [
                    "Construction",
                    "Water supply",
                    "General engineering",
                    "Infrastructure"
                ]
            }
        ],
        certifications: [
            "ISO 9001:2015",
            "ASME B16.9",
            "ASME B16.5",
            "PED 2014/68/EU",
            "IBR Approved"
        ],
        industries: [
            "Oil & Gas",
            "Chemical Processing",
            "Power Generation",
            "Water Treatment",
            "Pharmaceutical",
            "Food & Beverage",
            "Construction",
            "Marine"
        ]
    },
    'ms-gi-coated': {
        name: "MS & GI Coated Products",
        title: "Mild Steel & Galvanized Iron Solutions",
        description: "Our comprehensive range of mild steel and galvanized iron products provides cost-effective solutions with excellent strength and corrosion protection for various applications.",
        image: "/ms_and_gi.jpg",
        features: [
            "Cost-effective material solutions",
            "Excellent strength and durability",
            "Superior corrosion protection (GI coating)",
            "Easy to fabricate and weld",
            "Wide range of sizes and specifications",
            "Suitable for structural applications"
        ],
        products: [
            {
                name: "MS Sheets & Plates",
                description: "High-quality mild steel sheets and plates for general engineering and construction applications.",
                specifications: ["Thickness: 0.5mm to 100mm", "Width: Up to 2500mm", "Length: Up to 12000mm", "Grades: IS 2062, ASTM A36"],
                applications: ["Structural fabrication", "General engineering", "Shipbuilding", "Construction"]
            },
            {
                name: "GI Sheets & Coils",
                description: "Galvanized iron sheets with zinc coating for enhanced corrosion resistance.",
                specifications: ["Thickness: 0.12mm to 4.0mm", "Width: Up to 1250mm", "Coating: 120-275 GSM", "Standards: IS 277, ASTM A653"],
                applications: ["Roofing", "Cladding", "Ductwork", "Automotive panels"]
            },
            {
                name: "MS Pipes & Tubes",
                description: "Mild steel pipes and tubes in various shapes for structural and fluid transport applications.",
                specifications: ["Types: ERW, Seamless", "Shapes: Round, Square, Rectangular", "Sizes: 15mm to 600mm OD", "Standards: IS 1239, ASTM A53"],
                applications: ["Water supply", "Structural framework", "Scaffolding", "General piping"]
            },
            {
                name: "GI Pipes & Fittings",
                description: "Galvanized iron pipes with superior corrosion resistance for water and gas applications.",
                specifications: ["Sizes: 15mm to 150mm NB", "Class: Light, Medium, Heavy", "Coating: Hot-dip galvanized", "Standards: IS 1239, BS 1387"],
                applications: ["Water supply systems", "Gas distribution", "Fire fighting systems", "Irrigation"]
            },
            {
                name: "MS & GI Fasteners",
                description: "Comprehensive range of mild steel and galvanized fasteners for construction and industrial applications.",
                specifications: ["Types: Hex bolts, Carriage bolts, Machine screws, Self-drilling screws", "Sizes: M6 to M64", "Coating: Zinc plated, Hot-dip galvanized", "Standards: IS 1367, DIN, ASTM"],
                applications: ["Construction fastening", "Structural connections", "General engineering", "Outdoor applications"]
            },
            {
                name: "MS Angles & Channels",
                description: "Structural mild steel angles and channels for construction and fabrication work.",
                specifications: ["Angles: Equal & Unequal", "Channels: ISMC, ISLB", "Sizes: 20x20mm to 200x200mm", "Standards: IS 2062"],
                applications: ["Building construction", "Industrial structures", "Transmission towers", "General fabrication"]
            },
            {
                name: "Hardware & Accessories",
                description: "Complete range of hardware items including hinges, handles, locks, and mounting accessories.",
                specifications: ["Materials: MS, GI, Brass", "Types: Door hardware, Cabinet fittings, Mounting brackets", "Finishes: Zinc plated, Powder coated", "Applications: Residential & Commercial"],
                applications: ["Door and window fittings", "Cabinet hardware", "Architectural applications", "General hardware needs"]
            }
        ],
        certifications: ["ISO 9001:2015", "BIS Certification", "IS 2062", "ASTM Standards"],
        industries: ["Construction", "Infrastructure", "Water Supply", "Agriculture", "General Engineering", "Automotive", "Shipbuilding"]
    },
    'duplex-steel': {
        name: "Duplex Steel",
        title: "Advanced Duplex Steel Solutions",
        description: "Our duplex steel products offer an optimal balance of strength, corrosion resistance, and ductility through their unique dual-phase microstructure for demanding industrial environments.",
        image: "/duplex-steel.jpg",
        features: [
            "Superior strength compared to austenitic stainless steels",
            "Excellent resistance to stress corrosion cracking",
            "High resistance to chloride pitting and crevice corrosion",
            "Better thermal conductivity than austenitic grades",
            "Good weldability and formability",
            "Cost-effective due to lower nickel content"
        ],
        products: [
            {
                name: "Duplex 2205 Sheets",
                description: "The most widely used duplex grade with excellent corrosion resistance and roughly twice the yield strength of austenitic stainless steels.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
                applications: ["Chemical processing vessels", "Oil and gas pipelines", "Desalination plants", "Heat exchangers"]
            },
            {
                name: "Duplex 2304 Sheets",
                description: "Lean duplex grade with lower nickel content but good corrosion resistance and mechanical properties.",
                specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
                applications: ["Storage tanks", "Water systems", "Architectural applications", "Pulp and paper industry"]
            },
            {
                name: "Duplex S31803 Sheets",
                description: "Standard duplex grade offering excellent resistance to corrosion in various aggressive environments.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
                applications: ["Pressure vessels", "Heat exchangers", "Chemical processing equipment", "Offshore oil and gas platforms"]
            },
            {
                name: "Duplex Steel Pipes & Tubes",
                description: "High-strength duplex steel pipes for demanding applications in corrosive environments.",
                specifications: ["Grades: 2205, 2304, S31803", "Types: Seamless, Welded", "Sizes: 15mm to 600mm OD", "Standards: ASTM A790, ASTM A928"],
                applications: ["Oil and gas transport", "Chemical processing", "Seawater systems", "Pulp and paper"]
            },
            {
                name: "Duplex Steel Fasteners",
                description: "High-strength duplex steel fasteners for critical applications requiring superior corrosion resistance.",
                specifications: ["Grades: 2205, 2304", "Types: Hex bolts, Stud bolts, Nuts, Washers", "Sizes: M8 to M64", "Standards: ASTM A276, ASTM F2281"],
                applications: ["Offshore platforms", "Chemical processing equipment", "Desalination plants", "Marine applications", "Oil and gas installations"]
            },
            {
                name: "Duplex Steel Fittings & Flanges",
                description: "Precision-engineered duplex steel fittings and flanges for high-pressure and corrosive service.",
                specifications: ["Grades: 2205, 2304, S31803", "Types: Elbows, Tees, Reducers, Flanges", "Pressure ratings: 150# to 2500#", "Standards: ASTM A815, ASTM A182"],
                applications: ["Process piping", "Offshore installations", "Chemical plants", "Water treatment facilities"]
            }
        ],
        certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NORSOK M-630"],
        industries: ["Oil & Gas", "Chemical Processing", "Pulp & Paper", "Desalination", "Marine", "Mining", "Power Generation"]
    },
    'super-duplex-steel': {
        name: "Super Duplex Steel",
        title: "Premium Super Duplex Steel Products",
        description: "Our super duplex steel products deliver exceptional corrosion resistance and superior mechanical properties for the most challenging and aggressive industrial environments.",
        image: "/super-duplex-steel.jpg",
        features: [
            "Outstanding resistance to pitting and crevice corrosion",
            "Superior chloride stress corrosion cracking resistance",
            "Excellent strength (approximately twice that of austenitic stainless steels)",
            "High resistance to erosion and fatigue",
            "Extended service life in extreme environments",
            "Reduced maintenance costs in aggressive applications"
        ],
        products: [
            {
                name: "Super Duplex 2507 Sheets",
                description: "Premium grade with exceptional corrosion resistance and high strength for the most demanding applications.",
                specifications: ["Thickness: 0.8mm to 40mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
                applications: ["Offshore oil and gas", "Chemical processing in hot acids", "Seawater desalination", "FGD systems"]
            },
            {
                name: "Super Duplex S32750 Sheets",
                description: "High-performance grade with excellent resistance to pitting, crevice corrosion, and stress corrosion cracking.",
                specifications: ["Thickness: 0.8mm to 40mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: 2B, No.4, Hairline"],
                applications: ["Subsea oil and gas equipment", "Heat exchangers in aggressive media", "Chemical process vessels", "Pulp and paper digesters"]
            },
            {
                name: "Super Duplex S32760 Sheets",
                description: "Enhanced super duplex grade with improved resistance to pitting corrosion in high-chloride environments.",
                specifications: ["Thickness: 1mm to 30mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, No.4"],
                applications: ["Offshore platforms", "Flue gas scrubbers", "Chemical transport equipment", "High-chloride process streams"]
            },
            {
                name: "Super Duplex Steel Pipes",
                description: "Premium super duplex steel pipes for the most demanding corrosive environments.",
                specifications: ["Grades: 2507, S32750, S32760", "Types: Seamless, Welded", "Sizes: 25mm to 300mm OD", "Standards: ASTM A790, ASTM A928"],
                applications: ["Subsea pipelines", "Chemical processing", "Offshore installations", "Desalination systems"]
            },
            {
                name: "Super Duplex Fasteners",
                description: "Ultra-high performance fasteners for extreme service conditions in aggressive environments.",
                specifications: ["Grades: 2507, S32750, S32760", "Types: Hex bolts, Socket screws, Stud bolts, Nuts", "Sizes: M8 to M48", "Standards: ASTM A276, NACE MR0175"],
                applications: ["Offshore oil and gas", "Subsea equipment", "Chemical processing", "Desalination plants", "Marine installations"]
            },
            {
                name: "Super Duplex Fittings & Flanges",
                description: "Precision super duplex steel fittings and flanges for critical high-pressure applications.",
                specifications: ["Grades: 2507, S32750, S32760", "Types: Weld neck, Blind, Slip-on flanges", "Fittings: Elbows, Tees, Reducers", "Pressure: 150# to 2500#"],
                applications: ["Offshore piping systems", "Chemical process equipment", "Seawater service", "High-pressure applications"]
            }
        ],
        certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NORSOK M-630", "DNV GL"],
        industries: ["Oil & Gas", "Offshore", "Chemical Processing", "Desalination", "Pulp & Paper", "Pollution Control", "Power Generation"]
    },
    'alloy-steel': {
        name: "Alloy Steel",
        title: "Specialized Alloy Steel Solutions",
        description: "Our high-performance alloy steel products feature custom compositions engineered for superior strength, heat resistance, and durability in extreme operating conditions.",
        image: "/alloy-steel.webp",
        features: [
            "Enhanced mechanical properties through precise alloying",
            "Superior performance in high-temperature applications",
            "Excellent resistance to mechanical fatigue",
            "Good weldability and formability",
            "Customizable properties for specific applications",
            "Extended service life in harsh environments"
        ],
        products: [
            {
                name: "Alloy 20 Sheets",
                description: "Nickel-iron-chromium alloy with excellent resistance to sulfuric acid and many other corrosive chemicals.",
                specifications: ["Thickness: 0.6mm to 50mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
                applications: ["Chemical processing equipment", "Pharmaceutical reactors", "Food processing", "Pickling equipment"]
            },
            {
                name: "Incoloy 800 Sheets",
                description: "Nickel-iron-chromium alloy with exceptional resistance to high-temperature oxidation and carburization.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
                applications: ["Heat treatment equipment", "Chemical and petrochemical processing", "Power generation", "Nuclear applications"]
            },
            {
                name: "Inconel 600 Sheets",
                description: "Nickel-chromium alloy with excellent resistance to oxidation and corrosion at elevated temperatures.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
                applications: ["Gas turbine components", "Heat treatment fixtures", "Chemical processing", "Nuclear engineering"]
            },
            {
                name: "P91/T91 Alloy Sheets",
                description: "High-strength ferritic/martensitic steel with excellent creep resistance at elevated temperatures.",
                specifications: ["Thickness: 1mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Hot-rolled, Cold-rolled"],
                applications: ["Power plants", "Boiler components", "Steam pipes", "Heat exchangers"]
            },
            {
                name: "Alloy Steel Pipes & Tubes",
                description: "Specialized alloy steel pipes for high-temperature and high-pressure applications.",
                specifications: ["Grades: P5, P9, P11, P22, P91", "Types: Seamless, Welded", "Sizes: 15mm to 600mm OD", "Standards: ASTM A335, ASTM A213"],
                applications: ["Power generation", "Petrochemical processing", "High-temperature service", "Pressure vessels"]
            },
            {
                name: "Alloy Steel Fasteners",
                description: "High-strength alloy steel fasteners for critical applications requiring superior mechanical properties.",
                specifications: ["Grades: 4140, 4340, 8620, Inconel 600/625", "Types: Hex bolts, Socket screws, Stud bolts", "Sizes: M6 to M64", "Heat treatment: As per application"],
                applications: ["Aerospace applications", "Power generation", "Oil and gas equipment", "High-temperature service", "Chemical processing"]
            },
            {
                name: "Alloy Steel Bars & Rods",
                description: "Precision alloy steel bars and rods for machining and fabrication of critical components.",
                specifications: ["Grades: 4140, 4340, 8620, Alloy 20, Inconel", "Diameters: 10mm to 500mm", "Lengths: Up to 6000mm", "Condition: Annealed, Normalized, Hardened"],
                applications: ["Machined components", "Shafts", "Gears", "High-stress applications"]
            }
        ],
        certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM A240", "ASME SA240", "NACE MR0175/ISO 15156"],
        industries: ["Power Generation", "Chemical Processing", "Oil & Gas", "Aerospace", "Heat Treatment", "Automotive", "Nuclear"]
    },
    'brass-copper': {
        name: "Brass & Copper",
        title: "Premium Brass & Copper Products",
        description: "Our high-quality brass and copper products combine excellent thermal and electrical conductivity with corrosion resistance for applications ranging from plumbing to electrical systems.",
        image: "/brass-copper.webp",
        features: [
            "Exceptional thermal and electrical conductivity",
            "Excellent corrosion resistance, particularly in seawater",
            "Antimicrobial properties",
            "Good machinability and formability",
            "Attractive appearance with various finish options",
            "Long service life with minimal maintenance"
        ],
        products: [
            {
                name: "Copper C11000 Sheets",
                description: "Commercially pure copper (99.9%) with excellent electrical and thermal conductivity.",
                specifications: ["Thickness: 0.2mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Bright, Matte"],
                applications: ["Electrical conductors", "Heat exchangers", "Roofing and flashing", "Decorative architectural elements"]
            },
            {
                name: "Brass C26000 Sheets",
                description: "70/30 brass with good strength, formability, and machinability.",
                specifications: ["Thickness: 0.3mm to 40mm", "Width: Up to 1800mm", "Length: Up to 6000mm", "Surface: Polished, Brushed"],
                applications: ["Fasteners", "Plumbing components", "Electrical connectors", "Decorative hardware"]
            },
            {
                name: "Cupronickel 70/30 Sheets",
                description: "70% copper, 30% nickel alloy with outstanding resistance to seawater corrosion and biofouling.",
                specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Bright finish"],
                applications: ["Marine condensers", "Seawater piping systems", "Desalination plants", "Heat exchangers"]
            },
            {
                name: "Cupronickel 90/10 Sheets",
                description: "90% copper, 10% nickel alloy with excellent resistance to erosion-corrosion in flowing seawater.",
                specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Bright finish"],
                applications: ["Marine equipment", "Ship hulls", "Offshore platforms", "Heat exchangers"]
            },
            {
                name: "Copper & Brass Pipes",
                description: "High-quality copper and brass pipes for plumbing, electrical, and marine applications.",
                specifications: ["Materials: Copper, Brass, Cupronickel", "Types: Seamless, Welded", "Sizes: 6mm to 300mm OD", "Standards: ASTM B88, ASTM B111"],
                applications: ["Plumbing systems", "Heat exchangers", "Marine applications", "Electrical conduits"]
            },
            {
                name: "Brass & Copper Fasteners",
                description: "Corrosion-resistant brass and copper fasteners for marine and electrical applications.",
                specifications: ["Materials: Brass C360, Copper C110, Bronze", "Types: Hex bolts, Machine screws, Wood screws, Nuts", "Sizes: M3 to M20", "Finish: Natural, Nickel plated"],
                applications: ["Marine hardware", "Electrical panels", "Plumbing fixtures", "Decorative fastening", "Boat building"]
            },
            {
                name: "Copper Rods & Bars",
                description: "High-conductivity copper rods and bars for electrical and thermal applications.",
                specifications: ["Grades: C101, C110, C11000", "Diameters: 3"]
            },
            {
                name: "Copper Rods & Bars",
                description: "High-conductivity copper rods and bars for electrical and thermal applications.",
                specifications: ["Grades: C101, C110, C11000", "Diameters: 3mm to 200mm", "Lengths: Up to 6000mm", "Condition: Hard, Soft, Half-hard"],
                applications: ["Electrical conductors", "Grounding systems", "Heat sinks", "Machined components"]
            },
            {
                name: "Brass Rods & Bars",
                description: "Free-machining brass rods and bars for precision components and decorative applications.",
                specifications: ["Grades: C360, C260, C464", "Diameters: 3mm to 150mm", "Lengths: Up to 6000mm", "Finish: Bright, Turned"],
                applications: ["Machined parts", "Valve components", "Decorative elements", "Plumbing fittings"]
            },
            {
                name: "Bronze Alloys",
                description: "High-strength bronze alloys with excellent wear resistance and corrosion properties.",
                specifications: ["Grades: C932, C954, Phosphor Bronze", "Forms: Sheets, Rods, Tubes", "Sizes: Custom and standard", "Finish: Mill, Polished"],
                applications: ["Bearings", "Bushings", "Marine hardware", "Electrical connectors"]
            },
            {
                name: "Copper & Brass Fittings",
                description: "Precision-manufactured copper and brass fittings for plumbing and industrial systems.",
                specifications: ["Materials: Copper, Brass, Bronze", "Types: Elbows, Tees, Unions, Couplings", "Connections: Solder, Threaded, Compression", "Standards: ASTM B75, ASTM B584"],
                applications: ["Plumbing systems", "HVAC installations", "Industrial piping", "Gas distribution"]
            }
        ],
        certifications: ["ISO 9001:2015", "ASTM B152", "ASTM B36", "EN 12449"],
        industries: ["Electrical", "Plumbing", "Marine", "HVAC", "Telecommunications", "Decorative", "Automotive"]
    },
    'carbon-steel': {
        name: "Carbon Steel",
        title: "High-Quality Carbon Steel Products",
        description: "Our comprehensive range of carbon steel products delivers exceptional strength, durability, and versatility for structural, mechanical, and general engineering applications across industries.",
        image: "/carbon-steel.jpg",
        features: [
            "High tensile strength and durability",
            "Excellent weldability and machinability",
            "Cost-effective material solution",
            "Wide range of carbon content options",
            "Good formability for various applications",
            "Suitable for heat treatment processes"
        ],
        products: [
            {
                name: "Low Carbon Steel Sheets",
                description: "Mild steel sheets with low carbon content (0.05-0.25%) offering excellent formability and weldability.",
                specifications: ["Carbon content: 0.05-0.25%", "Thickness: 0.5mm to 100mm", "Width: Up to 2500mm", "Standards: ASTM A36, IS 2062"],
                applications: ["Automotive body panels", "Construction materials", "General fabrication", "Deep drawing applications"]
            },
            {
                name: "Medium Carbon Steel Sheets",
                description: "Balanced carbon content (0.25-0.60%) providing good strength and moderate ductility.",
                specifications: ["Carbon content: 0.25-0.60%", "Thickness: 1mm to 80mm", "Width: Up to 2000mm", "Heat treatment: Normalized, Annealed"],
                applications: ["Machine parts", "Gears", "Shafts", "Structural components"]
            },
            {
                name: "High Carbon Steel Sheets",
                description: "High carbon content (0.60-1.00%) offering superior hardness and wear resistance after heat treatment.",
                specifications: ["Carbon content: 0.60-1.00%", "Thickness: 1mm to 50mm", "Width: Up to 1800mm", "Condition: Annealed, Hardened"],
                applications: ["Cutting tools", "Springs", "Wire", "High-wear components"]
            },
            {
                name: "Carbon Steel Pipes",
                description: "Seamless and welded carbon steel pipes for fluid transport and structural applications.",
                specifications: ["Grades: A53, A106, API 5L", "Types: Seamless, ERW, LSAW", "Sizes: 15mm to 1200mm OD", "Pressure ratings: Various"],
                applications: ["Oil and gas pipelines", "Water supply", "Structural applications", "Mechanical tubing"]
            },
            {
                name: "Carbon Steel Plates",
                description: "Heavy-duty carbon steel plates for pressure vessels, structural, and marine applications.",
                specifications: ["Grades: A516-70, A537, A572", "Thickness: 5mm to 200mm", "Width: Up to 3000mm", "Length: Up to 12000mm"],
                applications: ["Pressure vessels", "Shipbuilding", "Bridge construction", "Heavy machinery"]
            },
            {
                name: "Carbon Steel Bars & Rods",
                description: "Round, square, and hexagonal carbon steel bars for machining and construction applications.",
                specifications: ["Grades: 1018, 1045, 4140", "Sizes: 6mm to 300mm", "Lengths: Up to 6000mm", "Finish: Hot-rolled, Cold-drawn"],
                applications: ["Machined components", "Fastener manufacturing", "Construction reinforcement", "General engineering"]
            },
            {
                name: "Carbon Steel Fasteners",
                description: "High-strength carbon steel fasteners for construction and industrial applications.",
                specifications: ["Grades: Grade 2, Grade 5, Grade 8", "Types: Hex bolts, Cap screws, Threaded rods", "Sizes: M6 to M64", "Coating: Zinc plated, Black oxide"],
                applications: ["Structural fastening", "Machinery assembly", "Automotive applications", "General construction"]
            }
        ],
        certifications: ["ISO 9001:2015", "ASTM A36", "ASTM A572", "IS 2062", "JIS G3101"],
        industries: ["Construction", "Automotive", "Oil & Gas", "Machinery", "Shipbuilding", "Infrastructure", "Manufacturing"]
    },
    'tool-steel': {
        name: "Tool Steel",
        title: "Precision Tool Steel Solutions",
        description: "Our premium tool steel products are engineered for superior hardness, wear resistance, and toughness, designed for cutting tools, dies, and precision manufacturing applications.",
        image: "/tool-steel.jpg",
        features: [
            "Exceptional hardness and wear resistance",
            "Superior toughness and impact resistance",
            "Excellent dimensional stability",
            "High-temperature performance",
            "Precise chemical composition",
            "Consistent mechanical properties"
        ],
        products: [
            {
                name: "D2 Tool Steel",
                description: "High-carbon, high-chromium cold work tool steel with excellent wear resistance and moderate toughness.",
                specifications: ["Carbon: 1.50-1.60%", "Chromium: 11.0-13.0%", "Hardness: 58-62 HRC", "Sizes: Plates, rounds, flats"],
                applications: ["Blanking dies", "Forming dies", "Thread rolling dies", "Slitting cutters"]
            },
            {
                name: "H13 Tool Steel",
                description: "Premium hot work tool steel with excellent thermal shock resistance and toughness at elevated temperatures.",
                specifications: ["Carbon: 0.32-0.45%", "Chromium: 4.75-5.50%", "Hardness: 38-52 HRC", "Heat treatment: Air hardening"],
                applications: ["Die casting dies", "Forging dies", "Extrusion dies", "Hot shear blades"]
            },
            {
                name: "O1 Tool Steel",
                description: "Oil-hardening cold work tool steel with good machinability and moderate wear resistance.",
                specifications: ["Carbon: 0.85-1.00%", "Chromium: 0.40-0.60%", "Hardness: 57-64 HRC", "Heat treatment: Oil quench"],
                applications: ["Cutting tools", "Punches", "Gauges", "Small dies"]
            },
            {
                name: "A2 Tool Steel",
                description: "Air-hardening cold work tool steel with good toughness and dimensional stability.",
                specifications: ["Carbon: 0.95-1.05%", "Chromium: 4.75-5.50%", "Hardness: 57-62 HRC", "Heat treatment: Air hardening"],
                applications: ["Blanking dies", "Forming dies", "Trim dies", "Punches"]
            },
            {
                name: "S7 Tool Steel",
                description: "Shock-resistant tool steel with exceptional toughness and impact resistance.",
                specifications: ["Carbon: 0.45-0.55%", "Chromium: 3.00-3.50%", "Hardness: 54-58 HRC", "Properties: High impact resistance"],
                applications: ["Pneumatic tools", "Chisels", "Punches", "Rivet sets"]
            },
            {
                name: "M2 High Speed Steel",
                description: "Molybdenum-type high-speed steel with excellent cutting performance and heat resistance.",
                specifications: ["Carbon: 0.78-0.88%", "Tungsten: 5.50-6.75%", "Hardness: 62-65 HRC", "Red hardness: Excellent"],
                applications: ["Cutting tools", "Drill bits", "End mills", "Saw blades"]
            },
            {
                name: "P20 Mold Steel",
                description: "Pre-hardened mold steel with good machinability and polishability for plastic injection molds.",
                specifications: ["Carbon: 0.28-0.40%", "Chromium: 1.40-2.00%", "Hardness: 28-32 HRC", "Condition: Pre-hardened"],
                applications: ["Plastic injection molds", "Die casting dies", "Blow molds", "Compression molds"]
            }
        ],
        certifications: ["ISO 9001:2015", "ASTM A681", "JIS SKD", "DIN 1.2379", "AISI Standards"],
        industries: ["Tool & Die", "Automotive", "Aerospace", "Plastic Processing", "Metal Forming", "Cutting Tools", "Precision Manufacturing"]
    },
    'hastelloy': {
        name: "Hastelloy",
        title: "Premium Hastelloy Superalloy Products",
        description: "Our high-performance Hastelloy products deliver exceptional corrosion resistance and high-temperature strength for the most demanding chemical processing and aerospace applications.",
        image: "/hastealloy.jpg",
        features: [
            "Outstanding resistance to oxidizing and reducing environments",
            "Exceptional high-temperature strength and stability",
            "Superior resistance to stress corrosion cracking",
            "Excellent fabricability and weldability",
            "Thermal stability in extreme conditions",
            "Long service life in aggressive chemical environments"
        ],
        products: [
            {
                name: "Hastelloy C-276 Sheets",
                description: "Versatile nickel-molybdenum-chromium alloy with outstanding corrosion resistance in both oxidizing and reducing environments.",
                specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA, No.4"],
                applications: ["Chemical processing equipment", "Pollution control systems", "Pulp and paper production", "Sour gas environments"]
            },
            {
                name: "Hastelloy C-22 Sheets",
                description: "Enhanced corrosion-resistant alloy with superior performance in oxidizing aqueous media and excellent fabricability.",
                specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
                applications: ["Chemical processing", "Pharmaceutical equipment", "Pollution control", "Waste treatment facilities"]
            },
            {
                name: "Hastelloy B-3 Sheets",
                description: "Nickel-molybdenum alloy with exceptional resistance to hydrochloric acid and other reducing chemicals.",
                specifications: ["Thickness: 0.8mm to 30mm", "Width: Up to 1200mm", "Length: Up to 6000mm", "Surface: 2B, BA"],
                applications: ["Hydrochloric acid processing", "Acetic acid production", "Chemical reactors", "Heat exchangers"]
            },
            {
                name: "Hastelloy X Sheets",
                description: "High-temperature alloy with excellent oxidation resistance and structural stability at elevated temperatures.",
                specifications: ["Thickness: 0.5mm to 25mm", "Width: Up to 1200mm", "Length: Up to 6000mm", "Surface: 2B, Annealed"],
                applications: ["Gas turbine components", "Industrial furnace equipment", "Petrochemical processing", "Heat treatment fixtures"]
            },
            {
                name: "Hastelloy Pipes & Tubes",
                description: "High-performance Hastelloy pipes and tubes for critical chemical processing and high-temperature applications.",
                specifications: ["Grades: C-276, C-22, B-3, X", "Types: Seamless, Welded", "Sizes: 15mm to 300mm OD", "Standards: ASTM B622, ASTM B626"],
                applications: ["Chemical processing piping", "Heat exchanger tubes", "Reactor vessels", "High-temperature gas handling"]
            },
            {
                name: "Hastelloy Rods & Bars",
                description: "Precision Hastelloy rods and bars for machined components in extreme service conditions.",
                specifications: ["Grades: C-276, C-22, B-3, X", "Diameters: 6mm to 200mm", "Lengths: Up to 6000mm", "Condition: Solution annealed"],
                applications: ["Pump shafts", "Valve components", "Chemical processing equipment", "High-temperature fasteners"]
            },
            {
                name: "Hastelloy Fasteners",
                description: "Ultra-high performance fasteners for extreme chemical and high-temperature environments.",
                specifications: ["Grades: C-276, C-22, B-3", "Types: Hex bolts, Socket screws, Stud bolts, Nuts", "Sizes: M6 to M48", "Standards: ASTM B574, NACE MR0175"],
                applications: ["Chemical processing equipment", "High-temperature furnaces", "Aerospace applications", "Pollution control systems", "Petrochemical plants"]
            },
            {
                name: "Hastelloy Fittings & Flanges",
                description: "Precision-engineered Hastelloy fittings and flanges for critical chemical processing applications.",
                specifications: ["Grades: C-276, C-22, B-3", "Types: Elbows, Tees, Reducers, Flanges", "Pressure ratings: 150# to 2500#", "Standards: ASTM B366, ASTM B564"],
                applications: ["Chemical process piping", "High-temperature systems", "Corrosive fluid handling", "Reactor connections"]
            }
        ],
        certifications: ["ISO 9001:2015", "ASTM B575", "ASME SB-575", "NACE MR0175/ISO 15156", "AMS Standards"],
        industries: ["Chemical Processing", "Petrochemical", "Aerospace", "Power Generation", "Pollution Control", "Pharmaceutical", "Pulp & Paper"]
    }
};

const relatedProducts = {
  'stainless-steel': ['duplex-steel', 'super-duplex-steel', 'alloy-steel'],
  'aluminium': ['stainless-steel', 'brass-copper', 'ms-gi-coated'],
  'duplex-steel': ['super-duplex-steel', 'stainless-steel', 'alloy-steel'],
  'super-duplex-steel': ['duplex-steel', 'hastelloy', 'alloy-steel'],
  'alloy-steel': ['stainless-steel', 'hastelloy', 'tool-steel'],
  'hastelloy': ['super-duplex-steel', 'alloy-steel', 'duplex-steel'],
  'brass-copper': ['aluminium', 'stainless-steel', 'ms-gi-coated'],
  'carbon-steel': ['ms-gi-coated', 'stainless-steel', 'tool-steel'],
  'tool-steel': ['alloy-steel', 'carbon-steel', 'stainless-steel'],
  'ms-gi-coated': ['stainless-steel', 'carbon-steel', 'aluminium'],
  'fasteners-hardware': ['stainless-steel', 'duplex-steel', 'brass-copper'],
  'fittings-flanges': ['stainless-steel', 'alloy-steel', 'duplex-steel']
};

// // Related products mapping (same as before)
// const relatedProducts = {
//     'stainless-steel': ['duplex-steel', 'super-duplex-steel', 'alloy-steel'],
//     // other relationships same as before
// };

// Default product data for fallback (same as before)
const defaultProduct = {
    name: "Product Not Found",
    title: "Product Category Not Found",
    description: "The requested product category could not be found.",
    image: "/images/products/placeholder.jpg",
    features: [],
    products: [],
    certifications: [],
    industries: [],
    product_range: []
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
                    {/* {activeTab === 'overview' && (
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
                    )} */}

                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-8 md:space-y-12">
                            {/* Product Range Section */}
                            {Array.isArray((product as any).product_range) && (product as any).product_range.length > 0 && (
                                <div className="mb-12">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                                        Our {product.name} Range
                                    </h2>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                        {(product as any).product_range.map((item: any, index: number) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                className="bg-[#1A1A1A] rounded-3xl p-4 md:p-6 hover:bg-[#2A2A2A] transition-all duration-300"
                                            >
                                                <div className="mb-4">
                                                    <h3 className="text-lg md:text-xl font-bold text-[#FF5912] mb-3">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-[#FBF8F3]/80 text-xs md:text-sm leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                {/* Grades */}
                                                {item.Grades && item.Grades.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-semibold text-[#FBF8F3] mb-2">
                                                            Available Grades:
                                                        </h4>
                                                        <div className="space-y-1">
                                                            {item.Grades.map((grade: string, gradeIndex: number) => (
                                                                <div
                                                                    key={gradeIndex}
                                                                    className="text-xs text-[#FBF8F3]/70 bg-[#2A2A2A] px-2 py-1 rounded-md"
                                                                >
                                                                    {grade}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Finishes */}
                                                {item.Finishes && item.Finishes.length > 0 && (
                                                    <div className="mb-4">
                                                        <h4 className="text-sm font-semibold text-[#FBF8F3] mb-2">
                                                            Surface Finishes:
                                                        </h4>
                                                        <div className="flex flex-wrap gap-1">
                                                            {item.Finishes.map((finish: string, finishIndex: number) => (
                                                                <span
                                                                    key={finishIndex}
                                                                    className="text-xs text-[#FBF8F3]/70 bg-[#FF5912]/10 px-2 py-1 rounded-full"
                                                                >
                                                                    {finish}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Makes */}
                                                {item.Makes && item.Makes.length > 0 && (
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-[#FBF8F3] mb-2">
                                                            Available Makes:
                                                        </h4>
                                                        <div className="flex flex-wrap gap-1">
                                                            {item.Makes.map((make: string, makeIndex: number) => (
                                                                <span
                                                                    key={makeIndex}
                                                                    className="text-xs text-[#FBF8F3]/70 bg-[#0A0A0A] px-2 py-1 rounded-md border border-[#2A2A2A]"
                                                                >
                                                                    {make}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Key Features and Industry Applications */}
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
                                        {product.products[activeProduct]?.applications?.map((app, i) => (
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
                                                {item.applications?.map((app, i) => (
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