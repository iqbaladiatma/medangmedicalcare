import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useNews } from "../contexts/NewsContext";

const News = () => {
  const { news } = useNews();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get latest 2 news for carousel
  const carouselNews = news.slice(0, 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const categories = ["Semua", "Kesehatan", "Program", "Tips", "Artikel"];

  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Carousel */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16 relative h-[500px] rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="absolute inset-0">
              <div className="relative h-full">
                <img src={carouselNews[currentSlide]?.image} alt={carouselNews[currentSlide]?.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm mb-4">{carouselNews[currentSlide]?.category}</span>
                  <h2 className="text-3xl font-bold mb-4">{carouselNews[currentSlide]?.title}</h2>
                  <p className="text-gray-200 mb-4 line-clamp-2">{carouselNews[currentSlide]?.excerpt}</p>
                  <Link to={`/news/${carouselNews[currentSlide]?.id}`}>
                    <motion.button whileHover={{ x: 5 }} className="flex items-center text-white font-semibold">
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
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setCurrentSlide(0)} className={`w-3 h-3 rounded-full ${currentSlide === 0 ? "bg-white" : "bg-white/50"}`} />
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setCurrentSlide(1)} className={`w-3 h-3 rounded-full ${currentSlide === 1 ? "bg-white" : "bg-white/50"}`} />
          </div>

          {/* Navigation Arrows */}
          <button onClick={() => setCurrentSlide(0)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => setCurrentSlide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white">
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>

        {/* Rest of the News Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Berita & Informasi</h1>
          <p className="text-xl text-gray-600">Temukan informasi terbaru seputar kesehatan dan kegiatan MMC</p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${category === selectedCategory ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">Tidak ada berita yang sesuai dengan pencarian Anda</p>
            </motion.div>
          ) : (
            filteredNews.map((news) => (
              <motion.article key={news.id} variants={itemVariants} whileHover={{ y: -10 }} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative">
                  <img src={news.image} alt={news.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">{news.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{news.date}</span>
                    <User className="h-4 w-4 ml-4 mr-2" />
                    <span>{news.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{news.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
                  <Link to={`/news/${news.id}`}>
                    <motion.button whileHover={{ x: 5 }} className="flex items-center text-primary font-semibold">
                      Baca selengkapnya
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default News;
