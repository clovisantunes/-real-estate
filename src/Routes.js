import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./components/Index";
import Sales from "./components/pages/Sales";
import IndexSales from "./components/pages/Index";
function Rotas () {
    return(
    <Router>
        <Routes>
            <Route path="/site_de_imoveis/" element={<Index />} />
            <Route path="/site_de_imoveis/Venda"element={<IndexSales />} />
        </Routes>
    </Router>
    );
}

export default Rotas;