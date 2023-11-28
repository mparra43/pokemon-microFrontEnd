import { useEffect, useState } from "react";

const PokemonsCarouselItem = ({ name, getPokemonByName }) => {
  const [item, setItem] = useState(null);

  const getPokemonItem = async () => {
    const pokemon = await getPokemonByName(name);
    setItem(pokemon);
  };
  useEffect(() => {
    getPokemonItem();
  }, []);

  return (
    <div
      className="card p-5 w-full bg-dark bg-gradient shadow-lg rounded border border-2 border-secondary"
      style={{ height: "20rem" }}
    >
      <div className="row g-0">
        <div className="col-md-2 d-flex justify-content-center shadow p-4 mb-5 border-2 border-secondary rounded">
          <img
            src={item?.sprites?.front_default}
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start border-2 border-secondary img-pokemon "
          />
        </div>
        <div className="col-md-10 px-5">
          <div className="card-body">
            <h2 className="card-title text-white  fw-bolder">{name}</h2>
            <p className="card-text my-4 ">
              <a
                href={`/pokemons/${item?.id}`}
                className="btn btn-outline-secondary"
              >
                see more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonsCarouselItem;
