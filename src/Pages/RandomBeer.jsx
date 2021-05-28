import axios from 'axios'
import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
export class RandomBeer extends Component {
    state={
        randomBeer: null
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                console.log(response)
                this.setState({
                    randomBeer: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        return (
            <div>
            <Navbar/>
                <div className="container">
                    <h1 className="mt-5 mb-5">RandomBeer</h1>
                    {this.state.randomBeer && 
                        <div className=" card m-2">
                            <div className="w-100 d-flex justify-content-center">
                                <img style={{height: "168px", width: "50px"}} className="card-img-top mt-5" src = {this.state.randomBeer.image_url} alt={this.state.randomBeer.name}/>
                            </div>
                            <div className="card-body">
                                <h2>{this.state.randomBeer.name}</h2>
                                <h3>{this.state.randomBeer.tagline}</h3>
                                <p className="card-text">{this.state.randomBeer.first_brewed}</p>
                                <p className="card-text">{this.state.randomBeer.attenuation_level}</p>
                                <p className="card-text">{this.state.randomBeer.description}</p>
                                <p className="card-text">{this.state.randomBeer.contributed_by}</p>
                            </div>
                        </div>}
                </div>
            </div>
        )
    }
}

export default RandomBeer
