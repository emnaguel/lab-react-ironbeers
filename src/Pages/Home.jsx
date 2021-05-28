import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container ">
      <h1 className="mt-5 mb-5">Welcome to the Home Page</h1>
        <div className="d-flex flex-wrap flex-rows justify-content-center">
            <div className=" card m-2">
                <img className="card-img-top" src={require('../assets/beers.png')} alt="All beers"/>
                <div className="card-body">
                    <Link to={`/beers`}><h5 className="card-title">All beers</h5></Link>
                </div>
            </div>


            <div className=" card m-2">
                <img className="card-img-top" src={require('../assets/random-beer.png')} alt="All beers"/>
                <div className="card-body">
                    <Link to={`/random`}><h5 className="card-title">Random Beer</h5></Link>
                </div>
            </div>
            

            <div className=" card m-2">
                <img className="card-img-top" src={require('../assets/new-beer.png')} alt="All beers"/>
                <div className="card-body">
                    <Link to={`/new`}><h5 className="card-title">New Beer</h5></Link>
                </div>
            </div>

        </div>
        
        
        
      
    </div>
  );
};

export default Home;
