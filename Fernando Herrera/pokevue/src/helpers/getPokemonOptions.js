import pokemonApi from "../api/pokemonApi";

const GET_POKEMONS = () => {
  const POKEMONS_ARR = Array.from(Array(650));
  return POKEMONS_ARR.map((val, ind) => ind + 1);
};

const GET_POKEMON_OPTIONS = async () => {
  const MIXED_POKEMONS = GET_POKEMONS().sort(() => Math.random() - 0.5);

  const POKEMONS = await GET_POKEMON_NAMES(MIXED_POKEMONS.splice(0, 4));
  return POKEMONS;
};

const GET_POKEMON_NAMES = async ([a, b, c, d] = []) => {
  // const { data } = await pokemonApi.get(`/1`);
  // console.log(data.name, data.id);

  const PROMISE_ARR = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [p1, p2, p3, p4] = await Promise.all(PROMISE_ARR);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};
export default GET_POKEMON_OPTIONS;
