import React, { ReactNode } from 'react';
import { Paper } from '@mantine/core';
import dynamic from 'next/dynamic';

// Dynamically import the TransitionWrapper with SSR disabled
const TransitionWrapper = dynamic(() => import('./TransitionWrapper'), {
  ssr: false,
});

type SectionWrapperProps = {
  children: ReactNode;
  py?: number; // Padding top and bottom
  px?: number; // Padding left and right
  background?: string; // Background image or gradient
  fill?: boolean; // Whether to wrap children with a Paper component
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  py = 0,
  px = 0,
  background,
  fill = false,
}) => {
  // Define the style for the wrapper
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: py,
    paddingBottom: py,
    paddingLeft: px,
    paddingRight: px,
    background: background || 'none', // Apply background or default to none
    width: '100%', // Full width
    height: '100%', // Full height
    boxSizing: 'border-box', // Include padding in element's total width and height
  };

  // Determine the content based on the fill prop
  const content = fill ? (
    <Paper withBorder style={{ maxWidth: '100%', height: '100%', overflow: 'auto' }} p="md">
      {children}
    </Paper>
  ) : (
    children
  );

  // Wrap everything inside the TransitionWrapper
  return (
    <TransitionWrapper>
      <div style={wrapperStyle}>
        {content}
      </div>
    </TransitionWrapper>
  );
};

export default SectionWrapper;
