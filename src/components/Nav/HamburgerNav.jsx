import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";

export const HamburgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative md:hidden">
            {/* Hamburger Button */}
            <div className="fixed top-3 right-5 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center w-10 h-10 p-2 text-black"
                >
                    <span className="sr-only">Open main menu</span>
                    <div className="space-y-1">
        <span
            className={`block h-1 w-6 bg-current transition-transform ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
        ></span>
                        <span
                            className={`block h-1 w-6 bg-current transition-opacity ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`block h-1 w-6 bg-current transition-transform ${
                                isOpen ? "transform -rotate-45 -translate-y-2" : ""
                            }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 right-0 bottom-0 h-fit flex-col bg-greenhomes-white shadow-lg z-40 pb-4"
                        initial={{opacity: 0, y: "-100%"}}
                        animate={{opacity: 1, y: "0%"}}
                        exit={{opacity: 0, y: "-100%"}}
                        transition={{duration: 0.3}}
                    >
                        <h1 className="block text-4xl font-k2d font-bold px-6 py-2 text-greenhomes-darkgreen">GreenHomes</h1>
                        <a
                            href="#home"
                            className="block text-4xl font-k2d font-bold px-6 py-2 text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#over-ons"
                            className="block text-4xl font-k2d font-bold px-6 py-2 text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            Over ons
                        </a>
                        <a
                            href="#ontwerp-uw-huis"
                            className="block text-4xl font-k2d font-bold px-6 py-2 text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            Ontwerp uw huis
                        </a>
                        <a
                            href="#offerte-aanvragen"
                            className="block text-4xl font-k2d font-bold px-6 py-2 text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            Offerte aanvragen
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};