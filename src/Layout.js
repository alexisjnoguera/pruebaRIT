import React, { Component } from 'react';
import EntradaTexto from './entrada/EntradaTexto';
import './bootstrap.min.css';
import './Layout.css';
import Frame from './salida/Frame';

export default class Layout extends Component {

  constructor() {
    super();
    this.state = {
      texto: 'Chao'
    };
  }

  cambiaTexto(texto) {
    this.setState({texto});
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <EntradaTexto cambiaTexto={this.cambiaTexto.bind(this)} />
          <Frame texto={this.state.texto.split("")} />
        </div>
      </div>
    );

    

    
  }
}
