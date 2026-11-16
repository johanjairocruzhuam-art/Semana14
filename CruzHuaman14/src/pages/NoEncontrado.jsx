import { Link } from "react-router-dom";

function NoEncontrado() {
    return (
        <>
        <h2>Error 404 - Página no encontrada</h2>
        <Link to="/">Volver al inicio</Link>
        </>
    );
}

export default NoEncontrado;
