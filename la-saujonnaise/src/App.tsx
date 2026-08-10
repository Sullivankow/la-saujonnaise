

import React, { useState } from "react";
import {
  ArrowDownRight, ArrowRight, Clock3,
  MapPin, Phone, Sparkles, Star
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "./component/header";
import './index.css'

type ImgMap = {
  hero: string;
  pizza: string;
  dish: string;
  dessert: string;
  terrace: string;
}

const img: ImgMap = {
  hero: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1800&q=85",
  pizza: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1100&q=85",
  dish: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85",
  dessert: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
  terrace: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
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
        <section className="relative min-h-[92vh] overflow-hidden bg-[#211e1a] text-white">
          <img src={img.hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,22,19,.55),rgba(25,22,19,.15)_45%,rgba(25,22,19,.88))]" />
          <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-12 pt-32 md:px-8 md:pb-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[.2em] backdrop-blur-md">
                <Sparkles size={13} /> Saujon · Charente-Maritime
              </div>
              <h1 className="font-display text-[clamp(4rem,11vw,9.5rem)] leading-[.82] tracking-[-.055em]">
                La<br /><span className="text-[#e7aa85]">Saujonnaise</span>
              </h1>
              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <p className="max-w-xl text-base leading-7 text-white/75 md:text-lg">
                  Pizzeria au feu de bois, cuisine maison et desserts gourmands.
                  Une adresse chaleureuse pour manger simplement, bien, et ensemble.
                </p>
                <a href="#carte" className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#f4e8d7] px-6 py-3.5 font-semibold text-[#27231f] transition hover:gap-5">
                  Découvrir la carte <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 right-6 hidden items-center gap-2 text-xs uppercase tracking-[.22em] text-white/55 md:flex">
            <span>Scroll</span><ArrowDownRight size={15} />
          </div>
        </section>

        <section id="maison" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#b94f2e]">Notre cuisine</p>
              <h2 className="font-display text-5xl leading-[.98] tracking-[-.035em] md:text-7xl">Plus qu'une<br /><i>pizzeria.</i></h2>
            </div>
            <div className="max-w-xl">
              <p className="text-xl leading-8 text-[#554d45] md:text-2xl">
                Ici, la pizza partage la table avec une cuisine généreuse et sans chichi.
                Des produits bien choisis, des recettes maison et l'envie de vous recevoir comme à la maison.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Feu de bois', 'Fait maison', 'Terrasse', 'Produits locaux'].map(t => (
                  <span key={t} className="rounded-full border border-[#d8cbbb] px-4 py-2 text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {dishes.map((d, i) => (
              <motion.article key={d.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}
                className="group overflow-hidden rounded-[2rem] bg-[#e9e0d4]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={d.image} alt={d.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f5f0e8]/90 px-3 py-1 text-xs font-bold uppercase tracking-wider">{d.tag}</span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl">{d.title}</h3>
                  <p className="mt-2 leading-6 text-[#6a625a]">{d.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

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
              <img src={img.terrace} alt="Terrasse du restaurant" loading="lazy" className="aspect-[4/5] w-full rounded-[2.5rem] object-cover md:aspect-[4/4.5]" />
            </div>
          </div>
        </section>

        <section id="carte" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#b94f2e]">À table</p>
              <h2 className="font-display text-5xl tracking-[-.035em] md:text-7xl">La carte</h2>
            </div>
            <a href="/menu.pdf" className="inline-flex items-center gap-2 font-semibold underline decoration-[#c98a6b] underline-offset-8">Télécharger la carte <ArrowRight size={17} /></a>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              ["Pizzas au feu de bois", [["Margherita", "tomate, mozzarella, basilic", "12 €"], ["Reine", "jambon, champignons, mozzarella", "14 €"], ["4 Fromages", "sélection de fromages, mozzarella", "15 €"], ["La Saujonnaise", "suggestion maison", "17 €"]]],
              ["À la carte", [["Plat du moment", "selon l'inspiration du chef", "—"], ["Salade généreuse", "produits frais & saison", "—"], ["Menu enfant", "selon disponibilités", "—"], ["Dessert maison", "demandez la suggestion", "—"]]]
            ].map(([title, rows]) => (
              <div key={String(title)} className="rounded-[2rem] border border-[#d9cebf] bg-[#eee6db] p-7 md:p-9">
                <div className="flex items-center justify-between border-b border-[#d1c4b5] pb-5">
                  <h3 className="font-display text-3xl">{String(title)}</h3><span className="text-[#b94f2e]">✦</span>
                </div>
                <div>
                  {((rows as unknown) as [string, string, string][]).map(([name, desc, price]) => (
                    <div key={name} className="flex gap-4 border-b border-[#d1c4b5] py-5 last:border-0">
                      <div className="min-w-0 flex-1"><p className="font-semibold">{name}</p><p className="mt-1 text-sm text-[#746a61]">{desc}</p></div>
                      <span className="font-semibold">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

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
              <img src={img.pizza} alt="Pizza" className="col-span-2 row-span-2 h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
              <img src={img.dish} alt="Plat maison" className="h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
              <img src={img.dessert} alt="Dessert" className="h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
              <img src={img.terrace} alt="Terrasse" className="col-span-2 h-full w-full rounded-[1.5rem] object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#d8cbbb] bg-[#e9e0d4]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#b94f2e]">Venez nous voir</p>
              <h2 className="font-display text-5xl leading-none md:text-7xl">On vous<br /><i>attend.</i></h2>
              <div className="mt-10 space-y-5 text-[#5e564e]">
                <a className="flex items-start gap-4" href="https://maps.google.com/?q=19+rue+de+la+Seudre+17600+Saujon"><MapPin className="mt-1 shrink-0 text-[#b94f2e]" size={20} /><span>19 rue de la Seudre<br />17600 Saujon</span></a>
                <a className="flex items-center gap-4" href="tel:+33546054855"><Phone className="text-[#b94f2e]" size={20} /><span>05 46 05 48 55</span></a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#211e1a] p-7 text-white md:p-9">
              <div className="mb-8 flex items-center justify-between"><h3 className="font-display text-3xl">Infos pratiques</h3><span className="rounded-full bg-white/10 p-3"><Clock3 size={18} /></span></div>
              <div className="space-y-4 text-sm">
                {['Lundi — fermé', 'Mardi — fermé', 'Mercredi — fermé', 'Jeudi — 12:00 / 21:30', 'Vendredi — 12:00 / 21:30', 'Samedi — 12:00 / 21:30', 'Dimanche — 12:00 / 21:00'].map(x => <div key={x} className="flex justify-between border-b border-white/10 pb-3 last:border-0"><span className="text-white/55">{x.split(' — ')[0]}</span><span>{x.split(' — ')[1]}</span></div>)}
              </div>
              <a href="tel:+33546054855" className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#e2a17c] py-3.5 font-semibold text-[#211e1a] transition hover:scale-[1.02]"><Phone size={17} /> Appeler le restaurant</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#211e1a] px-5 py-8 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div><p className="font-display text-2xl">La Saujonnaise<span className="text-[#e2a17c]">.</span></p><p className="mt-1 text-xs text-white/40">Pizzeria & cuisine maison · Saujon</p></div>
          <div className="flex gap-5 text-sm text-white/50"><a href="#carte" className="hover:text-white">Carte</a><a href="#contact" className="hover:text-white">Contact</a><a href="/" className="hover:text-white">Mentions légales</a></div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 rounded-2xl border border-white/10 bg-[#211e1a]/95 p-1.5 text-white shadow-2xl backdrop-blur-xl md:hidden">
        <a href="#carte" className="flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold"><span className="text-base">☷</span> Carte</a>
        <a href="tel:+33546054855" className="flex flex-col items-center gap-0.5 rounded-xl bg-[#e2a17c] py-2 text-[10px] font-semibold text-[#211e1a]"><Phone size={16} /> Appeler</a>
        <a href="https://maps.google.com/?q=19+rue+de+la+Seudre+17600+Saujon" className="flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold"><MapPin size={16} /> Itinéraire</a>
      </div>
    </div>
  );
}

export default App;
