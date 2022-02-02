import React, { useState } from "react";
import { Container, Button } from "./UploaderStyles";
import progress from "../assets/progress.gif";
const Uploader = ({ setImageUrl, errorLink }) => {
  const [file, setFile] = useState(null);
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(300);
  const [loading, setLoading] = useState(false);
  let uploadImage = async (encodedImage) => {
    await fetch(`${process.env.REACT_APP_APIURL}/upload`, {
      method: "POST",
      body: JSON.stringify({
        photoUrl: encodedImage,
        height,
        width,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setImageUrl(data.objectUrl);
          setLoading(false);
        } else {
          setImageUrl(errorLink);
          setLoading(false);
        }
      })
      .catch((error) => {
        setImageUrl(errorLink);
        setLoading(false);
      });
  };
  const handleClick = () => {
    setLoading(true);
    setImageUrl("");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  };
  return (
    <Container>
      <div className="row">
        <label>Select File</label>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </div>
      <div className="row">
        <label>Enter width</label>
        <input
          type="number"
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
        <label>Enter height</label>
        <input
          type="number"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
      </div>
      <Button onClick={handleClick}>Upload Image</Button>
      <div className="row">
        {loading && (
          <img src={progress} alt="loading-gif" style={{ margin: "auto" }} />
        )}
      </div>
    </Container>
  );
};

export default Uploader;
