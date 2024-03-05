import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider, Paper, Text, AppShell, Burger, Group, Skeleton, useMantineColorScheme } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconStar, IconStars, IconCode, IconPlayerPlay, IconStack2, IconVaccine, IconMap, IconApple, IconIcons, IconCube } from '@tabler/icons-react';
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
  { link: '#', label: 'Documentation' },
  {
    link: '#1',
    label: 'Partners',
    links: [
      { link: 'https://sparkengine.ai', label: 'Spark Engine' },
      { link: 'https://spark.study', label: 'Spark Study' },
    ],
  },
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

const markdown1 = `
\`\`\`typescript
import { Block } from '@sparkblock/core';

const Component = () => {
  return (
    <Block
      heading="Welcome to Sparkblock"
    />
  );
};
\`\`\`
`
const markdown2 = `
\`\`\`typescript
import { Block } from '@sparkblock/core';

const Component = () => {
  return (
    <Block
      heading="Welcome to Sparkblock"
      paragraph="Sparkblock UI Kit makes it easy to build beautiful, responsive React applications."
    />
  );
};
\`\`\`
`
const markdown3 = `
\`\`\`typescript
import { Block } from '@sparkblock/core';

const Component = () => {
  return (
    <Block
      heading="Welcome to Sparkblock"
      paragraph="Sparkblock UI Kit makes it easy to build beautiful, responsive React applications."
      textCenter
    />
  );
};
\`\`\`
`


const contentArray = [
  {
    type: 'markdown',
    value: markdown1,
},
  {
    type: 'markdown',
    value: markdown2,
  },
  {
    type: 'markdown',
    value: markdown3,
  },
];



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
  const component1 = () => (
    <Block
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library for building beautiful and responsive React applications with ease."
    />
  );

  const component2 = () => (
    <Block
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library for building beautiful and responsive React applications with ease."
      icon={<IconStar />}
    />
  );

  const component3 = () => (
    <Block
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library for building beautiful and responsive React applications with ease."
      icon={<IconStars />}
      list={["Experienced Pediatricians", "Friendly Staff", "Modern Facilities"]}
      button={{ text: "Learn More", backgroundColor: 'black', onClick: () => console.log("Clicked!")}}
    />
  );
  const contentArray2 = [
    {
      type: 'component',
      value: component1,
  },
    {
      type: 'component',
      value: component2,
    },
    {
      type: 'component',
      value: component3,
    },
  ];
  return (
    <>
    <div style={{height:'250vh'}}>
            <Block
              type="navbar"
              links={links}
              image="logo-sb.png"
              heading="Sparkblock UI"
              sticky
              theme
              linkDiscord="#"
              linkGithub="#"
            />
            <div style={{height:'180vh'}}>
<div style={{position:'sticky', height:'40vh', top:0, zIndex:1, width:'100%', marginTop:'-30vh', transform:'translateY(-2vh)'}}>
    <div style={{height:'40vh'}}>
          <Block
            type="sticky"
            contentArray={contentArray}
            changeInterval={400}
          />
        </div>
        <div style={{marginTop:'10vh'}}>

        <Wrapper
          type="transition"
          transitionFrom="left"
          >
          <Wrapper
            type="section"
            fill
            py={0}
            width="100%"
            px={200}
            >
          <Block
            type="sticky"
            contentArray={contentArray2}
            changeInterval={400}
          />
          </Wrapper>
        </Wrapper>
        </div>

          </div>
</div>


</div>
<Block
  type="footer"
  data={data}
  image="logo-sb.png"
  heading="Sparkblock UI"
  paragraph={["The fastest and simplest UI kit in the world."]}
/>
    </>
  );
}
