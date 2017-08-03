import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Carousel from './components/Carousel';
function App (props) {

    var products = props.state.products.map(function(prod){
        return <ProductDetail product={prod} key={prod.id}/>;
    });
    return (
          <div className="App">
            <NavBar />
            <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <p className="lead">Shop Name</p>
                      <div className="list-group">
                          <a href="#" className="list-group-item">Category 1</a>
                          <a href="#" className="list-group-item">Category 2</a>
                          <a href="#" className="list-group-item">Category 3</a>
                      </div>
                  </div>
                  <div className="col-md-9">
                      <Carousel />
                      <div className="row">
                        {products}
                      </div>
                  </div>
              </div>
            </div>
            <Footer />
          </div>
    );
}

export default App;
