import {
    BsInstagram,
    BsTwitterX,
    BsFacebook,
    BsLinkedin,
    BsYoutube,
    BsPinMapFill,
    BsTelephoneFill,
    BsEnvelopeFill
} from "react-icons/bs";


export const Footer = () => {
    return (
        <>
            <div className="flex flex-col h-fit bg-greenhomes-darkgreen gap-6 py-6">
                <div id="socials" className="flex gap-4 justify-center">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <BsInstagram className="text-white w-6 h-6 hover:text-greenhomes-orange transition ease-in"/>
                    </a>
                    <a href="https://www.x.com/" target="_blank" rel="noreferrer">
                        <BsTwitterX className="text-white w-6 h-6 hover:text-greenhomes-orange transition ease-in"/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <BsFacebook className="text-white w-6 h-6 hover:text-greenhomes-orange transition ease-in"/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <BsLinkedin className="text-white w-6 h-6 hover:text-greenhomes-orange transition ease-in"/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <BsYoutube className="text-white w-7 h-7 hover:text-greenhomes-orange transition ease-in"/>
                    </a>
                </div>
                <div id="contact" className="flex flex-col md:flex-row items-center md:justify-center gap-4">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div id="route" className="flex gap-4">
                            <BsPinMapFill className="text-white w-6 h-6 "/>
                            <a
                                className="text-white underline hover:text-greenhomes-orange transition ease-in"
                                href="https://www.google.nl/maps/"
                            >
                                Route
                            </a>
                        </div>
                        <div id="phone" className="flex gap-4">
                            <BsTelephoneFill className="text-white w-6 h-6"/>
                            <a
                                className="text-white"
                                href="tel:+31501234567"
                            >
                                (050) 1234567
                            </a>
                        </div>
                        <div id="email" className="flex gap-4">
                            <BsEnvelopeFill className="text-white w-6 h-6"/>
                            <a
                                className="text-white"
                                href="mailto:info@greenhomes.nl"
                            >
                                info@greenhomes.nl
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-white text-center">© 2024 GreenHomes. Alle rechten voorbehouden.
                    Duurzaam wonen voor een betere toekomst.</p>
            </div>
        </>
    )
}