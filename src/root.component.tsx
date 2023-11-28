import { Provider } from "react-redux";
import { store } from "./store";
import PokemonsPage from "./pages/pokemons-page.component";
import "./shared/global.css";
export default function Root(props: any) {
  return (
    <Provider store={store}>
      <PokemonsPage />
    </Provider>
  );
}
