global.window = global;
// global.assert = require('chai').assert;
require('../src/data.js');
// require('./data.spec.js');

const data = [
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] }
];

const input1 = [
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] }
];
const ascendente = 'ascendente'; const descendente = 'descendente';
const name = 'name'; const apariciones = 'apariciones';
const output1A = [
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] },
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] }
];
const output1B = [
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] },
];
const output1C = [
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] },
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] }
];
const output1D = [
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] },
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', avg_spawns: 69, egg: '2 km', type: ['Grass', 'Poison'] }
];

const condition = 'Psychic';
const output2 = [
  { id: 79, num: '079', name: 'Slowpoke', img: 'http://www.serebii.net/pokemongo/pokemon/079.png', avg_spawns: 105, egg: '5 km', type: ['Water', 'Psychic'] },
  { id: 150, num: '150', name: 'Mewtwo', img: 'http://www.serebii.net/pokemongo/pokemon/150.png', avg_spawns: 0, egg: 'Not in Eggs', type: ['Psychic'] }
];

const data2 = [
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'},
  { id: 78, num: '078', name: 'Rapidash', img: 'http://www.serebii.net/pokemongo/pokemon/078.png', prev_evolution: [{num: '077', name: 'Ponyta'}]},
  { id: 3, num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', prev_evolution: [{num: '001', name: 'Bulbasaur'}, {num: '002', name: 'Ivysaur'}]}
];
const typeEvolution1 = 'Evolucion1';
const listEvolution1 = [{ id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'}];
const typeEvolution2 = 'Evolucion2';
const listEvolution2 = [{ id: 78, num: '078', name: 'Rapidash', img: 'http://www.serebii.net/pokemongo/pokemon/078.png', prev_evolution: [{num: '077', name: 'Ponyta'}]}];
const typeEvolution3 = 'Evolucion3';
const listEvolution3 = [
  { id: 3, num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', prev_evolution: [{num: '001', name: 'Bulbasaur'}, {num: '002', name: 'Ivysaur'}]}
];

const output4 = ['Grass', 'Poison', 'Water', 'Psychic'];

const data3 = [ 
  { id: 1, num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png', candy_count: 25, next_evolution: [{num: '002', name: 'Ivysaur'}, {num: '003', name: 'Venusaur'}]},
  { id: 2, num: '002', name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png', candy_count: 100, next_evolution: [{num: '003', name: 'Venusaur'}]},
  { id: 3, num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png', }
];
const poke = 'Ivysaur';
const candyInput = 33;
const resultEvol1 = [
  {
    pokemonFirstName: 'Ivysaur', 
    pokemonFirstImg: 'http://www.serebii.net/pokemongo/pokemon/002.png', 
    pokemonFirstCandy: 100, 
    pokemonFirstCandyInput: 33,
    pokemonEvolutionName: 'Venusaur', 
    pokemonEvolutionImg: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    candyEvolution: 67
  }
];
const poke2 = 'Venusaur';
const resultEvol2 = [
  {
    pokemonFirstName: 'Venusaur', 
    pokemonFirstImg: 'http://www.serebii.net/pokemongo/pokemon/003.png', 
    pokemonFirstCandy: undefined, 
    pokemonFirstCandyInput: 33,
    pokemonEvolutionName: 'Venusaur', 
    pokemonEvolutionImg: 'http://www.serebii.net/pokemongo/pokemon/003.png',
    candyEvolution: 0
  }
];

const output5 = {Grass: 1, Poison: 1, Water: 1, Psychic: 2};


describe('pokemon', () => {
  test('debería ser un object', () => {
    expect(typeof pokemon).toBe('object');
  });

  describe('Mostrar ciertas propiedades', () => {
    test('mostrarListaPokemon  deberia ser una funcion', () => {
      expect(typeof pokemon.showListPokemon).toBe('function');
    });
    test('Deberia retornar un nuevo array  y no modificar el principal', () => {
      expect(pokemon.showListPokemon(data)).not.toEqual(data);
    });
    test('Deberia retornar un nuevo array', () => {
      expect(pokemon.showListPokemon(data)).not.toBe(data);
    });
  });

  describe('Ordenar Pokemones', () => {
    test('sortData  deberia ser una funcion', () => {
      expect(typeof pokemon.sortData).toBe('function');
    }); 

    test('Debería retornar un nuevo array ordenado ascendentemente por Apariciones', () => {      
      expect(pokemon.sortData(input1, apariciones, ascendente)).toEqual(output1A);      
    });
    test('Debería retornar un nuevo array ', () => {
      const dolly = [... input1];
      expect(pokemon.sortData(input1, apariciones, ascendente)).not.toBe(output1A);
      expect(dolly).not.toBe(input1);
    });

    test('Debería retornar un nuevo array ordenado ascendentemente por Apariciones', () => {
      expect(pokemon.sortData(input1, apariciones, descendente)).toEqual(output1B);
    });
    test('Debería retornar un nuevo array', () => {
      expect(pokemon.sortData(input1, apariciones, descendente)).not.toBe(output1B);
    });
    
    test('debería retornar un nuevo array ordenado ascendentemente por nombre', () => {
      expect(pokemon.sortData(input1, name, ascendente)).toEqual(output1C);
    });
    test('debería retornar un nuevo array', () => {
      expect(pokemon.sortData(input1, name, ascendente)).not.toBe(output1C);
    });

    test('debería retornar un nuevo array ordenado descendentemente por nombre', () => {
      expect(pokemon.sortData(input1, name, descendente)).toEqual(output1D);
    });
    test('debería retornar un nuevo array', () => {
      expect(pokemon.sortData(input1, name, descendente)).not.toBe(output1D);
    });
  });

  describe('Filtrar Pokemones por Tipo ', () => {
    test('filterData  deberia ser una funcion', () => {
      expect(typeof pokemon.filterData).toBe('function');
    });
    test('debería retornar un nuevo array filtrado por un tipo especifico', () => {
      expect(pokemon.filterData(data, condition)).toEqual(output2);
    });
    test('debería retornar un nuevo array', () => {
      expect(pokemon.filterData(data, condition)).not.toBe(output2);
    });
  });

  describe(' Filtrar Pokemones por Evolucion', () => {
    test(' nivelEvolution deberia ser una funcion', () => {
      expect(typeof pokemon.filterEvolution).toBe('function');
    });
    test('deberia retornar un nuevo array con todos los pokemon de primera evolucion', () => {
      expect(pokemon.filterEvolution(data2, typeEvolution1)).toEqual(listEvolution1);
    });
    test('deberia retornar un nuevo array ', () => {
      expect(pokemon.filterEvolution(data2, typeEvolution1)).not.toBe(listEvolution1);
    });

    test('deberia retornar un nuevo array con todos los pokemon de segunda evolucion', () => {
      expect(pokemon.filterEvolution(data2, typeEvolution2)).toEqual(listEvolution2);
    });
    test('deberia retornar un nuevo array ', () => {
      expect(pokemon.filterEvolution(data2, typeEvolution2)).not.toBe(listEvolution2);
    });

    test('deberia retornar un nuevo array con todos los pokemon de tercera evolucion', () => {
      expect(pokemon.filterEvolution(data2, typeEvolution3)).toEqual(listEvolution3);
    });
    test('deberia retornar un nuevo array ', () => {
      expect(pokemon.filterEvolution(data2, typeEvolution3)).not.toBe(listEvolution3);
    });
  });

  describe(' Obtener todos solo los tipos de pokemones ', () => {
    test(' listType deberia ser una funcion', () => {
      expect(typeof pokemon.listTypePokemon).toBe('function');
    });
    test('deberia retornar un nuevo arrar con solo los tipos de pokemon', () => {
      expect(pokemon.listTypePokemon(data)).toEqual(output4);
    });
  });

  describe('Mostrar calculo de Evolucion ', () => {
    test('computeStatsEvolution  deberia ser una funcion ', ()=>{
      expect(typeof pokemon.computeStatsEvolution).toBe('function');
    });
    test('deebria retornar un nuevo array con el numero de evolcuiones  ', ()=>{
      expect(pokemon.computeStatsEvolution(data3, poke, candyInput)).toEqual(resultEvol1);
    });
    test('deebria retornar un nuevo array con el numero de evolcuiones  ', ()=>{
      expect(pokemon.computeStatsEvolution(data3, poke2, candyInput)).toEqual(resultEvol2);
    });
  });

  describe('Mostrar Estadistica de tipos de pokemon', () => {
    test('computeStatsType  deberia ser una funcion ', ()=>{
      expect(typeof pokemon.computeStatsType).toBe('function');
    });
    test('deebria retornar un objeto   ', ()=>{
      expect(pokemon.computeStatsType(data)).toEqual(output5);
    });
  });
});

