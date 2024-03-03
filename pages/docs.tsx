import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider, Paper, Text, AppShell, Burger, Group, Skeleton, useMantineColorScheme } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconCode, IconVaccine, IconMap, IconApple, IconIcons, IconCube } from '@tabler/icons-react';
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
  { link: '#', label: 'Home' },
  { link: '#', label: 'About' },
  {
    link: '#1',
    label: 'Services',
    links: [
      { link: '#', label: 'Marketing' },
      { link: '#', label: 'Graphic design' },
    ],
  },
  { link: '#', label: 'Contact' },
];

const switches = [
  { title: "Enable Notifications", description: "Turn on notifications to stay updated.", backgroundColor: "#f0f2f5", disabled: false },
  { title: "Dark Mode", description: "Enable dark mode for a better night-time reading experience.", disabled: false }
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

const tableData = [
  { id: '1', name: 'John Doe', email: 'john@doe.com', role: 'Administrator' },
  { id: '2', name: 'Jane Doe', email: 'jane@doe.com', role: 'User' }
];

const tableHeaders = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' }
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
  const { colorScheme } = useMantineColorScheme();

  const currentSyntaxTheme = colorScheme === 'dark' ? 'vscdarkplus' : 'vs';

  const selectDocument = (docName: string, type: 'blocks' | 'wrappers') => {
    setSelectedDoc(docName);
    setSelectedType(type);
  };

  const selectedArray = selectedType === 'blocks' ? safeBlocksArray : safeWrappersArray;

  const markdownData = "## Welcome to Our Platform\nHere's some **Markdown** content with `code` snippets and more.\n```js\nconsole.log('Hello, world!');\n```"
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
            <Text c={selectedDoc === name ? `black` : 'dimmed'}>{selectedDoc === name ? `•- ${name}` : name}</Text>
          </Box>
        ))}
        <Text mt="sm" size="lg" style={{fontWeight:'bold'}}>Wrappers</Text>
        <Divider my={8} />
        {wrappersArray?.map(({ name }, index) => (
          <Box key={index} onClick={() => selectDocument(name, 'wrappers')} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
            <Text c={selectedDoc === name ? `black` : 'dimmed'}>{selectedDoc === name ? `•- ${name}` : name}</Text>
          </Box>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Box mt="-4.5vh" ml={isMobile ? '0px' : '-100'}>
        <Box p="sm">
            <Wrapper
              type="section"
              py={40}
              px={isMobile ? 10 : 20}
              fill
            >
          {selectedArray
            .filter(({ name }) => name === selectedDoc)
            .map(({ name, description, content, content2, props }, index) => (
              <Flex key={index} direction="column" w={isMobile ? '75vw' : '78vw'}>
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
                  headers={tableHeaders}
                  data={name === 'switches' ? switches : name === 'table' ? tableData : data}
                  heading={`${name.charAt(0).toUpperCase() + name.slice(1)} Title`}
                  paragraph="This is some example paragraph text for this block type. Copy the code in the tab above!"
                  image={name === 'navbar' || name === 'footer' ? "logo-sb.png" : name !== 'markdown' ? "https://via.placeholder.com/1024" : undefined}
                  linkLinkedin="x"
                  linkX="x"
                  linkGithub="x"
                  icon={<IconCube size={22}/>}
                  textCenter
                  background="rgb(3, 121, 234)"
                  theme
                  sticky
                  file="https://example.com/document.pdf"
                  fileType="pdf"
                  margin="10px"
                  padding="20px"
                  syntaxTheme="vs"
                  markdown={markdownData}
                  controls={true}
                  video="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  autoplay={false}
                  loop={true}
                  muted={false}
                  button={{ text: "Learn More", onClick: () => console.log("Clicked!"), color: "white", backgroundColor: "blue" }}
                  button2={{ text: "Contact Us", onClick: () => console.log("Contact Clicked!"), color: "blue", backgroundColor: "transparent", border: "1px solid blue" }}
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
                  syntaxTheme={currentSyntaxTheme}
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
                  syntaxTheme={currentSyntaxTheme}
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
