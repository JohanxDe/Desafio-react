import React from 'react'
import { formatNumber } from '../helpers/formatNumbers'

function Navbar() {

    let estiloBotones = {
        display: "flex",
        textAlign: "center",
        
    }
    let botones ={
        margin: "0 5px",  // margen entre los botones
        border: "0",
        backgroundColor: "gey",
        color: "white",
        fontSize: "14px",
        borderRadius: "5px",
        cursor: "pointer",  // Hace que el cursor cambie al pasar sobre el botón
        border: "solid 1px black"
    }
    let barra = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "0px"
    }
    let divPrincipal ={
        backgroundColor: "grey",
        padding: "10px"
    }
    let botonTotal = {
        color: "#00c9ff",
        borderColor: "#00c9ff",
        border: "solid 1px",
        backgroundColor: "black",
        cursor: "pointer"
    }
    const total = 25000;
    const token = true;
  return (
    <div style={divPrincipal}>
        <div style={barra}>
            <div style={estiloBotones}>
                <h3>MAMA Tuya</h3>
                <button style={botones}>Home</button>

                {token ? (
            <>
              <button style={botones}>🔓 Profile</button>
              <button style={botones} onClick={() => setToken(false)}>🔒 Logout</button>
            </>
          ) : (
            <>
              <button style={botones} onClick={() => setToken(true)}>🔐 Login</button>
              <button style={botones}>🔐 Register</button>
            </>
          )}
                {/* <button style={botones}>Login</button>
                <button style={botones}>registro</button> */}
            </div>
            <div>
                <button style={botonTotal}>🛒 Total: ${formatNumber(total)}</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
