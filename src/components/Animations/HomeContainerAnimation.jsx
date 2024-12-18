import { motion } from "framer-motion";
import {CustomContainer} from "../CustomContainer.jsx";
import {BsHouse, BsBattery, BsTree} from "react-icons/bs";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const HomeContainerAnimation = () => {
    return (
        <motion.div
            className="-bottom-1 z-10 mx-auto flex w-full flex-col items-center justify-center md:absolute md:items-start md:p-24"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <p className="mb-2 text-center text-2xl font-dm">
                Waarom onze woningen uniek zijn:
            </p>
            <motion.div
                className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <CustomContainer
                        icon={BsHouse}
                        title="Modulair Ontwerp"
                        content="Aanpasbare en uitbreidbare huizen die meegroeien met uw behoeften."
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CustomContainer
                        icon={BsTree}
                        title="Milieuvriendelijke Materialen"
                        content="Duurzaam gewonnen materialen voor een verminderde milieu-impact."
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CustomContainer
                        icon={BsBattery}
                        title="Energie-efficiëntie"
                        content="Geavanceerde isolatie en slimme systemen voor een lager energieverbruik."
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};