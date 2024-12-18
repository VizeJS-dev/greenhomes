import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";

// eslint-disable-next-line react/prop-types
export const FloatingNav = ({navItems, className}) => {
    const [visible, setVisible] = useState(true); // Track visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Store the previous scroll position
    const [isAtTop, setIsAtTop] = useState(true); // Track if the user is at the top of the page

    // Scroll event handler
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            // At the top of the page, nav should be visible and lose its shadow
            setVisible(true);
            setIsAtTop(true);
        } else {
            // Lose 'at the top' status to restore shadow
            setIsAtTop(false);

            // Check scrolling direction: scrolling down hides the nav, scrolling up shows it
            if (currentScrollY > lastScrollY) {
                setVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setVisible(true);
            }
        }

        setLastScrollY(currentScrollY);
    };

    // Add and clean up scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -100,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: -100,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={`hidden md:flex max-w-fit fixed top-11 right-24 rounded-full bg-greenhomes-white ${
                        isAtTop
                            ? ""
                            : "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                    } z-[5000] px-8 py-2 items-center justify-end space-x-4 transition ease-in-out ${
                        className || ""
                    }`}
                >
                    {navItems.map((navItem, idx) => (
                        <a
                            key={`link-${idx}`}
                            href={navItem.link}
                            className="relative flex items-center text-black space-x-1 link link-underline link-underline-black"
                        >
                            <span
                                className="hidden text-center text-2xl text-bold font-k2d sm:block">{navItem.name}</span>
                        </a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};