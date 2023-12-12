const offset = 0;
const limit = 100;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

fetch(url)
    .then(response =>  response.json())
    .then(jsonBody =>  jsonBody.results)
    .then((pokemonsList) => {
        generatePokemon(pokemonsList)
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Requisição Concluída'))


function generatePokemon(list) {
    for (let i = 0; i < list.length; i++) {
        const pokemon = list[i];
        const divPokemons = document.getElementById('pokemons');
        divPokemons.innerHTML+= convertPokemonToHtml(pokemon, i+1);
    }
}

function convertPokemonToHtml(pokemon, id) {
    return `
        <li class="pokemon">
            <span class="number">#0${id}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}
