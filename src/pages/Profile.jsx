import React from 'react';

const Profile = ({ email }) => {
  return (
    <div className='cartaPerfil'>
      <h1>Perfil del usuario</h1>
      <p>Correo electrónico: {email}</p>
    </div>
  );
};

export default Profile;