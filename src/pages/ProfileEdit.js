import React from 'react';
import Header from './Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>profile edit AAA </p>
        {/* Aqui vão as informações usuário a ser editadas */}
        {/* rota: /profile/edit */}
      </div>
    );
  }
}
export default ProfileEdit;
