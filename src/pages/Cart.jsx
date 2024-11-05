import React from 'react';
import { useCart } from '../CartContex';
import { useUser } from '../UserContext';

const Cart = () => {
    
    const {cartItems, removeFromCart, calculateTotal} = useCart();
    const { isAuthenticated } = useUser();

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
          <button
            onClick={() => alert('Pago exitoso!')}
            disabled={cartItems.length === 0 || !isAuthenticated}
            style={{
              backgroundColor: cartItems.length === 0 || !isAuthenticated ? '#ccc' : '#28a745',
              color: 'white',
              padding: '10px 20px',
              fontSize: '1em',
              border: 'none',
              borderRadius: '5px',
              cursor: cartItems.length === 0 || !isAuthenticated ? 'not-allowed' : 'pointer',
              marginTop: '20px'
            }}
          >
            Pagar
          </button>
          {!isAuthenticated && <p>Por favor, inicie sesión para realizar el pago.</p>}
        </div>
      );
    };
    
    export default Cart;