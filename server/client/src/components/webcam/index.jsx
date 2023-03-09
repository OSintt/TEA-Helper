import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import ReturnButton from "./ReturnButton";
import "../styles/css/webcam.css";

export const WebcamSample = () => {
  const navigate = useNavigate();

  const videoElement = useRef(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const stopCam = () => {
    let stream = videoElement.current.stream;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    return navigate("/");
  };

  return (
    <div>
      <div className="webcam-container">
        <div className="button-wrapper">
          <ReturnButton fn={stopCam} />
        </div>
        <div className="webcam-wrapper">
          {
            <Webcam
              audio={false}
              ref={videoElement}
              videoConstraints={videoConstraints}
            />
          }
        </div>
      </div>
    </div>
  );
};
