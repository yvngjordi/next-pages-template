import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider, Paper, Text, AppShell, Burger, Group, Skeleton, useMantineColorScheme } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconCode, IconPlayerPlay, IconStack2, IconVaccine, IconMap, IconApple, IconIcons, IconCube } from '@tabler/icons-react';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { blocksArray as importedBlocksArray } from '../data/blocksArray';
import { wrappersArray as importedWrappersArray } from '../data/wrappersArray';
import { gettingStartedMarkdown, usingBlocksMarkdown, usingWrappersMarkdown, usingMantineMarkdown, communityMarkdown } from '../data/baseArray';
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

const categories = {
  quickStart: [
    { id: 'getting-started', label: 'Getting started' },
    { id: 'using-blocks', label: 'Using Blocks' },
    { id: 'using-wrappers', label: 'Using Wrappers' },
    { id: 'using-mantine', label: 'Using Mantine' },
    { id: 'community', label: 'Community' },
  ],
};

const safeBlocksArray = blocksArray || [];
const safeWrappersArray = wrappersArray || [];

const defaultBlockName = safeBlocksArray.length > 0 ? safeBlocksArray[0].name : '';
const defaultWrapperName = safeWrappersArray.length > 0 ? safeWrappersArray[0].name : '';

export default function Docs() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [opened, { toggle }] = useDisclosure();
  const [selectedDoc, setSelectedDoc] = useState('');
  const [selectedType, setSelectedType] = useState('blocks');
  const { colorScheme } = useMantineColorScheme();

  const currentSyntaxTheme = colorScheme === 'dark' ? 'vscdarkplus' : 'vs';

  const selectDocument = (docName: string, type: 'blocks' | 'wrappers') => {
    setSelectedDoc(docName);
    setSelectedType(type);
  };

  const selectedArray = selectedType === 'blocks' ? safeBlocksArray : safeWrappersArray;
  const [activeCategory, setActiveCategory] = useState('getting-started');

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
              mobileMenu={
                <>
                <Wrapper
                  type="scroll"
                  height="85vh"
                  scrollbarSize={0}
                  width="100%"
                  py={20}
                  px={20}
                >
                <Box style={{border:'1px solid rgba(160,160,160,0.2)'}}>
                  <Flex w="100%" p="xs" style={{background: 'rgba(160,160,160,0.2)'}}>
                    <Text size="sm" c="dimmed" style={{transform:'translateY(1.6px)'}}><IconPlayerPlay size={17} /></Text>
                    <Text size="sm" c="dimmed" ml="5px">Quick Start</Text>
                  </Flex>
                  <Box p="xs">
                    {categories.quickStart.map((item) => (
                      <Box key={item.id} onClick={() => { setActiveCategory(item.id); setSelectedDoc(null)}} style={{ cursor: 'pointer' }}>
                        <Text c={activeCategory === item.id ? `` : 'dimmed'}>{activeCategory === item.id ? `•- ${item.label}` : `${item.label}`}</Text>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box style={{border:'1px solid rgba(160,160,160,0.2)'}} mt="sm">
                <Flex w="100%" p="xs" style={{background: 'rgba(160,160,160,0.2)'}}>
                  <Text size="sm" c="dimmed" style={{transform:'translateY(1.6px)'}}><IconCube size={17} /></Text>
                  <Text size="sm" c="dimmed" ml="5px" >Blocks</Text>
                </Flex>
                <Box p="xs">
                  {blocksArray?.map(({ name }, index) => (
                    <Box key={index} onClick={() => selectDocument(name, 'blocks')} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
                      <Text c={selectedDoc === name ? `` : 'dimmed'}>{selectedDoc === name ? `•- ${name}` : name}</Text>
                    </Box>
                  ))}
                  </Box>
                  </Box>
                  <Box style={{border:'1px solid rgba(160,160,160,0.2)'}} mt="sm">
                  <Flex w="100%" p="xs" style={{background: 'rgba(160,160,160,0.2)'}}>
                    <Text size="sm" c="dimmed" style={{transform:'translateY(1.6px)'}}><IconStack2 size={17} /></Text>
                    <Text size="sm" c="dimmed" ml="5px">Wrappers</Text>
                  </Flex>
                  <Box p="xs">
                  {wrappersArray?.map(({ name }, index) => (
                    <Box key={index} onClick={() => selectDocument(name, 'wrappers')} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
                      <Text c={selectedDoc === name ? `` : 'dimmed'}>{selectedDoc === name ? `•- ${name}` : name}</Text>
                    </Box>
                  ))}
                  </Box>
                  </Box>
                </Wrapper>
                </>
              }
            />
      </AppShell.Header>
      <AppShell.Navbar p="0" w={210}>
      <Wrapper
        type="scroll"
        height="85vh"
        scrollbarSize={0}
        width={210}
        py={20}
        px={20}
      >
      <Box style={{border:'1px solid rgba(160,160,160,0.2)'}}>
        <Flex w="100%" p="xs" style={{background: 'rgba(160,160,160,0.2)'}}>
          <Text size="sm" c="dimmed" style={{transform:'translateY(1.6px)'}}><IconPlayerPlay size={17} /></Text>
          <Text size="sm" c="dimmed" ml="5px">Quick Start</Text>
        </Flex>
        <Box p="xs">
          {categories.quickStart.map((item) => (
            <Box key={item.id} onClick={() => { setActiveCategory(item.id); setSelectedDoc(''); }} style={{ cursor: 'pointer' }}>
              <Text c={activeCategory === item.id ? `` : 'dimmed'}>{activeCategory === item.id ? `•- ${item.label}` : `${item.label}`}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      <Box style={{border:'1px solid rgba(160,160,160,0.2)'}} mt="sm">
      <Flex w="100%" p="xs" style={{background: 'rgba(160,160,160,0.2)'}}>
        <Text size="sm" c="dimmed" style={{transform:'translateY(1.6px)'}}><IconCube size={17} /></Text>
        <Text size="sm" c="dimmed" ml="5px" >Blocks</Text>
      </Flex>
      <Box p="xs">
        {blocksArray?.map(({ name }, index) => (
          <Box key={index} onClick={() => { selectDocument(name, 'blocks'); setActiveCategory('')}} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
            <Text c={selectedDoc === name ? `` : 'dimmed'}>{selectedDoc === name ? `•- ${name}` : name}</Text>
          </Box>
        ))}
        </Box>
        </Box>
        <Box style={{border:'1px solid rgba(160,160,160,0.2)'}} mt="sm">
        <Flex w="100%" p="xs" style={{background: 'rgba(160,160,160,0.2)'}}>
          <Text size="sm" c="dimmed" style={{transform:'translateY(1.6px)'}}><IconStack2 size={17} /></Text>
          <Text size="sm" c="dimmed" ml="5px">Wrappers</Text>
        </Flex>
        <Box p="xs">
        {wrappersArray?.map(({ name }, index) => (
          <Box key={index} onClick={() => selectDocument(name, 'wrappers')} style={{ cursor: 'pointer', textTransform: 'capitalize' }}>
            <Text c={selectedDoc === name ? `` : 'dimmed'}>{selectedDoc === name ? `•- ${name}` : name}</Text>
          </Box>
        ))}
        </Box>
        </Box>
      </Wrapper>
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
            {activeCategory === 'getting-started' && selectedDoc === '' && (
              <>
              <Block
                type="markdown"
                markdown={gettingStartedMarkdown}
                syntaxTheme={currentSyntaxTheme}
              />
              </>
            )}
            {activeCategory === 'using-blocks' && selectedDoc === '' && (
              <>
              <Block
                type="markdown"
                markdown={usingBlocksMarkdown}
                syntaxTheme={currentSyntaxTheme}
              />
              </>
            )}
            {activeCategory === 'using-wrappers' && selectedDoc === '' && (
              <>
              <Block
                type="markdown"
                markdown={usingWrappersMarkdown}
                syntaxTheme={currentSyntaxTheme}
              />
              </>
            )}
            {activeCategory === 'using-mantine' && selectedDoc === '' && (
              <>
              <Block
                type="markdown"
                markdown={usingMantineMarkdown}
                syntaxTheme={currentSyntaxTheme}
              />
              </>
            )}
            {activeCategory === 'community' && selectedDoc === '' && (
              <>
              <Block
                type="markdown"
                markdown={communityMarkdown}
                syntaxTheme={currentSyntaxTheme}
              />
              </>
            )}
          {selectedArray
            .filter(({ name }) => name === selectedDoc)
            .map(({ name, description, content, content2, props }, index) => (
              <Flex key={index} direction="column" w={isMobile ? '85vw' : '77vw'}>
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
              <Box w={isMobile ? '85vw' : '77vw'}>
                <Wrapper
                  type="scroll"
                  scrollbarSize={0}
                  height={500}
                  py={0}
                  px={0}
                >
                <Block
                  type="markdown"
                  syntaxTheme={currentSyntaxTheme}
                  markdown={content}
                />
                </Wrapper>
              </Box>
                <Block
                  type="table"
                  data={props}
                  headers={headers}
                />
                </Wrapper>
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
