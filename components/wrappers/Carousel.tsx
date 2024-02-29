import React, { useState, useEffect, ReactNode } from 'react';
import { Paper } from '@mantine/core';

type CarouselWrapperProps = {
  children: ReactNode[];
  seconds?: number;
  fill?: boolean;
};

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  children,
  seconds = 10,
  fill = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, seconds * 1000);

    return () => clearInterval(interval);
  }, [totalSlides, seconds]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Paper withBorder={fill} style={{ width: '100%', overflow: 'hidden' }} p="sm">
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div style={{ width: '100%', flexShrink: 0 }} key={index}>
            {child}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px' }}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            style={{
              border: 'none',
              background: activeIndex === index ? 'black' : 'lightgray',
              borderRadius: '50%',
              width: '15px',
              height: '15px',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Paper>
  );
};

export default CarouselWrapper;
