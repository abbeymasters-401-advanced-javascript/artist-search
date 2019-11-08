import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ArtistCard({ id, name }) {
  const linkPath = `/artist/${name}/${id}`;
  return (
    <div>
      <h2>
        <Link to={linkPath}>{name}</Link>
      </h2>
    </div>
  );
}

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};


