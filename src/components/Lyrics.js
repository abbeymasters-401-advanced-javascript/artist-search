import React from 'react';
import PropTypes from 'prop-types';
// import getLyrics from '../services/lyrics-api';
import styles from './Lyrics.css';
import { useLyrics } from '../customHooks/useLyrics';

export default function Lyrics({ match }) {
  const lyrics = useLyrics();

  return (
    <>
      <div className={styles.Lyrics}>
        <h1>Lyrics for {match.params.track}</h1>
        <h2>by {match.params.artist} on the album {match.params.album}</h2>
        <pre>{lyrics}</pre>
        {!lyrics &&
          <>
            <p>Sorry, no lyrics found!</p>
            <img src="/src/assets/giphy.gif" />
          </>}
      </div>
    </>
  );
}

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
