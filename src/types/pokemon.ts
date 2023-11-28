export interface Pokemon {
  name: string;
  url: string;
  sprites: Sprites;
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
}
