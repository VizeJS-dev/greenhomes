import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";

export const HamburgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="hamburger-menu" className="relative md:hidden">
            {/* Hamburger Button */}
            <div className="fixed top-3 right-5 z-50 rounded-full shadow-lg bg-greenhomes-white">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center p-2 text-black"
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
                        className="fixed top-0 right-0 bottom-0 left-0 z-40 h-fit flex-col pb-4 shadow-lg bg-greenhomes-white"
                        initial={{y: "-100%"}}
                        animate={{y: "0%"}}
                        exit={{y: "-100%"}}
                        transition={{duration: 0.3}}
                    >
                        <h1 className="block px-6 py-2 text-2xl font-bold font- text-greenhomes-darkgreen">GreenHomes</h1>
                        <a
                            href="#header"
                            className="block px-6 py-2 text-4xl text-black font-dm"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#over-ons"
                            className="block px-6 py-2 text-4xl text-black font-dm"
                            onClick={() => setIsOpen(false)}
                        >
                            Over ons
                        </a>
                        <a
                            href="#ontwerp-uw-huis"
                            className="block px-6 py-2 text-4xl text-black font-dm"
                            onClick={() => setIsOpen(false)}
                        >
                            Ontwerp uw huis
                        </a>
                        <a
                            href="#offerte-aanvragen"
                            className="block px-6 py-2 text-4xl text-black font-dm"
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