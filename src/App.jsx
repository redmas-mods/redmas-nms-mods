import { useEffect } from "react";
import AOS from "aos";
import mods from "./data/mods";
import ModCard from "./components/ModCard";
import Navbar from "./components/NavBar";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-center mb-5">
          Télécharger des Mods
        </h1>

        <div className="row g-4">
          {mods.map((mod) => (
            <ModCard key={mod.id} mod={mod} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
