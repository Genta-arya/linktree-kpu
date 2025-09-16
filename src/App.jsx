import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icon from "./assets/icon-kpu.jpeg";
import {
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaBalanceScale,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";

const App = () => {
  const [activeModal, setActiveModal] = useState(null);

  const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,   // jeda sebelum anak mulai animasi
      staggerChildren: 0.25 // jeda antar anak
    },
  },
};
useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight / 2 - window.innerHeight / 2,
      behavior: "smooth",
    });
  }, []);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-b from-red-600 via-white to-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg  bg-white rounded-2xl drop-shadow-2xl p-6 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.img
          src={icon}
          alt="Logo KPU"
          className="w-28 h-28 mb-5"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Nama/Deskripsi */}
        <h1 className="lg:text-2xl text-lg font-extrabold text-black">
          KOMISI PEMILIHAN UMUM
        </h1>
        <p className="uppercase font-extrabold lg:text-xl pb-4 w-full  mb-6 text-center text-base border-b-4 rounded-full border-red-600 inline-block">
          Kabupaten Sekadau
        </p>

        {/* ========== LIST UTAMA ========== */}
        <motion.div
          className="w-full flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://kab-sekadau.kpu.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-red-600 text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGlobe className="text-lg" />
            <span>Website Resmi</span>
          </motion.a>

          <motion.button
            onClick={() => setActiveModal("hukum")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-red-600 text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaBalanceScale className="text-lg" />
            <span>Informasi Hukum</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveModal("social")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-red-600 text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaInstagram className="text-lg" />
            <span>Media Sosial</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveModal("contact")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-red-600 text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaRegPaperPlane className="text-lg" />
            <span>Layanan Pengaduan</span>
          </motion.button>

          <motion.a
            href="https://maps.app.goo.gl/7DUsvYMbRsKuAD9H8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-red-600 text-white font-medium rounded-xl shadow-md "
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaMapMarkerAlt className="text-lg" />
            <span>KPU Kabupaten Sekadau</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ========== MODAL ========== */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-80 rounded-lg shadow-lg p-6 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
              >
                ✕
              </button>

              {/* Content */}
              {activeModal === "contact" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-red-600 text-center">
                    Layanan Pengaduan
                  </h3>
                  <motion.div
                    className="flex flex-col gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.a
                      href="mailto:info@kpu.go.id"
                      className="flex shine-btn items-center gap-3 py-3 px-4 bg-red-600 text-white rounded-xl shadow"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaEnvelope /> <span>Email</span>
                    </motion.a>
                    <motion.a
                      href="tel:0800123456"
                      className="flex shine-btn items-center gap-3 py-3 px-4 bg-red-600 text-white rounded-xl shadow"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaPhone /> <span>Call Center</span>
                    </motion.a>
                  </motion.div>
                </>
              )}

              {activeModal === "social" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-red-600 text-center">
                    Media Sosial
                  </h3>
                  <motion.div
                    className="flex flex-row flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { icon: <FaInstagram />, text: "Instagram", link: "https://www.instagram.com/kpu_kab.sekadau/" },
                      { icon: <FaFacebook />, text: "Facebook", link: "https://www.facebook.com/kpukabupatensekadau" },
                      { icon: <FaTiktok />, text: "Tiktok", link: "https://www.tiktok.com/@jdihkpu_sekadau" },
                      { icon: <FaTwitter />, text: "Twitter", link: "https://x.com/SekadauKpu" },
                      { icon: <FaYoutube />, text: "Youtube", link: "https://www.youtube.com/@kpukabupatensekadau" },
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex shine-btn items-center gap-3 py-3 px-4 bg-red-600 text-white rounded-xl shadow"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {item.icon} <span>{item.text}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                </>
              )}

              {activeModal === "hukum" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-red-600 text-center">
                    Informasi Hukum
                  </h3>
                  <motion.div
                    className="flex flex-col gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      { text: "Portal JDIH", link: "https://jdih.kpu.go.id/kalbar/sekadau" },
                      { text: "Peraturan KPU", link: "https://jdih.kpu.go.id/kalbar/sekadau/peraturan-kpu" },
                      { text: "Undang-Undang", link: "https://jdih.kpu.go.id/kalbar/sekadau/undang-undang/" },
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex shine-btn items-center gap-3 py-3 px-4 bg-red-600 text-white rounded-xl shadow"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <span>{item.text}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
