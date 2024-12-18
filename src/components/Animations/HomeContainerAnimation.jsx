import {motion} from "framer-motion";
import {CustomContainer} from "../CustomContainer.jsx";
import {BsBattery, BsHouse, BsTree} from "react-icons/bs";

// Varianten voor de containeranimatie
const containerVariants = {
    hidden: {opacity: 0}, // Verborgen toestand
    visible: {
        opacity: 1, // Zichtbare toestand
        transition: {
            staggerChildren: 0.3, // Vertraagde animatie van Children
        },
    },
};

// Varianten voor de individuele animatie-items
const itemVariants = {
    hidden: {opacity: 0, y: 50}, // Verborgen toestand
    visible: {opacity: 1, y: 0, transition: {duration: 1}}, // Zichtbare toestand
};

// Component voor de home-containeranimatie
export const HomeContainerAnimation = () => {
    return (
        // Hoofdmotion-div voor de gehele container
        <motion.div
            className="-bottom-1 z-10 mx-auto flex w-full flex-col items-center justify-center md:absolute md:items-start md:p-24"
            initial="hidden" // Starttoestand van de animatie
            animate="visible" // Eindtoestand van de animatie
            variants={containerVariants} // Toepassen van containeranimatievarianten
        >
            {/* Titel van de sectie */}
            <p className="mb-2 text-center text-2xl font-dm">
                Waarom onze woningen uniek zijn:
            </p>

            {/* Sub-container met individuele elementen */}
            <motion.div
                className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start"
                variants={containerVariants} // Toepassen van dezelfde containeranimatie
            >
                {/* Individuele animatie-item voor "Modulair Ontwerp" */}
                <motion.div variants={itemVariants}>
                    <CustomContainer
                        icon={BsHouse}
                        title="Modulair Ontwerp"
                        content="Aanpasbare en uitbreidbare huizen die meegroeien met uw behoeften."
                    />
                </motion.div>
                {/* Individuele animatie-item voor "Milieuvriendelijke Materialen" */}
                <motion.div variants={itemVariants}>
                    <CustomContainer
                        icon={BsTree}
                        title="Milieuvriendelijke Materialen"
                        content="Duurzaam gewonnen materialen voor een verminderde milieu-impact."
                    />
                </motion.div>
                {/* Individuele animatie-item voor "Energie-efficiëntie" */}
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