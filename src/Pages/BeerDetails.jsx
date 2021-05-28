import axios from 'axios'
import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
export class BeerDetails extends Component {
    state={
        singleBeer: null
    }

    componentDidMount () {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.beerId)
        .then((response) => {

            this.setState({
                singleBeer: response.data
            })
        })
    }
    render() {

        return (
            <>
                <Navbar/>
                <div className="container">
                    {this.state.singleBeer && 
                    <div className=" card m-2">
                        <div className="w-100 d-flex justify-content-center">
                            <img style={{height: "168px", width: "50px"}} className="card-img-top mt-5" src = {this.state.singleBeer.image_url} alt={this.state.singleBeer.name}/>
                        </div>
                        <div className="card-body">
                            <h2>{this.state.singleBeer.name}</h2>
                            <h3>{this.state.singleBeer.tagline}</h3>
                            <p className="card-text">{this.state.singleBeer.first_brewed}</p>
                            <p className="card-text">{this.state.singleBeer.attenuation_level}</p>
                            <p className="card-text">{this.state.singleBeer.description}</p>
                            <p className="card-text">{this.state.singleBeer.contributed_by}</p>
                        </div>
                    </div>}
                </div>
            </>
        )
    }
}

export default BeerDetails
