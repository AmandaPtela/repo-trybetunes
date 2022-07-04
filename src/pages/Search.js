import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Search extends React.Component {
  render() {
    const { nomeUsuario } = this.props;
    return (
      <div data-testid="page-search">
        <Header nomeUserr={ nomeUsuario } />
        <input type="text" />
        <button type="submit">Buscar</button>
        <p>Resultado PESQUISA</p>
        {/* rota: /search */}
      </div>
    );
  }
}
Search.propTypes = {
  nomeUsuario: PropTypes.string.isRequired,
};

export default Search;
