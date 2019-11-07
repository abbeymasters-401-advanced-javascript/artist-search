import React, { useState, useEffect } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import { getArtists } from '../services/artist-api';
import styles from './Home.css';

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = event => {
    event.preventDefault();
    getArtistsByPage(page);
  };

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleBack = () => {
    const newPage = Math.max(1, page - 1);
    getArtistsByPage(newPage);
    setPage(newPage);
  };

  const handleNext = () => {
    getArtistsByPage(page + 1);
    setPage(page + 1);
  };

  const getArtistsByPage = page => {
    getArtists(searchTerm, page)
      .then(({ artists }) => {
        setArtists(artists);
      });
  };
  return (
    <div className={styles.Home}>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
      <ArtistDeck
        artists={artists}
        handleBack={handleBack}
        handleNext={handleNext} />
    </div>
  );
}
