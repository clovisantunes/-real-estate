import React from "react";



function Sales(props) {
  return (
    <div>
      <div className="list_box">
        <div className="img_card">
          <div className="card_box">
            <h2 className="model">{props.model}</h2>
            <h2 className="price">{props.price}</h2>
            <img src={props.img} />
          </div>
        </div>
        <div className="information_container">
          <div className="type_card">{props.type}</div>
          <div className="info">
            <p class="icon">🚩</p>
            <p>{props.district}</p>
            <p>{props.city}</p>
          </div>
          <div className="cod_box">
            <div className="cod_text">
              CÓD
              <p>{props.cod}</p>
            </div>
            <div className="size_card">
              Área
              <p>{props.size}</p>
            </div>
          </div>
          <div className="button_details">
            <buton className="button_box">Detalhe</buton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
