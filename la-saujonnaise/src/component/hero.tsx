import React from "react";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";

type HeroProps = {
    img: string;
};

const Hero: React.FC<HeroProps> = ({ img }) => {
    return (
        <section className="relative min-h-[92vh] overflow-hidden bg-[#211e1a] text-white">
            <img
                src={img}
                alt=""
                width={1542}
                height={2048}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-55"
                style={{ transform: "scale(1.08)", transformOrigin: "center center", objectPosition: "center 35%" }}
            />
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
    );
};

export default Hero;
