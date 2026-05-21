import React from "react";
import MuxPlayer from "@mux/mux-player-react";

interface MuxVideoProps {
  playbackId: string;
  title: string;
  poster?: string;
  className?: string;
}

export default function MuxVideo({
  playbackId,
  title,
  poster,
  className
}: MuxVideoProps) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      metadata={{ video_title: title }}
      streamType="on-demand"
      poster={poster}
      className={className}
      accentColor="#ff3333"
      style={{ aspectRatio: "16/9", width: "100%", height: "100%" }}
    />
  );
}
