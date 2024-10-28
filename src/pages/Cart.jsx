import React from 'react';
import { useCart } from '../CartContex';

const Cart = () => {
    
    const {cartItems, removeFromCart, calculateTotal} = useCart();

    return (
        <div style={{color: 'black'}}>
          <h1>Carrito de Compras</h1>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} style={{borderBottom: '1px solid #ccc', marginBottom: '15px', marginBottom:'15px', paddingLeft:'10px' }}>
                    <img src={item.img} alt={item.name} style={{width: '100px', height: 'auto', marginRight:'10px'}} />
                  <p>{item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price * item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              ))}
              <h2>Total: ${calculateTotal()}</h2>
            </div>
          )}
        </div>
      );
    };
    
    export default Cart;