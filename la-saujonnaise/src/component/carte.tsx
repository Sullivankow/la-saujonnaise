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
        <a
          href="/Carte_La_Saujonnaise.pdf"
          download
          className="inline-flex items-center gap-2 font-semibold underline decoration-[#c98a6b] underline-offset-8"
        >
          Télécharger la carte <ArrowRight size={17} />
        </a>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {[
          ["Pizzas maison", [["La Saujonnaise", "crème, fromage, jambon de pays, œuf, persillade", "14,00 €"], ["La Montagnarde", "crème, fromage, jambon de pays, chèvre, miel, origan", "15,00 €"], ["La Poirée", "ail & fines herbes, fromage, PDT, magret, gorgonzola, crème, poire & figues", "15,00 €"], ["L'Orientale", "poivrons, champignons, fromage, poulet, merguez, crème, épices", "15,00 €"]]],
          ["Classiques", [["Margarita", "tomate, fromage, basilic", "10,00 €"], ["Reine", "tomate, fromage, jambon, champignons, olives", "13,00 €"], ["4 Fromages", "tomate, emmental, mozzarella, chèvre, gorgonzola", "13,00 €"], ["Tex-Mex", "tomate, fromage, oignons, viande hachée, poivrons, épices", "14,00 €"], ["Charentaise", "tomate, fromage, jambon de pays, champignons, crème, persillade", "14,00 €"]]]
        ].map(([title, rows]) => (
          <div key={String(title)} className="rounded-[2rem] border border-[#d9cebf] bg-[#eee6db] p-7 md:p-9">
            <div className="flex items-center justify-between border-b border-[#d1c4b5] pb-5">
              <h3 className="font-display text-3xl">{String(title)}</h3><span className="text-[#b94f2e]">✦</span>
            </div>
            <div>
              {((rows as unknown) as [string, string, string][]).map(([name, desc, price]) => (
                <div key={name} className="flex gap-4 border-b border-[#d1c4b5] py-5 last:border-0">
                  <div className="min-w-0 flex-1"><p className="font-semibold">{name}</p><p className="mt-1 text-sm text-[#746a61]">{desc}</p></div>
                  <span className="shrink-0 font-semibold">{price}</span>
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
