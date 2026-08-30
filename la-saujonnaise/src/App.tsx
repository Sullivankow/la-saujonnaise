

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
import './index.css'

type ImgMap = {
  hero: string;
  pizza: string;
  dish: string;
  dessert: string;
  terrace: string;
}

const img: ImgMap = {
  hero: "/terrasse.jpeg",
  pizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1100&q=85",
  dish: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85",
  dessert: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
  terrace: "/menu.jpeg",
};

type Dish = { title: string; text: string; image: string; tag: string };

const dishes: Dish[] = [
  { title: "Pizza au feu de bois", text: "Pâte maison, cuisson au feu de bois et garnitures généreuses.", image: img.pizza, tag: "Signature" },
  { title: "Cuisine maison", text: "Des assiettes généreuses inspirées de la cuisine traditionnelle.", image: img.dish, tag: "Maison" },
  { title: "Desserts gourmands", text: "Une note sucrée pour terminer le repas avec douceur.", image: img.dessert, tag: "Gourmand" },
];

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="overflow-x-hidden bg-[#f5f0e8] text-[#27231f]">
      <Header
        open={open}
        onToggle={() => setOpen((prev) => !prev)}
        onClose={() => setOpen(false)}
      />

      <main id="top">
        <Hero img={img.hero} />
        <AboutUs dishes={dishes} />
        <Experience terraceImg={img.terrace} />
        <Carte />
        <Galerie pizzaImg={img.pizza} dishImg={img.dish} dessertImg={img.dessert} terraceImg={img.terrace} />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 rounded-2xl border border-white/10 bg-[#211e1a]/95 p-1.5 text-white shadow-2xl backdrop-blur-xl md:hidden">
        <a href="#carte" className="flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold"><span className="text-base">☷</span> Carte</a>
        <a href="tel:+33546054855" className="flex flex-col items-center gap-0.5 rounded-xl bg-[#e2a17c] py-2 text-[10px] font-semibold text-[#211e1a]"><Phone size={16} /> Appeler</a>
        <a href="https://maps.google.com/?q=19+rue+de+la+Seudre+17600+Saujon" className="flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold"><MapPin size={16} /> Itinéraire</a>
      </div>
    </div>
  );
}

export default App;
