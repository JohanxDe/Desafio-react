import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContex';
import { useUser } from '../UserContext';
import { formatNumber } from '../helpers/formatNumbers';

function Navbar() {

    const {calculateTotal} = useCart();
    const {isAuthenticated, logout} = useUser();

    let estiloBotones = {
        display: "flex",
        textAlign: "center",

    };
    let botones = {
        margin: "0 5px",  // margen entre los botones
        
        backgroundColor: "grey",
        color: "white",
        fontSize: "15px",
        borderRadius: "5px",
        cursor: "pointer",  // Hace que el cursor cambie al pasar sobre el botón
        paddingLeft: "5px 10px",
        textDecoration: "none",
    };
    let barra = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };
    let divPrincipal = {
        backgroundColor: "grey",
        padding: "10px"
    };
    let botonTotal = {
        color: "#00c9ff",
        borderColor: "#00c9ff",
        backgroundColor: "black",
        padding: "8px 12px",
        cursor: "pointer",
        textDecoration: "none",
    };

    const total = 25000;

    return (
        <>
            <div style={divPrincipal}>
                <div style={barra}>
                    <div style={estiloBotones}>
                        <h3>MAMA Tuya</h3>
                        <Link to="/" style={{...botones}} >Home</Link>

                        {isAuthenticated ? (
                            <>
                                <Link to="/profile" style={{...botones}}>Profile</Link>
                                <button style={botones} onClick={logout}>🔒 Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" style={{...botones}}>🔐 Login</Link> 
                                <Link to="/register" style={{...botones}}> 🔐 Register </Link>
                            </>
                        )}
                    </div>
                    <div>
                        <Link to="/cart" style={botonTotal}>🛒 Carrito (Total: ${calculateTotal()})</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;