import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";

// eslint-disable-next-line react/prop-types
export const FloatingNav = ({ navItems, className }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const direction = current - scrollYProgress.getPrevious();
            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                setVisible(direction < 0);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={`hidden sm:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-greenhomes-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 pl-4 py-2 items-center justify-center space-x-4 ${
                    className || ""
                }`}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {navItems.map((navItem, idx) => (
                    <a
                        key={`link-${idx}`}
                        href={navItem.link}
                        className={`relative items-center flex space-x-1 text-greenhomes-darkgreen dark:hover:text-neutral-300 hover:text-neutral-500`}
                    >
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </a>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};