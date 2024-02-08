import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <header>
            <Link to={'/'}>test</Link>
            <Link to={'./settings'}>test</Link>
        </header>
      
    );
  };
  
  export default Header;