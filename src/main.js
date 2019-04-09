let pokemonData;
let pokedexData;
fetch('data/pokemon/pokemon.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    pokemonData = data.pokemon;
    // console.log(pokemonData);
    pokedexData = pokemon.showListPokemon(pokemonData);
    // document.getElementById('list-pokemon').innerHTML = drawTemplate(pokemonData);
  });
/* .catch(error => {
    console.log('hay un error', error);
  });*/

// 1. MENU 
const main = document.getElementById('main');
const pageHome = document.getElementById('page-home');
const pagePokedex = document.getElementById('page-pokedex');
const pageEvolution = document.getElementById('page-evolution');
const pageStatistics = document.getElementById('page-statistics');

/* data
const pokemonData = POKEMON.pokemon;
const pokedexData = pokemon.showListPokemon(pokemonData);*/
// Elementos  
const themeTitle = document.getElementById('theme-title'); // Titulo de la accion que se ejecuto
const listPokemon = document.getElementById('list-pokemon'); // contenedor donde se mostrara los pokemones
// ORDENAR
const orderPokemon = document.getElementById('order-pokemon'); // boton select para ordenar pokemon
// FILTRAR
const filterSelect = document.getElementById('filter-select'); // boton de opciones de filtrado
const filterSpecific = document.getElementById('filter-specific'); // boton de filtrado especifico*/

// eslint-disable-next-line id-length
main.addEventListener('click', (e) => {
  pageHome.style.display = 'none';
  pagePokedex.style.display = 'none';
  pageEvolution.style.display = 'none';
  pageStatistics.style.display = 'none';

  if (e.target.id === 'pokedex') {
    pagePokedex.style.display = 'block';
    listPokemon.innerHTML = drawTemplate(pokedexData); // MUestro
  } else if (e.target.id === 'evolution') {
    pageEvolution.style.display = 'block';
  } else if (e.target.id === 'statistics') {
    pageStatistics.style.display = 'block';
  } else {
    pageHome.style.display = 'block';
  }
});

// DIBUJANDO POKEMON
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
  const listTypePokemon = (data) => {
    const arrTipos = [];
    let tipo = [];
    data.forEach(element => {
      for (let i = 0; i < element.type.length; i++) {
        arrTipos.push(element.type[i]);
      }
      tipo = [...new Set(arrTipos)];
    });
    return tipo;
  };

  let typeSelect = filterSelect.value;
  let types = '';
  const subOptionsOne = listTypePokemon(pokemonData);
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
