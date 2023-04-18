import React from "react";
import './styles/search.css';
function Search () {
    return (
    <div className="Search_container">
        <section>
      <div class="list_container">
        <div class="list_class">
          <div class="style_form">
            <select class="ls-label col-md-8" id="option_card">
              <option value="agent">Alugar</option>
              <option value="agent">Compra</option>
            </select>
          </div>

          <div class="style_form">
            <select class="ls-label col-md-8" id="option_card">
              <option value="agent">Tipo de imovel</option>
              <option value="imovel">Casa</option>
              <option value="imovel">Apartamento</option>
              <option value="imovel">Geminiado</option>
              <option value="imovel">Terreno</option>
              <option value="imovel">Chacara</option>
              <option value="imovel">Predio industrial</option>
              <option value="imovel">Sala comercial</option>
              <option value="imovel">Sobrado</option>
            </select>
          </div>
          <div class="style_form">
            <select class="ls-label col-md-8" id="option_card">
              <option value="agent">Cidade</option>
              <option value="imovel">Sapiranga</option>
              <option value="imovel">Campo Bom</option>
              <option value="imovel">Ararica</option>
              <option value="imovel">Nova Hartz</option>
              <option value="imovel">Novo hamburgo</option>
              <option value="imovel">Parobe</option>
              <option value="imovel">Porto alegre</option>
              <option value="imovel">Canoas</option>
            </select>
          </div>
          <div class="style_form">
            <select class="ls-label col-md-8" id="option_card">
              <option value="imovel">Vagas</option>
              <option value="imovel">Sim</option>
              <option value="imovel">Não</option>
            </select>
          </div>
          <div class="style_form">
            <select class="ls-label col-md-8" id="option_card">
              <option value="agent">Dormitórios</option>
              <option value="agent">1+ Dormitórios</option>
              <option value="agent">2+ Dormitórios</option>
              <option value="agent">3+ Dormitórios</option>
              <option value="agent">4+ Dormitórios</option>
              <option value="agent">5+ Dormitórios</option>
            </select>
          </div>
          <div class="style_code">
            <input
              type="text"
              id="code"
              placeholder="Codigo"
            />
          </div>
          <div class="search_button">
            <a href="#">
              <button type="submit" class="search_card">🔍Buscar</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}
export default Search;