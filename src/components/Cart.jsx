import React from 'react'

const Cart = ({ pizzaCart, setPizzaCart }) => {

    //funcion que permitira aumentar cantidad de pizzas
    const incrementarCantidad = (pizza) => {
        const nuevoCarrito = pizzaCart.map((item) =>
            item.nombre === pizza.nombre ? { ...item, cantidad: item.cantidad + 1 }
                : item
        );
        setPizzaCart(nuevoCarrito);
    };

    //funcion que perimitira disminuir cantidad de pizzas
    const disminuirCantidad = (pizza) => {
        const nuevoCarrito = pizzaCart.map((item) =>
            item.nombre === pizza.nombre ? { ...item, cantidad: item.cantidad - 1 }
                : item
        ).filter((item) => item.cantidad > 0);
        setPizzaCart(nuevoCarrito);
    };

    //funcion que permite Calcular el total del carrito
    const calcularTotal = () => {
        return pizzaCart.reduce((Total, item) => Total + item.precio * item.cantidad, 0).toFixed();
    };

    const formatearEnCLP = (valor) => {
        return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };
    

    return (

        <div className='cart'>
            <h2>Carrito de compras</h2>
            {pizzaCart.length === 0 ? (
                <p>Tu carrito esta vacio</p>
            ) : (
                <div>
                    <ul>
                        {pizzaCart.map((pizza, index) => (
                            <li key={index}  style={{ marginBottom: '20px' }}>
                                <img src={pizza.imagen} alt={pizza.nombre} style={{ width: '100px' }} />
                                <h3>{pizza.nombre}</h3>
                                <p>Precio: {formatearEnCLP(pizza.precio)}</p>
                                <p>Cantidad: {pizza.cantidad}</p>
                                <button onClick={() => incrementarCantidad(pizza)}>+</button>
                                <button onClick={() => disminuirCantidad(pizza)}>-</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${calcularTotal()}</h3>
                    <button onClick={() => alert("Simulando pago...")}>Pagar</button>
                </div>
            )}
        </div>

    )
}

export default Cart;