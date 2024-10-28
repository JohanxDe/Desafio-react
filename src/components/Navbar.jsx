import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContex';
import { formatNumber } from '../helpers/formatNumbers';

function Navbar({isAuthenticated, onLogout}) {

    const {calculateTotal} = useCart();

    let estiloBotones = {
        display: "flex",
        textAlign: "center",
    };
    let botones = {
        margin: "0 5px",  // margen entre los botones
        border: "0",
        backgroundColor: "grey",
        color: "white",
        fontSize: "14px",
        borderRadius: "5px",
        cursor: "pointer",  // Hace que el cursor cambie al pasar sobre el botón
        border: "solid 1px black",
        textDecoration: "none",
    };
    let barra = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "0px"
    };
    let divPrincipal = {
        backgroundColor: "grey",
        padding: "10px"
    };
    let botonTotal = {
        color: "#00c9ff",
        borderColor: "#00c9ff",
        border: "solid 1px",
        backgroundColor: "black",
        cursor: "pointer"
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
                                <button style={botones} onClick={onLogout}>🔒 Logout</button>
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