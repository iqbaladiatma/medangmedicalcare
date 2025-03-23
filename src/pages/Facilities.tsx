import React from "react";
import { motion } from "framer-motion";

const Facilities = () => {
  const facilities = [
    {
      title: "Ruang Periksa Modern",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Dilengkapi dengan peralatan medis terkini untuk diagnosis yang akurat",
    },
    {
      title: "Laboratorium",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Fasilitas lab modern untuk berbagai jenis pemeriksaan",
    },
    {
      title: "Ruang Tunggu Nyaman",
      image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Area tunggu yang nyaman dengan fasilitas lengkap",
    },
    {
      title: "Apotek",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Menyediakan berbagai obat-obatan berkualitas",
    },
    {
      title: "Unit Gawat Darurat",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Siap menangani kasus darurat 24 jam",
    },
    {
      title: "Ruang Konsultasi",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Ruang konsultasi privat untuk kenyamanan pasien",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-primary mb-4">
            Fasilitas Kami
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto">
            MMC dilengkapi dengan berbagai fasilitas modern untuk memberikan pelayanan kesehatan terbaik bagi pasien.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={facility.image} alt={facility.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Peralatan Medis</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Peralatan Diagnostik</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• USG 4D</li>
                  <li>• EKG</li>
                  <li>• X-Ray Digital</li>
                  <li>• Laboratorium Lengkap</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Peralatan Terapi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fisioterapi Modern</li>
                  <li>• Dental Unit</li>
                  <li>• Nebulizer</li>
                  <li>• Peralatan Bedah Minor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
