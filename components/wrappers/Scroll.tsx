// ScrollAreaWrapper.tsx
import React from 'react';
import { ScrollArea, ScrollAreaProps } from '@mantine/core';

interface ScrollProps extends ScrollAreaProps {
  width?: string | number;
  height?: string | number;
  py?: string | number;
  px?: string | number;
}

const Scroll: React.FC<ScrollProps> = ({
  width,
  height,
  py,
  px,
  children,
  ...scrollAreaProps
}) => {
  const paddingY = typeof py === 'number' ? `${py}px` : py;
  const paddingX = typeof px === 'number' ? `${px}px` : px;

  return (
    <ScrollArea scrollbarSize={6} scrollHideDelay={500} {...scrollAreaProps} style={{ width, height, padding: `${paddingY} ${paddingX}` }}>
      {children}
    </ScrollArea>
  );
};

export default Scroll;
