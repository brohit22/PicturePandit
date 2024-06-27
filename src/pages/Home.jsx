import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    {<Navbar />}
    <div className='home'>
      <h1>Welcome to Movie Watchlist</h1>
    </div>
  </>
);

export default Home;
