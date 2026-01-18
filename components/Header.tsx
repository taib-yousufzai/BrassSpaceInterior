"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Residential Interiors', href: '/services/residential-interiors' },
    { name: 'Commercial Interiors', href: '/services/commercial-interiors' },
    { name: 'Modular Kitchens', href: '/services/modular-kitchens' },
    { name: 'Wardrobes & Storage', href: '/services/wardrobes-storage' },
    { name: 'Renovation & Execution', href: '/services/renovation-execution' },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-[110] flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <div className={`relative transition-all duration-300 ${scrolled ? 'w-20 h-20' : 'w-24 h-24 md:w-28 md:h-28'}`}>
              <Image
                src="/logo.png"
                alt="Brass Space"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-800 hover:text-[#daa520] transition-colors font-medium border-b-2 border-transparent hover:border-[#daa520] py-1 ${link.name === 'Home' ? 'text-[#daa520]' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-800 hover:text-[#daa520] transition-colors font-medium py-1">
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white shadow-2xl rounded-2xl py-3 w-64 border border-gray-100 overflow-hidden">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-2.5 hover:bg-[#daa520]/10 hover:text-[#b8860b] transition-colors text-gray-700 text-sm font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/book-site-visit"
              className="hidden md:inline-flex bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-6 py-2.5 rounded-full hover:from-[#b8860b] hover:to-[#8b6914] transition-all shadow-lg hover:shadow-xl font-semibold text-sm transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Site Visit
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-[110] p-2 text-gray-800 transition-colors hover:text-[#b8860b]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full origin-left transition-all"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current rounded-full transition-all"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full origin-left transition-all"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] lg:hidden"
              />

              {/* Menu Content */}
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="opened"
                exit="closed"
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[105] shadow-2xl p-6 pt-24 overflow-y-auto lg:hidden"
              >
                <div className="flex flex-col space-y-6">
                  {/* Main Links */}
                  <div className="space-y-4">
                    {navLinks.map((link) => (
                      <motion.div key={link.name} variants={itemVariants}>
                        <Link
                          href={link.href}
                          className="text-2xl font-bold text-gray-900 border-b border-gray-100 block pb-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Services Section */}
                  <motion.div variants={itemVariants} className="space-y-4 pt-4">
                    <h3 className="text-sm font-semibold text-[#daa520] tracking-wider uppercase">Our Services</h3>
                    <div className="grid gap-4">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-lg font-medium text-gray-700 hover:text-[#b8860b] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div variants={itemVariants} className="pt-8">
                    <Link
                      href="/book-site-visit"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-4 rounded-xl text-center font-bold text-lg shadow-xl"
                    >
                      Book Site Visit
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
