"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { desc } from 'framer-motion/client';

// Product data for each category (same as before, keeping for reference)
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
//                 name: "Aluminium 7075 Sheets",
//                 description: "High-strength aerospace grade with excellent fatigue resistance and good machinability.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 2000mm", "Length: Up to 6000mm", "Surface: Mill finish"],
//                 applications: ["Aircraft structures", "Aerospace components", "High-stress applications", "Defense equipment"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B209", "EN 573-3"],
//         industries: ["Aerospace", "Automotive", "Construction", "Electronics", "Packaging", "Marine", "Transportation"]
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
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B152", "ASTM B171", "JIS H3100"],
//         industries: ["Marine", "Electrical", "Plumbing", "HVAC", "Architecture", "Renewable Energy", "Desalination"]
//     },
//     'hastelloy': {
//         name: "Hastelloy",
//         title: "Premium Hastelloy Corrosion-Resistant Alloys",
//         description: "Our Hastelloy products provide industry-leading corrosion resistance for the most aggressive chemical environments, ensuring reliability in extreme operating conditions.",
//         image: "/hastealloy.jpg",
//         features: [
//             "Outstanding resistance to pitting and crevice corrosion",
//             "Exceptional performance in oxidizing and reducing environments",
//             "Excellent resistance to stress-corrosion cracking",
//             "Superior high-temperature strength and stability",
//             "Resistant to chloride-induced attack",
//             "Extended service life in extreme chemical environments"
//         ],
//         products: [
//             {
//                 name: "Hastelloy C276 Sheets",
//                 description: "Versatile nickel-molybdenum-chromium alloy with outstanding resistance to a wide range of aggressive chemicals.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, Bright Annealed"],
//                 applications: ["Chemical processing equipment", "FGD systems", "Waste treatment", "Pulp and paper production"]
//             },
//             {
//                 name: "Hastelloy C22 Sheets",
//                 description: "Enhanced version of C276 with improved resistance to oxidizing media and better fabricability.",
//                 specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, Bright Annealed"],
//                 applications: ["Pharmaceutical equipment", "Chemical processing", "Pollution control", "Marine applications"]
//             },
//             {
//                 name: "Hastelloy B2 Sheets",
//                 description: "Nickel-molybdenum alloy with exceptional resistance to hydrochloric acid and other reducing environments.",
//                 specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1300mm", "Length: Up to 6000mm", "Surface: 2B, Bright Annealed"],
//                 applications: ["Hydrochloric acid processing", "Chloride processing equipment", "Chemical reactors", "Heat exchangers"]
//             },
//             {
//                 name: "Hastelloy X Sheets",
//                 description: "Nickel-chromium-iron-molybdenum alloy with exceptional oxidation resistance at high temperatures.",
//                 specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1300mm", "Length: Up to 6000mm", "Surface: 2B, Bright Annealed"],
//                 applications: ["Gas turbine components", "Industrial furnaces", "Petrochemical processing", "Nuclear reactors"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B575", "ASME SB575", "NACE MR0175/ISO 15156"],
//         industries: ["Chemical Processing", "Pharmaceutical", "Oil & Gas", "Waste Treatment", "Power Generation", "Pulp & Paper", "Aerospace"]
//     },
//     'titanium': {
//         name: "Titanium",
//         title: "High-Performance Titanium Products",
//         description: "Our premium titanium products combine unmatched strength-to-weight ratio with exceptional corrosion resistance for critical applications in aerospace, medical, and chemical processing sectors.",
//         image: "/titanium.jpg",
//         features: [
//             "Exceptional strength-to-weight ratio",
//             "Superior corrosion resistance in aggressive environments",
//             "Excellent biocompatibility",
//             "High temperature capability up to 600°C",
//             "Non-magnetic properties",
//             "Outstanding fatigue performance"
//         ],
//         products: [
//             {
//                 name: "Titanium Gr 1 Sheets",
//                 description: "Commercially pure titanium with excellent formability and corrosion resistance.",
//                 specifications: ["Thickness: 0.5mm to 25mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Mill finish, Pickled"],
//                 applications: ["Chemical processing equipment", "Desalination plants", "Heat exchangers", "Medical implants"]
//             },
//             {
//                 name: "Titanium Gr 2 Sheets",
//                 description: "Commercially pure grade with higher strength than Grade 1, maintaining excellent corrosion resistance.",
//                 specifications: ["Thickness: 0.5mm to 25mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Mill finish, Pickled"],
//                 applications: ["Chemical processing", "Marine applications", "Pulp and paper production", "Electrochemical applications"]
//             },
//             {
//                 name: "Titanium Gr 5 Sheets",
//                 description: "Ti-6Al-4V alloy with high strength, light weight, and good corrosion resistance.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: Mill finish, Pickled"],
//                 applications: ["Aerospace components", "Medical implants", "Automotive parts", "Sports equipment"]
//             },
//             {
//                 name: "Titanium Gr 7 Sheets",
//                 description: "Pd-stabilized grade with exceptional resistance to crevice corrosion in reducing acids and chlorides.",
//                 specifications: ["Thickness: 0.5mm to 20mm", "Width: Up to 1200mm", "Length: Up to 6000mm", "Surface: Mill finish, Pickled"],
//                 applications: ["Chemical processing equipment", "Chlorine dioxide generators", "Hydrometallurgical equipment", "Offshore oil and gas"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B265", "ASME SB265", "AMS 4911"],
//         industries: ["Aerospace", "Medical", "Chemical Processing", "Oil & Gas", "Marine", "Automotive", "Sports & Recreation"]
//     },
//     'monel-products': {
//         name: "Monel Products",
//         title: "Premium Monel Nickel-Copper Alloys",
//         description: "Our high-quality Monel products offer superior corrosion resistance in acidic and alkaline environments, coupled with excellent mechanical properties across a wide temperature range.",
//         image: "/monel.jpg",
//         features: [
//             "Exceptional resistance to seawater and steam at high temperatures",
//             "Excellent resistance to alkalis and many acids",
//             "Good mechanical properties across a wide temperature range",
//             "Superior resistance to stress corrosion cracking",
//             "Good weldability and fabricability",
//             "Maintains strength in sub-zero temperatures"
//         ],
//         products: [
//             {
//                 name: "Monel 400 Sheets",
//                 description: "Standard nickel-copper alloy with excellent corrosion resistance in reducing environments.",
//                 specifications: ["Thickness: 0.5mm to 50mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, Bright Annealed"],
//                 applications: ["Marine applications", "Chemical processing", "Petroleum refining", "Valves and pumps"]
//             },
//             {
//                 name: "Monel K500 Sheets",
//                 description: "Age-hardenable version of Monel 400 with increased strength while maintaining excellent corrosion resistance.",
//                 specifications: ["Thickness: 0.5mm to 40mm", "Width: Up to 1500mm", "Length: Up to 6000mm", "Surface: 2B, Bright Annealed"],
//                 applications: ["Pump shafts", "Oil well components", "Marine propeller shafts", "Valve components"]
//             },
//             {
//                 name: "Monel R-405 Sheets",
//                 description: "Free-machining version of Monel 400 with added sulfur for improved machinability.",
//                 specifications: ["Thickness: 0.5mm to 30mm", "Width: Up to 1300mm", "Length: Up to 6000mm", "Surface: 2B"],
//                 applications: ["High-precision machined parts", "Valve components", "Pump components", "Fasteners"]
//             },
//             {
//                 name: "Monel 401 Sheets",
//                 description: "Low-carbon variant with enhanced weldability and resistance to carbide precipitation.",
//                 specifications: ["Thickness: 0.5mm to 25mm", "Width: Up to 1300mm", "Length: Up to 6000mm", "Surface: 2B"],
//                 applications: ["Heat exchangers", "Process vessels", "Feedwater heaters", "Marine equipment"]
//             }
//         ],
//         certifications: ["ISO 9001:2015", "ISO 14001:2015", "ASTM B127", "ASME SB127", "NACE MR0175/ISO 15156"],
//         industries: ["Oil & Gas", "Marine", "Chemical Processing", "Power Generation", "Aerospace", "Water Treatment", "Food Processing"]
//     }
// };

const productData = {
    'stainless-steel': {
        name: "Stainless Steel",
        title: "Premium Stainless Steel Products",
        description: "Our high-quality stainless steel products offer exceptional corrosion resistance, durability, and aesthetic appeal for a wide range of applications.",
        image: "/stainless_steel.jpg",
        features: [
            "Superior corrosion resistance",
            "Excellent heat resistance",
            "High strength-to-weight ratio",
            "Hygienic and easy to clean",
            "100% recyclable material",
            "Low maintenance requirements"
        ],
        our_range: [
            "Sheets & Plates",
            "Pipes & Tubes",
            "Rods & Bars",
            "Fasteners & Hardware",
            "Fittings & Flanges"
        ],
        product_range: [
            {
                name: "Sheets & Plates",
                description: "High-quality stainless steel sheets and plates for various industrial applications, available in multiple grades and finishes.",
                images: ["", ""]
            },
            {
                name: "Sheets & Plates",
                description: "High-quality stainless steel sheets and plates for various industrial applications, available in multiple grades and finishes.",
                images: ["", ""]
            },
            {
                name: "Sheets & Plates",
                description: "High-quality stainless steel sheets and plates for various industrial applications, available in multiple grades and finishes.",
                images: ["", ""]
            }
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
    'aluminium': {
        name: "Aluminium",
        title: "High-Performance Aluminium Products",
        description: "Our premium aluminium products combine lightweight properties with excellent corrosion resistance, thermal conductivity, and formability for diverse industrial applications.",
        image: "/aluminium.jpg",
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

// Related products mapping

const relatedProducts = {
    'stainless-steel': ['duplex-steel', 'super-duplex-steel', 'alloy-steel'],
    'ms-gi-coated': ['stainless-steel', 'carbon-steel', 'aluminium'],
    'aluminium': ['stainless-steel', 'brass-copper', 'ms-gi-coated'],
    'duplex-steel': ['super-duplex-steel', 'stainless-steel', 'alloy-steel'],
    'super-duplex-steel': ['duplex-steel', 'hastelloy', 'alloy-steel'],
    'alloy-steel': ['stainless-steel', 'hastelloy', 'tool-steel'],
    'brass-copper': ['aluminium', 'stainless-steel', 'ms-gi-coated'],
    'carbon-steel': ['ms-gi-coated', 'stainless-steel', 'tool-steel'],
    'tool-steel': ['alloy-steel', 'carbon-steel', 'stainless-steel'],
    'hastelloy': ['super-duplex-steel', 'alloy-steel', 'duplex-steel']
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