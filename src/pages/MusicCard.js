import { PropTypes } from 'prop-types';
import React from 'react';
import '../MusicCard.css';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Header from './Header';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    listaMusicas: [],
    favoritasSalvas: [],
    loading: false,
    favoritas: [],
    curtidas: [],
  }

  async componentDidMount() {
    const { ident, favorites } = this.props;
    this.setState({ curtidas: favorites})
    const lista = await getMusics(ident);
    this.setState({ listaMusicas: lista });
  }

  addFavorite = (event) => {
    const { favoritas } = this.state;
    this.setState({ loading: true }, async () => {
      const musica = event.target.value;
      this.setState({ loading: false,
        favoritas: [...favoritas, musica],
        favoritasSalvas: await addSong(musica),
      });
    })
  }

  render() {
    const { listaMusicas, loading, favoritas } = this.state;
    /* const { favorites } = this.props; */
    const arrayNomeAlbum = listaMusicas.map((musicas) => musicas.collectionName);
    const arrayNomesArtista = listaMusicas.map((item) => item.artistName);
    // const musicas = listaMusicas.slice(1).map((item) => item.trackName);
    return (
      <>
        <Header />
        {loading ? (<Loading />)
          : (
            <div className="geral" data-testid="page-album">
              <div className="inf-art">
                <p
                  data-testid="artist-name"
                >
                  {`${arrayNomesArtista[0]}`}
                </p>
                <p
                  data-testid="album-name"
                >
                  { `${arrayNomeAlbum[0]}`}
                </p>
              </div>
              <div className="lista-musicas">
                {listaMusicas.slice(1).map((item, index) => (
                  <li
                    className="itens"
                    key={ index }
                  >
                    <input
                      className="input-fav"
                      onChange={ this.addFavorite }
                      type="checkbox"
                      value={ item.trackName }
                      checked={ favoritas.includes(item.trackName) }
                      data-testid={ `checkbox-music-${item.trackId}` }
                    />
                    <p>{`${item.trackName}`}</p>
                    <audio
                      data-testid="audio-component"
                      src={ `${item.previewUrl}` }
                      controls
                    >
                      <track kind="captions" />
                    </audio>
                  </li>))}
              </div>
            </div>)}
      </>
    );
  }
}
MusicCard.propTypes = {
  ident: PropTypes.string.isRequired,
};

export default MusicCard;
