import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio"
import Filmes from "./pages/Filmes"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/Filmes" element={<Filmes/>} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;