import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8" />
              <h3 className="text-2xl font-bold">MMC</h3>
            </div>
            <p className="text-gray-300">
              Memberikan pelayanan kesehatan terbaik dengan standar profesional tinggi untuk masyarakat.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-white/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {[
                { to: '/', text: 'Beranda' },
                { to: '/about', text: 'Tentang Kami' },
                { to: '/facilities', text: 'Fasilitas' },
                { to: '/doctors', text: 'Dokter' },
                { to: '/contact', text: 'Hubungi Kami' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link to={link.to} className="text-gray-300 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Jam Operasional</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Senin - Jumat: 08:00 - 20:00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Sabtu: 08:00 - 17:00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Minggu: Tutup*</span>
              </li>
              <li className="text-sm text-gray-400">
                *Kecuali untuk layanan gawat darurat
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Kontak</h3>
            <ul className="space-y-3">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">(021) 1234-5678</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">info@mmc-clinic.com</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Jl. Medang Raya No. 123, Jakarta</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} MMC - Medang Medical Care. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;