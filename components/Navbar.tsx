import React from 'react';
import { Menu, Group, Center, Burger, Container, Drawer, Title, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
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
};

export default function Navbar({ links = [], image, heading, sticky = false, theme }: HeaderMenuProps) {
  const [opened, { toggle }] = useDisclosure(false);

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

  const mobileMenu = (
    <Drawer opened={opened} onClose={toggle} title={heading} padding="md" size="sm" position="right">
      {links?.map((link) => (
        <a key={link.label} href={link.link} className={classes.link} onClick={(event) => {
          event.preventDefault();
          toggle();
        }}>
          {link.label}
        </a>
      ))}
    </Drawer>
  );

  const headerStyle: React.CSSProperties = sticky ? { position: 'sticky', top: 0, zIndex: 1000 } : {};

  return (
    <header className={classes.header} style={headerStyle}>
      <Container size="xl" w="100%">
        <div className={classes.inner}>
          <Transition transitionFrom="left">
            <Group gap={5}>
              <img src={image} alt="Logo" style={{ height: '30px' }} />
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
              <Flex gap="lg">
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
      {mobileMenu}
    </header>
  );
}
