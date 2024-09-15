import React from 'react'

function Propiedades({nombre, precio, nota, imagen, ingredientes}) {
    let estilos = {
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "solid 1px black",
        marginTop:"10px"
    };
    const estiloLinea = {
        width: '185px',
        
        backgroundColor: 'grey',
        margin: '10px 0',
      };
  return (
    <div style={estilos}>
        <img src={imagen} alt="" style={{ width: '200px', height: '200px', paddingTop: '10px' }}/>
        <h4>{nombre}</h4>

        <hr style={estiloLinea}/>
        <p>ingredientes:</p>
        <p style={{padding: "5px 20px 5px 20px"}}>{ingredientes}</p>
        <hr style={estiloLinea}/>
        <h3>precio: {precio}</h3>
    </div>
  )
}

export default Propiedades
