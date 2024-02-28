import React from 'react';

type GoogleMapProps = {
  address: string;
  title?: string;
  height?: string | number;
  width?: string | number;
  frame?: string | number;
  scrolling?: boolean;
  borderRadius?: number | string;
};

export const GoogleMap: React.FC<GoogleMapProps> = ({ address, title = "", height, width, frame, scrolling, borderRadius }) => {
  const query = encodeURIComponent(`${address} (${title})`);

  const src = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${query}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div style={{ width: '100%' }}>
      <iframe
        width={width || '100%'}
        height={height || '600'}
        frameBorder={frame || '0'}
        scrolling={scrolling}
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
