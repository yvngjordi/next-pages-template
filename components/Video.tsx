import React, { CSSProperties } from 'react';
import { Paper } from '@mantine/core';

interface VideoProps {
  video: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  width?: string;
  style?: CSSProperties;
  height?: string;
  className?: string;
  padding?: string | number;
  margin?: string | number;
}

const Video: React.FC<VideoProps> = ({
  video,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  poster = '',
  style,
  width = '100%',
  height = '80vh',
  className = '',
  padding = '0px',
  margin = '20px',
}) => {
  const isYouTubeLink = /youtu(be\.com|\.be)/i.test(video);

  const getVideoUrl = (): string => {
    if (isYouTubeLink) {
      const videoId = video.split(/v=|\/v\/|youtu\.be\//)[1].split(/[?&]/)[0];
      const baseYouTubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? '1' : '0'}&loop=${loop ? '1' : '0'}&playlist=${videoId}`;
      return baseYouTubeUrl;
    }
    return video;
  };

  return (
    <Paper p="sm" style={style}>
    <div className={className} style={{ width, height, borderRadius:'10px', padding, margin }}>
      {isYouTubeLink ? (
        <iframe
          src={getVideoUrl()}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded video"
          width="100%"
          height="100%"
        ></iframe>
      ) : (
        <video
          src={video}
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          poster={poster}
          width="100%"
          height="100%"
        />
      )}
    </div>
    </Paper>
  );
};

export default Video;
