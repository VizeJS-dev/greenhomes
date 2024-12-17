export const Footer = () => {
    return (
        <>
            <div className="flex flex-col h-1/6 bg-greenhomes-darkgreen gap-6">
                <div id="socials" className="flex gap-1 justify-center">
                    <a href="https://www.instagram.com/">

                    </a>
                </div>
                <div id="contact" className="flex justify-center gap-4">
                    <div className="flex gap-1">
                        <img className="text-white" src="https://img.icons8.com/material-outlined/24/000000/map.png"
                             alt="map icon"/>
                        <a className="text-white" href="https://www.google.nl/maps/">Route</a>
                    </div>
                    <div className="flex gap-1">
                        <img className="text-white" src="https://img.icons8.com/material-outlined/24/000000/map.png"
                             alt="map icon"/>
                        <a className="text-white" href="https://www.google.nl/maps/">(050) 1234567</a>
                    </div>
                    <div className="flex gap-1">
                        <img className="text-white" src="https://img.icons8.com/material-outlined/24/000000/map.png"
                             alt="map icon"/>
                        <a className="text-white" href="https://www.google.nl/maps/">info@greenhomes.nl</a>
                    </div>
                </div>
                <p className="text-white text-center">© 2024 GreenHomes. Alle rechten voorbehouden.
                    Duurzaam wonen voor een betere toekomst.</p>
            </div>
        </>
    )
}