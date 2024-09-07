import React from 'react'
import '../css/navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <h1>Resumify</h1>
        {/* <button type="button">Download</button> */}
        <button type="reset">Clear</button>
    </div>
  )
}

export default Navbar