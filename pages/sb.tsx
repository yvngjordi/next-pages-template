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
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library."
      textCenter
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
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library."
      textCenter
      icon={<IconStar />}
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
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library."
      textCenter
      icon={<IconStar />}
      button={{ text: "Learn More" }}
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
    <Wrapper
      type="transition"
      transitionFrom="top"
      >
    <Block
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library."
      textCenter
    />
    </Wrapper>
  );

  const component2 = () => (
    <Wrapper
      type="transition"
      transitionFrom="top"
      >
    <Block
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library."
      icon={<IconStar />}
      textCenter
    />
    </Wrapper>
  );

  const component3 = () => (
    <Wrapper
      type="transition"
      transitionFrom="top"
      >
    <Block
      type="feature"
      heading="Welcome to Sparkblock!"
      paragraph="A powerful and flexible UI library."
      icon={<IconStar />}
      button={{ text: "Learn More" }}
      textCenter
    />
    </Wrapper>
  );

  const component4 = () => (
    <Block
      type="card"
      heading="We use Blocks"
      image="https://via.placeholder.com/1024"
    />
  );

  const component5 = () => (
      <Block
        type="card"
        heading="We use Blocks"
        image="https://via.placeholder.com/1024"
      />
  );

  const component6 = () => (
      <Block
        type="card"
        heading="We use Blocks"
        image="https://via.placeholder.com/1024"
      />
  );

  const component7 = () => (

      <Block
        type="card"
        heading="We use Blocks"
        paragraph="Most developers build by the button, but for developers with specific end goals like landing page creation, rapid prototyping and quick content displaying, we needed an approach that had a mix of..."
        image="https://via.placeholder.com/1024"
      />

  );

  const component8 = () => (

      <Block
        type="card"
        heading="We use Blocks"
        tags={["speed"]}
        paragraph="Most developers build by the button, but for developers with specific end goals like landing page creation, rapid prototyping and quick content displaying, we needed an approach that had a mix of..."
        image="https://via.placeholder.com/1024"
      />

  );

  const component9 = () => (

      <Block
        type="card"
        heading="We use Blocks"
        tags={["speed", "modularity"]}
        paragraph="Most developers build by the button, but for developers with specific end goals like landing page creation, rapid prototyping and quick content displaying, we needed an approach that had a mix of..."
        image="https://via.placeholder.com/1024"
      />

  );

  const component10 = () => (

      <Block
        type="card"
        heading="We use Blocks"
        tags={["speed", "modularity", "ease"]}
        paragraph="Most developers build by the button, but for developers with specific end goals like landing page creation, rapid prototyping and quick content displaying, we needed an approach that had a mix of..."
        image="https://via.placeholder.com/1024"
      />

  );

  const component11 = () => (

      <Block
        type="card"
        heading="We use Blocks"
        tags={["speed", "modularity", "ease", "simplicity"]}
        paragraph="Most developers build by the button, but for developers with specific end goals like landing page creation, rapid prototyping and quick content displaying, we needed an approach that had a mix of..."
        image="https://via.placeholder.com/1024"
      />

  );
  const component12 = () => (

      <Block
        type="card"
        heading="We use Blocks"
        tags={["speed", "modularity", "ease", "simplicity", "focus"]}
        paragraph="Most developers build by the button, but for developers with specific end goals like landing page creation, rapid prototyping and quick content displaying, we needed an approach that had a mix of..."
        image="https://via.placeholder.com/1024"
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

  const contentArray3 = [
    {
      type: 'component',
      value: component4,
  },
    {
      type: 'component',
      value: component5,
    },
    {
      type: 'component',
      value: component6,
    },
    {
      type: 'component',
      value: component7,
    },
    {
      type: 'component',
      value: component8,
    },
    {
      type: 'component',
      value: component9,
    },
    {
      type: 'component',
      value: component10,
    },
    {
      type: 'component',
      value: component11,
    },
    {
      type: 'component',
      value: component12,
    },
  ];

  return (
    <>
    <div style={{height:'550vh'}}>
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
              linkDiscord="#"
              linkGithub="#"
            />
  <div style={{height:'300vh'}}>
    <div style={{position:'sticky', height:'40vh', top:0, zIndex:1, width:'100%', marginTop:'-30vh', transform:'translateY(-2vh)'}}>
    <Wrapper
      type="section"
      py={60}
      width="100%"
      px={isMobile ? 20 : 400}
      >
      <div style={{marginTop:'7vh'}}>

          <Block
            type="sticky"
            contentArray={contentArray2}
            changeInterval={400}
          />
      </div>
        </Wrapper>
        <div style={{marginTop:'-4vh'}}>
          <Wrapper
            type="section"
            py={60}
            width="100%"
            px={isMobile ? 20 : 200}
            >
          <Block
            type="sticky"
            contentArray={contentArray}
            changeInterval={400}
          />
        </Wrapper>
        </div>
      </div>
    </div>
    <div style={{height:'200vh', marginTop:'0vh'}}>
      <div style={{position:'sticky', height:'40vh', top:0, zIndex:1, width:'100%', marginTop:'-100vh', transform:'translateY(-2vh)'}}>
      <Wrapper
        type="section"
        py={60}
        width="100%"
        px={isMobile ? 20 : 400}
        >
        <div style={{marginTop:'6vh'}}>

            <Block
              type="sticky"
              contentArray={contentArray3}
              changeInterval={400}
            />
        </div>
          </Wrapper>
          <div style={{width:'100%', background:'radial-gradient(rgba(255, 255, 255, 0.6), rgb(3, 121, 234))', height:'65vh', zIndex:99}}></div>

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
