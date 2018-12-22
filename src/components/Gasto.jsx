import React, { Component } from 'react';
import PropTypes from "prop-types";

class Gasto extends Component {
    render() {
        //destructuracion
        const {gasto, cantidad} = this.props.gasto;

        return (
            <li className="gastos">
                <p>
                    {gasto}
                    <span className="gasto">$ {cantidad}</span>
                </p>
            </li>
        );
    }
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired
};

export default Gasto;