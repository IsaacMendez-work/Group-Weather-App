import React, { useState } from "react";
import ReactDOM from "react-dom";
function Names() {
  const [textSwitch, setTextSwitch] = useState(true);
  return (
    <div>
      <button onClick={() => setTextSwitch(!textSwitch)} type="button">
       Click
      </button>
      <Greeting text={textSwitch} />
    </div>
  );
}
function Greeting(props) {
  console.log(props.text);
  if (props.text) {
    return (
      <p>
        Hello from April, Echu, Eyke, Jonathan, and Laura!
      </p>
    );
  }
  return (
    <p>Nice to meet you!</p>
  );
}
ReactDOM.render(
  <>
    <Names />
  </>
  , document.getElementById("root"));