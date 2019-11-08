import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>Artist Search</h1>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </header>
  );
}
