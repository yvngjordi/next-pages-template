import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconCode, IconVaccine, IconMap, IconApple } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { markdownArray } from '../data/markdownArray';

const tabs = [
  { value: 'component', label: 'Component' },
  { value: 'code', label: 'Code' },
];

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
    title: 'Company',
    links: [
      { label: 'About', link: '#' },
      { label: 'Contact', link: '#' },
      { label: 'Terms & Conditions', link: '#' },
      { label: 'Privacy Policy', link: '#' },
    ],
  },
  {
    title: 'Elements',
    links: [
      { label: 'Navbar', link: '#' },
      { label: 'Footer', link: '#' },
      { label: 'Feature', link: '#' },
      { label: 'Section', link: '#' },
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
          py={40}
          px={isMobile ? 20 : 100}
          fill
        >
          {markdownArray.map(({ content, name }, index) => (
            <Flex key={index} direction="column" w={isMobile ? '90vw' : '70vw'}>
              <Block
                type="section"
                variant="C"
                heading={`Element ${name}`}
                paragraph="Description of element"
              />
              <Divider my={8} />
              <Wrapper
                type="tabs"
                tabs={tabs}
                color="blue"
                defaultValue="component"
              >
              <Wrapper
                type="scroll"
                height={500}
                py={20}
                px={20}
              >
              <Block
                type={name}
                links={links}
                data={data}
                heading={`${name} element`}
                paragraph="This is some example paragraph text for this block type. Copy the code in the tab above!"
                image="logo.PNG"
                linkTwitter="x"
                linkInstagram="x"
                linkFacebook="x"
                linkLinkedin="x"
                linkX="x"
                linkGithub="x"
                linkMeta="x"
                linkYoutube="x"
              />
              </Wrapper>
              <Wrapper
                type="scroll"
                height={500}
                py={20}
                px={20}
              >
              <Block
                type="markdown"
                markdown={content}
              />
              </Wrapper>
              </Wrapper>
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
