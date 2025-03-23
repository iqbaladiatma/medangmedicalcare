import React, { useEffect, useState } from "react";
import { Heart, Award, Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useNews } from "../contexts/NewsContext";
import background from "../img/welcome.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { news } = useNews();

  // Get latest 2 news for carousel
  const latestNews = news.slice(0, 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Selamat Datang di MMC</h1>
            <p className="text-xl mb-8">Kesehatan Anda adalah prioritas kami. Kami menyediakan layanan kesehatan berkualitas dengan tim dokter profesional.</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Buat Janji Temu
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* News Carousel */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12">
            Berita & Informasi
          </motion.h2>

          {/* Carousel Container */}
          <div className="relative mb-12">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full">
                    <img
                      src={latestNews[currentSlide]?.image}
                      alt={latestNews[currentSlide]?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm mb-4">
                        {latestNews[currentSlide]?.category}
                      </span>
                      <h2 className="text-3xl font-bold mb-4">
                        {latestNews[currentSlide]?.title}
                      </h2>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {latestNews[currentSlide]?.excerpt}
                      </p>
                      <Link to={`/news/${latestNews[currentSlide]?.id}`}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center text-white font-semibold"
                        >
                          Baca selengkapnya
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentSlide(0)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === 0 ? "bg-white" : "bg-white/50"
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentSlide(1)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === 1 ? "bg-white" : "bg-white/50"
                  }`}
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide(0)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentSlide(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* View All News Button */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
            <Link to="/news">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Lihat Semua Berita
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pelayanan Terbaik</h3>
              <p className="text-gray-600">Memberikan pelayanan kesehatan dengan penuh kasih dan profesional</p>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dokter Ahli</h3>
              <p className="text-gray-600">Tim dokter berpengalaman dan tersertifikasi</p>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Layanan 24 Jam</h3>
              <p className="text-gray-600">Siap melayani kebutuhan gawat darurat Anda</p>
            </motion.div>
            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fokus Pasien</h3>
              <p className="text-gray-600">Mengutamakan kenyamanan dan kesembuhan pasien</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Unggulan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Poli Umum",
                image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Poli Gigi",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Laboratorium",
                image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">Layanan kesehatan profesional dengan peralatan modern dan staff yang berpengalaman.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
