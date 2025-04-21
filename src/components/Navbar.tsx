import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Stethoscope, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", text: "Beranda" },
    { to: "/about", text: "Tentang Kami" },
    { to: "/facilities", text: "Fasilitas" },
    { to: "/doctors", text: "Dokter" },
    { to: "/news", text: "Berita" },
    { to: "/contact", text: "Hubungi Kami" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <motion.img src={logo} alt="Logo" className="h-12 w-auto object-contain" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
              <span className="text-xl font-bold text-primary">Medang Medical Care</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{ y: -2 }}
              >
                <NavLink to={item.to} className={({ isActive }) => `text-gray-700 hover:text-primary transition-colors duration-300 ${isActive ? "text-primary font-semibold border-b-2 border-primary" : ""}`}>
                  {item.text}
                </NavLink>
              </motion.div>
            ))}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Buat Janji
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 5 }}
                >
                  <NavLink to={item.to} onClick={() => setIsOpen(false)} className={({ isActive }) => `block py-2 px-3 rounded-md ${isActive ? "bg-primary/10 text-primary font-semibold" : "text-gray-600 hover:bg-gray-50"}`}>
                    {item.text}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
