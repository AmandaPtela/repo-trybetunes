import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import Header from './Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    inputArtistaBuscado: '',
    artistaBuscado: '',
    buttonDisabled: true,
    resultadoBusca: '',
    // showList: false,
    // semResultado: false,
  }

  handleInput = (event) => {
    this.setState({ inputArtistaBuscado: event.target.value }, () => {
      const { inputArtistaBuscado } = this.state;
      const tamanho = inputArtistaBuscado.length;
      const min = 2;
      if (tamanho >= min) {
        this.setState({ buttonDisabled: false });
      }
      if (tamanho < min) {
        this.setState({ buttonDisabled: true });
      }
    });
  }

  cliquePesquisa = async () => {
    const { inputArtistaBuscado } = this.state;
    this.setState({ artistaBuscado: inputArtistaBuscado });
    const busca = await searchAlbumsAPI(inputArtistaBuscado).then((data) => data);
    this.setState({
      resultadoBusca: busca,
      inputArtistaBuscado: '',
    });
  }

  render() {
    const { nomeUsuario } = this.props;
    const { buttonDisabled, resultadoBusca,
      artistaBuscado, inputArtistaBuscado } = this.state;
    return (
      <div data-testid="page-search">
        <Header nomeUserr={ nomeUsuario } />
        <input
          data-testid="search-artist-input"
          type="text"
          value={ inputArtistaBuscado }
          onChange={ this.handleInput }
        />
        <button
          data-testid="search-artist-button"
          type="submit"
          onClick={ this.cliquePesquisa }
          disabled={ buttonDisabled }
        >
          Pesquisar
        </button>
        {(resultadoBusca.length < 1
        ) ? (<p>Nenhum álbum foi encontrado</p>
          ) : (
            <div>
              <p>
                {`Resultado de álbuns de: ${artistaBuscado}`}
              </p>
              {resultadoBusca.map((item, index) => (
                <li key={ index }>
                  <Link
                    data-testid={ `link-to-album-${item.collectionId}` }
                    to={ `/album/${item.collectionId}` }
                  >
                    {item.collectionName}
                  </Link>
                </li>))}
            </div>)}
      </div>
    );
  }
}
Search.propTypes = {
  nomeUsuario: PropTypes.string.isRequired,
};

export default Search;
