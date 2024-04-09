import React, { useRef, useEffect, useState } from "react";
import "./webcameraStyles.css";
    
    function WebCamera() {
        const videoRef = useRef(null);
        const photoRef = useRef(null);
        const [hasPhoto, setHasPhoto] = useState(false);
        const [cameraOpen, setCameraOpen] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({
            video: { width: 1920, height: 1080 },
        })
        .then((stream) => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    };

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        ctx.clearRect(0, 0, photo.width, photo.height);

        setHasPhoto(false);
    };

    const openCamera = () => {
        setCameraOpen(true);
    };

    const closeCamera = () => {
        let video = videoRef.current;
        let stream = video.srcObject;
        let tracks = stream.getTracks();

        tracks.forEach(function (track) {
        track.stop();
        });

        setCameraOpen(false);
    };

    useEffect(() => {
        if (cameraOpen) {
        getVideo();
        }
    }, [cameraOpen]);

    return (
        <div className="webcamera">
        <div className="camera" style={{ display: cameraOpen ? "block" : "none" }}>
            <video ref={videoRef}></video>
            <button onClick={takePhoto}>Take Photo</button>
            {hasPhoto && <button onClick={closeCamera}>Close Camera</button>}
        </div>

        <div className={"result" + (hasPhoto ? " hasPhoto" : "")}>
            <canvas ref={photoRef}></canvas>
            {hasPhoto && <button onClick={closePhoto}>Close Photo</button>}
        </div>

        {!cameraOpen && (
            <button onClick={openCamera}>Open Camera</button>
        )}
        </div>
    );
    }

    export default WebCamera;
