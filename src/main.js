
import data from "./data/rickandmorty/rickandmorty.js";
import { ordering, getSpecies, getStatus, getGender} from "./data.js";


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
	const order = ordering(data.results, target);
	showCards(order);
});

function species(e) {
  const target = e.target.value;
  const result = getSpecies(data.results, target);
  document.getElementById("card-container").innerHTML = ""
  showCards(result)
}

speciesDOM.addEventListener("change", (e) => {species(e)});

function status(e) {
  const target = e.target.value;
  const result = getStatus(data.results, target);
  document.getElementById("card-container").innerHTML = ""
  showCards(result)
}

statusDOM.addEventListener("change", (e) => {status(e)});

function gender(e) {
  const target = e.target.value;
  const result = getGender(data.results, target);
  document.getElementById("card-container").innerHTML = ""
  showCards(result)
}

genderDOM.addEventListener("change", (e) => {gender(e)});

function clear(e) {
  e.preventDefault()
  showCards(data.results);
  orderDOM.options[orderDOM.selectedIndex = 0];
  speciesDOM.options[speciesDOM.selectedIndex = 0];
  statusDOM.options[statusDOM.selectedIndex = 0];
  genderDOM.options[genderDOM.selectedIndex = 0];
  
  }
  clearBtn.addEventListener("click", clear); 
