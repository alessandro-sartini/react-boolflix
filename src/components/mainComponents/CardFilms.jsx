import axios from "axios";
import { useEffect, useState } from "react";

export default function CardFilms() {
  const { getFilms, setFilms } = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // axios
    //     .get(

    //     ` https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US`)
    //     // `${apiUrl}movie?query=batman&api_key=${apiKey}&include_adult=false&language=en-US`)
    //   .then((res) => {
    //     console.log(res.data);
    //     // setFilms(res.data.results);
    //   });
    // .catch((err) => console.error("Error fetching films:", err))

    /*

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setFilms(json.results);
            })
            .catch(err => console.error('error:' + err));
        */

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: apiKey,
      },
    };

    fetch(
      apiUrl + "movie?query=batman&include_adult=false&language=en-US",
      options
    )
      .then((res) => res.json())
         .then(json => {
                // console.log(json);
                setFilms(json.results);
            })
      .catch((err) => console.error(err));
  }, []);
}
