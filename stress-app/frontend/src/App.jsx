import { useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SliderCard from "./components/SliderCard";
import WorkTimerCard from "./components/WorkTimerCard";
import StatsCard from "./components/StatsCard1";
import AdviceCard from "./components/AdviceCard";
import ExerciseCard from "./components/ExerciseCard";
import PauseSuggestions from "./components/PauseSuggestions";

export default function App() {
  const [name] = useState("John Doe");

  const [currentPage, setCurrentPage] = useState("home"); // "home" | "pause"

  // Check-in
  const [stress, setStress] = useState(2);
  const [energy, setEnergy] = useState(2);

  // Dummy “stats van vandaag” (kan je later berekenen/opslaan)
  const stats = useMemo(() => {
    const avgStress = stress; // demo: neem huidige waarde
    const avgEnergy = energy;
    return {
      avgStress,
      avgEnergy,
      breaksTaken: 3,
      breaksIgnored: 2
    };
  }, [stress, energy]);

  const adviceText = useMemo(() => {
    // simpele, uitlegbare regels (perfect voor demo)
    if (stress >= 4 && energy <= 2) {
      return "Je stress is hoog en je energie laag. Plan vandaag bewust een korte decompressie (5 minuten, zonder scherm) en neem de eerstvolgende pauze.";
    }
    if (stress >= 4) {
      return "Je stress is vandaag verhoogd. Overweeg een korte ademhalingsoefening en plan een micro-pauze binnen 15 minuten.";
    }
    if (energy <= 2) {
      return "Je energie is laag. Een korte fysieke break (rechtstaan, water halen, 2 minuten bewegen) kan helpen om terug op gang te komen.";
    }
    return "Je stress en energie zijn momenteel in balans. Probeer dit ritme vast te houden en neem regelmatig korte pauzes.";
  }, [stress, energy]);

  

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

       {currentPage === "pause" ? (
        <PauseSuggestions />
      ) : (
        <main className="page">
          <h1 className="greeting">Hallo {name},</h1>

          <section className="section">
            <h2 className="sectionTitle">Check in</h2>

            <div className="grid2">
              <SliderCard
                title="Hoe hoog is je stressniveau nu?"
                value={stress}
                onChange={setStress}
                icon="📈"
              />
              <SliderCard
                title="Wat is jouw energie level op dit moment?"
                value={energy}
                onChange={setEnergy}
                icon="🔋"
              />
            </div>
          </section>

          <section className="section">
            <WorkTimerCard />
          </section>

          <section className="section">
            <h2 className="sectionTitle">Stats van vandaag</h2>
            <StatsCard stats={stats} />
          </section>

          <section className="section">
            <h2 className="sectionTitle">Advies</h2>
            <AdviceCard text={adviceText} />
          </section>

          <section className="section">
            <ExerciseCard />
          </section>
        </main>
      )}
    </div>
  );
}
