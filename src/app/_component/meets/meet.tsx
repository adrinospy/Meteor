"use client"
import { handleClientScriptLoad } from 'next/script';
import { useEffect, useState, useRef } from 'react';

export default function GetMediastream() {
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
    const userVideoRef = useRef<HTMLVideoElement | null>(null);

    const constraints = {
        'video': true,
        'audio': true
    }
    useEffect(() => {
        const handleRoomCreated = () => {
            navigator.mediaDevices
                .getUserMedia({
                    audio: true,
                    video: true,
                })
                .then((stream) => {
                    setMediaStream(stream)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        handleRoomCreated();
    }
    )

    const videoController = () => {
        if (mediaStream) {
            const tracks = mediaStream.getVideoTracks()
            tracks.forEach(track => { track.enabled = !track.enabled; })
            userVideoRef.current!.srcObject = mediaStream
        }
    };

    const audioController = () => {
    }

    return (
        <>
            <button className="p-10" onClick={videoController}>Video</button>
            <button className="p-10" onClick={audioController}>Audio</button>
            <video autoPlay muted ref={userVideoRef} />
        </>
    );
}
