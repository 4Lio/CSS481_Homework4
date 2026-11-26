import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json.data));
  }, [id]);

  return (
    <>
      <Link to="/">Back</Link>
      <h2>{character.name}</h2>
      <img src={character.imageUrl} alt={character.name} referrerPolicy="no-referrer" />

      <h3>Movies</h3>
      <ul>
        {character.films?.map((film) => <li key={film}>{film}</li>)}
      </ul>

      <h3>TV Shows</h3>
      <ul>
        {character.tvShows?.map((show) => <li key={show}>{show}</li>)}
      </ul>
    </>
  );
}

export default Character;