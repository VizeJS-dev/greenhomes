import {FloatingNav} from "./components/Nav/FloatingNav.jsx";
import {HamburgerNav} from "./components/Nav/HamburgerNav.jsx";
import {Footer} from "./components/Footer.jsx";
import {Home} from "./pages/Home.jsx";
import {OverOns} from "./pages/OverOns.jsx";
import {OntwerpUpHuis} from "./pages/OntwerpUpHuis.jsx";
import {OfferteAanvragen} from "./pages/OfferteAanvragen.jsx";

function App() {
    const navItems = [
        {
            name: "HOME",
            link: "#header",
            id: 'home'
        },
        {
            name: "OVER ONS",
            link: "#over-ons",
            id: 'over-ons'
        },
        {
            name: "ONTWERP UW HUIS",
            link: "#ontwerp-uw-huis",
            id: 'ontwerp-uw-huis'
        },
        {
            name: "OFFERTE AANVRAGEN",
            link: "#offerte-aanvragen",
            id: 'offerte-aanvragen'
        }
    ]

  return (
      <div className="flex h-full w-screen flex-col">
          {/* Header Section */}
          <div id="header" className="flex items-center justify-between px-6 py-2 bg-greenhomes-white md:px-24 md:py-12">
              <h1 className="text-4xl font-bold font-k2d text-greenhomes-darkgreen">
                  GreenHomes
              </h1>
              <FloatingNav navItems={navItems} className=""/>
          </div>
          <HamburgerNav/>
          <Home/>
          <OverOns/>
          <OntwerpUpHuis/>
          <OfferteAanvragen/>
          {/* Vertical Sections (Pages) */}
          {/*<div className="flex flex-col">*/}
          {/*    <Home/>*/}
          {/*    <OverOns/>*/}
          {/*    <OntwerpUpHuis/>*/}
          {/*    <OfferteAanvragen/>*/}
          {/*</div>*/}
          <Footer/>
      </div>
  )
}

export default App
