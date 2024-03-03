import React, { CSSProperties } from 'react';

interface DocumentProps {
  file: string;
  fileType: 'pdf' | 'docx' | 'pptx' | 'other';
  margin?: string;
  style?: CSSProperties;
  padding?: string;
  controls?: boolean;
  width?: string;
  height?: string;
}

const Document: React.FC<DocumentProps> = ({
  file,
  fileType,
  style,
  margin = '0',
  padding = '0',
  controls = true,
  width = '100%',
  height = '400px',
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

  const embedUrl = getEmbedUrl(file, fileType);

  const containerStyle: CSSProperties = {
    margin,
    padding,
    height,
    ...style,
  };

  return (
    <div style={containerStyle}>
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

export default Document;
