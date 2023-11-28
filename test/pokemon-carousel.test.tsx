import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonsCarousel from "../src/components/pokemons-carousel.component";

jest.mock("react-bootstrap/Carousel", () => ({
  Carousel: ({ children }) => <div>{children}</div>,
}));
jest.mock("./pokemons-carousel-item.component", () => ({
  PokemonsCarouselItem: () => <div>MockedPokemonsCarouselItem</div>,
}));

describe("PokemonsCarousel", () => {
  it("renders correctly with pokemons", () => {
    const pokemons = [{ name: "Pikachu" }, { name: "Bulbasaur" }];

    const { getByText } = render(
      <PokemonsCarousel pokemons={pokemons} getPokemonByName={() => {}} />
    );

    expect(getByText("MockedPokemonsCarouselItem")).toBeInTheDocument();
  });

  it("renders correctly without pokemons", () => {
    const { container } = render(
      <PokemonsCarousel pokemons={[]} getPokemonByName={() => {}} />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        </div>
    `);
  });
});
