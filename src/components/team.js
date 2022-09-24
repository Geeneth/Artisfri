import "./team-card.css";
import TeamCard from "./team-card";

function Team(props) {
  return (
    <div className="team-section">
      <div className="team-block">
        <TeamCard
          name={"Geeneth Kulatunge"}
          bio={"Founder | Software Developer"}
          image={"./images/team/geeneth-kulatunge.jpeg"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/geeneth-kulatunge-5ab6821b5/"}
        />
        {/* <TeamCard
          name={"Geeneth Kulatunge"}
          bio={"Software Developer for Artisfri Loves turtles!"}
          image={"./images/team/geeneth-kulatunge.jpeg"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/geeneth-kulatunge-5ab6821b5/"}
        /> */}
        
      </div>
      <div className="team-block" style={{paddingTop: "20px"}}>
        <TeamCard
          name={"Amantha Jayasuriya"}
          bio={"3D Artist | UI/UX Designer"}
          image={"./images/team/empty-user.png"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/amantha-jayasuriya-5a59231ba/"}
        />
        <TeamCard
          name={"Dimantha Goonewardena"}
          bio={"3D Artist | Software Developer"}
          image={"./images/team/empty-user.png"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/dimantha-goonewardena-376b20193/"}
        />
      </div>
    </div>
  );
}

export default Team;
