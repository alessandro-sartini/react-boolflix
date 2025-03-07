import Card from "./Card";

export default function Results({ type, items }) {
  return (
    <section>
      <p>Risultati trovati: <strong className="text-danger ">{items.length}</strong></p>
      <div className="row row-cols-md-3 row-cols-lg-4 my-3">
        {items && items.length > 0 ? (
          items.map(item => <Card key={item.id} data={item} type={type} />)
        ) : (
          <p>Nessun risultato trovato</p>
        )}
      </div>
    </section>
  );
}