import React from 'react';

import './App.css';
import CardCantVentas from './components/CardCantVentas';
import CardTotalVentas from './components/CardTotalVentas';
import CardTotalVisitas from './components/CardTotalVisitas';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import CardContact from './components/CardContact';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
            </head>
                          
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <TopBar />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-1">
                        <SideBar />
                    </div>
                    <div className="col-md-11">
                      <div className="row">
                        <div className="col-md-4">
                            <CardCantVentas />
                        </div>
                        <div className="col-md-4">
                           <CardTotalVentas />
                        </div>
                        <div className="col-md-4">
                            <CardTotalVisitas />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <CardContact />
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid"></div>
                      <div className="row footer">
                        <div className="col-md-5">
                          <Footer />
                        </div>
                        <div className="col-md-7">
                          
                        </div>
                      </div>
                  </div>
                </div>
      <script src="https://kit.fontawesome.com/2aa1bb4704.js" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      </div>
  );
}

export default App;
