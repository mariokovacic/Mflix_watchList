export function MovieWatchList({ title, year, image }) {
  return (
    <>
      <div className="watchListCard">
        <div className="listItem">{title}</div>
        <div className="listItem">{year}</div>
        <img src={image} alt="poster" width="60px" className="listItem" />
      </div>
    </>
  );
}
