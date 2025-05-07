"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

// Product categories for dropdown
const productCategories = [
  { name: "Stainless Steel", href: "/products/stainless-steel" },
  { name: "Aluminium", href: "/products/aluminium" },
  { name: "Duplex Steel", href: "/products/duplex-steel" },
  { name: "Super Duplex Steel", href: "/products/super-duplex-steel" },
  { name: "Alloy Steel", href: "/products/alloy-steel" },
  { name: "Brass and Copper", href: "/products/brass-copper" },
  { name: "Hastelloy", href: "/products/hastelloy" },
  { name: "Titanium", href: "/products/titanium" },
  { name: "Monel Products", href: "/products/monel-products" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PRODUCTS", href: "/products", hasDropdown: true },
    { label: "SERVICES", href: "/services" },
    { label: "QUALITY", href: "/quality" },
    { label: "CONTACT", href: "/contact" },
  ];

  const socialLinks = {
    'instagram': "https://www.instagram.com/prabhat.steel?igsh=YzJzbTl6MWNhNDJ5",
    'youtube': "https://youtube.com/@prabhatsteel?si=-Pq3xp_B4yl1Bf-D",
    'linkedin': "https://in.linkedin.com/in/prabhatsteel-connect-720151339" // Keeping LinkedIn as is since no link was provided
  };

  return (
    <html lang="en">
      <head>
        <title>Prabhat Steel - Premium Metal Solutions</title>
        <meta name="description" content="Leading supplier of high-quality stainless steel and alloy products" />
      </head>
      <body className={inter.className}>
        {/* Top bar */}
        <div className="bg-[#0A0A0A] text-white py-3 px-6 hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-sm text-[#FBF8F3]/80">prabhatsteelconnect@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-sm text-[#FBF8F3]/80">+91 ‭7021530230‬</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {(['instagram', 'youtube', 'linkedin'] as Array<keyof typeof socialLinks>).map((social) => (
              <a
                key={social}
                href={socialLinks[social as keyof typeof socialLinks]}
                className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF5912] transition-colors duration-300"
              >
                <span className="sr-only">{social}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {social === 'instagram' && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  )}
                  {social === 'youtube' && (
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  )}
                  {social === 'linkedin' && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/95 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-6">
            <nav className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="relative z-10">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-white">
                    <span className="text-[#FF5912]">Prabhat</span> Steel
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.hasDropdown ? (
                      <div>
                        <Link
                          href={item.href}
                          className={`text-sm font-medium transition-colors duration-300 py-2 flex items-center gap-1 ${pathname === item.href || pathname.startsWith(item.href + '/')
                            ? 'text-[#FF5912]'
                            : 'text-[#FBF8F3]/80 hover:text-[#FF5912]'
                            }`}
                        >
                          {item.label}
                          <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </Link>

                        {/* Dropdown Menu */}
                        <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                          <div className="py-1 mt-2"></div> {/* Invisible gap for hover */}
                          <div className="bg-[#1A1A1A] rounded-xl shadow-xl border border-[#2A2A2A] overflow-hidden">
                            <div className="p-2">
                              {productCategories.map((product, idx) => (
                                <Link
                                  key={idx}
                                  href={product.href}
                                  className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${pathname === product.href
                                    ? 'bg-[#FF5912]/10 text-[#FF5912]'
                                    : 'text-[#FBF8F3]/80 hover:bg-[#2A2A2A] hover:text-[#FF5912]'
                                    }`}
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                            <div className="p-2 border-t border-[#2A2A2A]">
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-sm text-[#FF5912] font-medium rounded-lg hover:bg-[#2A2A2A] transition-colors duration-200"
                              >
                                View All Products
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-colors duration-300 py-2 ${pathname === item.href
                          ? 'text-[#FF5912]'
                          : 'text-[#FBF8F3]/80 hover:text-[#FF5912]'
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {pathname === item.href && !item.hasDropdown && (
                      <motion.div
                        layoutId="activeMenuIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF5912] rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {item.hasDropdown && (pathname === item.href || pathname.startsWith(item.href + '/')) && (
                      <motion.div
                        layoutId="activeMenuIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF5912] rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                ))}
                <button className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Request Quote
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden relative z-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <div className="flex flex-col space-y-1.5">
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>

              {/* Mobile menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    className="fixed inset-0 bg-[#0A0A0A] z-40 lg:hidden flex flex-col"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.3 }}
                  >
                    <div className="flex flex-col h-full px-6 py-24 overflow-y-auto">
                      <div className="flex flex-col space-y-6">
                        {navItems.map((item, index) => (
                          <div key={index} className="relative">
                            {item.hasDropdown ? (
                              <div>
                                <button
                                  className={`text-2xl font-medium flex items-center justify-between w-full ${pathname === item.href || pathname.startsWith(item.href + '/')
                                    ? 'text-[#FF5912]'
                                    : 'text-[#FBF8F3]'
                                    }`}
                                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                >
                                  {item.label}
                                  <svg
                                    className={`w-6 h-6 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                  </svg>
                                </button>

                                <AnimatePresence>
                                  {mobileProductsOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="mt-4 ml-4 overflow-hidden"
                                    >
                                      <div className="space-y-3 border-l-2 border-[#2A2A2A] pl-4">
                                        {productCategories.map((product, idx) => (
                                          <Link
                                            key={idx}
                                            href={product.href}
                                            className={`block text-lg ${pathname === product.href
                                              ? 'text-[#FF5912]'
                                              : 'text-[#FBF8F3]/80 hover:text-[#FF5912]'
                                              }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                          >
                                            {product.name}
                                          </Link>
                                        ))}
                                      </div>
                                      <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
                                        <Link
                                          href={item.href}
                                          className="block text-lg text-[#FF5912] font-medium"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          View All Products
                                        </Link>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                className={`text-2xl font-medium block ${pathname === item.href
                                  ? 'text-[#FF5912]'
                                  : 'text-[#FBF8F3]'
                                  }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                                {pathname === item.href && (
                                  <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#FF5912] rounded-full" />
                                )}
                              </Link>
                            )}

                            {pathname === item.href && !item.hasDropdown && (
                              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#FF5912] rounded-full" />
                            )}

                            {item.hasDropdown && (pathname === item.href || pathname.startsWith(item.href + '/')) && (
                              <span className="absolute -left-4 top-3 w-2 h-2 bg-[#FF5912] rounded-full" />
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <button className="w-full bg-[#FF5912] text-white px-6 py-3 rounded-full text-lg font-medium my-8">
                          Request Quote
                        </button>

                        <div className="flex items-center space-x-4 justify-center mt-4">
                          {['instagram', 'youtube', 'linkedin'].map((social) => (
                            <a
                              key={social}
                              href={socialLinks[social as keyof typeof socialLinks]}
                              className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF5912] transition-colors duration-300"
                            >
                              <span className="sr-only">{social}</span>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {social === 'instagram' && (
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                )}
                                {social === 'youtube' && (
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                )}
                                {social === 'linkedin' && (
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                )}
                              </svg>
                            </a>
                          ))}
                        </div>

                        <div className="flex flex-col space-y-3 mt-8">
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span className="text-[#FBF8F3]/80">prabhatsteelconnect@gmail.com</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-[#FF5912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span className="text-[#FBF8F3]/80">+91 ‭7021530230‬</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">
                    <span className="text-[#FF5912]">Prabhat</span> Steel
                  </span>
                </div>
                <p className="text-[#FBF8F3]/70 mb-6">
                  Leading manufacturer and supplier of premium stainless steel and metal products for various industrial applications.
                </p>
                <div className="flex space-x-4">
                  {['instagram', 'youtube', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href={socialLinks[social as keyof typeof socialLinks]}
                      className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF5912] transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social === 'instagram' && (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        )}
                        {social === 'youtube' && (
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        )}
                        {social === 'linkedin' && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Our Products", href: "/products" },
                    { label: "Quality Control", href: "/quality" },
                    { label: "Contact Us", href: "/contact" }
                  ].map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-[#FBF8F3]/70 hover:text-[#FF5912] transition-colors duration-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Our Products</h3>
                <ul className="space-y-3">
                  {productCategories.slice(0, 6).map((product, i) => (
                    <li key={i}>
                      <Link href={product.href} className="text-[#FBF8F3]/70 hover:text-[#FF5912] transition-colors duration-300">
                        {product.name} Products
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF5912] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-[#FBF8F3]/70">
                      202, Panjrapole Road, Near<br />
                      Madhav Baug Post Office,<br />
                      Mumbai - 400004<br />
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF5912] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <span className="text-[#FBF8F3]/70">+91 ‭7021530230‬</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#FF5912] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-[#FBF8F3]/70">prabhatsteelconnect@gmail.com</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="bg-[#FF5912] hover:bg-[#FF5912]/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1A1A1A] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#FBF8F3]/60 text-sm">
                © {new Date().getFullYear()} Prabhat Steel. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="text-[#FBF8F3]/60 hover:text-[#FF5912] text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[#FBF8F3]/60 hover:text-[#FF5912] text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-[#FBF8F3]/60 hover:text-[#FF5912] text-sm transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}