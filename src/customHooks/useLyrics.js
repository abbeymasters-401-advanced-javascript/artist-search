import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getLyrics from '../services/lyrics-api';

export const useLyrics = () => {
  const [lyrics, setLyrics] = useState('');
  let { artist, track } = useParams();

  useEffect(() => {
    getLyrics(artist, track)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
      });
  }, [artist, track]);

  return [lyrics, artist, track];
};
