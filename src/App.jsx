import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icon from "./assets/kantor.png";
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
  FaNewspaper,
  FaVolumeUp,
  FaVolumeMute,
  FaClock,
} from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";
import Bagikan from "./Bagikan";
import { toast, Toaster } from "sonner";
import Berita from "./Berita";

const App = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [message, setMessage] = useState("");
  const [accessibilityOn, setAccessibilityOn] = useState(true); // ✅ toggle voice
  const [settingsOpen, setSettingsOpen] = useState(false);
  // ✅ Fungsi suara
  const speakText = (text) => {
    if (accessibilityOn && window.responsiveVoice) {
      window.responsiveVoice.speak(text, "Indonesian Female");
    }
  };

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
      transition: { delayChildren: 0.2, staggerChildren: 0.25 },
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

  const handleSendWhatsApp = () => {
    if (!message.trim()) {
      toast.info("Pesan tidak boleh kosong!");
      speakText("Pesan tidak boleh kosong!");
      return;
    }
    // jika kosong maka voice

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285173284821?text=${encodedMessage}`, "_blank");
    setMessage("");
    setActiveModal(null);
  };

  return (
  <div className="min-h-screen  flex flex-col md:flex-row lg:items-start items-center md:items-center justify-center bg-gradient-to-b from-[#700D09] via-white to-gray-100 p-6 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
       className="w-full lg:ml-20 lg:w-1/3 md:w-[70%]  bg-white rounded-2xl drop-shadow-2xl flex flex-col items-center overflow-hidden"
      >
        {/* Logo */}
        <motion.img
          src={icon}
          alt="Logo KPU"
          className="w-full h-auto object-cover"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* LIST UTAMA */}
        <motion.div
          className="w-full flex flex-col gap-4 p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://kab-sekadau.kpu.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => speakText("Website Resmi")}
            onTouchStart={() => speakText("Website Resmi")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-[#700D09] text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGlobe className="text-lg" />
            <span>Website Resmi</span>
          </motion.a>

          {/* Menu Berita */}
          <motion.button
            onClick={() => setActiveModal("berita")}
            onMouseEnter={() => speakText("Berita")}
            onTouchStart={() => speakText("Berita")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-[#700D09] text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaNewspaper className="text-lg" />
            <span>Berita</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveModal("hukum")}
            onMouseEnter={() => speakText("Informasi Hukum")}
            onTouchStart={() => speakText("Informasi Hukum")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-[#700D09] text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaBalanceScale className="text-lg" />
            <span>Informasi Hukum</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveModal("social")}
            onMouseEnter={() => speakText("Media Sosial")}
            onTouchStart={() => speakText("Media Sosial")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-[#700D09] text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaInstagram className="text-lg" />
            <span>Media Sosial</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveModal("contact")}
            onMouseEnter={() => speakText("Layanan Pengaduan")}
            onTouchStart={() => speakText("Layanan Pengaduan")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-[#700D09] text-white font-medium rounded-xl shadow-md"
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
            onMouseEnter={() => speakText("Lokasi KPU Kabupaten Sekadau")}
            onTouchStart={() => speakText("Lokasi KPU Kabupaten Sekadau")}
            className="flex shine-btn items-center gap-3 w-full py-3 px-4 bg-[#700D09] text-white font-medium rounded-xl shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaMapMarkerAlt className="text-lg" />
            <span>KPU Kabupaten Sekadau</span>
          </motion.a>
        </motion.div>
        <Bagikan />
      </motion.div>
<div className="lg:block md:hidden hidden  w-[50%]">
    <Berita accessibilityOn={accessibilityOn} />
  </div>

      {/* MODAL */}
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
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-[#700D09] text-xl"
              >
                ✕
              </button>

              {/* Layanan Pengaduan */}
              {activeModal === "contact" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-[#700D09] text-center">
                    Layanan Pengaduan
                  </h3>
                  <motion.div
                    className="flex flex-col gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.a
                      href="mailto:kpu.sekadau@gmail.com"
                      onMouseEnter={() => speakText("Kirim Email")}
                      onTouchStart={() => speakText("Kirim Email")}
                      className="flex shine-btn items-center gap-3 py-3 px-4 bg-[#700D09] text-white rounded-xl shadow"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaEnvelope /> <span>Email</span>
                    </motion.a>

                    <motion.button
                      onClick={() => setActiveModal("whatsapp")}
                      onTouchStart={() => speakText("Call Center WhatsApp")}
                      onMouseEnter={() => speakText("Call Center WhatsApp")}
                      className="flex shine-btn items-center gap-3 py-3 px-4 bg-[#700D09] text-white rounded-xl shadow"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaPhone /> <span>Call Center (WhatsApp)</span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        const w = screen.availWidth;
                        const h = screen.availHeight;
                        window.open(
                          "https://cloud.mystorages.my.id/bucket/spanduk-pelayanan.pdf",
                          "PopupWindow",
                          `width=${w},height=${h},left=0,top=0,resizable=yes,scrollbars=yes`
                        );
                      }}
                      onTouchStart={() => speakText("Jam Pelayanan")}
                      onMouseEnter={() => speakText("Jam Pelayanan")}
                      className="flex shine-btn items-center gap-3 py-3 px-4 bg-[#700D09] text-white rounded-xl shadow"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaClock /> <span>Jam Pelayanan</span>
                    </motion.button>
                  </motion.div>
                </>
              )}

              {/* WhatsApp Input */}
              {activeModal === "whatsapp" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-[#700D09]">
                    Pesan
                  </h3>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows="4"
                    placeholder="Ketik pesan Anda..."
                  />
                  <motion.button
                    onClick={handleSendWhatsApp}
                    onMouseEnter={() => speakText("Kirim Pesan")}
                    onTouchStart={() => speakText("Kirim Pesan")}
                    className="w-full py-3 px-4 bg-[#700D09] text-white font-medium rounded-xl shadow-md"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaRegPaperPlane className="inline mr-2" /> Kirim Pesan
                  </motion.button>
                </>
              )}

              {/* Modal Berita */}
              {activeModal === "berita" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-[#700D09] text-center">
                    Berita
                  </h3>
                  <motion.div
                    className="flex flex-col gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      {
                        text: "Berita Terkini",
                        link: "https://kab-sekadau.kpu.go.id/blog/category/104",
                      },
                      {
                        text: "Opini",
                        link: "https://kab-sekadau.kpu.go.id/blog/category/135",
                      },
                      {
                        text: "Pengumuman",
                        link: "https://kab-sekadau.kpu.go.id/blog/category/11",
                      },
                      {
                        text: "Sosialisasi",
                        link: "https://kab-sekadau.kpu.go.id/blog/category/105",
                      },
                      {
                        text: "Umum",
                        link: "https://kab-sekadau.kpu.go.id/blog/category/14",
                      },
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => speakText(item.text)}
                        onTouchStart={() => speakText(item.text)}
                        className="flex  shine-btn items-center gap-3 py-3 px-4 bg-[#700D09] text-white rounded-xl shadow"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <div className="flex items-center  gap-3">
                          <FaNewspaper className="text-lg" />
                          <span>{item.text}</span>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                </>
              )}

              {/* Media Sosial */}
              {activeModal === "social" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-[#700D09] text-center">
                    Media Sosial
                  </h3>
                  <motion.div
                    className="flex flex-row flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      {
                        text: "Instagram",
                        link: "https://www.instagram.com/kpu_kab.sekadau",
                      },
                      {
                        text: "Facebook",
                        link: "https://web.facebook.com/kpukabupatensekadau/?locale=id_ID&_rdc=1&_rdr#",
                      },
                      {
                        text: "Twitter",
                        link: "https://x.com/kpuskd",
                      },
                      {
                        text: "TikTok",
                        link: "https://www.tiktok.com/@kpusekadau",
                      },
                      {
                        text: "YouTube",
                        link: "https://www.youtube.com/channel/UCv2bBlkAA6YdFAi0BuYX0kA",
                      },
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => speakText(item.text)}
                        onTouchStart={() => speakText(item.text)}
                        className="flex shine-btn items-center gap-3 py-3 px-4 bg-[#700D09] text-white rounded-xl shadow"
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

              {/* Hukum */}
              {activeModal === "hukum" && (
                <>
                  <h3 className="text-xl font-bold mb-4 text-[#700D09] text-center">
                    Informasi Hukum
                  </h3>
                  <motion.div
                    className="flex flex-col gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      {
                        text: "Portal JDIH",
                        link: "https://jdih.kpu.go.id/kalbar/sekadau",
                      },
                      {
                        text: "Peraturan KPU",
                        link: "https://jdih.kpu.go.id/kalbar/sekadau/peraturan-kpu",
                      },
                      {
                        text: "Undang-Undang",
                        link: "https://jdih.kpu.go.id/kalbar/sekadau/undang-undang",
                      },
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => speakText(item.text)}
                        onTouchStart={() => speakText(item.text)}
                        className="flex shine-btn items-center gap-3 py-3 px-4 bg-[#700D09] text-white rounded-xl shadow"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <div className="flex items-center gap-3">
                          <FaBalanceScale className="text-lg" />

                          <span>{item.text}</span>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ================== FLOATING VOICE BUTTON ================== */}
      {/* ================== FLOATING VOICE BUTTON ================== */}
      <div className="fixed bottom-5 right-5 z-50">
        {/* Tombol Utama */}
        <button
          onClick={() => setSettingsOpen(!settingsOpen)}
          className="p-4 rounded-full bg-[#700D09] text-white shadow-lg hover:scale-105 transition"
        >
          {accessibilityOn ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>

        {/* Popup Setting */}
        <AnimatePresence>
          {settingsOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-end" // full screen overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSettingsOpen(false)} // klik luar nutup
            >
              <motion.div
                onClick={(e) => e.stopPropagation()} // klik dalam popup jangan nutup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white rounded-xl shadow-xl p-4 w-64 m-4 relative"
              >
                {/* Tombol Close */}
                <button
                  onClick={() => setSettingsOpen(false)}
                  className="absolute top-2 right-3 text-gray-500 hover:text-[#700D09] hover:scale-110 transition text-lg"
                >
                  ✕
                </button>

                {/* Isi Popup */}
                <h4 className="text-lg font-semibold mb-2">Aksesibilitas</h4>
                <div className="flex items-center justify-between">
                  <span>Asisten Suara</span>
                  <button
                    onClick={() => setAccessibilityOn(!accessibilityOn)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      accessibilityOn
                        ? "bg-[#700D09] text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {accessibilityOn ? "On" : "Off"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    
    
      </div>

      <Toaster richColors position="top-right" closeButton />
    </div>
  );
};

export default App;
