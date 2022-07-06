import React from 'react';
import { PropTypes } from 'prop-types';
import MusicCard from './MusicCard';

class Album extends React.Component {
  render() {
    const { location } = this.props;
    const Id = location.pathname.split('/');
    return (
      <MusicCard ident={ Id[2] } />
    );
  }
}

Album.propTypes = {
  location: PropTypes.string.isRequired,
};
export default Album;
