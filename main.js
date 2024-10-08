var player = videojs('miVideo');
        
        // Opcional: manejo de eventos de Video.js
        player.on('ready', function() {
            console.log('¡El video está listo para reproducirse!');
        });

function mostrar(){
    const link = document.getElementById('link')
    const linkText = link.value
    const card = ` 
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class=" card-title ">${linkText}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div> `
    const elementoMotrar = document.createElement('h1')
    elementoMotrar.textContent = linkText

    const contenedor = document.getElementById('contenedor')
    contenedor.appendChild(elementoMotrar)
    contenedor.innerHTML += card
    link.value = ""
}

