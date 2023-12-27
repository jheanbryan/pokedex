import { pokemonsList, pokemonsListDetails } from "./poke-api.js"; 
const divPokemons = document.getElementById('pokemons');

generatePokemon(pokemonsList, pokemonsListDetails);

function generatePokemon(list, detailsList) {

    let newList = list.map((pokemon, index) => convertPokemonToHtml(pokemon, detailsList, index));
    const newHtml = newList.join('');
    divPokemons.innerHTML = newHtml;

}

function convertPokemonToHtml(pokemon, detailsList, index) {
    const type = detailsList[index].types[0].type.name;

    return `
        <li class="pokemon ${type}">
            <span class="number">${index}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail ${type}">
                <ol class="types ${type}">
                    <li class="type ${type}">${type}</li>
                </ol>

                <img src="${detailsList[index].sprites.front_default}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}
