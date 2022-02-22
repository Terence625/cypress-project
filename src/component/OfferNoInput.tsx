import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';

interface IInputProps {
  element: Document;
}

export default function OfferNoInput(props: IInputProps) {
  const [input, setInput] = useState("");

  const handleInput = () => {
    const myEvent = new CustomEvent("offerNoSubmitClick", {
      detail: input,
    });
    props.element.dispatchEvent(myEvent);
  };
  return (
    <Stack spacing={2} direction="row">
      <TextField
        id="outlined-basic"
        label="Offer No."
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="outlined" onClick={() => handleInput()}>Submit</Button>
    </Stack>
  );
}
