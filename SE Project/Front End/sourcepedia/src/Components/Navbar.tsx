import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () =>{
    const[search, setSearch] = useState("");
    const path = useLocation().pathname;

    return(
        <nav className='navbar'>
            <div className="left-nav">
                <Link to={'/'}><img className='logo' src={require('../Resources/Sourcepedia.png')} alt="" /></Link>
                {!(["/"].includes(path)) ? null : <div className='search-bar'>
                    <img className='search-logo' src={require('../Resources/Search.png')} alt="" />
<<<<<<< HEAD
                    <input type='text' placeholder='Search' className='nav-input' value={search} onChange={(event)=> setSearch(event.target.value)}></input>
=======
                    <input className='navbar-input' type='text' placeholder='Search' value={search} onChange={(event)=> setSearch(event.target.value)}></input>
>>>>>>> efcd9cee12c8906d642fa2e7fd407273f90f1b33
                </div>}
            </div>
            <div className='right-nav'>
                <Link to={'/write'}><img className='write-logo' src={require('../Resources/Write.png')}></img></Link>
                <Link to={'/about'}><button className='about-us-button nav-button'>About</button></Link>
                <Link to={'/login'}><button className='login-button nav-button'>Log in</button></Link>
                <Link to={'/register'}><button className='register-button nav-button'>Register</button></Link>
            </div>
        </nav>
    )
}