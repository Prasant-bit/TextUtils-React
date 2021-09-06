import React, { useState } from "react";

export default function TextArea(props) {
  const handleOnClick = () => {
    console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Your Text");
  return (
    <div>
      <div className="mb-3 my-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
