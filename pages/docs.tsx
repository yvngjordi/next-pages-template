import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider, Paper, Text, AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconCode, IconVaccine, IconMap, IconApple, IconIcons } from '@tabler/icons-react';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { blocksArray as importedBlocksArray } from '../data/blocksArray';
import { wrappersArray as importedWrappersArray } from '../data/wrappersArray';
import React, { useState } from 'react';

interface BlockItem {
  name: string;
  content: string;
  description?: string;
  content2?: string;
  props?: any[];
}

const blocksArray: BlockItem[] = importedBlocksArray as BlockItem[];
const wrappersArray: BlockItem[] = importedWrappersArray as BlockItem[];

const tabs = [
  { value: 'component', label: 'Component' },
  { value: 'code', label: 'Code' },
  { value: 'props', label: 'Props' },
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

const headers = [
  { key: 'propName', label: 'Prop' },
  { key: 'propType', label: 'Type' },
  { key: 'propDescription', label: 'Description' }
];

const safeBlocksArray = blocksArray || [];
const safeWrappersArray = wrappersArray || [];

const defaultBlockName = safeBlocksArray.length > 0 ? safeBlocksArray[0].name : '';
const defaultWrapperName = safeWrappersArray.length > 0 ? safeWrappersArray[0].name : '';

export default function Docs() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [opened, { toggle }] = useDisclosure();
  const [selectedDoc, setSelectedDoc] = useState(defaultBlockName);
  const [selectedType, setSelectedType] = useState('blocks');

  const selectDocument = (docName: string, type: 'blocks' | 'wrappers') => {
    setSelectedDoc(docName);
    setSelectedType(type);
  };

  const selectedArray = selectedType === 'blocks' ? safeBlocksArray : safeWrappersArray;

  return (
    <>
      <AppShell
        header={{ height: 86 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      >
      <AppShell.Header>
        <Block
          type="banner"
          heading="We just released version 1.0!"
          background="#0379EA"
          color="white"
          icon={<IconCode size={18}/>}
        />
            <Block
              type="navbar"
              links={links}
              image="logo-sb.png"
              heading="Sparkblock UI"
              sticky
              theme
            />
      </AppShell.Header>
      <AppShell.Navbar p="md" w={200}>
        <Text size="lg" style={{fontWeight:'bold'}}>Blocks</Text>
        <Divider my={8} />
        {blocksArray?.map(({ name }, index) => (
          <Box key={index} onClick={() => selectDocument(name, 'blocks')} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
            <Text c="dimmed">{name}</Text>
          </Box>
        ))}
        <Text mt="sm" size="lg" style={{fontWeight:'bold'}}>Wrappers</Text>
        <Divider my={8} />
        {wrappersArray?.map(({ name }, index) => (
          <Box key={index} onClick={() => selectDocument(name, 'wrappers')} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
            <Text c="dimmed">{name}</Text>
          </Box>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Box mt="-4.5vh" ml={isMobile ? '0px' : '-100'}>
        <Box p="sm">
            <Wrapper
              type="section"
              py={40}
              px={isMobile ? 20 : 20}
              fill
            >
          {selectedArray
            .filter(({ name }) => name === selectedDoc)
            .map(({ name, description, content, content2, props }, index) => (
              <Flex key={index} direction="column" w={isMobile ? '75vw' : '70vw'}>
                <Block
                  type="section"
                  variant="C"
                  heading={`${name.charAt(0).toUpperCase() + name.slice(1)} Block`}
                  paragraph={description}
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
                  py="0"
                  px="0"
                  width="100%"
                >
                <Block
                  type={name}
                  links={links}
                  data={data}
                  heading={`${name.charAt(0).toUpperCase() + name.slice(1)} Title`}
                  paragraph="This is some example paragraph text for this block type. Copy the code in the tab above!"
                  image={name === 'navbar' || name === 'footer' ? "logo-sb.png" : "https://via.placeholder.com/1024"}
                  linkLinkedin="x"
                  linkX="x"
                  linkGithub="x"
                  icon={<IconIcons size={22}/>}
                  textCenter
                  theme
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
                <Block
                  type="table"
                  data={props}
                  headers={headers}
                />
                </Wrapper>
                <Block
                  type="markdown"
                  markdown={content2}
                />
              </Flex>
            ))}
          </Wrapper>
          </Box>
          <Block
            type="footer"
            data={data}
            image="logo-sb.png"
            heading="Sparkblock UI"
            paragraph={["The fastest and simplest UI kit in the world."]}
          />
        </Box>
      </AppShell.Main>
    </AppShell>

    </>
  );
}
