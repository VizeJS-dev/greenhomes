import {Button} from "../components/Button.jsx";
import home from "../assets/home.png";
import {WoningFunctie} from "../components/WoningFunctie.jsx";
import {BsHouse} from "react-icons/bs";

export const Home = () => {
    return (
        <>
            <div
                className="flex flex-col min-h-screen bg-greenhomes-white justify-start items-center px-6 py-2 md:px-12 md:py-12 gap-10"
            >
                <div className="flex flex-col md:w-full md:flex-row justify-between gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="font-k2d text-5xl md:w-[90%] md:text-6xl">Uw duurzame droomhuis wacht op u.</p>
                        <p className="font-k2d text-3xl md:text-4xl text-greenhomes-darkgreen">Modulaire,
                            energiezuinige starterswoningen voor de milieubewuste generatie.</p>
                        <Button href="#ontwerp-uw-huis" customSize={"px-[32px] py-[12px] md:w-[336px] md:h-[45px]"}
                                type="button"
                                text="Begin met het ontwerpen van uw huis"/>
                    </div>

                    <div className="flex justify-center items-center md:w-1/2">
                        <img
                            className="h-auto"
                            src={home}
                            alt="home blob"
                        />
                    </div>
                </div>

                <div className="bottom-20 flex flex-col justify-center items-center md:items-start gap-4">
                    <p className="font-k2d font-semibold text-2xl">Waarom onze woningen uniek zijn:</p>
                    <div className="flex flex-col gap-6 md:flex-row justify-center md:justify-around items-center">
                        <WoningFunctie icon={BsHouse} title="Modulair Ontwerp"
                                       text="Aanpasbare en uitbreidbare huizen die meegroeien met uw behoeften."/>
                        <WoningFunctie icon={BsHouse} title="Milieuvriendelijke Materialen"
                                       text="Duurzaam gewonnen materialen voor een verminderde milieu-impact."/>
                        <WoningFunctie icon={BsHouse} title="Energie-efficiëntie"
                                       text="Geavanceerde isolatie en slimme systemen voor een lager energieverbruik."/>
                    </div>
                </div>
            </div>
        </>
    )
}