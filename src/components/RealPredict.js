import React, { useState } from "react";
import "./RealPredict.css";
import WebCamera from "./webcamera";
import { FaCloudUploadAlt } from "react-icons/fa";

function RealPredict() {
  const [image, setImage] = useState(null);
  return (
    <div className="real_predict_container">
      <div className="cam_container">
        <WebCamera />
      </div>
      <div className="select_img_container">
        <label
          htmlFor="face"
          className="select_img_label"
          style={{ width: "100%" }}
        >
          {image ? (
            <img
              className="selected_img"
              src={URL.createObjectURL(image)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            ></img>
          ) : (
            <div
              style={{
                width: "100%",
                height: "425px",
                border: "2px dashed black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaCloudUploadAlt size={50} />
                <p>Click here to upload the image</p>
                <p>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
            </div>
          )}
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <label htmlFor="face" style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                backgroundColor: "",
                color: "",
                paddingTop: "13px",
                paddingBottom: "10px",
                fontWeight: 600,
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#7fa175"; // Change background color on hover
                e.target.style.color = "#ffffff"; // Change text color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#c6c5c5"; // Revert back to original background color when not hovered
                e.target.style.color = ""; // Revert back to original text color when not hovered
              }}
            >
              ADD IMAGE
            </div>
          </label>

          <button
            style={{
              width: "100%",
              backgroundColor: "",
              color: "",
              fontWeight: 600,
            }}
            onClick={() => {
              setImage(false);
            }}
          >
            DELETE IMAGE
          </button>
        </div>

        <input
          type="file"
          id="face"
          style={{ display: "none" }}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />

        {image && (
          <button
            style={{
              width: "100%",
              backgroundColor: "",
              color: "black",
              fontWeight: 600,
              marginTop: "6px",
            }}
          >
            PREDICT
          </button>
        )}
      </div>
    </div>
  );
}

export default RealPredict;
