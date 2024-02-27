import React from 'react';
import { Menu, Group, Center, Burger, Container, Drawer, Title, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './navbar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';
import dynamic from 'next/dynamic';

const TransitionWrapper = dynamic(() => import('./wrappers/TransitionWrapper'), {
  ssr: false,
});

type LinkItem = {
  link: string;
  label: string;
  links?: LinkItem[];
};

type HeaderMenuProps = {
  links: LinkItem[];
  image: string;
  heading: string;
  sticky: boolean;
  theme?: boolean;
};

export default function Navbar({ links, image, heading, sticky = false, theme }: HeaderMenuProps) {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  // Collapsible Menu for mobile view
  const mobileMenu = (
    <Drawer
      opened={opened}
      onClose={toggle}
      title={heading}
      padding="md"
      size="sm"
      position="right"
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            toggle();
          }}
        >
          {link.label}
        </a>
      ))}
    </Drawer>
  );

  const headerStyle = sticky ? { position: 'sticky', top: 0, zIndex: 1000 } : {};

  return (
    <header className={classes.header} style={headerStyle}>
      <Container size="md">
        <div className={classes.inner}>
        <TransitionWrapper transitionFrom="left">
          <Group gap={5}>
            <img src={image} alt="Logo" style={{ height: '30px' }} />
            <Title size="h3">{heading}</Title>
          </Group>
        </TransitionWrapper>
        <TransitionWrapper transitionFrom="bottom">
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
        </TransitionWrapper>
        <TransitionWrapper transitionFrom="right">
          <div style={{right:0}}>
          <Flex gap="lg">
          {theme && (
            <>
            <ThemeSwitcher />
            </>
          )}
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </Flex>
          </div>
        </TransitionWrapper>
        </div>
      </Container>
      {mobileMenu}
    </header>
  );
}
