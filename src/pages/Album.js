import React from 'react';
import { PropTypes } from 'prop-types';
import MusicCard from './MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  state = {
    favoritas: [],
  }

  async componentDidMount() {
    this.setState({ favoritas: await getFavoriteSongs() });
  }

  render() {
    const { location } = this.props;
    const { favoritas } = this.state;
    const Id = location.pathname.split('/');
    return (
      <MusicCard favorites={ favoritas } ident={ Id[2] } />
    );
  }
}

Album.propTypes = {
  location: PropTypes.string.isRequired,
};
export default Album;
