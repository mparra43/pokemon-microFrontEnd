import PokemonsCarousel from "../components/pokemons-carousel.component";
import Pokemons from "../components/pokemons.component";
import { usePokemons } from "../hooks/usePokemons";

const PokemonsPage = (): JSX.Element => {
  const { getPokemonByName, pokemons, pokemonsSlider, searchPokemons, types } =
    usePokemons();

  return (
    <div className=" h-screen">
      <PokemonsCarousel
        pokemons={pokemonsSlider}
        getPokemonByName={getPokemonByName}
      />
      <Pokemons
        types={types}
        pokemons={pokemons}
        searchPokemonsByType={searchPokemons}
        getPokemonByName={getPokemonByName}
      />
    </div>
  );
};
export default PokemonsPage;
