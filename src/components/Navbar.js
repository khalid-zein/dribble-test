import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCustom() {
  return (
    <Navbar className='nav' expand="lg">
        <Navbar.Brand className='app' href="#home">Dribble</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navitem' href="/">Home</Nav.Link>
            <Nav.Link className='navitem' href="/profile">Profile</Nav.Link>
            <Nav.Link className='navitem' href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCustom;