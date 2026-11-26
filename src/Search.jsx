import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search({ search, setSearch }) {
  const [input, setInput] = useState(search);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (search === "") return;

    fetch(`https://api.disneyapi.dev/character?name=${encodeURIComponent(search)}`)
      .then((response) => response.json())
      // data is a single object when there is only one match
      .then((json) => setCharacters([].concat(json.data)));
  }, [search]);

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(input);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Search</button>
      </form>

      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            <Link to={`/character/${character._id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Search;
