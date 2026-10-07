import React, { useEffect, useRef, useState } from "react";

const Reviews: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [shouldLoadWidget, setShouldLoadWidget] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || typeof IntersectionObserver === "undefined") {
            setShouldLoadWidget(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadWidget(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px 0px" },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!shouldLoadWidget) return;

        const scriptId = "elfsight-platform-script";
        const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

        if (!existingScript) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, [shouldLoadWidget]);

    return (
        <section ref={sectionRef} id="avis" className="border-t border-[#d8cbbb] bg-[#f5f0e8]">
            <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#b94f2e]">Avis clients</p>
                        <h2 className="font-display text-5xl leading-none md:text-7xl">Ils nous ont<br /><i>recommandés.</i></h2>
                    </div>
                    <p className="max-w-xl text-base leading-7 text-[#554d45] md:text-lg">
                        Une adresse où l’on aime revenir pour la pâte fine, le feu de bois et l’accueil chaleureux.
                    </p>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-[#d8cbbb] bg-white/30 p-2 md:p-4">
                    {shouldLoadWidget ? (
                        <div
                            className="elfsight-app-cf5b0f30-0f30-45b5-8cd9-d3e40d476357"
                            data-elfsight-app-lazy
                        />
                    ) : (
                        <div className="min-h-40" aria-hidden="true" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
