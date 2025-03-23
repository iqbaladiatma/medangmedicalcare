import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { useNews } from "../contexts/NewsContext";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getNewsById } = useNews();
  const news = getNewsById(Number(id));

  if (!news) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Berita tidak ditemukan</h1>
            <button onClick={() => navigate("/news")} className="mt-4 text-primary hover:underline">
              Kembali ke daftar berita
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => navigate("/news")} className="flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Kembali ke Berita
        </motion.button>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={news.image} alt={news.title} className="w-full h-[400px] object-cover" />

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">{news.category}</span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <User className="h-4 w-4 mr-2" />
                  <span>{news.author}</span>
                </div>
              </div>
              <button className="text-gray-500 hover:text-primary">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            <h1 className="text-3xl font-bold mb-6">{news.title}</h1>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
};

export default NewsDetail;
