import React from 'react';

interface EmbedProps {
  src: string;
  type: 'pdf' | 'docx' | 'pptx' | 'other';
  margin?: string;
  padding?: string;
  controls?: boolean;
  width?: string;
  height?: string;
}

const Embed: React.FC<EmbedProps> = ({
  src,
  type,
  margin = '0',
  padding = '0',
  controls = true,
  width = '100%',
  height = '80vh',
}) => {
  const getEmbedUrl = (fileSrc: string, fileType: string): string => {
    switch (fileType) {
      case 'pdf':
        return fileSrc;
      case 'docx':
      case 'pptx':
        return `https://docs.google.com/gview?url=${fileSrc}&embedded=true`;
      case 'other':
        return fileSrc;
      default:
        return fileSrc;
    }
  };

  const embedUrl = getEmbedUrl(src, type);

  return (
    <div style={{ margin, padding, height }}>
      <iframe
        src={embedUrl}
        width={width}
        height="100%"
        frameBorder="0"
        style={{ border: 'none' }}
        allowFullScreen={controls}
      ></iframe>
    </div>
  );
};

export default Embed;
