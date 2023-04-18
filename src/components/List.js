import React from "react";
import './styles/list.css';

function List (props) {
    return(
        <div className="list_box">
           
                <div className="img_card"><img src={props.img} /></div>
                <div className="information_container">
                    <div className="type_card">{props.type}</div>
                   <div className="info">
                    <p class="icon">🚩</p>
                    <p>{props.district}</p>
                    <p>{props.city}</p>
                    </div>
                    <div className="cod_box">
                        <div className="cod_text">CÓD
                            <p>{props.cod}</p>
                        </div>
                        <div className="size_card">
                            Área
                            <p>{props.size}</p>
                        </div>
                    </div>
                </div> 
        </div>
    )
}

export default List;