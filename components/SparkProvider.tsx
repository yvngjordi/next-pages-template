import React, { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

interface SparkProviderProps {
  children: ReactNode;
}

export const SparkProvider: React.FC<SparkProviderProps> = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
};
