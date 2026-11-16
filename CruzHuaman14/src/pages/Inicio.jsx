import { NavLink } from "react-router-dom";

function Inicio() {
    return (
        <section className="inicio-page">
            <div className="inicio-hero">
                <div className="inicio-hero-text">
                    <span className="inicio-badge">Destino ideal</span>
                    <h2>Bienvenido al Sitio Web de Destinos Turísticos</h2>
                    <p>Explora los mejores lugares para visitar y conocer.</p>
                </div>
                <img
                    className="inicio-hero-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzhBKTYsexaf3JeScLu_-iNCu0V12n8oY6w0u74ObYA&s=10"
                    alt="Destino turístico"
                />
            </div>
        </section>
    );
}

export default Inicio;
