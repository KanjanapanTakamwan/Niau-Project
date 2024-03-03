import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 350,
  height: 580,
  facingMode: "user"
};

function CapturePic() {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  const handleCaptureScreenshot = async () => {
    try {
      const image = webcamRef.current.getScreenshot();
      setImageSrc(image);
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  return (
    <div>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        ref={webcamRef}
      />
      <button onClick={handleCaptureScreenshot}>Capture</button>
      {imageSrc && <img src={imageSrc} alt="Captured Image" />}
    </div>
  );
}

export default CapturePic;
