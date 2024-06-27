import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store.js';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Watchlist from './pages/WatchList.jsx';
import ShareWatchlist from './pages/ShareWatchList.jsx';
import './assets/styles/main.scss';

const App = () => (
  <>
    {/* <h1>Hello! Pitcure Pandit</h1> */}

    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/share' element={<ShareWatchlist />} />
        </Routes>
      </Router>
    </Provider>
  </>
);

export default App;
