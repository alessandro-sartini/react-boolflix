import { useGlobalContext } from "../../context/GlobalContext";

export default function Card({ data, type }) {
  const { linkImg, ratingStar } = useGlobalContext();

  const title = type === "movies" ? data.title : data.name;
  const originalTitle = type === "movies" ? data.original_title : data.original_name;

  return (
    <div className="mb-4 card-container">
      <div className="card h-100 empty-card">
        <div
          className="
            container 
            d-flex
            justify-content-center
            align-items-center
            flex-column"
        >
          <h5 className="m-2 my-2 text-danger">{title}</h5>
          <h6 className="card-subtitle m-2 text-muted">
            titolo originale: {originalTitle}
          </h6>
          <span className="trama">trama: {data.overview}</span>
          <span
            className={`my-1 fi fi-${
              data.original_language === "en"
                ? "gb"
                : data.original_language === "ja"
                ? "jp"
                : data.original_language
            }`}
          ></span>
        </div>
      </div>
      <div className="card h-100 full-card">
        <img
          src={`${linkImg}w500${data.poster_path}`}
          className="card-img-top"
          alt={title}
        />
        <div
          className="
            container-opacity 
            position-absolute
            bottom-0
            start-50
            translate-middle-x
            rounded-pill"
        >
          <h5
            className="
              card-title
              text-white
              text-truncate
              p-1
              m-0"
            style={{ zIndex: 1 }}
          >
            {title}
          </h5>
          <label className="p-2">{ratingStar(data.vote_average)}</label>
        </div>
      </div>
    </div>
  );
}