import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

function LayoutPrincipal() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    );
}

export default LayoutPrincipal;
