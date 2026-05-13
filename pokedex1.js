const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            document.getElementById("pokeImg").src = "./pokemon1.gif";
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // Imagen
            document.getElementById("pokeImg").src = data.sprites.front_default;
            
            // Datos básicos
            document.getElementById('pokename').innerHTML = `Nombre: ${data.name}`;
            document.getElementById('pokeHe').innerHTML = `Altura: ${data.height / 10} m`;
            document.getElementById('pokeWe').innerHTML = `Peso: ${data.weight / 10} kg`;
            document.getElementById('pokeType').innerHTML = `Tipo: ${data.types.map(t => t.type.name).join(', ')}`;
            document.getElementById('pokeitem').innerHTML = `Habilidad: ${data.abilities[0].ability.name}`;
        }
    });
}