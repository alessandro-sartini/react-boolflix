// Funzione per convertire una valutazione numerica in un sistema di stelle
 export default function ratingStar(valutazione) {
    const fullStar = "★";
    const emptyStar = "☆";
    const numeroDiStelle = Math.round(valutazione / 2);
    const stampStarFull = fullStar.repeat(numeroDiStelle);
    const stampStarEmpty = emptyStar.repeat(5 - numeroDiStelle);
    const isHighRating = numeroDiStelle > 3;

    // Restituisce un elemento span con le stelle e una classe CSS basata sul rating
    return (
      <span className={isHighRating ? "gold" : "silver"}>
        {stampStarFull}
        {stampStarEmpty}
      </span>
    );
  }