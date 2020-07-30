import React, { Component } from 'react';


class CardCantVentas extends Component {
    render(){

        return ( 
            
       
							<div class="card border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xl font-weight-bold text-uppercase mb-1">Cantidad de Ventas
											</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">38</div>
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
