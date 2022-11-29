import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AreaHeader } from './styles';

function Header() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <AreaHeader>
        <div className='container'>  
            <div className='logo'>
                <img src='../../../favicoRussoC.ico' alt='logo'/>
            </div>  
            <div className='nav-bar'>           
                <Nav variant="pills" activeKey="1" onSelect={handleSelect}>                    
                        <Nav.Item className='itens'>
                            <NavDropdown title="Movimentação" id="nav-dropdown">
                                <NavDropdown.Item eventKey="1.1">Entradas</NavDropdown.Item>
                                <NavDropdown.Item eventKey="1.2">Saídas</NavDropdown.Item>
                                <NavDropdown.Item eventKey="1.3">Clientes</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title="Cadastros" id="nav-dropdown">
                                <NavDropdown.Item eventKey="2.1">Produtos</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.2">Fornecedores</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.3">Clientes</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>                        
                        <Nav.Item>
                            <NavDropdown title="Relatorios" id="nav-dropdown">
                                <NavDropdown.Item eventKey="2.1">Mov. Produtos</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.2">Cad. Fornecedores</NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.3">Cad. Clientes</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" href="#/sobre">
                                Sobre
                            </Nav.Link>
                        </Nav.Item>                        
                </Nav>
            </div>

            {/* <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Botão dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#/">Alguma ação</a>
                    <a class="dropdown-item" href="#/">Outra ação</a>
                    <a class="dropdown-item" href="#/">Alguma coisa aqui</a>
                </div>
            </div> */}

        </div>
    </AreaHeader>
  );
}

export default Header;