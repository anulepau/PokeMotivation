document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');  
    body.setAttribute('id', 'body');

    const data = [ ];

    // fetch pokemon api 
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1126')
        .then((response) => response.json())
        .then((response) => getRandomPokemon(response))
        .catch((error) => console.log(error));

    // access random pokemon data
    function getRandomPokemon(data, randomPokemon = Math.floor(Math.random()*1127) ) {
        for (let i = 0; i < 1126; i++){
            if(i === randomPokemon){
                let newData = data['results'];
                return fetch(newData[i].url)
                    .then((response) => response.json())
                    .then((response) => pokemonAppear(response))
                    .catch((error) => console.log(error));
            }
        }
    }

    // access specific pokemon properties to display  
    function pokemonAppear(entry) {        
        const pokemonType = document.createElement('div');
        pokemonType.innerText = entry.types[0].type.name; 
        const pokemonSprite = document.createElement('img');    
        pokemonSprite.setAttribute('src', entry['sprites']['front_default']);

        const pokemonName = document.createElement('div');
        pokemonName.innerText = entry.name; 

        pokemonSprite.setAttribute('alt', pokemonName.innerText);
        pokemonSprite.setAttribute('title', pokemonName.innerText);

        const messages = {
            normal: 'Today may be normal, but your code is anything but!',
            fire: 'Let the flame in your heart motivate you!',
            water: 'Soon your code will be as smooth as a wave!',
            grass: 'Don\'t give up, the grass is always greener on the other side!',
            electric: 'I\'m feeling electric because I know you\'ll be done soon!',
            ice: 'I know this code is turning your heart into ice, but you\'ll get through it!',
            fighting: 'Fight on!',
            poison: 'Coding can feel like poison, make sure to take a break!',
            ground: 'Grind that code to dust!',
            flying: 'Glad to see your code is soaring to new heights!',
            psychic: 'I can see into your future, you\'ll be finishing soon!',
            bug: 'Hope I\'m not buggin you, you got this!',
            rock: 'You rock!',
            ghost: 'Don\'t ghost your code!',
            dark: 'Make sure you don\'t code until it gets dark!',
            dragon: 'I know coding can drag on, but you can do this!',
            steel: 'Steel your resolve!',
            fairy: 'Watching you code is like watching magic!',
        }

        for (const key in messages) {
            if (pokemonType.innerText === key) {
                pokemonType.innerText = messages[key]; 
            }
        }     

        const pokeball = document.createElement('img');
        pokeball.setAttribute('id', 'pokeball');  
        pokeball.setAttribute('src', 'pokeball.png')
        body.appendChild(pokeball);

        const button = document.getElementById('pokeball');

        button.addEventListener('click', function() {
            body.appendChild(pokemonType);
            body.replaceChild(pokemonSprite, pokeball);
        });
    }
});
