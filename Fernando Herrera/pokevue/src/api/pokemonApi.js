import axios from "axios";

const POKEMON_API = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export default POKEMON_API;
