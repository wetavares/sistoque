import React from 'react';
import { Link } from 'react-router-dom';
import { AreaFooter } from './styled';

const Footer = () => {
    return (
        <AreaFooter>
            <Link className='linkfooter' to="/">&copy;Russo 2022 </Link>
        </AreaFooter>
    );
}

export default Footer;