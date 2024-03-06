import React from 'react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Title } from '@mantine/core';
import classes from './card.module.css';
import { useMediaQuery } from '@mantine/hooks';

interface BadgeCardProps {
  image: string;
  heading?: string;
  subheading?: string;
  paragraph?: string;
  buttonLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconClick?: () => void;
  rightIconClick?: () => void;
  badge?: string;
  tags?: any;
  style?: React.CSSProperties;
}

const BadgeCard: React.FC<BadgeCardProps> = ({
  image,
  heading,
  subheading,
  paragraph,
  buttonLabel,
  leftIcon,
  rightIcon,
  leftIconClick,
  rightIconClick,
  badge,
  tags,
  style,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Card withBorder radius="md" p="md" className={classes.card} style={style}>
      <Card.Section>
        <Image src={image} alt={heading} height={200} />
      </Card.Section>

      {heading || subheading ? (
        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
          {heading && <Title size={isMobile ? 'h1' : 'h1'}>{heading}</Title>}
          {subheading && <Title size={isMobile ? 'h3' : 'h4'} c="dimmed">{subheading}</Title>}
          {badge && <Badge size="md" variant="light">{badge}</Badge>}
          </Group>
        </Card.Section>
      ) : null}

      {paragraph && (
        <Text size="sm" mt="xs">
          {paragraph}
        </Text>
      )}

      {tags && tags.length > 0 && (
        <Card.Section className={classes.section} style={{marginTop:'1vh'}}>
          <Group gap={7} mt={5}>
            {tags.map((tag: any) => (
              <Badge key={tag} variant="light">
                {tag}
              </Badge>
            ))}
          </Group>
        </Card.Section>
      )}

      <Group mt="xs" position="apart" noWrap>
        {leftIcon && (
          <ActionIcon variant="default" radius="md" size={36} onClick={leftIconClick}>
            {leftIcon}
          </ActionIcon>
        )}
        {buttonLabel && (
          <Button radius="md" style={{ flex: 1 }}>
            {buttonLabel}
          </Button>
        )}
        {rightIcon && (
          <ActionIcon variant="default" radius="md" size={36} onClick={rightIconClick}>
            {rightIcon}
          </ActionIcon>
        )}
      </Group>
    </Card>
  );
};

export default BadgeCard;
