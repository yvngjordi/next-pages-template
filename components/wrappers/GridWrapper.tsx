import React from 'react';
import { SimpleGrid, Box, Title, Text, Button, Divider, useMantineTheme } from '@mantine/core';

interface GridProps {
  heading?: string;
  subheading?: string;
  paragraph?: string | string[];
  button?: { color?: string; backgroundColor?: string; text?: string; onClick?: () => void; border?: string };
  button2?: { color?: string; backgroundColor?: string; text?: string; onClick?: () => void; border?: string };
  textRight?: boolean;
  textCenter?: boolean;
  textLeft?: boolean;
  columns: number;
  spacing?: string | number;
  verticalSpacing?: string | number;
  children: React.ReactNode;
}

const GridWrapper: React.FC<GridProps> = ({
  heading,
  subheading,
  paragraph,
  button,
  button2,
  textRight,
  textCenter,
  textLeft,
  columns,
  spacing,
  verticalSpacing,
  children,
}) => {
  const theme = useMantineTheme();

  let textAlign = 'left';
  if (textRight) textAlign = 'right';
  else if (textCenter) textAlign = 'center';

  return (
    <Box>
      <Box style={{ textAlign, marginBottom: theme.spacing.md }}>
        {heading && <Title>{heading}</Title>}
        {subheading && <Text color="dimmed">{subheading}</Text>}
        {typeof paragraph === 'string' ? (
          <Text>{paragraph}</Text>
        ) : (
          paragraph?.map((p, index) => <Text key={index}>{p}</Text>)
        )}
      </Box>
      <Divider my={8} />
      <SimpleGrid
        mt="md"
        mb="md"
        cols={{ base: 1, md: 3, lg: columns }}
        spacing={spacing}
        verticalSpacing={verticalSpacing}
      >
        {children}
      </SimpleGrid>
      <Divider my={8} />
      <Box style={{ display: 'flex', justifyContent: 'center', marginTop: theme.spacing.md }}>
        {button && (
          <Button
            onClick={button.onClick}
            style={{
              color: button.color,
              backgroundColor: button.backgroundColor,
              border: button.border,
              marginRight: button2 ? theme.spacing.sm : 0,
            }}
          >
            {button.text}
          </Button>
        )}
        {button2 && (
          <Button
            onClick={button2.onClick}
            style={{
              color: button2.color,
              backgroundColor: button2.backgroundColor,
              border: button2.border,
            }}
          >
            {button2.text}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default GridWrapper;
