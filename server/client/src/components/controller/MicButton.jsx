import { IconButton } from "@mui/material";
import { BsMicMute, BsMic } from "react-icons/bs";
import { useState } from "react";

export const MicButton = () => {
  const [mic, toggleMic] = useState(true);

  return (
    <div className="bottom-button-container">
      <IconButton
        color="primary"
        aria-label="Mic"
        onClick={() => toggleMic(!mic)}
      >
        {mic ? <BsMicMute /> : <BsMic />}
      </IconButton>
    </div>
  );
};
