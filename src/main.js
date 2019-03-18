/* Manejo del DOM */

/* 1. MENU*/
const main = document.getElementById("main");
const pageHome = document.getElementById("page-home");
const pagePokedex = document.getElementById("page-pokedex");
const pageEvolution = document.getElementById("page-evolution");
const pageNews = document.getElementById("page-news");


main.addEventListener("click",(e)=>{
    pageHome.style.display = 'none';
    pagePokedex.style.display = 'none';
    pageEvolution.style.display = 'none';
    pageNews.style.display = 'none';

    if(e.target.id==="pokedex"){
        pagePokedex.style.display='block';
        document.getElementById('list-pokemon').innerHTML= crearPlantilla(data);
    }
    else if(e.target.id==="evolution"){
        pageEvolution.style.display='block';
        
    }
    else if(e.target.id==="news"){
        pageNews.style.display='block';
    }
    else{
        pageHome.style.display='block';
    }
});

/*2. MOSTRAR POKEMON */
const data = POKEMON.pokemon;
const crearPlantilla = (data)=>{
    let listaMostrada = [];
    for(let i = 0 ; i < data.length ; i++){
        let card =`
        <div class="card-item grow">
        <h1>N° ${data[i].num}</h1>
        <img src='${data[i].img}'>
        <p>${data[i].name}</p>
        </div>
        `;
        listaMostrada +=card;
      }
      return listaMostrada;
};
    
 




