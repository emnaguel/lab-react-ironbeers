import React from 'react'

const Search = (props) => {
    const handleChange = (event) => {
        console.log(event.target.value)
        props.handleSearch(event.target.value)
    }
    return (
        <div>
            <input
                className="form-control"
                value={props.value}
                placeholder='Search a beer'
                type="search"
                onChange={(event) => handleChange(event)}
            />
        </div>
    )
}

export default Search
