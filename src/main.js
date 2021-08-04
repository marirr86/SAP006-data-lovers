
import data from "./data/rickandmorty/rickandmorty.js";
import { ordering, getSpecies, getStatus, getGender} from "./data.js";

let showingCards = data.results


const orderDOM = document.getElementById("aToZ-filter");
const statusDOM = document.getElementById("status-filter");
const genderDOM = document.getElementById("gender-filter");
const speciesDOM = document.getElementById("species-filter");
const clearBtn = document.getElementById("clear-button")

function showCards(data) {
  document.getElementById('card-container').innerHTML = data.map((item) => `
    <section class="card">
      <figure class="card-figure">
      <img class="card-img" src="${item.image}">
      </figure>
      <section class="container-name">
        <h3 class="name">${item.name}</h3>
      </section>
      <section class="info">
        <ul class="list">
          <li class="list-item">Status: ${item.status}</li>
          <li class="list-item">Gender: ${item.gender}</li>
          <li class="list-item">Species: ${item.species}</li>
          <li class="list-item">Appears in: ${item.episode.length} episodes</li>
          <li class="list-item">Origin: ${item.origin.name}</li>
        </ul>
      </section>
    </section>

 `).join("");
}

showCards(data.results);

orderDOM.addEventListener("change", (e) => {
	const target = e.target.value;
	const order = ordering(showingCards, target);
  showingCards = order;
	showCards(showingCards);
});

function species(e) {
  const target = e.target.value;
  const result = getSpecies(showingCards, target);
  showingCards = result;
  showCards(showingCards)
}

speciesDOM.addEventListener("change", (e) => {species(e)});

function status(e) {
  const target = e.target.value;
  const result = getStatus(showingCards, target);
  showingCards = result;
  showCards(showingCards)
}

statusDOM.addEventListener("change", (e) => {status(e)});

function gender(e) {
  const target = e.target.value;
  const result = getGender(showingCards, target);
  showCards(result)
}

genderDOM.addEventListener("change", (e) => {gender(e)});

function clear(e) {
  e.preventDefault()
  showingCards = data.results

  showCards(showingCards);
  orderDOM.options[orderDOM.selectedIndex = 0];
  speciesDOM.options[speciesDOM.selectedIndex = 0];
  statusDOM.options[statusDOM.selectedIndex = 0];
  genderDOM.options[genderDOM.selectedIndex = 0];

}

clearBtn.addEventListener("click", clear);
