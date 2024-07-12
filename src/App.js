import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import YoutubePlayer from './components/YoutubePlayer';
import LocationList from './components/LocationList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <CardList />
      <YoutubePlayer />
      <LocationList />
      <Footer />
    </div>
  );
}

export default App;
