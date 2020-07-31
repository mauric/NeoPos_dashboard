import React, { Component } from 'react';


class CardContact extends Component {
    render(){

        return ( 
        <div>
            
            <p> Clientes Recientes</p>
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
