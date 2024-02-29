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
          {markdownArray.map(({ content, name }, index) => (
            <Flex key={index} direction="column" w="100%">
              <Block
                type="section"
                variant="C"
                heading={`Element ${name}`}
                paragraph="Description of element"
              />
              <Divider my={8} />
              <Block
                type={name}
                links={links}
                data={data}
                heading={`${name} element ${index + 1}`}
                paragraph="This is some example text for this block type"
                image="logo.PNG"
              />
              <Block
                type="markdown"
                markdown={content}
              />
            </Flex>
          ))}
        </Wrapper>
        </Box>
        <Block
          type="footer"
          data={data}
          image="logo.PNG"
          heading="Sparkblock UI"
          paragraph={["The fastest and simplest UI kit in the world."]}
        />
      </Box>
    </>
  );
}
