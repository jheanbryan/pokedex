import { pokemonsList } from "./poke-api.js"; 
const divPokemons = document.getElementById('pokemons');

generatePokemon(pokemonsList);


function generatePokemon(list = []) {
    let newList = list.map(pokemon => convertPokemonToHtml(pokemon))
    const newHtml = newList.join('');
    divPokemons.innerHTML = newHtml;
}

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#000</span>
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
