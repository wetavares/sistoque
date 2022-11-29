import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AreaHeader } from './styles';


const Header = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <AreaHeader>
      <div className='container'>
        <div className='logo'>
          <img src='../../../favicoRussoC.ico' alt='logo'/>
        </div>
          <Nav variant="pills" activekey="1" onSelect={handleSelect}>
            {/* <ul> */}
              <NavDropdown title="Dropdown" id="nav-dropdown">

              </NavDropdown>
              <li><Link to="/cadastro">Cadastros</Link></li>
              <li><Link to="/movimento">Movimentação</Link></li>
              <li><Link to="/relatorio">Relatórios</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="contato">Contato</Link></li>
            {/* </ul> */}
          </Nav>
      </div>
    </AreaHeader>
  );
}

export default Header;