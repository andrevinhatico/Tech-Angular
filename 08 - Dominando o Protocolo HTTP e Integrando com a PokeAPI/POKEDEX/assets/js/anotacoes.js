fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonBody) {
        console.log(jsonBody);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Requisição Concluída!');
    });

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))



//     main -----------------------------
    
// const pokemonList = document.getElementById('pokemonList')


// pokeApi.getPokemons().then((pokemons = []) => {
     
//  // pokemons.map((value, index, array)) => {
//  //     return ``
//  // }

//     const newList = pokemons.map((pokemon) => {
//      return convertPokemonToLi(pokemon)
//  })
 
//  //console.log(newList);

//  const newHtml = newList.join('')

//  pokemonList.innerHTML += newHtml
 
//  // const lisItens = []  


//  //     for (let i = 0; i < pokemons.length; i++) {
//  //         const pokemon = pokemons[i];
//  //         lisItens.push(convertPokemonToLi(pokemon))
//  //     }
//  })
//  .catch((error) => console.log(error))


//     main----------------