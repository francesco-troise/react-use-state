export default function LanguageButton({ language, isActive, onClick }) {
  return (
    <button
      // Al click viene chiamata la funzione
      onClick={onClick}
      // se isActive è attivo → btn-warning (giallo)
      // altrimenti → btn-primary (blu)
      className={"btn me-2 " + (isActive ? "btn-warning" : "btn-primary")}
    >
      {/* Mostra il titolo del linguaggio sul bottone */}
      {language.title}
    </button>
  );
}
