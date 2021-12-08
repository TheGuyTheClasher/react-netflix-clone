import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Nav />
      {/* banner */}
      <Banner />

      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTrending} />
      <Row title="Action movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
