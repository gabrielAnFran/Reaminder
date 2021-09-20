 import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas:[]
    }
  
  }
  criarNota(Titulo, Texto, Data){
    const novaNota = {Titulo, Texto, Data};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }
  render(){
    return (
      <section className="conteudo">
         <FormularioCadastro criarNota = {this.criarNota.bind(this)}/>
         <ListaDeNotas notas={this.state.notas}/>
      </section>  
    );
  }
  
}

export default App;
