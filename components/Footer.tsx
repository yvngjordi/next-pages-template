import React, { CSSProperties } from 'react';
import { Text, Container, Group, Title, ActionIcon, Box, Flex, useMantineColorScheme  } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconBrandFacebook, IconBrandMeta, IconBrandX } from '@tabler/icons-react';
import classes from './footer.module.css';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@mantine/hooks';

const Transition = dynamic(() => import('./wrappers/Transition'), {
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
  data?: GroupData[];
  image?: string;
  imageDarkMode?: string;
  heading?: string;
  paragraph?: string | string[];
  style?: CSSProperties;
  linkTwitter?: string;
  linkYoutube?: string;
  linkInstagram?: string;
  linkLinkedin?: string;
  linkGithub?: string;
  linkFacebook?: string;
  linkMeta?: string;
  linkX?: string;
};

export default function Footer({
  data = [],
  image,
  imageDarkMode,
  heading,
  paragraph,
  style,
  linkTwitter,
  linkYoutube,
  linkInstagram,
  linkLinkedin,
  linkGithub,
  linkFacebook,
  linkMeta,
  linkX,
}: FooterLinksProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { colorScheme } = useMantineColorScheme();

  const effectiveImage = colorScheme === 'dark' && imageDarkMode ? imageDarkMode : image;

  const groups = data.length > 0 ? data.map((group) => {
    const links = group.links?.map((link, index) => (
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
  }) : null;

  return (
    <footer className={classes.footer} style={style}>
      <Container className={classes.inner}>
      <Transition transitionFrom="left">
        <div className={classes.logo} style={{textAlign: isMobile ? 'center' : 'left', marginLeft: isMobile ? '0px' : '1.5vw'}}>
          <Group gap={5}>
            <Flex direction="column" align={isMobile ? 'center' : ''} justify={isMobile ? 'center' : ''}>
              <Box p="sm"><img src={effectiveImage} alt="Logo" style={{ height: '100px' }} /> </Box>
              <Text size="xl" style={{textAlign: isMobile ? 'center' : 'left'}}>{heading}</Text>
            </Flex>
          </Group>
          <Flex direction="column" align="center" justify="center">
            {typeof paragraph === 'string' ? (
              <Text style={{textAlign: isMobile ? 'center' : 'left'}} size="xs" color="dimmed" className={classes.description}>{paragraph}</Text>
            ) : (
              paragraph?.map((p, index) => <Text key={index} size="xs" color="dimmed" style={{textAlign: isMobile ? 'center' : 'left'}} className={classes.description}>{p}</Text>)
            )}
          </Flex>
        </div>
      </Transition>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Transition transitionFrom="bottom">
      <Container className={classes.afterFooter}>
      {isMobile ? (
        <Flex w="100%" justify="center" align="center">
          <Text color="dimmed" size="sm">
            © 2024 {heading} | All rights reserved.
          </Text>
        </Flex>
      ) : (
          <Text color="dimmed" size="sm">
            © 2024 {heading} | All rights reserved.
          </Text>
      )}
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
          {linkLinkedin && (
            <ActionIcon size="lg" color="gray" variant="subtle" component="a" href={linkLinkedin} target="_blank">
              <IconBrandLinkedin style={{ width: 18, height: 18 }} stroke={1.5} />
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
      </Transition>
    </footer>
  );
}
