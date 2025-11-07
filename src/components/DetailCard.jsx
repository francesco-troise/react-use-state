export default function DetailCard({ language }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        {language ? (
          <>
            <h5 className="card-title fw-bold">{language.title}</h5>
            <p className="card-text">{language.description}</p>
          </>
        ) : (
          <p className="text-muted">Nessun linguaggio selezionato</p>
        )}
      </div>
    </div>
  );
}
