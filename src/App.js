import React, { useState } from "react";
import Uploader from "./components/Uploader";
import { Container } from "./AppStyles";
const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const errorImageLink =
    "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_1280.png";
  return (
    <Container>
      <h1>Image Uploader</h1>
      <Uploader setImageUrl={setImageUrl} errorLink={errorImageLink} />
      <div>
        {imageUrl !== "" && (
          <div className="upload-box">
            {imageUrl === errorImageLink ? (
              <div className="upload-unsuccess">
                <p>Upload Unsuccessful</p>
                <img src={imageUrl} alt="img" />
              </div>
            ) : (
              <div className="upload-success">
                <h4>Upload Successful</h4>
                <a href={imageUrl}>{imageUrl}</a>
                <img src={imageUrl} alt="img" />
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default App;
