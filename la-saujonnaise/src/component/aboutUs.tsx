
import React from "react";
import { motion } from "framer-motion";

type Dish = { title: string; text: string; image: string; tag: string };

type AboutUsProps = {
    dishes: Dish[];
};

const AboutUs: React.FC<AboutUsProps> = ({ dishes }) => {
    return (
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
    );
};

export default AboutUs;