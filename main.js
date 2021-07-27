
import data from "./data/rickandmorty/rickandmorty.js";
import { toOrder, getStatus, getGender} from "./data.js";


const order = document.getElementById("fromAtoZ");
const disorder = document.getElementById("fromZtoA");
const statusDOM = document.getElementById("statusFilter");
const genderDOM = document.getElementById("genderFilter");
const clearBtn = document.getElementById("clearButton")

//PRINTING CARDS FUNTION

function showCards(data) {

  document.getElementById('cardContainer').innerHTML = data.map((item) => `
    <div class="card__normal"> 
      <figure> <img class="card__figure" src="${item.image}">
      </figure>
      <div class="card__normal__texto">
        <h3 class="characterName">${item.name}</h3>
      </div>
      <div class="info">
        <ul class="list">
          <li class="list__item">Status: ${item.status}</li>
          <li class="list__item">Gender: ${item.gender}</li>
          <li class="list__item">Species: ${item.species}</li>
          <li class="list__item">Appears in: ${item.episode.length} episodes</li>
          <li class="list__item">Origin: ${item.origin.name}</li>
        </ul>
      </div>
    </div>
        
 `).join("");
}

showCards(data.results);

//ORDERING FUNCTION: A to Z

function getOrderData() {

  showCards(toOrder(data.results, "A-Z"));
}
order.addEventListener("click", () => { getOrderData() });

//ORDERING FUNCTION: Z to A 

function getDisorderData() {

  showCards(toOrder(data.results, "Z-A"));
}
disorder.addEventListener("click", () => { getDisorderData() });

// FUNCTION FILTER BY STATUS:

function target(option) {

  let targetValue = option.target.value;
  let result = getStatus(data.results, targetValue);
  document.getElementById('cardContainer').innerHTML = ""
  showCards(result)
}

statusDOM.addEventListener("change", (option) => {target(option)});

// FUNCTION FILTER BY GENDER:

function gender2(option) {

  let targetValue = option.target.value;
  let result = getGender(data.results, targetValue);
  document.getElementById('cardContainer').innerHTML = ""
  showCards(result)
}

genderDOM.addEventListener("change", (option) => {gender2(option)});

// FUNCTION CLEAR:

function clear(e) {
  e.preventDefault()
  showCards(data.results);
  statusDOM.options[statusDOM.selectedIndex = 0];
  genderDOM.options[genderDOM.selectedIndex = 0];
  }
  clearBtn.addEventListener("click", clear); 
