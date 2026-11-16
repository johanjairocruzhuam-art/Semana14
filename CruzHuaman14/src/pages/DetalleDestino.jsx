import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerDestino } from "../services/destinoService";
import CarDestino from "./CarDestino";

function DetalleDestino() {
  const valores = useParams();
  const navigate = useNavigate();
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    obtenerDestino(valores.id).then((datos) => {
      setDestino(datos);
    });
  }, [valores.id]);

  function volveratras() {
    navigate(-1);
  }

  if (!destino) {
    return <div>Cargando destino...</div>;
  }

  return (
    <>
      <CarDestino destino={destino} />
      <button onClick={volveratras}>Atrás</button>
    </>
  );
}

export default DetalleDestino;
