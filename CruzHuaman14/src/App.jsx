import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Destinos from "./pages/Destinos";
import DetalleDestino from "./pages/DetalleDestino";
import Nosotros from "./pages/Nosotros";
import LayoutPrincipal from "./components/LayoutPrincipal";
import NoEncontrado from "./pages/NoEncontrado";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="destinos" element={<Destinos />} />
          <Route
            path="destinos/:id"
            element={<DetalleDestino />}
          />
          <Route path="nosotros" element={<Nosotros />} />
        </Route>
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </>
  );
}

export default App;
