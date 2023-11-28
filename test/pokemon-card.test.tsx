import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PokemonCard from "../src/components/pokemon-card.component";

const mockGetPokemonByName = async (name) => {
  return Promise.resolve({
    name: "Charmander",
    sprites: {
      front_default: "url_to_charmander_image",
    },
    base_experience: 64,
    id: 4,
  });
};

describe("PokemonCard", () => {
  it("renderiza correctamente con los datos del Pokemon", async () => {
    const pokemon = { pokemon: { name: "charmander" } };

    render(
      <PokemonCard pokemon={pokemon} getPokemonByName={mockGetPokemonByName} />
    );

    await waitFor(() => screen.getByAltText("..."));

    expect(screen.getByAltText("...")).toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
    expect(screen.getByText("base experience: 64")).toBeInTheDocument();
    expect(screen.getByText("Go somewhere")).toBeInTheDocument();
  });
});
