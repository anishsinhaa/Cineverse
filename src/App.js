import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieListCards from './components/MovieListCards/MovieListCards';
import Movie from './components/MovieDetail/Movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='movie/:id' element={<Movie/>}/>
          <Route path='movies/:type' element={<MovieListCards/>}/>
          <Route path='/*' element={<h1>Error Page</h1>}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
