
"use client"
import { useState } from 'react';
import { GiClothes, GiHamburgerMenu } from 'react-icons/gi';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GiClothes className="text-2xl" />
            <span className="text-xl font-bold">Virat Clothes</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-amber-200 transition">
              Home
            </a>
            <a href="#about" className="hover:text-amber-200 transition">
              About
            </a>
            <a href="#products" className="hover:text-amber-200 transition">
              Products
            </a>
            <a href="#testimonials" className="hover:text-amber-200 transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-amber-200 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/918100551766"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded flex items-center space-x-1"
            >
              <FaWhatsapp />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-amber-800 text-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button 
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-6">
          <a 
            href="#home" 
            className="hover:text-amber-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="hover:text-amber-200 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#products" 
            className="hover:text-amber-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </a>
          <a 
            href="#testimonials" 
            className="hover:text-amber-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="hover:text-amber-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;