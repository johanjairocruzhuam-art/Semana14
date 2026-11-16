const URL_API = "/data/destinos.json";

// Obtener todos los destinos turísticos
export async function listarDestinos() {
    const respuesta = await fetch(URL_API);

    if (!respuesta.ok) {
        throw new Error("Error al obtener los destinos turísticos");
    }

    return await respuesta.json();
}

// Obtener un destino por su identificador
export async function obtenerDestino(id) {
    const destinos = await listarDestinos();

    return destinos.find(
        destino => destino.id === Number(id)
    );
}

// Obtener únicamente los destinos destacados
export async function listarDestacados() {
    const destinos = await listarDestinos();

    return destinos.filter(
        destino => destino.destacado === true
    );
}

// Filtrar destinos por categoría
export async function listarPorCategoria(categoria) {
    const destinos = await listarDestinos();

    return destinos.filter(
        destino => destino.categoria === categoria
    );
}
