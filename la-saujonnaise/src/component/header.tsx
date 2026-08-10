
import { Menu, Phone, X } from "lucide-react";

type HeaderProps = {
    open: boolean;
    onToggle: () => void;
    onClose: () => void;
};

// Fixed top bar with the main navigation and the mobile drawer.
function Header({ open, onToggle, onClose }: HeaderProps) {
    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-[#211e1a]/85 px-4 py-3 text-white shadow-2xl backdrop-blur-xl md:px-6">
                <a href="#top" className="font-display text-xl tracking-tight">
                    La Saujonnaise<span className="text-[#e5a07c]">.</span>
                </a>

                <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
                    <a href="#maison" className="transition hover:text-white">La maison</a>
                    <a href="#carte" className="transition hover:text-white">La carte</a>
                    <a href="#galerie" className="transition hover:text-white">Galerie</a>
                    <a href="#contact" className="transition hover:text-white">Infos pratiques</a>
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href="tel:+33546054855"
                        className="hidden rounded-full bg-[#f4e8d7] px-4 py-2 text-sm font-semibold text-[#27231f] transition hover:scale-[1.03] sm:block"
                    >
                        Réserver
                    </a>
                    <button
                        type="button"
                        onClick={onToggle}
                        className="rounded-full p-2 md:hidden"
                        aria-label="Menu"
                    >
                        {open ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="mx-3 mt-2 rounded-3xl bg-[#211e1a] p-5 text-white shadow-2xl md:hidden">
                    {['La maison', 'La carte', 'Galerie', 'Infos pratiques'].map((label, index) => (
                        <a
                            key={label}
                            href={["#maison", "#carte", "#galerie", "#contact"][index]}
                            onClick={onClose}
                            className="block border-b border-white/10 py-4 text-lg last:border-0"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="tel:+33546054855"
                        className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#e2a17c] py-3 font-semibold text-[#211e1a]"
                    >
                        <Phone size={17} /> Appeler
                    </a>
                </div>
            )}
        </header>
    );
}

export default Header;