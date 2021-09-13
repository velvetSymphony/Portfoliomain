import React from 'react'
import Navbar from './Navbar';
import Mobilemenu from './Mobilemenu';
import './styles/Header.css';


const Header = () => {
 
    return (
        
            <header className="header" >
                <Mobilemenu/>
            <Navbar/>
            </header>
        
    )
}

export default Header
