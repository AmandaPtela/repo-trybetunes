import React from 'react';
import Header from './Header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <p>Albuns</p>
        <p>profile edit</p>
        {/* Aqui vão os albuns */}
        {/* rota: /album/:id */}
      </div>
    );
  }
}
export default Album;
