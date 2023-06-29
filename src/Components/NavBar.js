import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='logoText'>Franklin Perez</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#aboutMe">About me</Nav.Link>
            <Nav.Link href="#projects">Projets</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>   
    </>
  );
}

export default NavBar;