import React from 'react';
import PropTypes from 'prop-types';
import TrackCard from '../components/Track-Card';
import styles from './TrackDeck.css';
import { useRecordings } from '../customHooks/useRecordings';

export default function TrackDeck({ match }) {
  const tracks = useRecordings();

  const tracksDom = tracks[0].map(track => {
    return (
      <li key={track.id} >
        <TrackCard album={match.params.album} trackName={track.title} artist={match.params.artist} />
      </li>
    );
  });

  return (
    <>
      <section className={styles.TrackDeck}>
        <h2>{match.params.album}</h2>
        <h3>by: {match.params.artist}</h3>
        <ul>
          {tracksDom}
        </ul>
      </section>
    </>
  );
}

TrackDeck.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
