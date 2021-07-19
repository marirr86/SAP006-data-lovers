
import data from "./data/rickandmorty/rickandmorty.js";
import { getOrder, getDisorder } from "./data.js";


/*const home = document.getElementById("homeButton");
const seasons = document.getElementById("seasonsButton");
const episodes = document.getElementById("episodesButton");
const characters = document.getElementById("charactersButton");


const btn = document.getElementById("btn"); 
const btnClear = document.getElementById("clearButton");
const cards = document.querySelector("cards");
const statusFilter = document.getElementById("statusFilter");
const genderFilter = document.getElementById("genderFilter");

const printTotalCharacters = document.getElementById("totalCharacters");
const printGenderAverage = document.getElementById("genderAverage"); */

//PRINTING CARDS FUNTION

/*const container = document.getElementById("cardContainer");

function showCards(data) {
  const dataFrame = `
  <div class="container__cards__flex"> 
    <div class="card__normal"> 

        <figure> <img class="card__figure" src="${data.image}">
        </figure>

        <div class="card__normal__texto">

          <h3 class="characterName"> Name: ${data.name} </h3>

          <div class="info">

            <div class="left__info">
              <p> Status: ${data.status}</p>
              <p> Gender: ${data.gender}</p>
              <p> Species: ${data.species}</p>
              <p> Type: ${data.type}<p>
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
  const data = dataBase[index];
  allCards += showCards(data);
}
container.innerHTML = allCards;*/

//PRINTING CARDS FUNTION (2)

function showCards(data) {

  document.getElementById('cardContainer').innerHTML = data.map((item) => `
  <div class="container__cards__flex"> 
    <div class="card__normal"> 
      <figure> <img class="card__figure" src="${item.image}">
      </figure>

      <div class="card__normal__texto">

        <h3 class="characterName"> Name: ${item.name} </h3>
      </div>
    <div class="info">
      <div class="left__info">
        <ul class="list">
          <li class="list__item">Status: ${item.status}</li>
          <li class="list__item">Gender: ${item.gender}</li>
          <li class="list__item">Species: ${item.species}</li>
          <li class="list__item">Type: ${item.type}</li>
        </ul>
      </div>
    </div>

  </div>
        
 `).join("");
}

showCards(data.results);



//ORDERING FUNCTION: A to Z

const order = document.getElementById("fromAtoZ");

function getOrderData() {

  getDisorderData(getOrder(data.results));
}
order.addEventListener("click", () => { getOrderData() });


//ORDERING FUNCTION: Z to A 

const disorder = document.getElementById("fromZtoA");

function getDisorderData() {

  getDisorderData(getDisorder(data.results));
}
disorder.addEventListener("click", () => { getDisorderData() });



/* Função filtrar:    

function filter(e) {
  e.preventDefault();
  const statusOptions = statusFilter.options[statusFilter.selectedIndex].value;
  const genderOptions = genderFilter.options[genderFilter.selectedIndex].value;
  const filterValue = filterData(data.results, statusOptions, genderOptions);
  printCardsGeneric(filterValue);
}
btn.addEventListener("click", filter);*/




/*function getOrderData() {

  showCards(getOrder(data.results));
}
order.addEventListener("click", () => { getOrderData() });*/







//sortCards = document.getElementById("filter")
//btnSort.addEventListener("click", sort);



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



//Botão limpar:

/*function clearFilters(e) {
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
