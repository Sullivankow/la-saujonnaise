import React from "react";
import { ArrowLeft, Building2, FileText, ShieldCheck } from "lucide-react";

type LegalPageProps = {
    onBackHome: () => void;
};

const LegalPage: React.FC<LegalPageProps> = ({ onBackHome }) => {
    return (
        <div className="bg-[#f5f0e8] text-[#211e1a]">
            <main className="pb-24 pt-28">
                <section className="mx-auto max-w-5xl px-5 md:px-8">
                    <button
                        type="button"
                        onClick={onBackHome}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d8c9b7] bg-white/80 px-4 py-2 text-sm font-semibold text-[#211e1a] shadow-sm transition hover:border-[#e2a17c] hover:text-[#b94f2e]"
                    >
                        <ArrowLeft size={16} /> Retour à l'accueil
                    </button>

                    <div className="rounded-[2rem] border border-[#d8c9b7] bg-[#211e1a] p-8 text-white shadow-[0_25px_60px_rgba(27,22,18,0.12)] md:p-12">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-[#e2a17c]">Informations légales</p>
                        <h1 className="font-display text-5xl leading-none tracking-[-.04em] md:text-7xl">Mentions légales</h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                            Les informations ci-dessous constituent les mentions légales du site de La Saujonnaise.
                        </p>
                    </div>

                    <div className="mt-10 space-y-8">
                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <div className="mb-5 flex items-center gap-3 text-[#b94f2e]">
                                <Building2 size={20} />
                                <h2 className="font-display text-3xl tracking-[-.03em]">1. Éditeur du site</h2>
                            </div>

                            <p className="leading-8 text-[#312b27]">
                                Le présent site est édité par :
                            </p>

                            <div className="mt-5 space-y-2 text-[#312b27]">
                                <p><strong>LA SAUJONNAISE</strong></p>
                                <p>Société par Actions Simplifiée (SAS) au capital social de <strong>5 000 €</strong></p>
                                <p>Siège social : <strong>19 rue de la Seudre, 17600 Saujon, France</strong></p>
                                <p>SIREN : <strong>913 085 569</strong></p>
                                <p>SIRET : <strong>913 085 569 00014</strong></p>
                                <p>RCS : <strong>Saintes</strong></p>
                                <p>Numéro de TVA intracommunautaire : <strong>FR96 913085569</strong></p>
                                <p>Code APE/NAF : <strong>5610A – Restauration traditionnelle</strong></p>
                                <p>Téléphone : <strong>05 46 05 48 55</strong></p>
                                <p>E-mail : <strong>[adresse e-mail à compléter]</strong></p>
                                <p>Directeur de la publication : <strong>Eric YOTH, Président</strong></p>
                                <p>Directeur général : <strong>Aurélie YOTH</strong></p>
                            </div>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <div className="mb-5 flex items-center gap-3 text-[#b94f2e]">
                                <FileText size={20} />
                                <h2 className="font-display text-3xl tracking-[-.03em]">2. Hébergement</h2>
                            </div>

                            <p className="leading-8 text-[#312b27]">
                                Le site est hébergé par :
                            </p>

                            <div className="mt-5 space-y-2 text-[#312b27]">
                                <p><strong>OVH</strong></p>
                                <p>2 rue Kellermann, 59100 Roubaix, France</p>
                                <p>Téléphone : +33 (0)9 72 10 10 07</p>
                                <p>Site internet : <a href="https://www.ovhcloud.com" target="_blank" rel="noreferrer" className="font-semibold text-[#b94f2e] underline">www.ovhcloud.com</a></p>
                            </div>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <div className="mb-5 flex items-center gap-3 text-[#b94f2e]">
                                <ShieldCheck size={20} />
                                <h2 className="font-display text-3xl tracking-[-.03em]">3. Activité</h2>
                            </div>

                            <p className="leading-8 text-[#312b27]">
                                LA SAUJONNAISE exerce une activité de <strong>restaurant, pizzeria, crêperie et restauration rapide</strong>, avec consommation sur place et vente à emporter, ainsi que la vente de boissons dans le cadre de son activité.
                            </p>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <h2 className="font-display text-3xl tracking-[-.03em] text-[#211e1a]">4. Propriété intellectuelle</h2>
                            <div className="mt-5 space-y-4 text-[#312b27] leading-8">
                                <p>
                                    L'ensemble des éléments présents sur ce site, notamment les textes, photographies, images, logos, graphismes, éléments visuels, vidéos, icônes et contenus, est protégé par les dispositions relatives à la propriété intellectuelle.
                                </p>
                                <p>
                                    Sauf autorisation préalable et écrite de LA SAUJONNAISE, toute reproduction, représentation, modification, adaptation, distribution ou exploitation, totale ou partielle, de ces éléments est interdite.
                                </p>
                                <p>
                                    Toute utilisation non autorisée du contenu du site pourra faire l'objet de poursuites conformément aux dispositions légales applicables.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <h2 className="font-display text-3xl tracking-[-.03em] text-[#211e1a]">5. Responsabilité</h2>
                            <div className="mt-5 space-y-4 text-[#312b27] leading-8">
                                <p>
                                    LA SAUJONNAISE s'efforce de fournir sur son site des informations aussi précises et à jour que possible.
                                </p>
                                <p>
                                    Toutefois, LA SAUJONNAISE ne saurait garantir l'exactitude, l'exhaustivité ou l'actualité de l'ensemble des informations publiées sur le site.
                                </p>
                                <p>
                                    LA SAUJONNAISE ne pourra être tenue responsable des dommages directs ou indirects pouvant résulter de l'accès au site ou de son utilisation, notamment en cas d'interruption, d'indisponibilité ou de dysfonctionnement du site.
                                </p>
                                <p>
                                    Les informations et contenus présentés sur le site sont susceptibles d'être modifiés à tout moment sans préavis.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <h2 className="font-display text-3xl tracking-[-.03em] text-[#211e1a]">6. Liens externes</h2>
                            <div className="mt-5 space-y-4 text-[#312b27] leading-8">
                                <p>
                                    Le site peut contenir des liens vers des sites internet externes.
                                </p>
                                <p>
                                    LA SAUJONNAISE n'exerce aucun contrôle sur ces sites et ne peut être tenue responsable de leur contenu, de leur disponibilité ou de leurs pratiques en matière de protection des données personnelles.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <h2 className="font-display text-3xl tracking-[-.03em] text-[#211e1a]">7. Données personnelles</h2>
                            <div className="mt-5 space-y-4 text-[#312b27] leading-8">
                                <p>
                                    Dans le cadre de son activité et de l'utilisation du site, LA SAUJONNAISE peut être amenée à collecter et traiter certaines données personnelles, notamment lorsque l'utilisateur utilise un formulaire de contact, effectue une demande de réservation ou communique avec l'établissement.
                                </p>
                                <p>
                                    Les données collectées sont utilisées uniquement pour les finalités nécessaires au fonctionnement du service et à la gestion de la relation avec les clients.
                                </p>
                                <p>
                                    Conformément à la réglementation applicable en matière de protection des données personnelles, notamment le Règlement Général sur la Protection des Données (RGPD), chaque personne dispose notamment d'un droit d'accès, de rectification, d'effacement, de limitation du traitement et, lorsque cela est applicable, d'un droit d'opposition et de portabilité de ses données.
                                </p>
                                <p>
                                    Pour exercer ses droits ou pour toute question relative au traitement des données personnelles, vous pouvez contacter LA SAUJONNAISE à l'adresse suivante :
                                </p>
                                <p><strong>[adresse e-mail à compléter]</strong></p>
                                <p>
                                    Une politique de confidentialité détaillant les modalités de collecte et de traitement des données personnelles peut également être consultée sur le site.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <h2 className="font-display text-3xl tracking-[-.03em] text-[#211e1a]">8. Cookies</h2>
                            <div className="mt-5 space-y-4 text-[#312b27] leading-8">
                                <p>
                                    Le site peut être amené à utiliser des cookies ou technologies similaires afin d'assurer son bon fonctionnement, d'améliorer l'expérience utilisateur et, le cas échéant, de mesurer son audience.
                                </p>
                                <p>
                                    Lorsque cela est nécessaire, le consentement de l'utilisateur est recueilli conformément à la réglementation applicable.
                                </p>
                                <p>
                                    L'utilisateur peut également configurer les paramètres de son navigateur afin de contrôler ou de refuser certains cookies.
                                </p>
                            </div>
                        </article>

                        <article className="rounded-[2rem] border border-[#d8c9b7] bg-[#f2eadf] p-7 md:p-9">
                            <h2 className="font-display text-3xl tracking-[-.03em] text-[#211e1a]">9. Droit applicable</h2>
                            <div className="mt-5 space-y-4 text-[#312b27] leading-8">
                                <p>
                                    Les présentes mentions légales sont soumises au droit français.
                                </p>
                                <p>
                                    En cas de litige, et après tentative de résolution amiable, les juridictions compétentes seront celles désignées conformément aux règles de droit commun applicables.
                                </p>
                                <p className="pt-2 font-semibold text-[#211e1a]">
                                    Dernière mise à jour : [date à compléter]
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LegalPage;
