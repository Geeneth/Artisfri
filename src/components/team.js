import "./team-card.css";
import TeamCard from "./team-card";

function Team(props) {
  return (
    <div className="team-section">
      <div className="team-block">
        <TeamCard
          id={"id-1"}
          name={"Geeneth Kulatunge"}
          bio={"Founder | Software Developer"}
          image={"./images/team/geeneth-kulatunge.jpeg"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/geeneth-kulatunge-5ab6821b5/"}
        />
        <TeamCard
          id={"id-2"}
          name={"Dimantha Goonewardena"}
          bio={"Software Developer | 3D Artist"}
          image={"./images/team/empty-user.png"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/dimantha-goonewardena-376b20193/"}
        />
        
      </div>
      <div className="team-block" style={{paddingTop: "20px"}}>
        <TeamCard
          id={"id-3"}
          name={"Amantha Jayasuriya"}
          bio={"UI/UX Designer | 3D Artist"}
          image={"./images/team/empty-user.png"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/amantha-jayasuriya-5a59231ba/"}
        />
        <TeamCard
          id={"id-4"}
          name={"Sheveen Manthilake"}
          bio={"3D Artist"}
          image={"./images/team/empty-user.png"}
          link_image={"./images/team/linkedin-logo.png"}
          link={"https://www.linkedin.com/in/sheveen-manthilake-7465091bb/"}
        />
      </div>
    </div>
  );
}

export default Team;
