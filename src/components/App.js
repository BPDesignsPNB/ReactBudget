import React, { Component } from 'react';
import '../sass/App.scss';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helpers/helper';

class App extends Component {

  state = {
    gastos: {},
    presupuesto: '',
    restante: ''
  }

  ///agregar un nuevo gasto al state
  agregarGasto = (gasto) => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos}

    //agregar el gasto al objeto del state creando una key con un timestamp
    gastos[`gasto${Date.now()}`] = gasto;

    //restar  al presupuesto
    this.restarPresupuesto(gasto.cantidad);

    //enviarlo a state
    this.setState({ 
      gastos
    })
  }

  //restar del presupuesto un nuevo gasto ingresado
  restarPresupuesto = (cantidad) => {
    //leer el gasto
    let restar = Number(cantidad);

    //copia del state actual
    let restante = this.state.restante
    //restar gasto del state
    restante -= restar;
    
    restante = String(restante);    //nuevo state
    this.setState({
      restante
    });
  }
  //presupuesto prompt
  componentDidMount(){
    this.obtenerPresupuesto();
  };

  obtenerPresupuesto(){

    let presupuesto = prompt('Ingresar presupuesto semanal');

    let resultado = validarPresupuesto(presupuesto);
    //envia al state el presupuesto ingresado
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }
    else{
      this.obtenerPresupuesto();
    }
  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo="Presupuesto Semanal"
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto = {this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos = {this.state.gastos}
              />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
