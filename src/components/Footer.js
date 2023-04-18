import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="service_container">
        <div className="text_container">
          <h2 className="text_box">🕝Atendimento:</h2>
          <h2 className="text_box_">
            De Segunda à Sexta-Feira, das 08h30 às 18h, sem fechar ao meio-dia.
          </h2>
        </div>
      </div>
      <div className="footer_card">
        <div className="footer_part1">
          <div className="logo_card_footer" />
          Desde 1993 no mercado imobiliário somos referência na venda, locação e
          administração de condomínios, em Sapiranga e região.
        </div>
        <div className="footer_part2">
            🚩
            <p></p>
          Onde Estamos 
          <p></p>
          Em alguma rua 55 Sapiranga-RS
        </div>
        <div className="footer_part3">
        <p>Locação/Vendas/Atendimento</p>
            (99) 99999-9999<p></p>
            📞  Vendas (99) 99999-9999<p></p>
            📞 (99) 99999-9999<p></p>
            📞 (99) 99999-9999

        </div>
      </div>
    </div>
  );
}

export default Footer;
