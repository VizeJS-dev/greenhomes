import {FloatingNav} from "./components/Navigation.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
    const navItems = [
        {
            name: "HOME",
            link: "/",
            icon: <i className="fas fa-home" />,
            id: 0
        },
        {
            name: "OVER ONS",
            link: "/over-ons",
            icon: <i className="fas fa-info-circle" />,
            id: 1
        },
        {
            name: "ONTWERP UW HUIS",
            link: "/ontwerp-uw-huis",
            icon: <i className="fas fa-info-circle" />,
            id: 2
        }
    ]

  return (
    <div className="flex h-full w-screen bg-greenhomes-darkgreen">
        <div>
            <FloatingNav navItems={navItems}/>
            <div className="h-[1000px] w-screen bg-greenhomes-white">
                <h2>GreenHomes</h2>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default App
