import React, { useState } from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
//import Propiedades from './components/Propiedades';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Pizza from './pages/Pizza';
import { Navigate } from 'react-router-dom';
import { CartProvider } from './CartContex';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('')
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    
    

    const handleLoginSuccess = () => {
        setIsAuthenticated(true); // Marca al usuario como autenticado
        navigate('/'); // Redirige a Home
    };

    // Función para manejar logout
    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/');
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
                <CartProvider>
                    <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess}/>}/>
                        <Route path='/register' element={<Register onRegisterSuccess={handleLoginSuccess} />}/>
                        <Route path='/profile' element={isAuthenticated ? <Profile email={userEmail} /> 
                        :
                        <Navigate to="/login" />} 
    />
                        <Route path='/pizza/:id' element={<Pizza/>} />
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                    <Footer />
                </CartProvider>
            </div>
        </>
    );
}

export default App;