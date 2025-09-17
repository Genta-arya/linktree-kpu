import React from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { toast } from "sonner";

const Bagikan = () => {
  const currentUrl = window.location.href;

  // fungsi salin link
  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link berhasil disalin!");
  };

  return (
    <>
      <span className="text-sm mb-2 font-extrabold text-gray-700">Bagikan</span>
      <div className="flex justify-end items-center gap-2 pb-4">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-green-500 text-white shadow hover:scale-110 transition"
        >
          <FaWhatsapp size={10} />
        </a>

        {/* Telegram */}
        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-sky-500 text-white shadow hover:scale-110 transition"
        >
          <FaTelegramPlane size={10} />
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-600 text-white shadow hover:scale-110 transition"
        >
          <FaFacebook size={10} />
        </a>

        {/* TikTok (pakai salin link) */}
        <button
          onClick={copyLink}
          className="p-2 rounded-full bg-black text-white shadow hover:scale-110 transition"
        >
          <FaTiktok size={10} />
        </button>

        {/* Instagram (pakai salin link) */}
        <button
          onClick={copyLink}
          className="p-2 rounded-full bg-pink-500 text-white shadow hover:scale-110 transition"
        >
          <FaInstagram size={10} />
        </button>

        {/* Salin Link */}
        <button
          onClick={copyLink}
          className="p-2 rounded-full bg-gray-500 text-white shadow hover:scale-110 transition"
        >
          <FaLink size={10} />
        </button>
      </div>
    </>
  );
};

export default Bagikan;
