import axios from 'axios'
import React, { Component } from 'react'

export class FormCreate extends Component {
    state={
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''

    }

    handleChange = (event) => {
        this.setState({

            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newBeer = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by

        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">tagline</label>
                        <input
                            className="form-control"
                            type="text"
                            name="tagline"
                            id="tagline"
                            value={this.state.tagline}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_brewed">first_brewed</label>
                        <input
                            className="form-control"
                            type="text"
                            id="first_brewed"
                            name="first_brewed"
                            value={this.state.first_brewed}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">brewers_tips</label>
                        <input
                            className="form-control"
                            type="text"
                            id="brewers_tips"
                            name="brewers_tips"
                            value={this.state.brewers_tips}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">attenuation_level</label>
                        <input
                            className="form-control"
                            type="number"
                            id="attenuation_level"
                            name="attenuation_level"
                            value={this.state.attenuation_level}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">contributed_by</label>
                        <input
                            className="form-control"
                            type="text"
                            id="contributed_by"
                            name="contributed_by"
                            value={this.state.contributed_by}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-primary mb-5">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormCreate
