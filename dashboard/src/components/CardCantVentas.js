import React, { Component } from 'react';
import './Card.css';

class CardCantVentas extends Component {
   
	
	
	
	apiCall(url, concecuencia){
		fetch(url)
			.then( response =>response.json() )
			.then( data => concecuencia(data))
			.catch(error => console.log(error))
	}
	render(props){

        return ( 
    
							<div class="card carta border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xl font-weight-bold text-uppercase mb-1">Cantidad de Ventas
											</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">5000
											</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user-check fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						
    );
	}

}

export default CardCantVentas;
