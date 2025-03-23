import React from "react";
import { Calendar, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Doctors = () => {
  const doctors = [
    {
      name: "dr. Ahmad Rizki, Sp.PD",
      specialization: "Spesialis Penyakit Dalam",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      schedule: "Senin - Jumat: 09:00 - 14:00",
    },
    {
      name: "dr. Sarah Putri, Sp.A",
      specialization: "Spesialis Anak",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      schedule: "Senin - Sabtu: 10:00 - 15:00",
    },
    {
      name: "drg. Budi Santoso",
      specialization: "Dokter Gigi",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      schedule: "Selasa - Jumat: 13:00 - 18:00",
    },
    {
      name: "dr. Linda Wijaya, Sp.OG",
      specialization: "Spesialis Kandungan",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      schedule: "Senin - Kamis: 08:00 - 13:00",
    },
    {
      name: "dr. Rudi Hartono, Sp.JP",
      specialization: "Spesialis Jantung",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      schedule: "Rabu - Sabtu: 09:00 - 14:00",
    },
    {
      name: "dr. Maya Sari",
      specialization: "Dokter Umum",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      schedule: "Senin - Sabtu: 08:00 - 20:00",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-primary mb-4">
            Tim Dokter Kami
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dipimpin oleh tim dokter profesional dan berpengalaman yang siap memberikan pelayanan terbaik untuk Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-primary mb-4">{doctor.specialization}</p>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{doctor.schedule}</span>
                </div>
                <div className="mt-6 flex space-x-4">
                  <button className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">Buat Janji</button>
                  <button className="flex-1 border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition-colors">Profil</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Appointment Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Informasi Jadwal Praktik</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cara Membuat Janji</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telepon: (021) 1234-5678</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email: appointment@mmc-clinic.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Kunjungi resepsionis kami</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Jam Praktik</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Senin - Jumat: 08:00 - 20:00</li>
                <li>Sabtu: 08:00 - 17:00</li>
                <li>Minggu: Tutup (Kecuali Gawat Darurat)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
