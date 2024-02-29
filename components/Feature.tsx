import React from 'react';
import { Paper, Image, Text, Title, Button, Box, useMantineTheme } from '@mantine/core';

interface FeatureProps {
  icon?: any;
  heading?: string;
  subheading?: string;
  paragraph?: string | string[];
  image?: string;
  variant?: string;
  button?: { color?: string; backgroundColor?: string; text?: string; onClick?: () => void; border?: string };
  button2?: { color?: string; backgroundColor?: string; text?: string; onClick?: () => void; border?: string };
  textRight?: boolean;
  textCenter?: boolean;
  textLeft?: boolean;
  list?: string[];
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  heading,
  subheading,
  paragraph,
  button,
  button2,
  textRight,
  textCenter,
  textLeft,
  list,
}) => {
  const theme = useMantineTheme();

  let textAlign: React.CSSProperties['textAlign'] = 'left';
  if (textRight) textAlign = 'right';
  else if (textCenter) textAlign = 'center';

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <Image src={icon} alt="Icon" style={{ display: 'block', margin: '0 auto' }} width={36} height={36} />;
    }
    return React.cloneElement(icon, { style: { display: 'block', margin: '0 auto' } });
  };

  return (
    <Paper p="md" style={{ textAlign: textAlign }} shadow="xs" withBorder>
      {icon && renderIcon()}
      {heading && <Title order={3} mt="sm">{heading}</Title>}
      {subheading && <Text size="sm" color="dimmed">{subheading}</Text>}
      {typeof paragraph === 'string' ? (
        <Text p="xs" size="xs">{paragraph}</Text>
      ) : (
        paragraph?.map((p, index) => <Text key={index} p="xs" size="xs">{p}</Text>)
      )}
      {list && (
        <Box component="ul">
          {list.map((item, index) => (
            <Text key={index} component="li">
              {item}
            </Text>
          ))}
        </Box>
      )}
      {button && (
        <Button
          onClick={button.onClick}
          style={{
            color: button.color,
            backgroundColor: button.backgroundColor,
            border: button.border,
            marginTop: theme.spacing.sm,
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
            marginLeft: theme.spacing.sm,
            marginTop: theme.spacing.sm,
          }}
        >
          {button2.text}
        </Button>
      )}
    </Paper>
  );
};

export default Feature;
