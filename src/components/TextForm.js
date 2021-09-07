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
    document.getSelection().removeAllRanges();
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
          <h1 className="mb-4">{props.heading}</h1>
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
      <div className="container ">
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemextraSpace}
        >
          Remove extra space
        </button>
        {/* <button className="primary btn-primary mx-3"></button> */}
        <div
          className="container my-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your text-summary</h2>
          <p>
            {
              text.split(/\s/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(/\s/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes to read
          </p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
        </div>
      </div>
    </>
  );
}
