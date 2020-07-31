import React, { Component } from 'react';
import './TopBar.css';

class TopBar extends Component {
    render(){

        return ( 
            <div className="container-fluid topbar">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-4 login">
                        <p>NeoPos:Tienda de Pumba</p>
                    </div>
                    
                    <div className="col-md-3 login">
                        <img src="puma-logo-.png" alt=""/>

                    </div>
                </div>

            </div>
    );
}

}

export default TopBar;
