import React from 'react'
import { useState } from 'react'
import Footer from './Footer';


function Register({ onRegisterSuccess }) {
    const [nombre, setNombre] = useState('');
    const [contra, setContra] = useState('');
    const [recontra, setRecontra] = useState('');
    const [error, setError] = useState('');
  
    const validarInput = (e) => {
      e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
      if (nombre === '' || contra === '') {
        setError('El nombre y la contraseña son obligatorios');
        return;
      }
  
      if (contra.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres');
        return;
      }
  
      if (recontra !== contra) {
        setError('Las contraseñas no coinciden');
        return;
      }
  
      // Si todo está correcto, limpiamos el formulario y llamamos a la función onRegisterSuccess
      setError('');
      setNombre('');
      setContra('');
      setRecontra('');
      onRegisterSuccess(); // Llamar la función para regresar a App
    };
    let cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        margin: '170px auto',
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
      <div style={estilos} >
        <h1 style={{color:"black", textAlign:"center"}}>Registrate!</h1>
        <h6 style={{color:"black", textAlign:"center"}}>para ver descuentos exclusivos</h6>
    </div>
      <div style={cardStyle}>
            <form onSubmit={validarInput}>
            {/* Mostrar mensaje de error si existe */}
            {error && <p className='error'>{error}</p>}
            <div>
                <input
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                type='text'
                placeholder='Ingrese e-mail'
                />
                <input
                onChange={(e) => setContra(e.target.value)}
                value={contra}
                type='password'
                placeholder='Ingrese contraseña'
                />
                <input
                onChange={(e) => setRecontra(e.target.value)}
                value={recontra}
                type='password'
                placeholder='Repita la contraseña'
                />
                <button type='submit'>Registrar</button>
            </div>
            </form>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Register;