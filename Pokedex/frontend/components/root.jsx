import React from "react";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
// import App from "./app";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route path="/" component={PokemonIndexContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
