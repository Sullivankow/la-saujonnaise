

import React, { useState } from "react";
import {
  MapPin, Phone
} from "lucide-react";
import Header from "./component/header";
import Hero from "./component/hero";
import AboutUs from "./component/aboutUs";
import Experience from "./component/experience";
import Carte from "./component/carte";
import Galerie from "./component/galerie";
import Reviews from "./component/reviews";
import Contact from "./component/contact";
import Footer from "./component/footer";
import LegalPage from "./component/legal";
import './index.css'

type ImgMap = {
  hero: string;
  pizza: string;
  dish: string;
  dessert: string;
  terrace: string;
  gallery: string[];
}

const img: ImgMap = {
  hero: "/terrasse.jpeg",
  pizza: "/s8.jpeg",
  dish: "/four.jpeg",
  dessert: "/s4.jpeg",
  terrace: "/menu.jpeg",
  gallery: Array.from({ length: 8 }, (_, index) => `/s${index + 1}.jpeg`),
};

type Dish = { title: string; text: string; image: string; tag: string };

const dishes: Dish[] = [
  { title: "Pizza gourmande", text: "Une pâte fine et des garnitures généreuses, préparées avec soin.", image: img.pizza, tag: "Signature" },
  { title: "Le four à bois", text: "La flamme et la chaleur du four donnent à chaque pizza son goût unique.", image: img.dish, tag: "Feu de bois" },
  { title: "Notre salle", text: "Une adresse chaleureuse et conviviale pour partager un bon moment.", image: img.dessert, tag: "Ambiance" },
  { title: "La terrasse sur la Seudre", text: "Profitez d'un repas au bord de la Seudre, dans un cadre paisible et chaleureux.", image: img.hero, tag: "Au bord de l'eau" },
];

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showLegal, setShowLegal] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoHome = () => {
    setShowLegal(false);
    scrollToTop();
  };

  return (
    <div className="overflow-x-hidden bg-[#f5f0e8] text-[#27231f]">
      <Header
        open={open}
        onToggle={() => setOpen((prev) => !prev)}
        onClose={() => setOpen(false)}
      />

      {showLegal ? (
        <LegalPage onBackHome={handleGoHome} />
      ) : (
        <>
          <main id="top">
            <Hero img={img.hero} />
            <AboutUs dishes={dishes} />
            <Experience terraceImg={img.terrace} />
            <Carte />
            <Galerie images={img.gallery} />
            <Reviews />
            <Contact />
          </main>

          <Footer onLegalClick={() => {
            setShowLegal(true);
            scrollToTop();
          }} />
        </>
      )}

      {!showLegal && (
        <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 rounded-2xl border border-white/10 bg-[#211e1a]/95 p-1.5 text-white shadow-2xl backdrop-blur-xl md:hidden">
          <a href="#carte" className="flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold"><span className="text-base">☷</span> Carte</a>
          <a href="tel:+33546054855" className="flex flex-col items-center gap-0.5 rounded-xl bg-[#e2a17c] py-2 text-[10px] font-semibold text-[#211e1a]"><Phone size={16} /> Appeler</a>
          <a href="https://maps.google.com/?q=19+rue+de+la+Seudre+17600+Saujon" className="flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold"><MapPin size={16} /> Itinéraire</a>
        </div>
      )}

      {showLegal && <Footer onLegalClick={() => { }} />}
    </div>
  );
}

export default App;
