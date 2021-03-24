import React, { useState } from "react";

function Footer() {
  const [textSwitch, setTextSwitch] = useState(true);
  return (
    <div className="btn">
      <button onClick={() => setTextSwitch(!textSwitch)} type="button">
       Click me!
      </button>
      <Greeting text={textSwitch} />
    </div>
  );
}

function Greeting(props) {
  if (props.text) {
    return (
      <div>
     <img style={{float : 'left', width :'100px', height : 'auto', overflowWrap : 'break-word', wordWrap : 'break-word'}} src={'https://media1.giphy.com/media/l0jExU1nw7KvVtxudC/source.gif'} alt='sun rising from smiling cloud'/>
      <p style={{color : 'white'}}>
        Hello from: April, Echu, Eyke Jonathan, and Laura!
      </p>
      </div>
    );
  }
  return (
    <div>
       <img style={{float : 'right', width :'100px', height : 'auto', overflowWrap : 'break-word', wordWrap : 'break-word'}} src={'https://media3.giphy.com/media/TercUvhYRPkmkDUNZk/source.gif'} alt='sun rising with cloud'/>
    <p style={{color : 'white', paddingLeft : '100px'}}>Nice to meet you!</p>
    </div>
  );
}

export default Footer;