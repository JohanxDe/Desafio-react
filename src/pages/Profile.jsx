import React from 'react';
import { useUser } from '../UserContext';


const Profile = () => {
    const { email, logout } = useUser();

    return (
        <div className="profile-container">
            <h2>Perfil</h2>
            <div className="profile-info">
                <p>Email: {email}</p>
            </div>
            <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
        </div>
    );
};
export default Profile;