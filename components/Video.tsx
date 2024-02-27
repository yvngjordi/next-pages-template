import React from 'react';
import { Flex } from '@mantine/core';

interface VideoProps {
  src: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  width?: string;
  height?: string;
  className?: string;
  padding?: string | number;
  margin?: string | number;
}

const Video: React.FC<VideoProps> = ({
  src,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  poster = '',
  width = '100%',
  height = '80vh',
  className = '',
  padding = '0px',
  margin = '20px',
}) => {
  const isYouTubeLink = /youtu(be\.com|\.be)/i.test(src);

  const getVideoUrl = (): string => {
    if (isYouTubeLink) {
      const videoId = src.split(/v=|\/v\/|youtu\.be\//)[1].split(/[?&]/)[0];
      const baseYouTubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? '1' : '0'}&loop=${loop ? '1' : '0'}&playlist=${videoId}`;
      return baseYouTubeUrl;
    }
    return src;
  };

  return (
    <Flex justify="center" align="center" >
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
          src={src}
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
    </Flex>
  );
};

export default Video;
