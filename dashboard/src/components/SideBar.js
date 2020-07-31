import React, { Component } from 'react';
import './SideBar.css';


class SideBar extends Component {
    render(){

        return ( 
            
            <div class="d-flex flex-row sidebar">
               <a href="/shop"><i class="fa fa-home"></i></a>
            </div>
    );
}

}

export default SideBar;
