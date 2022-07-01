import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <p>Albuns</p>
        {/* Aqui vão os albuns */}
        {/* rota: /album/:id */}
      </div>
    );
  }
}
export default Album;
