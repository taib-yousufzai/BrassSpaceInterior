"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm lg:bg-transparent lg:shadow-none">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-28 h-28">
              <Image
                src="/logo.png"
                alt="Brass Space"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#daa520] transition font-medium">Home</Link>
            <div className="relative group">
              <button className="text-gray-800 hover:text-[#daa520] transition font-medium">Services</button>
              <div className="absolute hidden group-hover:block pt-2 top-full left-0">
                <div className="bg-white backdrop-blur-sm shadow-xl rounded-xl py-3 w-64 border border-gray-100">
                  <Link href="/services/residential-interiors" className="block px-4 py-2 hover:bg-[#daa520]/10 hover:text-[#b8860b] transition text-gray-700">Residential Interiors</Link>
                  <Link href="/services/commercial-interiors" className="block px-4 py-2 hover:bg-[#daa520]/10 hover:text-[#b8860b] transition text-gray-700">Commercial Interiors</Link>
                  <Link href="/services/modular-kitchens" className="block px-4 py-2 hover:bg-[#daa520]/10 hover:text-[#b8860b] transition text-gray-700">Modular Kitchens</Link>
                  <Link href="/services/wardrobes-storage" className="block px-4 py-2 hover:bg-[#daa520]/10 hover:text-[#b8860b] transition text-gray-700">Wardrobes & Storage</Link>
                  <Link href="/services/renovation-execution" className="block px-4 py-2 hover:bg-[#daa520]/10 hover:text-[#b8860b] transition text-gray-700">Renovation & Execution</Link>
                </div>
              </div>
            </div>
            <Link href="/portfolio" className="text-gray-800 hover:text-[#daa520] transition font-medium">Portfolio</Link>
            <Link href="/about" className="text-gray-800 hover:text-[#daa520] transition font-medium">About</Link>
            <Link href="/blog" className="text-gray-800 hover:text-[#daa520] transition font-medium">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#daa520] transition font-medium">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/book-site-visit" className="bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-8 py-3 rounded-full hover:from-[#b8860b] hover:to-[#8b6914] transition shadow-lg hover:shadow-xl font-semibold">
              Book Site Visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl p-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-[#b8860b]">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-[#b8860b]">About</Link>
            <Link href="/services/residential-interiors" className="block py-2 text-gray-700 pl-4 hover:text-[#b8860b]">Residential Interiors</Link>
            <Link href="/services/commercial-interiors" className="block py-2 text-gray-700 pl-4 hover:text-[#b8860b]">Commercial Interiors</Link>
            <Link href="/services/modular-kitchens" className="block py-2 text-gray-700 pl-4 hover:text-[#b8860b]">Modular Kitchens</Link>
            <Link href="/services/wardrobes-storage" className="block py-2 text-gray-700 pl-4 hover:text-[#b8860b]">Wardrobes & Storage</Link>
            <Link href="/services/renovation-execution" className="block py-2 text-gray-700 pl-4 hover:text-[#b8860b]">Renovation & Execution</Link>
            <Link href="/portfolio" className="block py-2 text-gray-700 hover:text-[#b8860b]">Portfolio</Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-[#b8860b]">Blog</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#b8860b]">Contact</Link>
            <Link href="/book-site-visit" className="block mt-4 bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white px-6 py-3 rounded-full text-center font-semibold">
              Book Site Visit
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
