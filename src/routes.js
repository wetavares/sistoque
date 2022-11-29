import React from "react";
import { Route, Routes } from "react-router-dom";

import Cadastro from "./components/pages/cadastro";
import Contato from "./components/pages/contato";
import Home from "./components/pages/home";
import Movimento from "./components/pages/movimento";
import Relatorio from "./components/pages/relatorio";
import Sobre from "./components/pages/sobre";

export default function Rotas(){
    return(
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cadastro" element={<Cadastro />}/>
            <Route exact path="/movimento" element={<Movimento />} />    
            <Route exact path="/relatorio" element={<Relatorio />} />
            <Route exact path="/sobre" element={<Sobre />} />
            <Route exact path="/contato" element={<Contato />} />
        </Routes>
    );
}
