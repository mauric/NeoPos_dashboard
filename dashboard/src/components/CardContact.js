import React, { Component } from 'react';
import './CardContact.css';

class CardContact extends Component {
    render(props){

        return ( 
        <div className="container">
            <div className="row">
                <div className="col-12 p-2">
                    <h3> Clientes Recientes</h3>

                </div>

            </div>

            <div>
                <table class="table table-striped">
                    { props.clientes.map( unCliente =>
                    <tbody>
                            <tr>
                                <th scope="row">{unCliente.nombre}</th>
                                <td>{unCliente.date}</td>
                                <td>{unCliente.email}</td>
                                <td><button type="button" class="btn btn-success">Ver</button></td>
                            </tr>
                    </tbody>)}
                </table>
            </div>
        </div>
    );
}
}

export default CardContact;
