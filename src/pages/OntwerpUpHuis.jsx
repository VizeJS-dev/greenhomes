import {HouseCustomizer} from "../components/HouseCustomizer.jsx";
import HouseCustomizerImg from "../assets/HouseCustomizerImg.png";

export const OntwerpUpHuis = () => {
    return (
        <>
            <>
                <div
                    id="ontwerp-uw-huis"
                    name="Ontwerp uw huis"
                    className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden py-12 bg-greenhomes-white md:flex-row md:py-0"
                >
                    <div className="flex w-full flex-col items-center gap-12 md:flex-row md:gap-0">
                        <div className="w-full md:w-1/2">
                            <img src={HouseCustomizerImg} alt="Customize your house illustration"
                                 className="h-auto w-full"/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <HouseCustomizer/>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}