import { useGlobalContext } from "../context/GlobalContext";
import Results from "./mainComponents/Results";
import TopCarousel from "./mainComponents/TopCarousel";
// import CardFilms from './mainComponents/CardFilms';
// import CardTvSeries from './mainComponents/CardTvSeries';
import Loader from "./Loader";

export default function Main() {
  const { films, tvShows, loading } = useGlobalContext();

  return (
    <main>
      <div className="container">
        {loading ? ( // Se loading è true, mostra il Loader
          <Loader />
        ) : films.length === 0 ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{}}
          >
            <p className="text-center display-4">
              Cerca un film o una serie tv
            </p>
          </div>
        ) : (
          <>
            <Loader />
            <TopCarousel />
            <h2 className="mt-5">Films</h2>
            <Results type="movies" items={films} />
            {/* <CardFilms/> */}
            <h2>Serie Tv</h2>
            <Results type="tvShows" items={tvShows} />
            {/* <CardTvSeries/> */}
          </>
        )}
      </div>
    </main>
  );
}
