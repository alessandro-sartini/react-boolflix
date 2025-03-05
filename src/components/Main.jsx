import CardFilms from "./mainComponents/CardFilms";
import CardTvSeries from "./mainComponents/CardTvSeries";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="row">
         
          <CardFilms />
          <CardTvSeries />
        </div>
      </div>
    </main>
  );
}
