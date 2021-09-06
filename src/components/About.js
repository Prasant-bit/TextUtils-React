import React, { useState } from "react";

export default function About() {
  const handleEnable = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid aqua",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  return (
    <>
      <div className="container my-4">
        <div className="card" style={myStyle}>
          <h1 className="card-header">About Us</h1>
          <div className="card-body">
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa esse cumque commodi rerum eos adipisci, excepturi sequi rem
              maxime repellendus quod itaque aperiam dolorem voluptas sunt
              officiis in vitae eum inventore maiores delectus harum? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
              labore ex tempore, corporis nobis doloribus nemo facilis
              repellendus sed eius impedit eveniet iure doloremque sit iusto in
              asperiores. Sint officia explicabo, ullam provident vel voluptatum
              doloribus earum, nemo nostrum sed atque a, sequi corrupti neque
              magni! Quae ea a distinctio!
            </p>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <button className="btn btn-primary" onClick={handleEnable}>
          {btnText}
        </button>
      </div>
    </>
  );
}
