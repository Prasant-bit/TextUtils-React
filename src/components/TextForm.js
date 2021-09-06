import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!", "success");
  };

  const handleCopy = () => {
    // console.log("copy");
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleRemextraSpace = () => {
    // console.log("remove");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is removed!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <label htmlFor="myBox" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="9"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#5f5151",
            color: props.mode === "light" ? "black" : "white",
            cursor: "pointer",
          }}
        ></textarea>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleRemextraSpace}>
          Remove extra space
        </button>
        {/* <button className="primary btn-primary mx-3"></button> */}
        <div
          className="container my-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your text-summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h3>Preview</h3>
          <p>
            {text.length > 0
              ? text
              : "Enter text in above text-box to preview it"}
          </p>
        </div>
      </div>
    </>
  );
}
