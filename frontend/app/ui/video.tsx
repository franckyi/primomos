"use client";
import ReactPlayer from "react-player/youtube";
import { VideoProps } from "../types/video-props";

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
