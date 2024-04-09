import React, { useRef, useEffect, useState } from "react";
import "./webcameraStyles.css";

function WebCamera() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({
            video: {
            width: "100%",
            height: "100%",
            },
        })
        .then((stream) => {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        })
        .catch((err) => {
            console.error("error:", err);
        });
    };

    const takePhoto = () => {
        let video = videoRef.current;
        let canvas = photoRef.current;
        
        canvas.width = video.offsetWidth;
        canvas.height = video.offsetHeight;
        
        let context = canvas.getContext("2d");
        context.translate(canvas.width, 0); // Move the context origin to the right side of the canvas
        context.scale(-1, 1); // Flip the context horizontally
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setHasPhoto(true);
        };

    const closePhoto = () => {
        let photo = photoRef.current;
        let context = photo.getContext("2d");

        context.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);
    };

    useEffect(() => {
        getVideo();
    }, []);

    return (
        <>
        <div className="camera-container">
            <div className="camera" style={{ marginBottom: "30px" }}>
            <video ref={videoRef} className="video-cam"></video>
            <button
                onClick={takePhoto}
                style={{
                width: "100%",
                backgroundColor: "",
                color: "",
                transition: "background-color 0.3s"
                }}
            >
                SNAP
            </button>
            </div>

            <div className={"result" + (hasPhoto ? " hasPhoto" : "")}>
            <canvas
                ref={photoRef}
                style={{ width: "100%", height: "100%" }}
            ></canvas>
            {hasPhoto && (
                <>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button
                    onClick={closePhoto}
                    style={{
                        width: "100%",
                        backgroundColor: "",
                        color: "",
                    }}
                    >
                    CLOSE
                    </button>
                    <button
                    style={{
                        width: "100%",
                        backgroundColor: "",
                        color: "",
                    }}
                    >
                    PREDICT
                    </button>
                </div>
                </>
            )}
            </div>
        </div>
        </>
    );
    }

export default WebCamera;