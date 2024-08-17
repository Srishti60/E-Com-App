
import './App.css';
import Product from './Component/card';
import Header from './Component/header';
import products from './products.json';
import { CartProvider } from './context/cart';

function App() {
  return (
    <CartProvider>
    <div className="App">
    <Header/>
    <div className='products'>
    {products.map((card)=>(
        <Product key={card.id} {...card} />
    ))}
  </div>
    </div>
    </CartProvider>
  );
}

export default App;
