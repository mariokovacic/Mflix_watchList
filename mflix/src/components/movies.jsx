export function Movies({ title, year, image }) {
  return (
    <>
      <div className="movieCard">
        <img src={image} alt="poster" width="90px" className="listItem" />
        <div className="listItem"> {title}</div>
        <div className="listItem">Year of release: {year}</div>
      </div>
    </>
  );
}
