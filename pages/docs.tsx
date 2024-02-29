import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconCode, IconVaccine, IconMap, IconApple } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { markdownArray } from '../data/markdownArray';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  {
    link: '#1',
    label: 'Resources',
    links: [
      { link: '/resource-1', label: 'Resource 1' },
      { link: '/resource-2', label: 'Resource 2' },
    ],
  },
  { link: '/contact', label: 'Contact' },
];

const data = [
  {
    title: 'Sitemap',
    links: [
      { label: 'About', link: '#' },
      { label: 'Contact', link: '#' },
      { label: 'Resource 1', link: '#' },
      { label: 'Resource 2', link: '#' },
    ],
  },
];

export default function Docs() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
    <Box>
    <Block
      type="banner"
      heading="We just released version 1.0!"
      background="navy"
      color="white"
    />
        <Block
          type="navbar"
          links={links}
          image="logo.PNG"
          heading="Sparkblock UI"
          sticky
        />
        <Box mt="-18.6vh">
        <Wrapper
          type="section"
          py={120}
          px={isMobile ? 20 : 100}
          fill
        >
        <Flex w="60vw">
        <Block
          type="markdown"
          markdown={markdownArray}
          heading="Element name"
          paragraph="Description of element"
        />
        </Flex>
        </Wrapper>
        </Box>
        <Block
          type="footer"
          data={data}
          image="logo.PNG"
          heading="Sparkblock UI"
          paragraph={["Providing compassionate and comprehensive pediatric care in Ancaster, Ontario. Our team is dedicated to supporting your child's health and well-being."]}
        />
      </Box>
    </>
  );
}
