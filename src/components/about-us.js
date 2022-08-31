import "./about-us.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h3 className="about-us-title">ABOUT US</h3>
      <h3 className="about-us-content">
        Artisfri is a platform for artists and creators to purchase affordable art
        assets to use in their projects. What sets us apart is that we do not
        use the system of all users being able to upload assets. We have a panel
        of certified artists that create the models, this assures consistent
        quality and effective customer support. We are far from reaching our
        full potential yet, however, we are working hard to get there and
        therefore our website will constantly be updated.
      </h3>

      <div className="about-us-info">
        <div id="file-format-info" className="info-tiles">
          <h3 className="about-us-subtitle">FILE FORMAT</h3>
          <p>
            We use the file format FBX when presenting our
            assets. This is a standard file type that most 3D modelling software
            supports.
          </p>
          <img src="./images/fbx-logo-2.png" alt="file-format" width={140} />
        </div>
        <div id="polygon-info" className="info-tiles">
          <img
            src="./images/polygon-info-2.png"
            alt="file-format"
            width={140}
          />
          <p>
            Our models use a generally low amount of polygon. This is done to
            keep our products affordable and effortlessly useable. It also
            allows our artits to produce a larger number of assets.
          </p>
          <h3 className="about-us-subtitle">POLYGONS</h3>
        </div>
        <div id="artist-general-info" className="info-tiles">
          <h3 className="about-us-subtitle">ARTISTS</h3>
          <p>
            All of artists are experienced and have extensive knowledge of 3D
            modeling. Each artist's products differ from the other and they keep
            consistent with their individual style.
          </p>
          <img
            src="./images/general-artist-info-2.png"
            alt="file-format"
            width={140}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
