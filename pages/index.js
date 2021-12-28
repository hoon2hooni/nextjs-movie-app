import { stringify } from "query-string";

import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_URL);
      const { results = [] } = await response.json();
      setMovies(results);
    })();
  }, [BASE_URL]);

  if (movies.length === 0) {
    return <h1>is Loading</h1>;
  }

  return (
    <div>
      {movies.map(({ adult, title, vote_average }) => (
        <>
          <h1>{title}</h1>
          <h2>{adult ? "성인" : "전 연령 관람 가능"}</h2>
          <h3>평점 : {vote_average} </h3>
        </>
      ))}
    </div>
  );
}
