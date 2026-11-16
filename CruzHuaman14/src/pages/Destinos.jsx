import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarDestinos } from "../services/destinoService";

function Destinos() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    listarDestinos().then((datos) => {
      setDestinos(datos);
    });
  }, []);

  return (
    <section>
      <h2>Destinos Turísticos</h2>
      <div>
        {destinos.map((destino) => (

          <article key={destino.id}>

            <img src={destino.imagen} alt={destino.nombre} />

            <h3>{destino.nombre}</h3>

            <p>Ciudad: {destino.ciudad}</p>

            <p>Categoría: {destino.categoria}</p>
            
            <Link to={`/destinos/${destino.id}`}>Ver destino</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Destinos;
