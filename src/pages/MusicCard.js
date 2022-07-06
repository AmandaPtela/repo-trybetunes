import { PropTypes } from 'prop-types';
import React from 'react';
import '../MusicCard.css';
import getMusics from '../services/musicsAPI';
import Header from './Header';

class MusicCard extends React.Component {
  state = {
    listaMusicas: [],
  }

  async componentDidMount() {
    // const { id } = this.state;
    const { ident } = this.props;
    const lista = await getMusics(ident);
    this.setState({ listaMusicas: lista });
  }

  render() {
    const { listaMusicas } = this.state;
    const arrayNomeAlbum = listaMusicas.map((musicas) => musicas.collectionName);
    const arrayNomesArtista = listaMusicas.map((item) => item.artistName);
    // const musicas = listaMusicas.slice(1).map((item) => item.trackName);

    return (
      <>
        <Header />
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
            {listaMusicas.slice(1).map((item) => (
              <li
                className="itens"
                key={ item.collectionId }
              >
                {`${item.trackName}
                  `}
                <audio
                  data-testid="audio-component"
                  src={ `${item.previewUrl}` }
                  controls
                >
                  <track kind="captions" />
                </audio>
              </li>))}
          </div>
        </div>
      </>
    );
  }
}
MusicCard.propTypes = {
  ident: PropTypes.string.isRequired,
};

export default MusicCard;
