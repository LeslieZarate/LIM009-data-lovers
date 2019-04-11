const showListPokemon = (dataPoke) => {
  const pokedex = dataPoke.map(data => {
    return { num: data.num, img: data.img, name: data.name, avg_spawns: data.avg_spawns };
  });
  return pokedex;
};
/*
const sortData = (data)=>{
  const dataOr = Object.assign([], data);
  dataOr.push({name: data[0].name});
  return dataOr;
};
const sortData1 = (data)=>{
  const newArr = [];
  for (let i = 0; i < data.length; i++) {
    newArr.push(Object.assign({}, data[i]));    
  }
  newArr.push({name: data[0].name});
  return newArr;
};
const datapokedex = POKEMON.pokemon;
const data1 = sortData(datapokedex);
const data2 = sortData1(datapokedex);
*/
const sortData = (data, sortBy, sortOrder) => {
  const dataOrder = Object.assign([], data);
  let orderedPokedex;
  switch (sortOrder) {
  case 'ascendente':
    if (sortBy === 'name') {
      orderedPokedex = dataOrder.sort((eleA, eleB) => eleA.name > eleB.name ? 1 : -1);
    } else {
      orderedPokedex = dataOrder.sort((eleA, eleB) => eleA.avg_spawns - eleB.avg_spawns);
    }
    break;
  case 'descendente':
    if (sortBy === 'name') {
      orderedPokedex = dataOrder.sort((eleA, eleB) => eleB.name > eleA.name ? 1 : -1);
    } else {
      orderedPokedex = dataOrder.sort((eleA, eleB) => eleB.avg_spawns - eleA.avg_spawns);
    }
    break;
  }
  return orderedPokedex;
};
const filterData = (data, condition) => {
  let listaFiltrada = data.filter((element) => {
    for (let i = 0; i < element.type.length; i++) {
      if (element.type[i] === condition) {
        return condition;
      }
    }
  });
  return listaFiltrada;
};
const filterEvolution = (data, condicion) => {
  let Evolucion1 = [];
  let Evolucion2 = [];

  let Evolucion3 = [];
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    if (element.prev_evolution === undefined) {
      Evolucion1.push(element);
    } else {
      let cantidadPrev = element.prev_evolution.length;
      switch (cantidadPrev) {
      case 1:
        Evolucion2.push(element); break;
      case 2:
        Evolucion3.push(element); break;
      }
    }
  }
  switch (condicion) {
  case 'Evolucion1': return Evolucion1;
  case 'Evolucion2': return Evolucion2;
  case 'Evolucion3': return Evolucion3;
  }
};

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

const dataListPokemon = (dataPoke) => {
  const dataCalculate = [];
  let propiedad;
  for (let i = 0; i < dataPoke.length; i++) {
    propiedad = dataPoke[i].hasOwnProperty('next_evolution');
    if (propiedad === true) {
      propiedad = dataPoke[i].next_evolution.length;
    } else {
      propiedad = 0;
    }
    dataCalculate.push({
      num: dataPoke[i].num,
      name: dataPoke[i].name,
      img: dataPoke[i].img,
      candy_count: dataPoke[i].candy_count,
      next_evolution: dataPoke[i].next_evolution,
      num_evolutions: propiedad,     
    });
  }
  return dataCalculate;
};

const computeStatsEvolution = (dataPoke, pokemon, candy_input) => {
  const dataCalculatePokemon = dataListPokemon(dataPoke);
  // buscando al pokemon
  let pokemonFind = dataCalculatePokemon.find(poke => poke.name === pokemon);
  // saber el numero de evoluciones 
  const numberEvolutions = pokemonFind.num_evolutions;
  // almacenar los datos de resultados
  let arrResult = [];
  // Evolucion de Pokemon
  let pokemonEvolution;
  // Hallar dulces que falta
  let calculoEvolution;
  if (numberEvolutions > 0) {
    pokemonEvolution = dataCalculatePokemon.find(poke => poke.name === pokemonFind.next_evolution[0].name);
    calculoEvolution = Math.abs(pokemonFind.candy_count - parseInt(candy_input));
  } else {
    pokemonEvolution = pokemonFind;  
    calculoEvolution = 0;
  }
  arrResult.push({
    pokemonFirstName: pokemonFind.name,
    pokemonFirstImg: pokemonFind.img,
    pokemonFirstCandy: pokemonFind.candy_count,
    pokemonFirstCandyInput: candy_input,
    pokemonEvolutionName: pokemonEvolution.name,
    pokemonEvolutionImg: pokemonEvolution.img,
    candyEvolution: calculoEvolution
  });
  return arrResult;
};

const computeTypeStats = (data) => {
  let dataPorcentaje = {};
  let countType;
  const types = listTypePokemon(data);
  for (let i = 0; i < types.length; i++) {
    countType = filterData(data, types[i]);
    dataPorcentaje[types[i]] = countType.length;
  // dataPorcentaje.push({ type: types[i], cantidad: countType.length});
  } 
  
  return dataPorcentaje;
};
/*
const datapokedex = POKEMON.pokemon;
const res = computeTypeStats(datapokedex);

console.log(Object.values(res)); */

window.pokemon = {
  showListPokemon,
  sortData,
  filterData,
  filterEvolution,
  listTypePokemon,
  computeStatsEvolution,
  computeTypeStats
  
  
};
