import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import { Link } from 'react-router-dom';

export default function AlbumCard({ title, release_id, artist }) {
  const imgUrl = `http://coverartarchive.org/release/${release_id}/front`;
  return (
    <div>
      <Link to={`/artist/${artist}/album/${title}/${release_id}`}>
        <Img src={[imgUrl, '/src/assets/album-placeholder.jpg']} alt={'cover art'} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

AlbumCard.propTypes = {
  release_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
