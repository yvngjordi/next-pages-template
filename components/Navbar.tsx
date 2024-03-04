import React, { CSSProperties, ReactNode } from 'react';
import { Menu, Group, Center, Burger, Container, Drawer, Title, Flex, ActionIcon, Divider, Box, useMantineColorScheme  } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconChevronDown, IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconBrandFacebook, IconBrandMeta, IconBrandX } from '@tabler/icons-react';
import classes from './navbar.module.css';
import ThemeSwitcher from './ThemeSwitcher';
import dynamic from 'next/dynamic';

const Transition = dynamic(() => import('./wrappers/Transition'), {
  ssr: false,
});

type LinkItem = {
  link: string;
  label: string;
  links?: LinkItem[];
};

type HeaderMenuProps = {
  links?: LinkItem[];
  image?: string;
  heading?: string;
  sticky?: boolean;
  theme?: boolean;
  style?: CSSProperties;
  linkTwitter?: string;
  linkYoutube?: string;
  linkInstagram?: string;
  linkLinkedin?: string;
  linkGithub?: string;
  linkFacebook?: string;
  linkMeta?: string;
  linkX?: string;
  imageDarkMode?: string;
  mobileMenu?: ReactNode; // Prop for custom mobile menu content
  onClose?: () => void; // Function to handle closing the mobile drawer
  onOpen?: () => void; // Function to handle opening the mobile drawer
};

export default function Navbar({
  links = [],
  image,
  imageDarkMode,
  heading,
  sticky = false,
  theme,
  style,
  linkTwitter,
  linkYoutube,
  linkInstagram,
  linkLinkedin,
  linkGithub,
  linkFacebook,
  linkMeta,
  linkX,
  mobileMenu,
  onClose,
  onOpen,
 }: HeaderMenuProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { colorScheme } = useMantineColorScheme();

  const effectiveImage = colorScheme === 'dark' && imageDarkMode ? imageDarkMode : image;


  const items = links?.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    return menuItems ? (
      <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
        <Menu.Target>
          <a href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
              <IconChevronDown size="0.9rem" stroke={1.5} />
            </Center>
          </a>
        </Menu.Target>
        <Menu.Dropdown>{menuItems}</Menu.Dropdown>
      </Menu>
    ) : (
      <a key={link.label} href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
        {link.label}
      </a>
    );
  }) || [];

  const defaultMobileMenu = (
    <>
      {links?.map((link) => (
        <a key={link.label} href={link.link} className={classes.link} onClick={(event) => {
          event.preventDefault();
          toggle();
        }}>
          {link.label}
        </a>
      ))}
      {(linkTwitter || linkYoutube || linkX || linkMeta || linkTwitter || linkGithub || linkLinkedin || linkFacebook) && (
      <Box h="100%">
      <Divider my={16} />
      <Flex justify="center" align="flex-end" h="100%" style={{bottom:0}}>
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
      </Flex>
      </Box>
    )}
    </>
  );

  const headerStyle: React.CSSProperties = sticky
    ? { position: 'sticky', top: 0, zIndex: 3, ...style }
    : {...style};

  return (
    <header className={classes.header} style={headerStyle}>
      <Container size="xl" w="100%" style={{zIndex:0}}>
        <div className={classes.inner}>
          <Transition transitionFrom="left">
            <Group gap={5}>
              <img src={effectiveImage} alt="Logo" style={{ height: '30px' }} />
              <Title size="h3">{heading}</Title>
            </Group>
          </Transition>
          <Transition transitionFrom="bottom">
            <Group gap={5} visibleFrom="sm">
              {items}
            </Group>
          </Transition>
          <Transition transitionFrom="right">
            <div style={{right:0}}>
              <Flex gap="xs">
              {!isMobile && (
              <>
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
              </>
            )}
                {theme && (
                  <>
                    <ThemeSwitcher />
                  </>
                )}
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
              </Flex>
            </div>
          </Transition>
        </div>
      </Container>
      <div style={{zIndex:999999}}>
      <Drawer
        opened={opened}
        onClose={toggle}
        title={heading}
        padding="md"
        size="sm"
        position="right"
        style={{zIndex:99999}}
      >
      {mobileMenu ? (
        <Box onClick={toggle} >
          {mobileMenu}
        </Box>
      ) : (
        <>
          {defaultMobileMenu}
        </>
      )}
      </Drawer>
      </div>
    </header>
  );
}
