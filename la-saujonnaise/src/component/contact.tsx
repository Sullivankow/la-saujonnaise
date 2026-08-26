
import React from "react";
import { Clock3, MapPin, Phone, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const schedule = [
    ['Lundi', 'Fermé'],
    ['Mardi', '12:00–14:00, 19:00–21:00'],
    ['Mercredi', '12:00–14:00, 19:00–21:00'],
    ['Jeudi', '12:00–14:00, 19:00–21:00'],
    ['Vendredi', '12:00–14:00, 19:00–21:00'],
    ['Samedi', '12:00–14:00, 19:00–21:00'],
    ['Dimanche', '12:00–14:00'],
  ];

  return (
    <section id="contact" className="border-t border-[#d8cbbb] bg-[#e9e0d4]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#b94f2e]">Venez nous voir</p>
          <h2 className="font-display text-5xl leading-none md:text-7xl">On vous<br /><i>attend.</i></h2>
          <div className="mt-10 space-y-5 text-[#5e564e]">
            <a className="flex items-start gap-4" href="https://maps.google.com/?q=19+rue+de+la+Seudre+17600+Saujon"><MapPin className="mt-1 shrink-0 text-[#b94f2e]" size={20} /><span>19 rue de la Seudre<br />17600 Saujon</span></a>
            <a className="flex items-center gap-4" href="tel:+33546054855"><Phone className="text-[#b94f2e]" size={20} /><span>05 46 05 48 55</span></a>
            <a className="flex items-center gap-4" href="https://www.facebook.com/profile.php?id=100089196454266" target="_blank" rel="noreferrer">
              <MessageCircle className="text-[#b94f2e]" size={20} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#211e1a] p-7 text-white md:p-9">
          <div className="mb-8 flex items-center justify-between"><h3 className="font-display text-3xl">Infos pratiques</h3><span className="rounded-full bg-white/10 p-3"><Clock3 size={18} /></span></div>
          <div className="space-y-4 text-sm">
            {schedule.map(([day, hours]) => (
              <div key={day} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-0">
                <span className="text-white/55">{day}</span>
                <span className="text-right">{hours}</span>
              </div>
            ))}
          </div>
          <a href="tel:+33546054855" className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#e2a17c] py-3.5 font-semibold text-[#211e1a] transition hover:scale-[1.02]"><Phone size={17} /> Appeler le restaurant</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;