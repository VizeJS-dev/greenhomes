import {Button} from "../components/Button.jsx";
import home from "../assets/Home.webp";
import HomeMobile from "../assets/HomeMobile.png";
import {CustomContainer} from "../components/CustomContainer.jsx";
import {BsHouse} from "react-icons/bs";

export const Home = () => {
    return (

        <section
            id="home"
            className="flex min-h-screen flex-col items-center gap-4 bg-greenhomes-white md:gap-0 md:py-6"
        >
            <div
                className="mr-auto ml-0 flex-col md:w-[90%] md:h-[600px] md:flex-row"
                id="hero"
            >
                {/* Mobile */}
                <div className="flex-col px-6 py-2 md:hidden" id="mobile-hero">
                    <p className="text-5xl font-k2d md:w-[90%] md:text-6xl">
                        Uw duurzame droomhuis wacht op u.
                    </p>
                    <p className="text-3xl font-k2d text-greenhomes-darkgreen md:text-4xl">
                        Modulaire, energiezuinige starterswoningen voor de milieubewuste generatie.
                    </p>
                    <Button
                        href="#ontwerp-uw-huis"
                        customSize={"px-[32px] py-[12px] mt-2 w-full md:h-[45px] font-dm"}
                        type="button"
                        text="Begin met het ontwerpen van uw huis"
                    />
                </div>
                {/* Desktop */}
                <div
                    className="hidden w-full bg-cover bg-center md:block md:h-full md:rounded-r-2xl"
                    style={{backgroundImage: `url(${home})`}}
                >
                    <div className="flex flex-col gap-4 max-w-[calc((50%_-_960px)/2_+_960px)] px-24 py-6">
                        <p className="text-5xl font-dm md:w-[90%] md:text-6xl">
                            Uw duurzame droomhuis wacht op u.
                        </p>
                        <p className="text-3xl font-dm text-greenhomes-darkgreen md:text-4xl">
                            Modulaire, energiezuinige starterswoningen voor de milieubewuste generatie.
                        </p>
                        <Button
                            href="#ontwerp-uw-huis"
                            customSize={"px-[32px] py-[12px] md:w-[350px] md:h-[45px] font-dm"}
                            type="button"
                            text="Begin met het ontwerpen van uw huis"
                        />
                    </div>
                </div>
            </div>
            {/* Mobile Image */}
            <img
                className="block w-full object-contain md:hidden"
                src={HomeMobile}
                alt="home blob"
            />

            <div className="-bottom-1 z-10 flex flex-col justify-center md:absolute md:items-start md:p-24">
                <p className="mb-2 text-center text-2xl font-semibold font-dm">Waarom onze woningen uniek zijn:</p>
                <div className="flex flex-col items-center md:items-start justify-center gap-6 md:flex-row">
                    <CustomContainer icon={BsHouse} title="Modulair Ontwerp"
                                   content="Aanpasbare en uitbreidbare huizen die meegroeien met uw behoeften."/>
                    <CustomContainer icon={BsHouse} title="Milieuvriendelijke Materialen"
                                   content="Duurzaam gewonnen materialen voor een verminderde milieu-impact."/>
                    <CustomContainer icon={BsHouse} title="Energie-efficiëntie"
                                   content="Geavanceerde isolatie en slimme systemen voor een lager energieverbruik."/>
                </div>
            </div>
        </section>
    )
}