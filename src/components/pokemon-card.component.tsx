import { useEffect, useState } from "react";

const PokemonCard = ({ pokemon, getPokemonByName }) => {
  const [item, setItem] = useState(null);

  const getPokemonItem = async () => {
    const pokemonDetail = await getPokemonByName(pokemon.pokemon.name);
    setItem(pokemonDetail);
  };
  useEffect(() => {
    getPokemonItem();
  }, [pokemon.pokemon.name]);

  return (
    <div
      className="card bg-dark bg-opacity-50 rounded shadow m-4 "
      style={{ width: "15rem" }}
    >
      <img
        src={item?.sprites?.front_default}
        className="card-img-top img-pokemon mx-auto"
        alt="..."
      />
      <div className="card-body ">
        <h3 className="card-title text-white">{item?.name}</h3>
        <span className="card-text text-white my-2">
          base experience: {item?.base_experience}
        </span>
        <a
          href={`/pokemons/${item?.id}`}
          className="btn btn-outline-secondary shadow rounded-pill my-4"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default PokemonCard;
