
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#211e1a] px-5 py-8 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div><p className="font-display text-2xl">La Saujonnaise<span className="text-[#e2a17c]">.</span></p><p className="mt-1 text-xs text-white/40">Pizzeria & cuisine maison · Saujon</p></div>
        <div className="flex gap-5 text-sm text-white/50"><a href="#carte" className="hover:text-white">Carte</a><a href="#contact" className="hover:text-white">Contact</a><a href="/" className="hover:text-white">Mentions légales</a></div>
      </div>
    </footer>
  );
};

export default Footer;