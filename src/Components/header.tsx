import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { FaTrain } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Button } from 'react-bootstrap';
// 
const Header = () => {
    // 
    return (
        <div>
            <header>
                <Link  to='/' className='headerButton'>
                    {/* <FaTrain className="iconStyle" /> */}
                    Home
                </Link>
                <Link to="Settings" className='headerButton'> 
                    {/* <IoIosSettings className="iconStyle" /> */}
                    Settings
                </Link>
                <Link to="Stats" className='headerButton'>
                    Stats     
                </Link>
            </header>
        </div>
    );
  };
  
  export default Header;