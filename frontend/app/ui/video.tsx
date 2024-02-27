"use client";
import ReactPlayer from "react-player/youtube";

interface VideoProps {
  src: string;
}
function Video({ src }: VideoProps) {
  return (
    <ReactPlayer
      url={src}
      width="100%"
      height="100%"
      controls
      stopOnUnmount={true}
    />
  );
}

export default Video;
