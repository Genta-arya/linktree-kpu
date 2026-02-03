import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Berita = ({ accessibilityOn }) => {
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://bucket.mgentaarya.my.id/berita.php");
        const data = await res.json();
        setBerita(data && data.length ? data : []);
      } catch (error) {
        console.error("Error fetch berita:", error);
        setError("Gagal memuat berita");
        setBerita([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Samakan tinggi card
  useEffect(() => {
    const resizeCards = () => {
      const cards = document.querySelectorAll(".berita-card");
      let maxHeight = 0;
      cards.forEach((card) => {
        card.style.height = "auto";
        if (card.offsetHeight > maxHeight) maxHeight = card.offsetHeight;
      });
      cards.forEach((card) => (card.style.height = `${maxHeight}px`));
    };

    resizeCards();
    window.addEventListener("resize", resizeCards);
    return () => window.removeEventListener("resize", resizeCards);
  }, [berita]);

  // Fungsi responsiveVoice
  const speakText = (text) => {
    if (accessibilityOn && window.responsiveVoice) {
      window.responsiveVoice.speak(text, "Indonesian Female");
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    customPaging: () => <div className="w-3 h-3 rounded-full bg-gray-300"></div>,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">
          {dots.map((dot, idx) => (
            <li key={idx} className={`cursor-default ${dot.props.className} relative`}>
              <div
                className={`w-3 h-3 cursor-default rounded-full transition-colors ${
                  dot.props.className.includes("slick-active") ? "bg-[#700d09]" : "bg-gray-300"
                }`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    ),
  responsive: [
  { breakpoint: 1024, settings: { slidesToShow: 2 } }, // desktop medium
    { breakpoint: 768, settings: { slidesToShow: 1 } },  // tablet
 
],
  };
 if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }
  return (
    <div className="pb-4 ">
      <h1 className="text-2xl ml-2 font-bold text-yellow-500 mb-4 border-b-4 border-white w-fit">
        Berita Terbaru
      </h1>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-32">
          <p className="font-bold text-white">Memuat berita...</p>
          <div className="w-2/3 h-2 bg-gray-300 rounded overflow-hidden">
            <div className="h-2 bg-[#700d09] animate-[loading_1.5s_linear_infinite]"></div>
          </div>
        </div>
      ) : !berita || berita.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada berita terbaru</p>
      ) : (
        <Slider {...settings}>
          {berita.map((item, i) => (
            <div key={i} className="px-1 berita-card pb-4">
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col h-full">
                {/* Gambar */}
                <div
                  className="w-full h-72 bg-cover bg-center relative flex-shrink-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span className="absolute bottom-0 right-0 bg-[#700d09] text-white text-xs px-3 py-1 shadow">
                    {item.date}
                  </span>
                </div>

                {/* Konten */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h2
                    className="mt-2 text-sm font-semibold text-[#700d09]"
                    onMouseEnter={() => speakText(item.title)}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>
                  </h2>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-end text-[#700d09] font-medium hover:underline text-sm"
                    onMouseEnter={() => speakText("Selengkapnya")}
                  >
                    Selengkapnya →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Berita;
