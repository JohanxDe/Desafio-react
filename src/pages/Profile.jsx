import React, { useEffect } from 'react';
import { useUser } from '../UserContext';

const Profile = () => {
    const { email, logout, fetchProfile } = useUser();

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return (
        <div>
            <h2>Perfil</h2>
            {email ? <p>Email: {email}</p> : <p>Cargando perfil...</p>}
            <button onClick={logout}>Cerrar sesión</button>
        </div>
    );
};

export default Profile;