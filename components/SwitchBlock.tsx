import { Card, Group, Switch, Text, Box, Title, Divider } from '@mantine/core';
import classes from './switchblock.module.css';
import { useMediaQuery } from '@mantine/hooks';

import dynamic from 'next/dynamic';

const TransitionWrapper = dynamic(() => import('./wrappers/TransitionWrapper'), {
  ssr: false,
});

interface SwitchDataItem {
  title: string;
  description: string;
  backgroundColor?: string;
  disabled?: boolean;
}

interface SwitchBlockProps {
  data: SwitchDataItem[];
  onSwitchChange: (title: string, checked: boolean) => void;
  heading?: string;
  subheading?: string;
  paragraph?: string | string[];
  textRight?: boolean;
  textCenter?: boolean;
  textLeft?: boolean;
}

export const SwitchBlock: React.FC<SwitchBlockProps> = ({
  data = [],
  onSwitchChange,
  heading,
  subheading,
  paragraph,
  textRight,
  textCenter,
  textLeft,
}) => {

  const isMobile = useMediaQuery('(max-width: 768px)');
  let textAlign = 'left';
  if (textRight) textAlign = 'right';
  else if (textCenter) textAlign = 'center';

  const items = data.map((item) => (
    <Group justify="space-between" className={classes.item} wrap="nowrap" gap="xl" key={item.title}>
      <div>
        <Text>
          <TransitionWrapper transitionFrom="left">
            {item.title}
          </TransitionWrapper>
        </Text>
        <Text size="xs" color="dimmed">
          <TransitionWrapper transitionFrom="left">
            {item.description}
          </TransitionWrapper>
        </Text>
      </div>
      <TransitionWrapper transitionFrom="left">
      <Switch
        onLabel="ON"
        offLabel="OFF"
        className={classes.switch}
        size="lg"
        style={{ backgroundColor: item.backgroundColor ? item.backgroundColor : undefined }}
        onChange={(event) => onSwitchChange(item.title, event.currentTarget.checked)}
        disabled={item.disabled}
      />
      </TransitionWrapper>
    </Group>
  ));

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
    <TransitionWrapper transitionFrom="bottom">
    <Box style={{ flexGrow: 1, textAlign }}>
    {heading && <Title size={isMobile ? 'h1' : 'h1'} weight={500}>{heading}</Title>}
    {subheading && <Title size={isMobile ? 'h3' : 'h4'} color="dimmed">{subheading}</Title>}
    <Box p="xs">
      {typeof paragraph === 'string' ? (
        <Text>{paragraph}</Text>
      ) : (
        paragraph?.map((p, index) => <Text key={index}>{p}</Text>)
      )}
    </Box>
    </Box>
    </TransitionWrapper>
    {(heading || subheading || paragraph) &&  (
      <>
        <Divider my={8} />
      </>
    )}
    <Box p="sm">
      {items}
    </Box>
    </Card>
  );
};
