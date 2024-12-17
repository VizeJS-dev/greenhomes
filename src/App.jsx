import {FloatingNav} from "./components/Nav/FloatingNav.jsx";
import {HamburgerNav} from "./components/Nav/HamburgerNav.jsx";
import {Footer} from "./components/Footer.jsx";
import {Button} from "./components/Button.jsx";

import home from "./assets/home.png";

function App() {
    const navItems = [
        {
            name: "HOME",
            link: "#home",
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
      <div className="w-screen h-full flex flex-col">
          {/* Header Section */}
          <div id="home" className="flex h-[100px] justify-between px-6 py-2 bg-greenhomes-white">
              <h1 className="block text-4xl font-k2d font-bold text-greenhomes-darkgreen">
                  GreenHomes
              </h1>
              <FloatingNav navItems={navItems} className=""/>
              <HamburgerNav/>
          </div>

          {/* Vertical Sections (Pages) */}
          <div className="flex flex-col">
              {/* Home */}
              <div
                  className="flex flex-col min-h-screen bg-greenhomes-white justify-center items-center gap-10"
              >
                  <div className="md:absolute w-[90%] md:w-[716px] md:-[325] flex flex-col gap-4">
                      <p className="font-k2d text-5xl md:text-5xl w-3/4">Uw duurzame droomhuis wacht op u.</p>
                      <p className="font-k2d text-3xl md:text-4xl text-greenhomes-darkgreen">Modulaire, energiezuinige starterswoningen voor de milieubewuste generatie.</p>
                      <Button customSize={"px-[32px] py-[12px] md:w-[336px] md:h-[45px]"} type="button" text="Begin met het ontwerpen van uw huis"/>
                  </div>
                  <img className="w-full" src={home} alt="home blob"/>
                  <p className="font-k2d font-semibold text-2xl">Waarom onze woningen uniek zijn:</p>
              </div>

              {/* Over ons */}
              <div
                  id="over-ons"
                  className="flex min-h-screen bg-greenhomes-gray justify-center items-center"
              >
                  <h2 className="text-3xl font-k2d font-medium text-greenhomes-darkgreen">
                      Over ons
                  </h2>
              </div>

              {/* Ontwerp uw huis */}
              <div
                  id="ontwerp-uw-huis"
                  className="flex min-h-screen bg-greenhomes-lightgreen justify-center items-center"
              >
                  <h2 className="text-3xl font-k2d font-medium text-greenhomes-orange">
                      Ontwerp uw huis
                  </h2>
              </div>

              {/* Offerte aanvragen */}
              <div
                  id="offerte-aanvragen"
                  className="flex min-h-screen bg-greenhomes-darkgreen justify-center items-center"
              >
                  <h2 className="text-3xl font-k2d font-medium text-greenhomes-white">
                      Offerte aanvragen
                  </h2>
              </div>
          </div>

          {/* Footer */}
          <Footer/>
      </div>
  )
}

export default App
