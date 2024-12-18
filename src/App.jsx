import {FloatingNav} from "./components/Nav/FloatingNav.jsx";
import {HamburgerNav} from "./components/Nav/HamburgerNav.jsx";
import {Footer} from "./components/Footer.jsx";
import {Home} from "./pages/Home.jsx";
import {OverOns} from "./pages/OverOns.jsx";
import {OntwerpUpHuis} from "./pages/OntwerpUpHuis.jsx";
import {OfferteAanvragen} from "./pages/OfferteAanvragen.jsx";

function App() {
    return (
        <div className="flex w-full flex-col">
            {/* Header Sectie */}
            <div id="header"
                 className="flex items-center justify-between px-6 py-2 bg-greenhomes-white md:px-24 md:py-12">
                <h1 className="text-4xl font-bold font-k2d text-greenhomes-darkgreen">
                    GreenHomes
                </h1>
                <FloatingNav className=""/>
            </div>
            {/* Navigatiemenu (Hamburger-stijl) */}
            <HamburgerNav/>
            {/* Pagina's in de applicatie */}
            <Home/>
            <OverOns/>
            <OntwerpUpHuis/>
            <OfferteAanvragen/>
            {/* Footer Sectie */}
            <Footer/>
        </div>
    )
}

export default App
