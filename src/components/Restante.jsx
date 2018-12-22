import React, { Component } from 'react';
import { revisarPresupuesto } from '../helpers/helper';
import PropTypes from "prop-types";

class Restante extends Component {
    render() {
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;
        return (
            <div className={revisarPresupuesto(presupuesto,restante)}>
                <p>Restante: $ {this.props.restante}</p>
            </div>
        );
    }
}

Restante.propTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired
};

export default Restante;