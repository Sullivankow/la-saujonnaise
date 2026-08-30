
import React from "react";
import { Clock3, Star } from "lucide-react";

type ExperienceProps = {
  terraceImg: string;
};

const Experience: React.FC<ExperienceProps> = ({ terraceImg }) => {
  return (
    <section className="bg-[#211e1a] py-24 text-[#f5f0e8] md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#e2a17c]">L'expérience</p>
          <h2 className="font-display text-5xl leading-[.98] tracking-[-.035em] md:text-7xl">Un repas.<br /><i>Un vrai moment.</i></h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            Prenez le temps. Installez-vous en terrasse, partagez une pizza,
            choisissez un plat, laissez de la place pour le dessert.
          </p>
          <div className="mt-9 grid max-w-lg grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 p-5"><Clock3 className="mb-5 text-[#e2a17c]" size={20} /><p className="font-semibold">Service midi & soir</p><p className="mt-1 text-sm text-white/50">Selon les jours</p></div>
            <div className="rounded-2xl border border-white/10 p-5"><Star className="mb-5 text-[#e2a17c]" size={20} /><p className="font-semibold">Cuisine généreuse</p><p className="mt-1 text-sm text-white/50">Sur place</p></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 -top-5 z-10 hidden rounded-full bg-[#e2a17c] p-5 text-center text-xs font-bold uppercase tracking-widest text-[#211e1a] sm:block">
            <span className="block text-2xl leading-none">17</span> Saujon
          </div>
          <img
            src={terraceImg}
            alt="Terrasse du restaurant"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2.5rem] object-cover md:aspect-[4/4.5]"
            style={{ transform: "scale(0.96)", transformOrigin: "center center", objectPosition: "center 90%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;