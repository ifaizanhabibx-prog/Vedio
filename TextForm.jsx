import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState(""); // Handlers

  
  const handleUpCheck = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoCheck = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearCheck = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges(); // Clear Selection
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Extra spaces removed!", "success");
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      {/* TEXT INPUT */}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-2">{props.heading}</h1>{" "}
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        {/* BUTTON GROUP */}
        <div className="d-flex flex-wrap gap-2 mt-2">
          <button
            className={`btn btn-${props.mode === "light" ? "primary" : "success"}`}
            onClick={handleUpCheck}
            disabled={!text}
          >
            Uppercase
          </button>

          <button
            className={`btn btn-${props.mode === "light" ? "primary" : "success"}`}
            onClick={handleLoCheck}
            disabled={!text}
          >
            Lowercase
          </button>

          <button
            className={`btn btn-${props.mode === "light" ? "primary" : "success"}`}
            onClick={handleExtraSpaces}
            disabled={!text}
          >
            Remove Spaces
          </button>

          <button
            className={`btn btn-${props.mode === "light" ? "primary" : "success"}`}
            onClick={handleCopy}
            disabled={!text}
          >
            Copy
          </button>

          <button
            className="btn btn-primary"
            onClick={handleClearCheck}
            disabled={!text}
          >
            Clear
          </button>
        </div>
      </div>
      {/* SUMMARY */}
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "gray" : "black" }}
      >
        <h2>Your text summary</h2>{" "}
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => element.length !== 0)
              .length}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text || "Nothing to preview!"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
