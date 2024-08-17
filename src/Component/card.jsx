import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { useCart } from '../context/cart';

function Product(props) {

  const addCart = useCart();
  console.log("addCart",addCart);

 return (
    <div>
    <Card >
      <Card.Img variant="top" src={props.image}  />
      <Card.Body>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>
        Rs.{props.price}
        </Card.Text>
        <Button variant="primary" onClick={()=> addCart.setItems([...addCart.items,{image:props.image,name:props.productName,price:props.price}])} >Add To cart</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Product;