import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PokemonsCarouselItem from "../src/components/pokemons-carousel-item.component";

const mockGetPokemonByName = async (name) => {
  return Promise.resolve({
    name: "Charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
  });
};

describe("PokemonsCarouselItem", () => {
  it("renderiza correctamente con los datos del Pokemon", async () => {
    const pokemon = { name: "charmander" };

    render(
      <PokemonsCarouselItem
        name={pokemon.name}
        getPokemonByName={mockGetPokemonByName}
      />
    );

    await waitFor(() => screen.getByAltText("..."));

    expect(screen.getByAltText("...")).toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
  });
});
