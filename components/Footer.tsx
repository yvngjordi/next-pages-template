import React from 'react';
import { Text, Container, Group, Title, ActionIcon, Box, Flex } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconBrandFacebook, IconBrandMeta, IconBrandX } from '@tabler/icons-react';
import classes from './footer.module.css';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@mantine/hooks';

const TransitionWrapper = dynamic(() => import('./wrappers/TransitionWrapper'), {
  ssr: false,
});

type Link = {
  label: string;
  link: string;
};

type GroupData = {
  title: string;
  links: Link[];
};

type FooterLinksProps = {
  data: GroupData[];
  image: string;
  heading: string;
  paragraph?: string | string[];
  linkTwitter?: string;
  linkYoutube?: string;
  linkInstagram?: string;
  linkLinkedin?: string;
  linkGithub?: string;
  linkFacebook?: string;
  linkMeta?: string;
  linkX?: string;
};

export default function Footer({ data, image, heading, paragraph, linkTwitter, linkYoutube, linkInstagram, linkLinkedin, linkGithub, linkFacebook, linkMeta, linkX }: FooterLinksProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
      <TransitionWrapper transitionFrom="left">
        <div className={classes.logo} style={{textAlign: isMobile ? 'center' : 'left'}}>
          <Group gap={5}>
            <Flex direction="column" align={isMobile ? 'center' : ''} justify={isMobile ? 'center' : ''}>
              <img src={image} alt="Logo" style={{ height: '100px', width:'100px' }} />
              <Text size="xl" weight={500} style={{textAlign: isMobile ? 'center' : 'left'}}>{heading}</Text>
            </Flex>
          </Group>
          <Flex direction="column" align="center" justify="center" p="xs">
            {typeof paragraph === 'string' ? (
              <Text style={{textAlign: isMobile ? 'center' : 'left'}} size="xs" color="dimmed" className={classes.description}>{paragraph}</Text>
            ) : (
              paragraph?.map((p, index) => <Text key={index} size="xs" color="dimmed" style={{textAlign: isMobile ? 'center' : 'left'}} className={classes.description}>{p}</Text>)
            )}
          </Flex>
        </div>
      </TransitionWrapper>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <TransitionWrapper transitionFrom="bottom">
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2024 {heading} | All rights reserved.
        </Text>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          {linkTwitter && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkTwitter} target="_blank">
              <IconBrandTwitter style={{ width: 18, height: 18 }} stroke={1.5} />
            </ActionIcon>
          )}
          {linkYoutube && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkYoutube} target="_blank">
              <IconBrandYoutube style={{ width: 18, height: 18 }} stroke={1.5} />
            </ActionIcon>
          )}
          {linkInstagram && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkInstagram} target="_blank">
              <IconBrandInstagram style={{ width: 18, height: 18 }} stroke={1.5} />
            </ActionIcon>
          )}
          {linkGithub && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkGithub} target="_blank">
              <IconBrandGithub style={{ width: 18, height: 18 }} stroke={1.5} />
            </ActionIcon>
          )}
          {linkFacebook && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkFacebook} target="_blank">
              <IconBrandFacebook style={{ width: 18, height: 18 }} stroke={1.5} />
            </ActionIcon>
          )}
          {linkMeta && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkMeta} target="_blank">
              <IconBrandMeta style={{ width: 18, height: 18 }} stroke={1.5} />
            </ActionIcon>
          )}
          {linkX && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkX} target="_blank">
              <IconBrandX style={{ width: 18, height: 18 }} stroke={1.5} />
            </ActionIcon>
          )}
        </Group>
      </Container>
      </TransitionWrapper>
    </footer>
  );
}