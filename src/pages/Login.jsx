import React, { useState } from 'react'
import Footer from '../components/Footer'

function Login({ onLoginSuccess }) {
    const[email, setEmail] = useState("")
    const[contras, setContras] = useState("")
    const[error, setError] = useState(false) //error, para formulario que este erroneo y salga el mensaje
    const validarEntrada = (e) =>{
        e.preventDefault()

        if(email == '' || contras == ''){
            setError(("Email y/o contraseña incorrectos.")) //if para validar que los input tengan datos

            return;
        }

        if(contras.length < 6){
            setError("La contraseña debe tener al menos 6 caracteres.")

            return;
        }

        setError("");
        setEmail('');
        setContras('');

        onLoginSuccess(); //llama a la funcion para regresar a App

        alert("Login exitoso") // Mensaje de éxito
    };

    const handleLogin = () =>{
        onLoginSuccess(email);
    } 
    
    let cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        margin: '200px auto',
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    let estilos = {
        color: "#333",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"
    }

  return (  
    <>
    <div style={estilos}>
        <h1 style={{color:"black", textAlign:"center"}}>Ingresar a tu cuenta</h1>
        <h6 style={{color:'black', textAlign:"center"}}>para ver guardado en el carrito ve a total</h6>
    </div>
        <div style={cardStyle}>
            <form onSubmit={validarEntrada}>
                {error && <p className='error'>{error}</p>}
                <div>
                    <input 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder='ingrese su email'
                    style={{ marginBottom: '10px', padding: '10px', width: '90%' }}
                    />

                    <input 
                    onChange={(e) => setContras(e.target.value)}
                    value={contras}
                    type="password" 
                    placeholder='ingrese su contraseña'
                    style={{ padding: '10px', width: '90%' }}
                    />
                    <button type='submit' style={{ marginTop: '10px', padding: '10px', width: '98%', backgroundColor: 'grey', color: 'white' }} 
                    onClick={handleLogin}
                    >Entrar</button>
                </div>
            </form>
        </div>
    
    </>
  )
}

export default Login