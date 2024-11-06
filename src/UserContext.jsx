import React, {createContext, useContext, useState, useEffect} from 'react';

const UserContext = createContext();

//proveedor
export const UserProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(!!true);
        }
    }, []);


    //Metodo para simular inicio de sesion
    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        console.log("usuario verificado", isAuthenticated)
    }
    const logout = () =>{
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }
    
    return (
        <UserContext.Provider value={{isAuthenticated, login, logout}}>
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);