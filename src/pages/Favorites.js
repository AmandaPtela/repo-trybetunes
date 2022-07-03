import React from 'react';
import Header from './Header';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>profile edit</p>
        {/* Aqui vão os albuns */}
        {/* rota: /favorites */}
      </div>
    );
  }
}
export default Favorites;
