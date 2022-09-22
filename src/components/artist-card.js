import "./artist-card.css";

function ArtistCard(props) {
  return (
    <div className="artist-card">
      <img className="artist-image" src={props.image} alt={props.name} />
      <div className="artist-card-info">
        <h2 className="artist-name">{props.name}</h2>
        <p className="artist-bio">{props.bio}</p>
      </div>
      <a
          className="artist-link"
          target={"_blank"}
          href={props.link}
        >
          <img className="link-image" src={props.link_image} alt={props.name} />
        </a>
    </div>
  );
}

export default ArtistCard;
