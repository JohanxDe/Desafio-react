import React, {createContext, useContext, useState, useEffect} from 'react';

const UserContext = createContext();

//proveedor
export const UserProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [email, setEmail] = useState(null);
    const [token, setToken] = useState(null);

    //metodo para login
    const login = async(email, password) => {
        try{
            const response = await fetch ('/api/auth/login',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            if(response.ok){
                setEmail(data.email);
                setToken(data.token);
                setIsAuthenticated(true);
                localStorage.setItem('token', data.token);
            }
            else{
                console.error(data.error)
            }
        }
        catch (error){
            console.error("Error en el login:", error)
        }
    };

    //metodo para registrar
    const register = async (email, password) => {
        try {
            const response = await fetch('/api/auth/register', {
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
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    };

     // Método para logout
     const logout = () => {
        setEmail(null);
        setToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    // Método para obtener el perfil del usuario autenticado
    const fetchProfile = async () => {
        try {
            const response = await fetch('/api/auth/me', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            const data = await response.json();
            if (response.ok) {
                setEmail(data.email);
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.error("Error al obtener el perfil:", error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(!!true);
        }
    }, []);

    
    return (
        <UserContext.Provider value={{isAuthenticated, login, logout, email, register, fetchProfile}}>
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);