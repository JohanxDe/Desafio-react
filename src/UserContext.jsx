import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [email, setEmail] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const navigate = useNavigate();

    // Método para login
    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', { // Cambia la URL si es necesario
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                setEmail(data.email);
                setToken(data.token);
                setIsAuthenticated(true);
                localStorage.setItem('token', data.token);
                navigate('/');  // Redirigir al inicio después del login
            } else {
                console.error(data.error);
                throw new Error(data.error);  // Lanzar error para manejarlo en el componente Login
            }
        } catch (error) {
            console.error("Error en el login:", error.message);
            return error.message;
        }
    };

    // Método para registrar
    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                setEmail(data.email);
                setToken(data.token);
                setIsAuthenticated(true);
                localStorage.setItem('token', data.token);
                navigate('/');  // Redirigir al inicio después del registro
            } else {
                console.error(data.error);
                throw new Error(data.error);
            }
        } catch (error) {
            console.error("Error en el registro:", error.message);
            return error.message;
        }
    };

    // Método para logout
    const logout = () => {
        setEmail(null);
        setToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        navigate('/login'); // Redirigir al login después del logout
    };

    // Método para obtener el perfil del usuario autenticado
    const fetchProfile = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/me', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            const data = await response.json();
            if (response.ok) {
                setEmail(data.email);
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error("Error al obtener el perfil:", error.message);
        }
    };

    // Comprobar token en localStorage al cargar el componente
    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
            fetchProfile();
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ isAuthenticated, login, logout, email, register, fetchProfile }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext)