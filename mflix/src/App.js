import { useEffect, useState } from 'react';
import { Search } from './components/searchBar';
import { Movies } from './components/movies';
import { List } from './components/List';
import './App.css';


const KEY = '3e890b2a';

function App() {

  const [newData, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [myWatchList, addToWatchList] = useState([]);




  // FETCH THE DATA FROM OMDB API
  useEffect(() => {

    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data.Search))

  }, [search, newData])



  // ADD A MOVIE TO YOUR WATCHLIST.......................

  function addTo(movie) {

    addToWatchList([...myWatchList, movie])

  }

  // CLEAR THE LIST ..............
  function clearList() {

    addToWatchList([])

  }

  return (
    <div className="App">

      {/* SEARCH COMPONENT */}
      <Search search={search} setSearch={setSearch} />
      <div className='movieSearch'>
        <div className='doneSearch'>
          {/* HERE YOU CREATE COMPONENTS FOR EACH OF THE ARRAY ELEMENT - THE FETCHED API DATA  */}
          {newData?.map((movie) => <div className='movies'><Movies movie={movie} setData={setData} newData={newData} key={movie.imdbID} title={movie.Title} year={movie.Year} image={movie.Poster} addToWatchList={addToWatchList} myWatchList={myWatchList} />
            <button className="addTo" onClick={() => addTo(movie)}>
              ADD TO WATCHLIST
            </button>
          </div>
          )}
        </div>


        {/* YOUR WATCHLIST COMPONENT */}
        <List myWatchList={myWatchList} clearList={clearList} />


      </div>


    </div>


  );
}

export default App;
