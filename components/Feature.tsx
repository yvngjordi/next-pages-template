import React, { CSSProperties } from 'react';
import { Paper, Image, Text, Title, Button, Box, Flex, Divider, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
  style?: CSSProperties;
  stack?: boolean;
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
  style,
  stack,
  list,
}) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  let textAlign: React.CSSProperties['textAlign'] = 'left';
  if (textRight) textAlign = 'right';
  else if (textCenter) textAlign = 'center';

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <Image src={icon} alt="Icon" style={{ margin: textCenter ? '0 auto' : 'none' }} width={36} height={36} />;
    }
    return React.cloneElement(icon, { style: { margin: textCenter ? '0 auto' : 'none' } });
  };

  const containerStyle: CSSProperties = {
    textAlign: textAlign,
    ...style,
  };

  return (
    <Paper p="md" style={containerStyle} shadow="xs" withBorder>
    {!isMobile ? (
      <>
      {!textRight ? (
        <>
      <Flex justify={textCenter ? 'center' : 'left'} direction={stack ? 'column' : 'row'}>
        <Box mt="xs">
          {icon && renderIcon()}
        </Box>
        {heading && <Title order={3} ml="sm" mt="0.8vh">{heading}</Title>}
      </Flex>
      </>
    ) : (
      <>
      <Flex justify="right" direction={stack ? 'column' : 'row'}>
        {heading && <Title order={3} mr="sm" mt="0.8vh">{heading}</Title>}
        <Box mt="xs">
          {icon && renderIcon()}
        </Box>
      </Flex>
      </>
    )}
      </>
    ) : (
      <>
      {icon && renderIcon()}
      {heading && <Title order={3}>{heading}</Title>}
      </>
    )}
          <Divider my={8} />
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
