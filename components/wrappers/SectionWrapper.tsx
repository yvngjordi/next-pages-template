import React, { ReactNode } from 'react';
import { Paper } from '@mantine/core';
import dynamic from 'next/dynamic';

const TransitionWrapper = dynamic(() => import('./TransitionWrapper'), {
  ssr: false,
});

type SectionWrapperProps = {
  children: ReactNode;
  py?: number;
  px?: number;
  background?: string;
  fill?: boolean;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  py = 0,
  px = 0,
  background,
  fill = false,
}) => {
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: py,
    paddingBottom: py,
    paddingLeft: px,
    paddingRight: px,
    background: background || 'none',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  };

  const content = fill ? (
    <Paper withBorder style={{ maxWidth: '100%', height: '100%', overflow: 'auto' }} p="md">
      {children}
    </Paper>
  ) : (
    children
  );

  return (
    <TransitionWrapper>
      <div style={wrapperStyle}>
        {content}
      </div>
    </TransitionWrapper>
  );
};

export default SectionWrapper;
