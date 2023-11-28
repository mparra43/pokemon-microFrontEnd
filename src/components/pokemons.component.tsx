import { useState } from "react";
import PokemonCard from "./pokemon-card.component";

const Pokemons = ({
  types,
  pokemons,
  searchPokemonsByType,
  getPokemonByName,
}) => {
  const [type, setType] = useState("");

  const handleSearchChange = (e) => {
    setType(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    searchPokemonsByType(type);
  };

  return (
    <div className="container-fluid bg-3 text-center bg-dark bg-gradient p-5 border-2 border-secondary">
      <form
        className="d-flex justify-content-center my-5 mx-8"
        onSubmit={handleSubmitSearch}
      >
        <select
          aria-label="Default select example"
          className="form-select rounded-end rounded-5"
          onChange={handleSearchChange}
        >
          <option selected>Open this select menu</option>
          {types &&
            types.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
        <button
          type="submit"
          className="btn btn-outline-secondary rounded-start rounded-5"
        >
          Buscar
        </button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        {pokemons &&
          pokemons.map((item, index) => (
            <PokemonCard
              key={index}
              pokemon={item}
              getPokemonByName={getPokemonByName}
            />
          ))}
      </div>
    </div>
  );
};
export default Pokemons;
