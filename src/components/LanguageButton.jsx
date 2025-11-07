export default function LanguageButton({ language, isActive, onClick }) {
  return (
    <button>
      onClick={onClick}
      {/*Al click il bottone, esegue la funzione passata dal componente padre*/}
      className={"btn me-2 " + (isActive ? "btn-warning" : "btn-primary")}
      {/*Se è attivo allora bottone giallo */}
      {/*Se NON è attivo allora bottone blu*/}
      {language.title}
      {/* Mostra il titolo del linguaggio */}
    </button>
  );
}
