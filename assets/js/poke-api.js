let pokemonsList = [];
let pokemonsListDetails = [];

async function getPokemonDetails(pokemonsList) {
  const requests = pokemonsList.map(pokemon => {
    return fetch(pokemon.url)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(err => console.error(err));
  });

  pokemonsListDetails = await Promise.all(requests);
}

async function getPokemons(offset = 0, limit = 100) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    pokemonsList = jsonBody.results;
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Requisição Concluída');
  }
}

await getPokemons();
await getPokemonDetails(pokemonsList);

export { pokemonsList, pokemonsListDetails };
