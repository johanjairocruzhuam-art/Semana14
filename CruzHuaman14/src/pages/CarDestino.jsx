
function CardDestino({ destino }) {
    return (
        <div className="card-destino">

            <img
                className="card-imagen"
                src={destino.imagen}
                alt={destino.nombre}
            />

            <div className="card-contenido">

                <h2>{destino.nombre}</h2>

                <p><strong>Ciudad:</strong> {destino.ciudad}</p>

                <p><strong>Región:</strong> {destino.region}</p>

                <p><strong>Categoría:</strong> {destino.categoria}</p>

                <p className="descripcion">
                    {destino.descripcion}
                </p>

                <div className="card-detalles">
                    <p><strong>Precio:</strong> S/ {destino.precioEntrada}</p>

                    <p><strong>Duración:</strong> {destino.duracionVisita}</p>

                    <p><strong>Mejor época:</strong> {destino.mejorEpoca}</p>

                    <p><strong>Puntuación:</strong> {destino.puntuacion}</p>
                </div>

            </div>
        </div>
    );
}

export default CardDestino;
