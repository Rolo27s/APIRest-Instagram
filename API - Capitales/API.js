// Esta función realiza una búsqueda de países utilizando la API de Rest Countries.
// Toma un término de búsqueda como parámetro y utiliza el valor seleccionado del elemento select con id "filterOption" para determinar qué campo se utilizará para la búsqueda.
// Después de obtener la respuesta de la API, llama a la función displayResults para mostrar los resultados en la página.

const MAX_ERROR_COUNT = 3; // Número máximo de intentos de búsqueda en español permitidos
let errorCounter = 0; // Variable para contar los intentos de búsqueda en español

async function search(searchInput) {
    // Obtiene el valor seleccionado del elemento select con id "filterOption"
    let filterOption = document.getElementById('filterOption').value;
    // letruye la URL de la API utilizando el término de búsqueda y la opción de filtro
    let url = `https://restcountries.com/v3.1/${filterOption}/${searchInput}`;
    console.log(url);
    try {
        // Realiza una solicitud a la API utilizando fetch
        let response = await fetch(url);
        // Convierte la respuesta a formato JSON
        let countries = await response.json();
        
        // Muestra los resultados en la página
        displayResults(countries);
    } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud a la API
        console.error('Error fetching country data:', error);
        // Muestra un mensaje de error en la página
        displayError('Error al buscar información del país.');
    }
}

// Esta función se encarga de traducir el texto de búsqueda al español utilizando la API de Google Translate y luego llama a la función search para realizar la búsqueda.
async function translateAndSearch() {
    // Obtiene el texto de búsqueda del campo de entrada y lo limpia
    let searchInput = document.getElementById('searchInput').value.trim();
    // Traduce el texto de búsqueda al inglés
    let translatedSearchInput = await translateText(searchInput, 'es', 'en');
    // Realiza la búsqueda utilizando el texto traducido
    search(translatedSearchInput);
}


// Esta función utiliza la API de Google Translate para traducir un texto dado del español al inglés.
async function translateText(text, sourceLang, targetLang) {
    // Realiza una solicitud a la API de Google Translate con el texto a traducir
    let response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
    // Convierte la respuesta a formato JSON
    let data = await response.json();
    // Retorna la traducción del texto
    return data[0][0][0];
}

// Esta función muestra los resultados de la búsqueda en la interfaz de usuario.
async function displayResults(countries) {
    // Obtiene el contenedor de resultados del documento HTML y lo vacía
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    try {
        // Comprueba si no se encontraron países para la capital o ciudad especificada
        if (countries.length === 0) {
            // Si no se encontraron países, muestra un mensaje indicando la ausencia de resultados y termina la función
            resultsContainer.innerHTML = 'No se encontraron países para la capital o ciudad especificada.';
            return;
        }

        // Crea una tabla para mostrar los resultados
        let table = document.createElement('table');
        // Crea una fila de encabezado para la tabla
        let headerRow = document.createElement('tr');
        // Agrega las columnas de encabezado a la fila de encabezado
        headerRow.innerHTML = `<th>Nombre</th><th>Continente</th><th>Capital</th><th>Zonas horarias</th><th>Población</th><th>Bandera</th>`;
        // Agrega la fila de encabezado a la tabla
        table.appendChild(headerRow);

        // Itera sobre cada país en los resultados
        for (let country of countries) {
            // Traduce el nombre, continente y capital del país al español
            let translatedName = await translateText(country.name.common, 'en', 'es');
            let translatedContinent = await translateText(country.continents, 'en', 'es');
            let translatedCapital = await translateText(country.capital, 'en', 'es');
            
            // Crea una nueva fila para el país en la tabla
            let row = document.createElement('tr');
            // Agrega las celdas de datos para el país a la fila
            row.innerHTML = `<td>${translatedName}</td><td>${translatedContinent}</td><td>${translatedCapital}</td><td>${country.timezones}</td><td>${country.population}</td><td><a href="${country.maps.googleMaps}" target="_blank"><img src="${country.flags.png}" alt="Bandera de ${translatedName}" title="Haz clic para ver el mapa de ${translatedName}" /></a></td>`;
            // Agrega la fila a la tabla
            table.appendChild(row);
        }
        // Agrega la tabla de resultados al contenedor de resultados en el documento HTML
        resultsContainer.appendChild(table);
    } catch (error) {
        // Maneja el error mostrando un mensaje en la consola
        console.error('Error al mostrar resultados:', error);
        // Incrementa el contador de errores
        errorCounter++;
        // Verifica si se ha alcanzado el número máximo de intentos de búsqueda en español
        if (errorCounter <= MAX_ERROR_COUNT) {
            // Si no se ha alcanzado el límite, intenta la búsqueda nuevamente con la palabra en español
            let searchInput = document.getElementById('searchInput').value.trim();
            search(searchInput);
        } else {
            // Si se ha alcanzado el límite, muestra un mensaje de error en el contenedor de resultados
            displayError('Error al buscar información del país.');
            errorCounter = 0; // Reinicia el contador de errores
        }
    }
}


// Esta función se encarga de traducir el texto de búsqueda al español utilizando la API de Google Translate y luego llama a la función search para realizar la búsqueda.
async function translateAndSearch() {
    // Obtiene el texto de búsqueda del campo de entrada y lo limpia
    let searchInput = document.getElementById('searchInput').value.trim();
    // Traduce el texto de búsqueda al inglés
    let translatedSearchInput = await translateText(searchInput, 'es', 'en');
    // Realiza la búsqueda utilizando el texto traducido
    search(translatedSearchInput);
}




// Esta función se encarga de mostrar un mensaje de error en la página.
function displayError(message) {
    // Obtiene el contenedor de resultados
    let resultsContainer = document.getElementById('results');
    // Muestra el mensaje de error en el contenedor
    resultsContainer.innerHTML = `<p>${message}</p>`;
}
