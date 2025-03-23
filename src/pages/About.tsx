import React from "react";
import { Shield, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-primary mb-4">
            Tentang MMC
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Medang Medical Care (MMC) adalah klinik kesehatan modern yang berkomitmen untuk memberikan pelayanan kesehatan terbaik bagi masyarakat.
          </motion.p>
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-lg shadow-lg">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Visi</h2>
            <p className="text-gray-600">Menjadi pusat layanan kesehatan terpercaya yang mengutamakan kualitas dan profesionalisme dalam memberikan pelayanan kesehatan kepada masyarakat.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Misi</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Memberikan pelayanan kesehatan yang berkualitas dan terjangkau</li>
              <li>• Mengembangkan SDM yang profesional dan kompeten</li>
              <li>• Menerapkan teknologi modern dalam pelayanan kesehatan</li>
              <li>• Membangun kemitraan yang kuat dengan stakeholder</li>
            </ul>
          </motion.div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tim Manajemen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "dr. Surya Wijaya",
                position: "Direktur Utama",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "dr. Rina Putri",
                position: "Direktur Medis",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Budi Santoso, M.M.",
                position: "Direktur Operasional",
                image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Profesional", desc: "Memberikan layanan dengan standar tinggi" },
              { title: "Integritas", desc: "Menjunjung tinggi kejujuran dan etika" },
              { title: "Inovatif", desc: "Terus berkembang mengikuti kemajuan" },
              { title: "Empati", desc: "Memahami dan peduli terhadap pasien" },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
