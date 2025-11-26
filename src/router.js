import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Inicio from "../src/pages/Inicio/Inicio";
import Sobre from "../src/pages/Sobre/Sobre";
import Contato from "../src/pages/Contato/Contato";
import Watch from "../src/pages/Watch/Watch";

function AppRoutes() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Inicio search={search} setSearch={setSearch} />} 
        />

        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

