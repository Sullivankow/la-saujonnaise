
import React from "react";

type FooterProps = {
  onLegalClick?: () => void;
};

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="bg-[#211e1a] px-5 py-8 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div><p className="font-display text-2xl">La Saujonnaise<span className="text-[#e2a17c]">.</span></p><p className="mt-1 text-xs text-white/40">Pizzeria & cuisine maison · Saujon</p></div>
        <div className="flex gap-5 text-sm text-white/50">
          <a href="#carte" className="hover:text-white">Carte</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <button type="button" onClick={onLegalClick} className="hover:text-white">Mentions légales</button>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-4 text-center text-xs text-white/55 md:flex md:items-center md:justify-between md:text-left">
        <p>© Tous droits réservés</p>
        <p>
          Site fait avec <span aria-label="coeur" className="inline-block text-red-500">♥</span> par <a href="https://www.facebook.com/AvenWebSully?locale=fr_FR" target="_blank" rel="noreferrer" className="font-semibold text-[#e2a17c] transition hover:text-white">Aven Web</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;