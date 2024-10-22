import React from 'react'

function Header() {
    let estilo = {
        backgroundImage: "url('https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg')",
        textAlign: "center",
        color: "black",
        padding: "30px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
  return (
    <div style={estilo} >
      <h1>Esta es la Pizzeria MAMA TUYA!!</h1>
      <p>En esta pizzeria no se lavan las manos</p>
    </div>
  )
}

export default Header
