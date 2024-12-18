import OnzeMissieBlobMobile from '../assets/OnzeMissieBlobMobile.png';
import OnsVerhaalBlobMobile from '../assets/OnsVerhaalBlobMobile.png';
import OnsVerhaal from '../assets/OnsVerhaal.jpg';
import OnzeMissie from '../assets/OnzeMissie.webp';

export const OverOns = () => {
    return (
        <>
            <section
                id="over-ons"
                name="Over ons"
                className="flex min-h-screen flex-col items-center justify-center p-4 bg-greenhomes-white md:p-0"
            >
                {/* Onze Missie */}
                <div
                    className="flex flex-col md:gap-0 max-w-[calc((100%_-_960px)/2_+_960px)] md:mt-2 md:flex-row mr-0 ml-auto"
                    id="onze-missie">
                    <div
                        className="flex flex-col gap-16 md:gap-0 max-w-[calc((100%_-_960px)/2_+_960px)] mr-0 ml-auto py-2 md:flex-row">
                        <div className="flex flex-col px-4 py-2">
                            <h2 className="text-3xl font-bold font-dm text-greenhomes-orange sm:text-4xl md:text-5xl">Onze Missie</h2>
                            <p className="text-base leading-relaxed font-dm sm:text-lg md:text-xl md:leading-relaxed">
                                Bij GreenHomes geloven we in het creëren van duurzame, op maat gemaakte woningen die
                                perfect aansluiten op de levensstijl en wensen van onze klanten. Onze missie is om
                                innovatieve
                                en milieuvriendelijke oplossingen toegankelijk te maken, terwijl we een zorgeloze en
                                klantgerichte ervaring bieden. Samen bouwen we niet alleen aan huizen, maar ook aan een
                                groenere toekomst.
                            </p>
                        </div>
                        <img
                            className="hidden w-full max-w-sm md:block md:rounded-l-2xl lg:max-w-md"
                            src={OnzeMissie}
                            alt="onze missie blob"
                        />
                    </div>
                    <img
                        className="block w-full object-contain md:hidden"
                        src={OnzeMissieBlobMobile}
                        alt="onze missie blob"
                    />
                </div>

                {/* Ons Verhaal */}
                <div
                    className="flex flex-col md:gap-0 max-w-[calc((100%_-_960px)/2_+_960px)] md:mt-2 md:flex-row ml-0 mr-auto"
                    id="ons-verhaal">
                    <div
                        className="flex flex-col gap-16 md:gap-0 max-w-[calc((100%_-_960px)/2_+_960px)] py-2 md:flex-row-reverse">
                        <div className="flex flex-col px-4 py-2">
                            <h2 className="text-3xl font-bold font-dm text-greenhomes-orange sm:text-4xl md:text-5xl">Ons Verhaal</h2>
                            <p className="text-base leading-relaxed font-dm sm:text-lg md:text-xl md:leading-relaxed">
                                GreenHomes begon met een eenvoudige droom: duurzaam wonen toegankelijk maken voor
                                iedereen.
                                Oorspronkelijk opgericht door een kleine groep milieubewuste ontwerpers, groeide het
                                bedrijf
                                uit tot een toonaangevende aanbieder van modulaire, energiezuinige woningen. Gedreven
                                door
                                passie en innovatie hebben we al talloze mensen geholpen om hun droomhuis te realiseren,
                                zonder de planeet onnodig te belasten. Ons verhaal draait om samen bouwen aan een betere
                                toekomst – één woning tegelijk.
                            </p>
                        </div>
                        <img
                            className="hidden w-full max-w-sm md:block md:rounded-r-2xl lg:max-w-md"
                            src={OnsVerhaal}
                            alt="ons verhaal blob"
                        />
                    </div>
                    <img
                        className="block w-full object-contain md:hidden"
                        src={OnsVerhaalBlobMobile}
                        alt="ons verhaal blob"
                    />
                </div>
            </section>
        </>
    )
}