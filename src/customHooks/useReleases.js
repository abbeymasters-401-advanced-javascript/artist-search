import { useState, useEffect } from 'react';
import { getAlbums } from '../services/artist-api';
import { useParams } from 'react-router-dom';

export const useReleases = () => {
  const [page] = useState(1);
  const [albums, setAlbums] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getReleases(page);
  }, [page]);

  const getReleases = page => {
    getAlbums(id, page)
      .then(({ releases }) => {
        setAlbums(releases);
      });
  };
  return [albums, page, id];
};
