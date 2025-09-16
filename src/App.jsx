import React, { useState } from "react";
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
  FaMapMarkerAlt, // untuk hukum
} from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";

const App = () => {
  const [activeModal, setActiveModal] = useState(null); // 'contact' | 'social' | 'hukum' | null

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-600 via-white to-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center">
        {/* Logo */}
        <img src={icon} alt="Logo KPU" className="w-28 h-28 mb-5 " />

        {/* Nama/Deskripsi */}
        <h1 className="lg:text-2xl text-xl font-bold text-black">
          KOMISI PEMILIHAN UMUM
        </h1>
        <p className="uppercase  lg:text-xl pb-4 w-full font-bold mb-6 text-center text-lg border-b-4 rounded-full border-red-600 inline-block">
          Kabupaten Sekadau
        </p>

        {/* ========== LAYANAN INFORMASI ========== */}
        <div className="w-full flex flex-col gap-4 mb-4">
          <a
            href="https://kab-sekadau.kpu.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-btn flex items-center justify-center gap-2 w-full py-3 px-4 text-center bg-red-600 text-white font-medium rounded-xl shadow-md hover:bg-red-700 hover:scale-[1.02] transition transform"
          >
            <FaGlobe className="text-lg" />
            Website Resmi
          </a>
        </div>

        {/* ========== INFORMASI HUKUM (Modal Trigger) ========== */}
        <div className="w-full flex flex-col gap-4 mb-4">
          <button
            onClick={() => setActiveModal("hukum")}
            className="shine-btn flex items-center justify-center gap-2 w-full py-3 px-4 text-center bg-red-600 text-white font-medium rounded-xl shadow-md hover:bg-red-700 hover:scale-[1.02] transition transform"
          >
            <FaBalanceScale className="text-lg" />
            Informasi Hukum
          </button>
        </div>

        {/* ========== MEDIA SOSIAL (Modal Trigger) ========== */}
        <div className="w-full flex flex-col gap-4 mb-4">
          <button
            onClick={() => setActiveModal("social")}
            className="shine-btn flex items-center justify-center gap-2 w-full py-3 px-4 text-center bg-red-600 text-white font-medium rounded-xl shadow-md hover:bg-red-700 hover:scale-[1.02] transition transform"
          >
            <FaInstagram className="text-lg" />
            Media Sosial
          </button>
        </div>

        {/* ========== LAYANAN PENGADUAN (Modal Trigger) ========== */}
        <div className="w-full flex flex-col gap-4">
          <button
            onClick={() => setActiveModal("contact")}
            className="shine-btn flex items-center justify-center gap-2 w-full py-3 px-4 text-center bg-red-600 text-white font-medium rounded-xl shadow-md hover:bg-red-700 hover:scale-[1.02] transition transform"
          >
            <FaRegPaperPlane className="text-lg" />
            Layanan Pengaduan
          </button>
        </div>

        <div className="w-full flex flex-col gap-4 mt-4">
          <a
            href="https://maps.app.goo.gl/7DUsvYMbRsKuAD9H8"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-btn flex items-center justify-center gap-2 w-full py-3 px-4 text-center bg-red-600 text-white font-medium rounded-xl shadow-md hover:bg-red-700 hover:scale-[1.02] transition transform"
          >
            <FaMapMarkerAlt className="text-lg" />
            KPU Kabupaten Sekadau
          </a>
        </div>
      </div>

      {/* ========== MODAL (Contact / Social / Hukum) ========== */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-80 rounded-lg shadow-lg p-6 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            {activeModal === "contact" && (
              <>
                <h3 className="text-xl font-bold mb-4 text-red-600 text-center">
                  Layanan Pengaduan
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@kpu.go.id"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    <FaEnvelope /> Email
                  </a>
                  <a
                    href="tel:0800123456"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    <FaPhone /> Call Center
                  </a>
                </div>
              </>
            )}

            {activeModal === "social" && (
              <>
                <h3 className="text-xl font-bold mb-4 text-red-600 text-center">
                  Media Sosial
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/kpu_kab.sekadau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    <FaInstagram /> Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/kpukabupatensekadau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    <FaFacebook /> Facebook
                  </a>

                  <a
                    href="https://www.tiktok.com/@jdihkpu_sekadau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    <FaTiktok /> Tiktok
                  </a>
                  <a
                    href="https://x.com/SekadauKpu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    <FaTwitter /> Twitter
                  </a>

                  <a
                    href="https://www.youtube.com/@kpukabupatensekadau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    <FaYoutube /> Youtube
                  </a>
                </div>
              </>
            )}

            {activeModal === "hukum" && (
              <>
                <h3 className="text-xl font-bold mb-4 text-red-600 text-center">
                  Informasi Hukum
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://jdih.kpu.go.id/kalbar/sekadau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    Portal JDIH
                  </a>
                  <a
                    href="https://jdih.kpu.go.id/kalbar/sekadau/peraturan-kpu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    Peraturan KPU
                  </a>
                  <a
                    href="https://jdih.kpu.go.id/kalbar/sekadau/undang-undang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
                  >
                    Undang-Undang
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
