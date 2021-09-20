import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.Titulo = "";
    this.Texto = "";
    this.Data = "";
    
  }
  _handleMudancaTitulo(evento) {
    this.Titulo = evento.target.value;
    console.log(this.Titulo);
  }

  _handleMudancaTexto(evento) {
    this.Texto = evento.target.value;
    console.log(this.Texto);
  }

  _handleMudancaData(evento) {
    this.Data = new Date();
    console.log(this.Data);
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.Titulo, this.Texto);
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
