import { MovieWatchList } from "./watchList";

export function List({ myWatchList, clearList }) {
  return (
    <>
      <div className="theList">
        <h1 className="theListTitle">My Watch List</h1>

        {myWatchList.length === 0 && (
          <h2 className="pickAmovie">Pick a movie...</h2>
        )}

        {myWatchList.length > 0 && (
          <button
            className="clearList"
            onClick={() => {
              clearList();
            }}
          >
            Clear the list
          </button>
        )}

        {myWatchList?.map((film) => (
          <div className="watchList">
            <MovieWatchList
              title={film.Title}
              year={film.Year}
              image={film.Poster}
            />
          </div>
        ))}
      </div>
    </>
  );
}
