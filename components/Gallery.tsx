import React, { useState } from 'react';
import { Container } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface GalleryProps {
  images: string[];
  spacing: number;
  columns: number;
}

const Gallery: React.FC<GalleryProps> = ({ images, spacing = 12, columns = 3 }) => {
  const [opened, setOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
    setOpened(true);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedIndex !== null) {
      const newIndex = direction === 'prev' ? selectedIndex - 1 : selectedIndex + 1;
      if (newIndex >= 0 && newIndex < images.length) {
        setSelectedIndex(newIndex);
      }
    }
  };

  return (
    <>
      <Container my="md" style={{ columnCount: columns, columnGap: `${spacing}px` }}>
        {images.map((image, index) => (
          <div key={index} style={{ breakInside: 'avoid', marginBottom: `${spacing}px` }}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              style={{ width: '100%', height: 'auto', borderRadius: '7px', cursor: 'pointer' }}
              onClick={() => openImage(index)}
            />
          </div>
        ))}
      </Container>
      {opened && selectedIndex !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }} onClick={() => setOpened(false)}>
          <img
            src={images[selectedIndex]}
            alt={`Zoomed Image ${selectedIndex + 1}`}
            style={{ maxHeight: '80%', maxWidth: '80%', borderRadius: '7px' }}
          />
          <div style={{ position: 'absolute', top: '50%', left: 20, cursor: 'pointer' }} onClick={(e) => {e.stopPropagation(); navigate('prev')}}>
            <IconArrowLeft size={48} color="white" />
          </div>
          <div style={{ position: 'absolute', top: '50%', right: 20, cursor: 'pointer' }} onClick={(e) => {e.stopPropagation(); navigate('next')}}>
            <IconArrowRight size={48} color="white" />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
