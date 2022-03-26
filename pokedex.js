const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage = "./pokemon-sad.gif";
        }
        else {
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let defense = data.stats[2].base_stat;
        let specialAttack = data.stats[3].base_stat;
        let specialDefense = data.stats[4].base_stat;
        let speed = data.stats[5].base_stat;
        let species = data.name;
        let types = data.types[0].type.name;
        let order = data.order;
        console.log(pokeImg);
        pokeImage(pokeImg);
        pokehp(hp);
        attackPokemon(attack);
        defPokemon(defense);
        specialPokemon(specialAttack);
        specialDef(specialDefense);
        speedPokemon(speed);
        speciesPokemon(species);
        typePokemon(types);
        orderPokemon(order);
        console.log(types);
        console.log(order);
    })

}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeStatics = (url) => {
    const statics = document.getElementById("statics");
    statics.src = url;
}

const pokehp = (url)=>{
    const numero  = document.getElementById("numero");
      numero.innerHTML = url;
    }
    const attackPokemon = (url) =>{
      const attack = document.getElementById("attack")
          attack.innerHTML = url;
    }
    const defPokemon = (url) =>{
      const defense = document.getElementById("defense")
        defense.innerHTML = url;
    }
    const specialPokemon = (url) =>{
      const specialAttack = document.getElementById("specialAttack")
            specialAttack.innerHTML = url;
    }
    const specialDef = (url) => {
      const specialDefense = document.getElementById("specialDefense")
            specialDefense.innerHTML = url;
    }
    const speedPokemon = (url) => {
      const speed = document.getElementById("speed")
            speed.innerHTML = url;
    }
    
    const speciesPokemon = (url) => {
      const species = document.getElementById("pokemon")
            species.innerHTML = url;
    }
    const typePokemon = (url) => {
      const types = document.getElementById("types")
            types.innerHTML = url;
    }

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");
