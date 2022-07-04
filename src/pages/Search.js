import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Search extends React.Component {
  state = {
    artistaBuscado: '',
    buttonDisabled: true,
  }

  handleInput = (event) => {
    const { artistaBuscado } = this.state;
    this.setState({ artistaBuscado: event.target.value });
    const tamanho = artistaBuscado.length;
    const min = 1;
    if (tamanho >= min) {
      this.setState({ buttonDisabled: false });
    }
    if (tamanho < min) {
      this.setState({ buttonDisabled: true });
    }
  }

  render() {
    const { nomeUsuario } = this.props;
    const { buttonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header nomeUserr={ nomeUsuario } />
        <input
          data-testid="search-artist-input"
          type="text"
          onChange={ this.handleInput }
        />
        <button
          data-testid="search-artist-button"
          type="submit"
          disabled={ buttonDisabled }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}
Search.propTypes = {
  nomeUsuario: PropTypes.string.isRequired,
};

export default Search;
