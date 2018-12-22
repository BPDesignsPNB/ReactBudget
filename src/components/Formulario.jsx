import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Formulario extends Component {

    gastoRef = React.createRef();
    cantidadRef = React.createRef();


    crearGasto = (evento) =>{
        //default
        evento.preventDefault();

        //objeto con datos
        const gasto = {
            gasto: this.gastoRef.current.value,
            cantidad: this.cantidadRef.current.value
        }
        //agregarlo y enviar a props
        this.props.agregarGasto(gasto);

        //resetear formulario
        evento.currentTarget.reset();
    }

    render() {
        return <form onSubmit={this.crearGasto}>
            <h2>Agregar gastos</h2>
            <div className="campo">
              <label>Nombre Gasto</label>
              <input className="u-full-width" ref={this.gastoRef} type="text" placeholder="Ej. Transporte" />
            </div>
            <div className="campo">
              <label>Cantidad Gastada</label>
              <input className="u-full-width" ref={this.cantidadRef} type="text" placeholder="Ej. 300" />
            </div>
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
          </form>;
    }
}

Formulario.propTypes = {
  agregarGasto: PropTypes.func.isRequired
};

export default Formulario;