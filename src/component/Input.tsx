import React, { useState } from "react";

interface IInputProps {
  element: Document;
}

export default function Input(props: IInputProps) {
  const [input, setInput] = useState("");

  const handleInput = () => {
    const myEvent = new CustomEvent("inputClick");
    props.element.dispatchEvent(myEvent);
  };

  return (
    <>
      <input data-cy="input-box" type="text" onChange={(e) => setInput(e.target.value)} />
      <button id="elem" data-cy="input-button" onClick={() => handleInput()}>
        Input
      </button>
    </>
  );
}
