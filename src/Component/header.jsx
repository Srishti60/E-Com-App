import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCart } from '../context/cart';

function Header() {
  const cart = useCart();
  console.log("Cart",cart);

  const Total = cart.items.reduce((a,b)=> a+b.price,0)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ecommerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Cart: {cart.items.length}</Nav.Link>
            <Nav.Link href="#link">Rs.{Total}</Nav.Link>
          </Nav>
          <input type='text' onChange={(e)=> cart.setSearchValue(e.target.value)} placeholder='search...' />
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;