import { Box, Button, Image, Paper, Text, Divider, Title, Flex, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import dynamic from 'next/dynamic';

const TransitionWrapper = dynamic(() => import('./wrappers/TransitionWrapper'), {
  ssr: false,
});

interface SectionProps {
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

const Section: React.FC<SectionProps> = ({
  heading,
  subheading,
  paragraph,
  image,
  variant,
  button,
  button2,
  textRight,
  textCenter,
  textLeft,
  list,
}) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  let textAlign: React.CSSProperties['textAlign'] = 'left';
  if (textRight) textAlign = 'right';
  else if (textCenter) textAlign = 'center';

  switch (variant) {
    case 'A':
      return (
        <Box p="md" style={{ margin: 'auto', maxWidth: 1200 }}>
        <TransitionWrapper blur transitionFrom="top">
        <Flex direction={isMobile ? 'column' : 'row-reverse'}>
        {image && (
          <Flex align="center" justify="center" w="100%">
            {image && <Image src={image} alt="" style={{ width: isMobile ? '90vw' : '20vw', borderRadius: theme.radius.md }} />}
          </Flex>
        )}
        <Flex justify="center" align="center" w="100%">
          <Box style={{ flexDirection: 'column', gap: theme.spacing.md, textAlign: textAlign }}>
            {heading && <Title size={isMobile ? 'h1' : 'h1'}>{heading}</Title>}
            <Divider my={4} mt={8} />
            {subheading && <Title size={isMobile ? 'h3' : 'h4'} c="dimmed">{subheading}</Title>}
          <Box p="xs">
            {typeof paragraph === 'string' ? (
              <Text >{paragraph}</Text>
            ) : (
              paragraph?.map((p, index) => <Text key={index} >{p}</Text>)
            )}
          </Box>
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
                ml={theme.spacing.sm}
              >
                {button2.text}
              </Button>
            )}
          </Box>
          </Flex>
          </Flex>
          </TransitionWrapper>
        </Box>
  );

case 'B':
  return (
    <Box style={{ margin: 'auto', maxWidth: 1200, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: theme.spacing.md }}>
    <TransitionWrapper transitionFrom="left">
    {isMobile && image && (
      <Box p="lg">
        <Image p="xl" src={image} alt="" style={{ width: '100%', borderRadius: '100%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
      </Box>
    )}
    </TransitionWrapper>
    <Flex>
    <TransitionWrapper transitionFrom="left">
      {!isMobile && image && (
        <Box p="lg">
          <Image src={image} alt="" style={{ width: '100%', borderRadius: '100%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', alignSelf: 'center' }} />
        </Box>
      )}
    </TransitionWrapper>
    <TransitionWrapper transitionFrom="right" blur>
      <Box style={{ flexGrow: 1, textAlign: textAlign }} p="md">
        {heading && <Title size={isMobile ? 'h1' : 'h1'}>{heading}</Title>}
        {subheading && <Title size={isMobile ? 'h3' : 'h4'} c="dimmed">{subheading}</Title>}
      <Box p="xs">
        {typeof paragraph === 'string' ? (
          <Text>{paragraph}</Text>
        ) : (
          paragraph?.map((p, index) => <Text key={index}>{p}</Text>)
        )}
      </Box>
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
            ml={theme.spacing.sm}
          >
            {button2.text}
          </Button>
        )}
      </Box>
      </TransitionWrapper>
    </Flex>
    </Box>
  );

case 'C':
  return (
    <Box>
    <TransitionWrapper transitionFrom="left">
    {isMobile && image && (
      <Box p="xl">
        <Image src={image} alt="" style={{ width: '100%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
      </Box>
    )}
    </TransitionWrapper>
    <Flex>
    <TransitionWrapper transitionFrom="left">
      {!isMobile && image && (
          <Box p="xl">
            <Image src={image} alt="" style={{ width: '33vw', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', alignSelf: 'center' }} />
          </Box>
      )}
    </TransitionWrapper>
    <TransitionWrapper transitionFrom="bottom" blur>
      <Box p="sm" style={{ flexGrow: 1, textAlign: textAlign }}>
        {heading && <Title size={isMobile ? 'h1' : 'h1'}>{heading}</Title>}
        {subheading && <Title size={isMobile ? 'h3' : 'h4'} c="dimmed">{subheading}</Title>}
      <Box p="xs">
        {typeof paragraph === 'string' ? (
          <Text>{paragraph}</Text>
        ) : (
          paragraph?.map((p, index) => <Text key={index}>{p}</Text>)
        )}
      </Box>
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
            ml={theme.spacing.sm}
          >
            {button2.text}
          </Button>
        )}
      </Box>
      </TransitionWrapper>
      </Flex>
    </Box>
  );

default:
  return (
    <Box p="md" style={{ margin: 'auto', maxWidth: 1200 }}>
    <TransitionWrapper blur transitionFrom="top">
    <Flex direction={isMobile ? 'column' : 'row-reverse'}>
    {image && (
      <Flex align="center" justify="center" w="100%">
        {image && <Image src={image} alt="" style={{ width: isMobile ? '90vw' : '20vw', borderRadius: theme.radius.md }} />}
      </Flex>
    )}
    <Flex justify="center" align="center" w="100%">
      <Box style={{ flexDirection: 'column', gap: theme.spacing.md, textAlign }}>
        {heading && <Title size={isMobile ? 'h1' : 'h1'}>{heading}</Title>}
        <Divider my={4} mt={8} />
        {subheading && <Title size={isMobile ? 'h3' : 'h4'} c="dimmed">{subheading}</Title>}
      <Box p="xs">
        {typeof paragraph === 'string' ? (
          <Text >{paragraph}</Text>
        ) : (
          paragraph?.map((p, index) => <Text key={index} >{p}</Text>)
        )}
      </Box>
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
            ml={theme.spacing.sm}
          >
            {button2.text}
          </Button>
        )}
      </Box>
      </Flex>
      </Flex>
      </TransitionWrapper>
    </Box>
  );
}
};

export default Section;
