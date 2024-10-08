import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/register';
import Footer from './components/Footer';
//import Propiedades from './components/Propiedades';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {
    const [mostrarRegistro, setMostrarRegistro] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [pizzaCart, setPizzaCart] = useState([]);
    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    const mostrarFormularioRegistro = () => {
        setMostrarRegistro(true); // Cambiar a true para mostrar el formulario de registro
        setMostrarLogin(false);// cambia a false para que solo se muestre registro
    };

    const mostrarFormularioLogin = () => {
        setMostrarLogin(true); // Cambiar a true para mostrar el formulario de Login
        setMostrarRegistro(false); // Cambia a false para que solo se muestre Login
    };

    const regresarAlHome = () => {
        setMostrarRegistro(false); // Cambiar a false para que muestre app
        setMostrarLogin(false); // Camabia a false para que muestre app
    };

    const agregarAlCarrito = (pizzaSeleccionada) => {
        const pizzaEnCarrito = pizzaCart.find((pizza) => pizza.nombre === pizzaSeleccionada.nombre);

        if (pizzaEnCarrito) {
            const nuevoCarrito = pizzaCart.map((pizza) =>
                pizza.nombre === pizzaSeleccionada.nombre ? { ...pizza, cantidad: pizza.cantidad + 1 }
                    : pizza);
            setPizzaCart(nuevoCarrito);
        }
        else {
            setPizzaCart([...pizzaCart, {...pizzaSeleccionada, cantidad: 1 }])
        }
    };

    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    let card = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        padding: "20px",
    };

    let botonesCard = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
    };

    return (
        <>
            <div>
                <Navbar onRegisterClick={mostrarFormularioRegistro} //lama a formulario registros
                    onLoginClik={mostrarFormularioLogin} //llama a formulario Login
                    onCartClick={toggleCarrito}//llama a carrito
                />

                {/* Si mostrarRegistro es true, mostramos el formulario Register */}
                {mostrarRegistro ? (
                    <Register onRegisterSuccess={regresarAlHome} /> //llama al App cuando se registren con exito
                ) : mostrarLogin ? (
                    <Login onLoginSuccess={regresarAlHome} /> //llama al App cuando se logen con exito
                ) : (
                    <>
                        <Home agregarAlCarrito={agregarAlCarrito} />
                        {mostrarCarrito && (
                            <Cart pizzaCart={pizzaCart} setPizzaCart={setPizzaCart} />
                        )}

                        {/* <div style={card}>
                            <div>
                                <Propiedades
                                    imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                                    nombre="Pizza Napolitana"
                                    ingredientes={["mozzarella, ", "tomate, ", "queso", ", albaca", ", masas"]}
                                    precio="$25.000"
                                />
                                <div style={botonesCard}>
                                    <button style={{ backgroundColor: "white", border: "solid 1px black", color: "black" }}>
                                        Ver más
                                    </button>
                                    <button style={{ backgroundColor: "black", border: "solid 1px black", color: "white" }}>
                                        🛒 Añadir
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Propiedades
                                    imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                                    nombre="Pizza Española"
                                    ingredientes={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone"]}
                                    precio="$25.000"
                                />
                                <div style={botonesCard}>
                                    <button style={{ backgroundColor: "white", border: "solid 1px black", color: "black" }}>
                                        Ver más
                                    </button>
                                    <button style={{ backgroundColor: "black", border: "solid 1px black", color: "white" }}>
                                        🛒 Añadir
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Propiedades
                                    imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                                    nombre="Pizza Pepperoni"
                                    ingredientes={["mozzarella, ", "pepperoni, ", "orégano", ", aceitunas "]}
                                    precio="25000"
                                />
                                <div style={botonesCard}>
                                    <button style={{ backgroundColor: "white", border: "solid 1px black", color: "black" }}>
                                        Ver más
                                    </button>
                                    <button style={{ backgroundColor: "black", border: "solid 1px black", color: "white" }}>
                                        🛒 Añadir
                                    </button>
                                </div>
                            </div>
                        </div> */}
                        <Footer />
                    </>
                )}
            </div>
        </>
    );
}

export default App;