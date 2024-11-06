import React from 'react';
import { useCart } from '../CartContex';
import { useUser } from '../UserContext';


const Cart = () => {
    const { cartItems, removeFromCart, calculateTotal } = useCart();
    const { isAuthenticated } = useUser();

    console.log("Estado de autenticación en Cart:", isAuthenticated);
    
    return (
        <div className="cart-container">
            <h1 className="cart-title">Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">El carrito está vacío</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                <p className="item-quantity">Cantidad: {item.quantity}</p>
                                <p className="item-price">Precio: ${item.price * item.quantity}</p>
                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <h2 className="total-price">Total: ${calculateTotal()}</h2>
                </div>
            )}
            <button
                className={`pay-button ${cartItems.length === 0 || !isAuthenticated ? 'disabled' : ''}`}
                onClick={() => alert('Pago exitoso!')}
                disabled={cartItems.length === 0 || !isAuthenticated}
            >
                Pagar
            </button>
            {!isAuthenticated && <p className="login-prompt">Por favor, inicie sesión para realizar el pago.</p>}
        </div>
    );
};

export default Cart;