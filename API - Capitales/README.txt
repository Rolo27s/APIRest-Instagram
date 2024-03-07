REST Countries API
La REST Countries API es una API pública que proporciona información detallada sobre países de todo el mundo. Esta API ofrece una amplia gama de endpoints que permiten a los desarrolladores acceder a datos actualizados y precisos sobre diferentes aspectos de cada país, como nombres, capitales, códigos de país, monedas, idiomas, poblaciones, zonas horarias, banderas y mucho más.

Características principales
Datos actualizados: La REST Countries API se mantiene actualizada con información precisa y actualizada sobre cada país.
Acceso fácil: Los desarrolladores pueden acceder a los datos utilizando endpoints simples y bien documentados.
Amplia cobertura: La API ofrece una amplia gama de datos sobre todos los países del mundo.
Gratis y sin necesidad de clave API: No se requiere una clave API para utilizar esta API, lo que la hace accesible para cualquier persona interesada en obtener información sobre países.
Endpoints disponibles
La REST Countries API ofrece varios endpoints para acceder a diferentes tipos de datos sobre los países. Algunos de los endpoints principales incluyen:

Búsqueda por nombre: Permite buscar países por su nombre.
Búsqueda por capital: Permite buscar países por su capital.
Búsqueda por código de país: Permite buscar países por su código de país.
Búsqueda por moneda: Permite buscar países por su moneda.
Búsqueda por idioma: Permite buscar países por su idioma.
Para obtener más detalles sobre los endpoints disponibles y cómo llamar a cada uno de ellos, consulta la documentación oficial de la API.

Campos disponibles
Cada objeto de país devuelto por la API contiene una variedad de campos que proporcionan información detallada sobre el país. Nosotros hemos usado nombre común del país, continente, capital, zonas horarias,población y bandera (adjuntando el campo de Google Maps como enlace de la imagen de la bandera). El listado de campos disponibles incluyen:

Nombre común
Nombre oficial
Capital
Código de país
Moneda
Idioma
Población
Zonas horarias
Bandera

Para obtener una lista completa de los campos disponibles y su descripción, consulta la documentación de campos.


Uso de la API de Google Translator

Hemos integrado la API de Google Translator para mejorar la experiencia del usuario al mostrar datos en español y permitir búsquedas en español. Esta integración nos permite traducir automáticamente los resultados de la API de inglés a español, así como traducir las consultas de búsqueda de español a inglés, lo que facilita la interacción para usuarios de habla hispana.

Enlaces usados:
https://restcountries.com/#endpoints-calling-code
https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md
