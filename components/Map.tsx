import React, { CSSProperties } from 'react';

type MapProps = {
  address: string;
  title?: string;
  height?: string | number;
  width?: string | number;
  frame?: string | number;
  style?: CSSProperties;
  borderRadius?: number | string;
};

const Map: React.FC<MapProps> = ({ address = "old Toronto, Canada", title = "Map Title", height, width, frame, borderRadius, style }) => {
  const query = encodeURIComponent(`${address} (${title})`);

  const containerStyle: CSSProperties = {
    width: '100%',
    ...style,
  };

  const src = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${query}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div style={containerStyle}>
      <iframe
        width={width || '100%'}
        height={height || '600'}
        frameBorder={frame || '0'}
        marginHeight={0}
        marginWidth={0}
        src={src}
        allowFullScreen
        style={{ borderRadius: borderRadius }}
        >
      </iframe>
    </div>
  );
};

export default Map;
