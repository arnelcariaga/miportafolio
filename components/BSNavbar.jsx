import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '@/styles/Home.module.css'
import { Github } from './Icons/Github';
import { Facebook } from './Icons/Facebook';
import { Email } from './Icons/Email';
import { WhatsApp } from './Icons/Whatsapp';

const contact_icons_size = 20;

function BSNavbar() {
  const [isScroll, setIsScroll] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <Navbar
      className={styles.navbar}
      style={isScroll ? {
        backgroundColor: "#000"
      } : {}}
      fixed="top"
      expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className='text-info fw-bold'>Arnel Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='shadow-none' />
        <Navbar.Collapse id="basic-navbar-nav" className={["ps-5", styles.navbar_collapse]}>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Acerca de mi</Nav.Link>
            <NavDropdown title="Proyectos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#home"><Github width={contact_icons_size} height={contact_icons_size} /></Nav.Link>
            <Nav.Link href="#link" className='text-white'><Email width={contact_icons_size} height={contact_icons_size} /></Nav.Link>
            <Nav.Link href="#link" className='text-primary'><Facebook width={contact_icons_size} height={contact_icons_size} /></Nav.Link>
            <Nav.Link href="#link" className='text-success'><WhatsApp width={contact_icons_size} height={contact_icons_size} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BSNavbar;