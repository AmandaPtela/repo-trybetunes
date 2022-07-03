import React from 'react';
import Header from './Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p> Perfil user</p>
        { /* Aqui vão as informações usuário */}
        { /* rota: /profile */}
      </div>
    );
  }
}
export default Profile;
