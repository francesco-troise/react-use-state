import languages from "./components/Languages";
import LanguageButton from "./components/LanguageButton";
import DetailCard from "./components/DetailCard";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(languages[0]);
  // Stato che tiene traccia del linguaggio attualmente selezionato.

  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold fs-2">Learn Web Development</h1>
      <div className="mb-4 d-flex flex-wrap gap-2">
        {/*
          languages.mapcrea dinamicamente un button
          per ogni linguaggio presente nell’array
        */}
        {languages.map((lang) => (
          <LanguageButton
            key={lang.id}
            language={lang}
            isActive={selected?.id === lang.id}
            // isActive: diventa true quando l'id del linguaggio selezionato
            // coincide con quello del bottone, così il bottone diventa giallo

            onClick={() => setSelected(lang)}
            // aggiornamento dello stato: cambia linguaggio
          />
        ))}
      </div>

      {/*
        Mostra in una card i dettagli del linguaggio selezionato.
        Gli passiamo l'intero oggetto "selected".
      */}
      <DetailCard language={selected} />
    </div>
  );
}
