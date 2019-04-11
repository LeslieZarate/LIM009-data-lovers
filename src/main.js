/* eslint-disable no-unused-vars */
/* eslint-disable id-length */
let pokemonData;
let pokedexData;
const fetchData = () => {
  fetch('data/pokemon/pokemon.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      pokemonData = data.pokemon;
      // console.log(pokemonData);
      pokedexData = pokemon.showListPokemon(pokemonData);
      // document.getElementById('list-pokemon').innerHTML = drawTemplate(pokemonData);
    })
    .catch(error => document.write('No se pudo cargar los datos ', error));
};
fetchData();

// 1. MENU 
const main = document.getElementById('main');
const pageHome = document.getElementById('page-home');
const pagePokedex = document.getElementById('page-pokedex');
const pageEvolution = document.getElementById('page-evolution');
const pageStatistics = document.getElementById('page-statistics');

/* DATA
const pokemonData = POKEMON.pokemon;
const pokedexData = pokemon.showListPokemon(pokemonData);*/

// ELEMENTOS  
const themeTitle = document.getElementById('theme-title'); // Titulo de la accion que se ejecuto
const contentPokedex = document.getElementById('content-pokedex');// contiene la lista y botones de pagina de pokedex
const listPokemon = document.getElementById('list-pokemon'); // contenedor donde se mostrara los pokemones
const contentPokemon = document.getElementById('content-pokemon');// contiene detalle de pokemon
const detailPokemon = document.getElementById('detail-pokemon'); // donde se desplegara la informacion de detalle de pokemon
// BOTONES 
const btnGetBack = document.getElementById('btn-getBack');

// ORDENAR
const orderPokemon = document.getElementById('order-pokemon'); // boton select para ordenar pokemon

// FILTRAR
const filterSelect = document.getElementById('filter-select'); // boton de opciones de filtrado
const filterSpecific = document.getElementById('filter-specific'); // boton de filtrado especifico

// FORMULARIO RESULT
const calculateEvolution = document.getElementById('calculate-evolution');
const evolutionResult = document.getElementById('evolution-result');
const resultPokemon = document.getElementById('result-pokemon');
const btnNew = document.getElementById('btn-new');

// MENU DE LA PAGINA 
main.addEventListener('click', (e) => {
  pageHome.style.display = 'none';
  pagePokedex.style.display = 'none';
  pageEvolution.style.display = 'none';
  pageStatistics.style.display = 'none';

  if (e.target.id === 'pokedex') {
    pagePokedex.style.display = 'block';
    changeContent(contentPokemon, contentPokedex);
    listPokemon.innerHTML = drawTemplate(pokedexData); // MUestro
  } else if (e.target.id === 'evolution') {
    cleanForm();
    pageEvolution.style.display = 'block';
  } else if (e.target.id === 'statistics') {
    generarGrafica();
    pageStatistics.style.display = 'block';
  } else {
    pageHome.style.display = 'block';
  }
});

// CAMBIAR CONTENEDORES 
const changeContent = (content1, content2) => {
  content1.style.display = 'none';
  content2.style.display = 'block';
};
const cleanForm = () => {
  document.getElementById('form').reset();
};

// DIBUJANDO POKEMON
/* pokedex */
const drawTemplate = (data) => {
  let totalCards = [];
  for (let i = 0; i < data.length; i++) {
    let card = `
        <div class="col-xs-6 col-sm-3 col-md-5 card-item grow m1 p1 color-border" id="${data[i].num}">
        <h2>N° ${data[i].num}</h2>
        <img  id="${data[i].num}" src='${data[i].img}'>
        <p>${data[i].name}</p></div>`;
    totalCards += card;
  }
  return totalCards;
};
/* Evolucion */
const drawTemplateEvolution = (data) => {
  let result;
  for (let i = 0; i < data.length; i++) {
    let pokemonInital = `
      <h2>POKEMON ACTUAL:</h2>
      <p>${data[i].pokemonFirstName}</p>
      <img class="img-res" src='${data[i].pokemonFirstImg}'>`;
    let pokemomEvolution = `
      <h2>POKEMON EVOLUCION:</h2>
      <p>${data[i].pokemonEvolutionName}</p>
      <img class="img-res" src='${data[i].pokemonEvolutionImg}'>`;

    if (data[i].pokemonFirstCandyInput < data[i].pokemonFirstCandy) {
      result = `
        <h1>RESULTADO :</h1>
        ${pokemonInital}
        <p>Tienes ${data[i].pokemonFirstCandyInput} dulces, te faltan ${data[i].candyEvolution} para evolucionar</p>                
        ${pokemomEvolution}`;        
    } else if (data[i].pokemonFirstCandy === undefined) {
      result = `
        <h1>RESULTADO :</h1>
        <p>Este pokemon ya tuvo todas sus evoluciones</p>
        ${pokemonInital}
        <p>Te sobra ${data[i].pokemonFirstCandyInput}</p>`;
    } else {
      result = `
        <h1>RESULTADO :</h1>
        ${pokemonInital}
        <h1>Este ya debio evolucionar a:</h1>                                    
        ${pokemomEvolution}
        <p>Tienes ${data[i].pokemonFirstCandyInput} dulces , te sobran  ${data[i].candyEvolution} para la siguiente evolcion</p>
         `;
    }
  }
  return result;
};

// DESCRIPCION DE CADA POKEMON 
listPokemon.addEventListener('click', (e) => {
  changeContent(contentPokedex, contentPokemon);
  const unitPokemon = pokemonData.find(poke => poke.num === e.target.id);
  let car = `
  <div class="flex-unit">
    <h2>${unitPokemon.num}</h2>   
    <img src="${unitPokemon.img}">
    <h2>${unitPokemon.name}</h2>
    <p><strong>Altura :</strong> ${unitPokemon.height}</p>        
    <p><strong>Peso :</strong> ${unitPokemon.weight}</p>
    <p><strong>Huevo :</strong> ${unitPokemon.egg}</p>    
    <p><strong>Tipo :</strong>${unitPokemon.type}</p>
    <p><strong>Apariciones :</strong>${unitPokemon.avg_spawns}</p>
    <p><strong>Debilidades :</strong>${unitPokemon.weaknesses}</p>        
    <p><strong>Dulces :</trong>${unitPokemon.candy}</p>
    <p><strong>Cantidad Dulces :</strong> ${unitPokemon.candy_count} </p>    
  </div>`;
  detailPokemon.innerHTML = car;
  btnGetBack.addEventListener('click', () => {
    changeContent(contentPokemon, contentPokedex);
  });
});

// ORDENAR POKEMON
orderPokemon.addEventListener('change', () => {
  let selection = orderPokemon.value;
  let sortBy;
  let sortOrder;
  switch (selection) {
  case 'apariciones-desc':
    sortBy = 'apariciones';
    sortOrder = 'descendente';
    break;
  case 'apariciones-asc':
    sortBy = 'apariciones';
    sortOrder = 'ascendente';
    break;
  case 'name-desc':
    sortBy = 'name';
    sortOrder = 'descendente';
    break;
  case 'name-asc':
    sortBy = 'name';
    sortOrder = 'ascendente';
    break;
  }
  const pokedexDataOrdered = pokemon.sortData(pokedexData, sortBy, sortOrder);
  // console.log(pokedexDataOrdered);
  themeTitle.innerHTML = `Pokedex ordenado por ${sortBy} ${sortOrder}`;
  listPokemon.innerHTML = drawTemplate(pokedexDataOrdered);
});

// FILTRAR POKEMON
filterSelect.addEventListener('change', () => {
  let typeSelect = filterSelect.value;
  let types = '';
  const subOptionsOne = pokemon.listTypePokemon(pokemonData);
  const subOptionsSecond = ['Evolucion1', 'Evolucion2', 'Evolucion3'];

  if (typeSelect === '1') {
    for (let i = 0; i < subOptionsOne.length; i++) {
      types += `<option value="${subOptionsOne[i]}">${subOptionsOne[i]}</option>`;
    }
  } else if (typeSelect === '2') {
    for (let i = 0; i < subOptionsSecond.length; i++) {
      types += `<option value="${subOptionsSecond[i]}">${subOptionsSecond[i]}</option>`;
    }
  }
  filterSpecific.innerHTML = `<select id="filter">${types}</select>`;
  const filter = document.getElementById('filter');
  filter.addEventListener('change', () => {
    let condition = filter.value; // value    
    if (condition === 'Evolucion1' || condition === 'Evolucion2' || condition === 'Evolucion3') {
      const filterEvolucion = pokemon.filterEvolution(pokemonData, condition);
      themeTitle.innerHTML = `Lista de pokemon de  ${condition}`;
      document.getElementById('list-pokemon').innerHTML = drawTemplate(filterEvolucion);
    } else {
      const pokedexFiltrado = pokemon.filterData(pokemonData, condition);
      themeTitle.innerHTML = `Lista de Pokemones de tipo  ${condition}`;
      document.getElementById('list-pokemon').innerHTML = drawTemplate(pokedexFiltrado);
    }
  });
});

// EVOLUCION POKEMON
const btnCalculate = document.getElementById('btn-calculate');
btnCalculate.addEventListener('click', (e) => {
  const validate = (string) => {
    string = string.toLowerCase();
    let stringValidate = string.charAt(0).toUpperCase() + string.slice(1);
    return stringValidate;
  };
  const namePokemon = validate(document.getElementById('name-pokemon').value);
  const candyCount = document.getElementById('candy-count').value;
  const resultEvolution = pokemon.computeStatsEvolution(pokemonData, namePokemon, candyCount); // data resultado 
  e.preventDefault();
  changeContent(calculateEvolution, evolutionResult);
  resultPokemon.innerHTML = drawTemplateEvolution(resultEvolution);

  btnNew.addEventListener('click', () => {
    cleanForm();
    changeContent(evolutionResult, calculateEvolution);
  });
});

// GRAFICANDO ESTADISTICAS 
const generarGrafica = ()=>{
  const arrayPoke = pokemon.computeTypeStats(pokemonData);
  let grafics1 = document.getElementById('grafics1').getContext('2d');
  let chart = new Chart(grafics1, {
    type: 'bar',
    data: {
      labels: Object.keys(arrayPoke),
      datasets: [
        {
          label: 'mi grafica de bebidad',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: Object.values(arrayPoke),
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  return chart;
};
