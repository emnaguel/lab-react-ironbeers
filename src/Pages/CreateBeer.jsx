import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import FormCreate from '../Components/FormCreate'
export class CreateBeer extends Component {
    render() {
        return (
            <div>
            <Navbar/>
                <div className="container">
                    <h1 className="mt-5 mb-5">Create a beer</h1>
                    <FormCreate/>
                </div>
            </div>
        )
    }
}

export default CreateBeer
