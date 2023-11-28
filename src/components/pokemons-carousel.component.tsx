import Carousel from "react-bootstrap/Carousel";
import PokemonsCarouselItem from "./pokemons-carousel-item.component";

const PokemonsCarousel = ({ pokemons, getPokemonByName }) => {
  return (
    <div
      className="bg-dark bg-gradient shadow"
      style={{ height: "20rem", padding: "4rem" }}
    >
      <Carousel>
        {pokemons &&
          pokemons.map((item, index) => (
            <Carousel.Item key={index} interval={1000}>
              <PokemonsCarouselItem
                name={item.name}
                getPokemonByName={getPokemonByName}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};
export default PokemonsCarousel;
