import { useDispatch, useSelector } from "react-redux";
import pokemonsApi from "../api/pokemons-api";
import { setPokemons, setPokemonsSlider, setTypes } from "../store/pokemons";
import { useEffect } from "react";
import { RootState } from "../store";

export const usePokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, types, pokemonsSlider } = useSelector(
    (state: RootState) => state.pokemons
  );

  const getPokemonByName = async (name: string) => {
    try {
      const { data } = await pokemonsApi.get(`/pokemon/${name}`);
      return data;
    } catch (error) {}
  };
  const getPokemons = async (page: number) => {
    try {
      const { data } = await pokemonsApi.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );
      dispatch(setPokemonsSlider({ pokemons: data.results, page: page + 1 }));
    } catch (error) {}
  };

  const getTypes = async () => {
    try {
      const { data } = await pokemonsApi.get(`/type`);

      dispatch(setTypes({ types: data.results }));
    } catch (error) {}
  };

  const searchPokemons = async (name: string) => {
    try {
      const { data } = await pokemonsApi.get(`/type/${name}`);
      dispatch(setPokemons({ pokemons: data.pokemon.slice(0, 12), page: 1 }));
    } catch (error) {}
  };

  useEffect(() => {
    getTypes();
    getPokemons(0);
    searchPokemons("water");
  }, []);

  return {
    getPokemons,
    getPokemonByName,
    pokemons,
    pokemonsSlider,
    searchPokemons,
    types,
  };
};
