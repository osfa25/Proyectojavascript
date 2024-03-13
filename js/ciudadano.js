async function showCiudadano(){
    initialState(); // limpia la interfaz
    const ciudadanoHTML = document.getElementById("mainciudadano");
    ciudadanoHTML.innerHTML = ""; // asegura que esté vacío
    ciudadanoHTML.innerHTML += "<div class='h2 text-center mt-5'>Ciudadanos</div>";

    try {
        const ciudadanos = await load("ciudadanos"); // carga los datos de los ciudadanos
        ciudadanos.forEach((ciudadano, index) => {
            if (index % 2 === 0) { // crea una nueva fila cada dos ciudadanos
                const div = document.createElement("div");
                div.classList.add("row");
                div.classList.add("mb-4");
                ciudadanoHTML.appendChild(div);
            }
            let lastRowHTML = ciudadanoHTML.querySelectorAll(".row");
            lastRowHTML = lastRowHTML[lastRowHTML.length - 1];
            const card = createCard(ciudadano); // crea una tarjeta para mostrar la información del ciudadano
            lastRowHTML.innerHTML += card;
        });
    } catch (error) {
        console.error("Error loading ciudadanos:", error);
        ciudadanoHTML.innerHTML = "<p>Error loading ciudadanos. Please try again later.</p>";
    }
}

async function citizenForm(){

    const home = document.getElementById("home")
    const citizens = await load("ciudadanos");
    home.innerHTML += await loadCitizens(citizens[0],"ciudadanos")
}


async function addciudadanos(){
    const citizens = await load("ciudadanos");

    const nombre = document.getElementById("ciudadanos-nombre_completo-input").value.trim();
    const direccion = document.getElementById("ciudadanos-direccion-input").value.trim();
    const celular = document.getElementById("ciudadanos-celular-input").value.trim();
    const adn = document.getElementById("ciudadanos-codigo_adn-input").value.trim();

    //Verificacion de campos vacios
    if (!nombre||!direccion||!celular||!adn){
        alert("Asegurese de rellenar los campos!");
        return
    }

    const newPerson = {
        id: citizens.length + 1,
        nombre_completo: nombre,
        direccion: direccion,
        celular: celular,
        codigo_adn: adn
    }

    await save(newPerson, "ciudadanos");

    alert("El sujeto se creo con exito!")
}
