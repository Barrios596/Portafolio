import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';
import data from './data/data';
import Tarjeta from './Tarjeta';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tarjetas: data.tarjetas,
      tarjetaActual: data.tarjetas[0]
    }
    console.log(this.state.tarjetaActual.img)
  }

  sigTarjeta = () => {
    const nuevoIndex = this.state.tarjetaActual.indice+1
    this.setState({
      tarjetaActual: data.tarjetas[nuevoIndex]
    })
  }

  antTarjeta = () => {
    const nuevoIndex = this.state.tarjetaActual.indice-1
    this.setState({
      tarjetaActual: data.tarjetas[nuevoIndex]
    })
  }

  render() {
    const {tarjetas, tarjetaActual} = this.state;
    return (
      <div className="App">

        <div className="pagina">
          <section>
            <img src={logo}
            className="logo"/>
            <h1>
              Portafolio de proyectos web
            </h1>
          </section>

          <Tarjeta tarjeta={tarjetaActual}/>
        
        </div>
        <br/>

        <button
          onClick={() => this.antTarjeta()}
          disabled={tarjetaActual.indice === 0}
        >←</button>
        <button
          onClick={() => this.sigTarjeta()}
          disabled={tarjetaActual.indice === tarjetas.length-1}
        >→</button>
      </div>
    );
  }
}

export default App;
