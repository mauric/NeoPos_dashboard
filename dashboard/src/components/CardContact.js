import React, { Component } from 'react';
import './CardContact.css';

class CardContact extends Component {
    render(){

        return ( 
        <div className="container">
            <div className="row">
                <div className="col-12 p-2">
                    <h3> Clientes Recientes</h3>

                </div>

            </div>
            <table class="table table-striped">
  
                <tbody>
                    <tr>
                        <th scope="row">Nombre</th>
                        <td>Fecha</td>
                        <td>Direccion</td>
                        <td><button type="button" class="btn btn-success">Ver</button></td>
                    </tr>
                    <tr>
                    <th scope="row">Nombre</th>
                        <td>Fecha</td>
                        <td>Direccion</td>
                        <td><button type="button" class="btn btn-success">Ver</button></td>
                    </tr>
                    <tr>
                    <th scope="row">Nombre</th>
                        <td>Fecha</td>
                        <td>Direccion</td>
                        <td><button type="button" class="btn btn-success">Ver</button></td>
                    </tr>
                    <tr>
                    <th scope="row">Nombre</th>
                        <td>Fecha</td>
                        <td>Direccion</td>
                        <td><button type="button" class="btn btn-success">Ver</button></td>
                    </tr>
                    <tr>
                    <th scope="row">Nombre</th>
                        <td>Fecha</td>
                        <td>Direccion</td>
                        <td><button type="button" class="btn btn-success">Ver</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

}

export default CardContact;
