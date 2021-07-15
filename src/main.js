//import { computeStats, filterData, sortData, searchName } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

const dataBase = data.results;

/*const home = document.getElementById("homeButton");
const seasons = document.getElementById("seasonsButton");
const episodes = document.getElementById("episodesButton");
const characters = document.getElementById("charactersButton");


const btn = document.getElementById("btn"); 
const btnClear = document.getElementById("clearButton");
const btnSort = document.getElementById("sortButton");
const cards = document.querySelector("cards");
const statusFilter = document.getElementById("statusFilter");
const genderFilter = document.getElementById("genderFilter");

const printTotalCharacters = document.getElementById("totalCharacters");
const printGenderAverage = document.getElementById("genderAverage"); */

//PRINTING CARDS

const const__container = document.getElementById("cardContainer");

function showCards(filterData) {
  const dataFrame = `
  <div class="container__cards__flex"> 
    <div class="card__normal"> 

        <figure> <img class="card__figure" src="${filterData.image}">
        </figure>

        <div class="card__normal__texto">

          <h3 class="characterName"> Name: ${filterData.name} </h3>

          <div class="info">

            <div class="left__info">
              <p> Status: ${filterData.status}</p>
              <p> Gender: ${filterData.gender}</p>
              <p> Species: ${filterData.species}</p>
            </div>
            <div class="right__info">
              <p> Type: ${filterData.type}</p>
              <p> Origin: ${filterData.origin.name}</p>
              <p> Location: ${filterData.location.name}</p>
            </div>

          </div>

        </div>
    </div> 
  </div> 
  `;
  return dataFrame;
}

let allCards = "";

for (let index = 0; index < dataBase.length; index++) {
  const filterData = dataBase[index];
  allCards += showCards(filterData);
}

const__container.inmentnerHTML = allCards;



//Cálculos estatísticos:

/*const totalCharacters = computeStats.characters(data.results);

printTotalCharacters.innerHTML = `<p class="totalCharacter">O total de personagens da série é:</p>
                                  <p class="numberOfCharacters">${totalCharacters}</p>`

const maleAverage = computeStats.gender(data.results, "Male") + "%";
const femaleAverage = computeStats.gender(data.results, "Female") + "%";
const genderlessAverage = computeStats.gender(data.results, "Genderless") + "%";
const unknownAverage = computeStats.gender(data.results, "unknown") + "%";

printGenderAverage.innerHTML = `<p class="genderAverage">Média de gêneros:</p>
                                <p class="genderAverage">Masculinos:
                                  <span>${maleAverage}</span>
                                </p>
                                <p class="genderAverage">Femininos:
                                  <span>${femaleAverage}</span>
                                </p>
                                <p class="genderAverage">Desconhecidos:
                                  <span>${unknownAverage}</span>
                                </p>
                                <p class="genderAverage">Sem gênero:
                                  <span>${genderlessAverage}</span>
                                </p>`

// Função filtrar:    

function filter(e) {
  e.preventDefault();
  const statusOptions = statusFilter.options[statusFilter.selectedIndex].value;
  const genderOptions = genderFilter.options[genderFilter.selectedIndex].value;
  const filterValue = filterData(data.results, statusOptions, genderOptions);
  printCardsGeneric(filterValue);
}
btn.addEventListener("click", filter);


// Função ordenar:

function sort(e) {
  e.preventDefault();
  const sortCards = sortData(data.results);
  printCardsGeneric(sortCards);
}
btnSort.addEventListener("click", sort);


//Botão limpar:

function clearFilters(e) {
  e.preventDefault()
  printCardsGeneric(data.results);
  statusFilter.options[statusFilter.selectedIndex = 0];
  genderFilter.options[genderFilter.selectedIndex = 0];
}
btnClear.addEventListener("click", clearFilters);


// Pesquisar por nome do personagem:

function searchByName (e){
  const charactersByName = searchName(data.results, e.target.value);
  printCardsGeneric(charactersByName);
}
searchInput.addEventListener("keyup", searchByName);
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const dataRM = {
} */
