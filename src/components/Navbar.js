import React from "react";
import './styles/navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar () {
    const Navigate = useNavigate();
    return (
        <div className="nav_container">
            <nav className="navbar_card">
                <li className="nav_items">
                    <ul>
                        <button className="button_card" onClick={() => Navigate("/site_de_imoveis/venda")}>
                            Comprar
                        </button>
                    </ul>
                    <ul>
                    <button className="button_card">
                            Alugar
                        </button>
                    </ul>
                    <ul>
                    <button className="button_card">
                            Condominio
                        </button>
                    </ul>
                    <div className="logo_container" onClick={()=> Navigate("/site_de_imoveis/")}>
                    <div className="logo_card"  />
                    </div>
                    <ul>
                    <button className="button_card">
                            Empresa
                        </button>
                    </ul>
                    <ul>
                    <button className="button_card">
                            Contato
                        </button>
                    </ul>
                    <ul>
                    <button className="button_card">
                            Area do cliente
                        </button>
                    </ul>
                    
                </li>
            </nav>
        </div>
    )
}

export default Navbar;