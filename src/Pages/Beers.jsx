import React, { Component } from 'react'
import axios from "axios";

import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import { Link } from "react-router-dom";

export class Beers extends Component {
    state={
        allBeers: [],

    }

    handleSearch = (query) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((response) => {

            this.setState({
                allBeers: response.data,
            });
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount () {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                
                this.setState({
                    allBeers: response.data
                })
            }).catch((error) => console.log(error))
    }
    render() {
        
        return (
            <>
            <Navbar/>
            <div className="container ">
                <h1 className="mt-5 mb-5">All Beers</h1>
                <Search handleSearch={this.handleSearch}/>
                <div className="d-flex flex-rows flex-wrap justify-content-center">
                {this.state.allBeers.map((beer) => {
                    return <div key= {beer._id} className=" card m-2">
                    <div className="w-100 d-flex justify-content-center">
                        <img style={{height: "168px", width: "50px"}} className="mt-5 card-img-top"  src = {beer.image_url} alt={beer.name}/>
                     </div>
                        <div className="card-body">
                            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                            <p className="card-text">S{beer.tagline}</p>
                            <p className="card-text">S{beer.contributed_by}</p>
                        </div>
                    </div>
                   
                })}
                </div>
            </div>
            </>
        )
    }
}

export default Beers
