
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () =>{
    return (
      <>
        <Navbar key="md" style={{backgroundColor: "#e3f2fd", height:"3rem", lineHeight:"3rem"}} expand="md" className="mb-3">
          <Container fluid>
            <Link to="" className="navBarLink"><h3>Home</h3></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md"`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="bubleSort" className="navBarLink px-3">Bubble Sort</Link>
                  <Link to="insertionSort" className="navBarLink px-3">Insertion Sort</Link>
                  <Link to="selectionSort" className="navBarLink px-3">Selection Sort</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <Outlet />
      </>
    );
}

export default NavBar;