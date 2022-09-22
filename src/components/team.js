import "./artist-card.css";
import ArtistCard from "./artist-card";

function Team(props) {
  return (
    <div className="team-section">
      <div className="team-block">
        <ArtistCard
          name={"Geeneth Kulatunge"}
          bio={"Software Developer for Artisfri. Loves turtles!"}
          image={"./images/artists/geeneth-kulatunge.jpeg"}
          link_image={"./images/artists/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/geeneth-kulatunge-5ab6821b5/"}
        />
        <ArtistCard
          name={"Geeneth Kulatunge"}
          bio={"Software Developer for Artisfri. Loves turtles!"}
          image={"./images/artists/geeneth-kulatunge.jpeg"}
          link_image={"./images/artists/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/geeneth-kulatunge-5ab6821b5/"}
        />
        
      </div>
      <div className="team-block" style={{paddingTop: "20px"}}>
        <ArtistCard
          name={"Geeneth Kulatunge"}
          bio={"Software Developer for Artisfri. Loves turtles!"}
          image={"./images/artists/geeneth-kulatunge.jpeg"}
          link_image={"./images/artists/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/geeneth-kulatunge-5ab6821b5/"}
        />
        <ArtistCard
          name={"Geeneth Kulatunge"}
          bio={"Software Developer for Artisfri. Loves turtles!"}
          image={"./images/artists/geeneth-kulatunge.jpeg"}
          link_image={"./images/artists/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/geeneth-kulatunge-5ab6821b5/"}
        />
      </div>
    </div>
  );
}

export default Team;
