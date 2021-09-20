import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                Titulo={nota.Titulo}
                Texto={nota.Texto}
                Data={new Date()}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
