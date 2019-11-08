import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTracks } from '../services/artist-api';

export const useRecordings = () => {
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTracks(id)
      .then(({ recordings }) => {
        setTracks(recordings);
      });
  }, [id]);

  return [tracks, id];
};
