import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TrackCard({ trackName, artist, album }) {
  return (
    <Link to={`/artist/${artist}/album/${album}/track/${trackName}`}>{trackName}</Link>
  );
}

TrackCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
};
