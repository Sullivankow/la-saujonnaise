import React from "react";
import { ArrowRight } from "lucide-react";

const Carte: React.FC = () => {
  return (
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
  );
};

export default Carte;
