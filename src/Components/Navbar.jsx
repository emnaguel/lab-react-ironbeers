import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <div style={{height: '60px'}} className="d-flex justify-content-center align-items-center" style={{backgroundColor: '#3DC4FC'}}>
            <header><Link to={`/`}><i style={{ color: 'white'}} className="fas fa-home"></i></Link></header>
        </div>
    )
}

export default Navbar