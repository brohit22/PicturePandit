import React, { useState } from 'react';

const ShareWatchlist = () => {
  const [email, setEmail] = useState('');
  const handleShare = () => {
    // Logic to share the watchlist via email or other means
  };

  return (
    <div className='share-watchlist'>
      <h2>Share Your Watchlist</h2>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Friend's Email"
      />
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default ShareWatchlist;
