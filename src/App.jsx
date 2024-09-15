import React from "react"
import Propiedades from "./components/Propiedades"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {

  let card = {
    display: "flex",
    justifyContent: "space-evenly",
    border: "solid 2px brown",
    margin: "3px",
    marginBottom:"10px",
  }

  let botonesCard ={
    display: "flex",
    backgroundColor:"white",
    justifyContent: "space-around",
    padding: "10px 0 5px 0px",
    border: "solid 1px black",
    marginBottom: "10px"
  }

  return(
    <>
    <Navbar/>
    <Home/>
    <div style={card}>
      <div>
        <Propiedades imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        nombre="Pizza Napolitana"
        ingredientes={[" mozzarella, ", "tomate, ", "queso", ", albaca", ", masas"]} 
        precio="$25.000"/>
        <div style={botonesCard}>
          <button style={{backgroundColor:"white", border:"solid 1px black", color:"black"}}>ver mas</button>
          <button style={{backgroundColor:"black", border:"solid 1px black"}}>🛒 Añadir</button>
        </div>
      </div>
      <div>
        <Propiedades 
        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        nombre="Pizza Española"
        ingredientes={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone"]}
        precio="$25.000"/>
        <div style={botonesCard}>
          <button style={{backgroundColor:"white", border:"solid 1px black", color:"black"}}>Ver Mas</button>
          <button style={{backgroundColor:"black", border:"solid 1px black"}}>🛒 Añadir</button>
        </div>
      </div>
      <div>
        <Propiedades
        imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3" 
        nombre="Pizza Pepperoni"
        ingredientes={["mozzarella, ", "pepperoni, ", "orégano", ", aceirunas "]} 
        precio="25000"/>
         <div style={botonesCard}>
          <button style={{backgroundColor:"white", border:"solid 1px black", color:"black"}}>Ver mas</button>
          <button style={{backgroundColor:"black", border:"solid 1px black"}}>🛒 Añadir</button>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default App
