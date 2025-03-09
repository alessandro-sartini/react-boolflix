import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import Results from "./Results";

export default function TopCarousel() {
  const { highReating } = useGlobalContext();

  if (highReating.length === 0) {
    return (
      <section>
        <p className="text-center">
          Nessun risultato trovato con alta valutazione.
        </p>
      </section>
    );
  }

 return (
    <section >
      <h2 className="text-center my-5 gold">Top Film e Serie TV con Alta Valutazione</h2>
      {/* Passiamo highReating a Results */}
      <Results type="mixed" items={highReating} />
    </section>
  );
}
