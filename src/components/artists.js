import "./artists.css";

function Artists() {
  return (
    <div className="artists">
      <h3 className="artists-title">ABOUT US</h3>
      <p className="artists-content">
        Artisfri is a novelty platform for artists and creators to obtain free
        art assets to use in their projects or simply collect. We are far from
        reaching our full potential yet, but we are working hard to make it
        happen.
      </p>

      <div className="artists-info">
        <div id="file-format-info" className="info-tiles">
          <h3 className="artists-subtitle">FILE FORMAT</h3>
          <p>
            We have decided to use the file format FBX when presenting our
            assets. This is a standard file type that most 3D modelling software
            supports.
          </p>
          <img src="./images/fbx-logo-2.png" alt="file-format" width={140} />
        </div>
        <div id="polygon-info" className="info-tiles">
          <img src="./images/polygon-info-2.png" alt="file-format" width={140} />
          <p>
            Our shapes use a generally low amount of polygon. This is done to
            keep our products affordable and useable for all users.
          </p>
          <h3 className="artists-subtitle">POLYGONS</h3>
        </div>
        <div id="artist-general-info" className="info-tiles">
        <h3 className="artists-subtitle">ARTISTS</h3>
          <p>
            All of artists are experienced and have a general knowledge of 3D
            modeling. They keep consistent with their individual style and each
            artist's products differ from the other.
          </p>
          <img src="./images/general-artist-info-2.png" alt="file-format" width={140} />
        </div>
      </div>
    </div>
  );
}

export default Artists;
