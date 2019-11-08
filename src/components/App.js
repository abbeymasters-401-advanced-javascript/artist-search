import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import AlbumDeck from '../containers/Album-Deck';
import TrackDeck from '../containers/Track-Deck';
import Lyrics from '../components/Lyrics';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artist/:artist/album/:album/track/:track" component={Lyrics} />
          <Route path="/artist/:artist/album/:album/:id" component={TrackDeck} />
          <Route path="/artist/:artist/:id" component={AlbumDeck} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

