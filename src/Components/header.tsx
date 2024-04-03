import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FaTrain } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Button } from 'react-bootstrap';

const Header = () => {
    
    return (
        <div>
        <header>
            <Link  to='/'>
                <Button className='headerButton'><FaTrain className="iconStyle" /></Button>
            </Link>
            <Link to="Settings"> 
                <Button className='headerButton'> <IoIosSettings className="iconStyle" /></Button> 
            </Link>

        </header>
        </div>
    );
  };
  
  export default Header;