import React from "react";

const photoPaths = [
  "OIP.jpg", "OIP (1).jpg", "OIP (2).jpg", "OIP (3).jpg", "OIP (4).jpg", "OIP (5).jpg", "OIP (6).jpg"
];

const Photos = () => (
  <div className="w3-padding-64 w3-content" id="photos">
    <h2 className="w3-text-light-grey">My Photos of visiting places</h2>
    <hr style={{ width: "200px" }} className="w3-opacity" />
    <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
      <div className="w3-half">
        {photoPaths.slice(0, 3).map((file, idx) => <img key={idx} src={`/images/${file}`} style={{ width: "100%" }} alt="place" />)}
      </div>
      <div className="w3-half">
        {photoPaths.slice(3).map((file, idx) => <img key={idx} src={`/images/${file}`} style={{ width: "100%" }} alt="place" />)}
      </div>
    </div>
  </div>
);

export default Photos;