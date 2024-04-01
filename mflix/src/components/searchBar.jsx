export function Search({ setSearch }) {
  return (
    <>
      <div className="searchClass">
        <h1 className="mFlixTitle">Mflix</h1>
        <input
          type="text"
          id="search"
          className="searchInput"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your favourite movie..."
        ></input>
        <button for="search" className="searchButton" id="searchButton">
          Search
        </button>
      </div>
    </>
  );
}
