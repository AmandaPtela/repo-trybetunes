import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <input type="text" />
        <Link to="/search">Buscar</Link>
        {/* rota: /search */}
      </div>
    );
  }
}
export default Search;
