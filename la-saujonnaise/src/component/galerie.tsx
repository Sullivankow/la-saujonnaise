
import React from "react";

type GalerieProps = {
  pizzaImg: string;
  dishImg: string;
  dessertImg: string;
  terraceImg: string;
};

const Galerie: React.FC<GalerieProps> = ({ pizzaImg, dishImg, dessertImg, terraceImg }) => {
  return (
    <section id="galerie" className="px-5 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#b94f2e]">En images</p><h2 className="font-display text-5xl md:text-6xl">À voir. À goûter.</h2></div>
          <a href="https://instagram.com/" className="hidden items-center gap-2 text-sm font-semibold md:flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="3"></circle><circle cx="17.5" cy="6.5" r="0.5"></circle></svg>
            Instagram
          </a>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
          <img src={pizzaImg} alt="Pizza" className="col-span-2 row-span-2 h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
          <img src={dishImg} alt="Plat maison" className="h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
          <img src={dessertImg} alt="Dessert" className="h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
          <img src={terraceImg} alt="Terrasse" className="col-span-2 h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Galerie;