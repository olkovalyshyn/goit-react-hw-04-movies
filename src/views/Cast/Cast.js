import { useState, useEffect } from "react";

import * as API from "../../components/services/Api";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState();

  useEffect(() => {
    API.fetchMovieCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map((person) => (
            <>
              <img
                key={person.id}
                src={API.BASE_IMG_URL + person.profile_path}
                width="100"
              ></img>
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </>
          ))}
        </ul>
      )}
    </>
  );
}
