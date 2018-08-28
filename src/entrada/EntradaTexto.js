import React from 'react';

export default class EntradaTexto extends React.Component {

    capturaValor() {
        const texto = document.getElementById('ent').value;
        this.props.cambiaTexto(texto);
    }
    
    render() {
        return (
            <div className="col-6">
                <input id="ent" />
                <button className="btn btn-primary" onClick={this.capturaValor.bind(this)} >Presioname</button>
            </div>
        );
    }
}