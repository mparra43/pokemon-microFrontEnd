import PokemonsCarousel from "../components/pokemons-carousel.component";
import Pokemons from "../components/pokemons.component";
import { usePokemons } from "../hooks/usePokemons";

const PokemonsPageDatail = (): JSX.Element => {
  const { getPokemonByName, pokemons, pokemonsSlider, searchPokemons, types } =
    usePokemons();

  return <div className=" h-screen">pokemon detail</div>;
};
export default PokemonsPageDatail;
