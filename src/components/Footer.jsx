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
            <div className="flex h-fit flex-col gap-6 py-6 bg-greenhomes-darkgreen">
                <div id="socials" className="flex justify-center gap-4">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <BsInstagram className="h-6 w-6 text-white transition ease-in hover:text-greenhomes-orange"/>
                    </a>
                    <a href="https://www.x.com/" target="_blank" rel="noreferrer">
                        <BsTwitterX className="h-6 w-6 text-white transition ease-in hover:text-greenhomes-orange"/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <BsFacebook className="h-6 w-6 text-white transition ease-in hover:text-greenhomes-orange"/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <BsLinkedin className="h-6 w-6 text-white transition ease-in hover:text-greenhomes-orange"/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        <BsYoutube className="h-6 w-6 text-white transition ease-in hover:text-greenhomes-orange"/>
                    </a>
                </div>
                <div id="contact" className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div id="route" className="flex gap-4">
                            <BsPinMapFill className="h-6 w-6 text-white"/>
                            <a
                                className="text-white underline transition ease-in hover:text-greenhomes-orange"
                                href="https://www.google.nl/maps/"
                            >
                                Route
                            </a>
                        </div>
                        <div id="phone" className="flex gap-4">
                            <BsTelephoneFill className="h-6 w-6 text-white"/>
                            <a
                                className="text-white"
                                href="tel:+31501234567"
                            >
                                (050) 1234567
                            </a>
                        </div>
                        <div id="email" className="flex gap-4">
                            <BsEnvelopeFill className="h-6 w-6 text-white"/>
                            <a
                                className="text-white"
                                href="mailto:info@greenhomes.nl"
                            >
                                info@greenhomes.nl
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-center text-white">© 2024 GreenHomes. Alle rechten voorbehouden.
                    Duurzaam wonen voor een betere toekomst.</p>
            </div>
        </>
    )
}