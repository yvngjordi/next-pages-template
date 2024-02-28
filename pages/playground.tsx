import Section from '../components/Section';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Embed from '../components/Embed';
import Video from '../components/Video';
import Card from '../components/Card';
import { SwitchBlock } from '../components/SwitchBlock';
import { MarkdownBlock } from '../components/MarkdownBlock';
import { GoogleMap } from '../components/GoogleMap';
import GridWrapper from '../components/wrappers/GridWrapper';
import Contact from '../components/Contact';
import CarouselWrapper from '../components/wrappers/CarouselWrapper';
import SectionWrapper from '../components/wrappers/SectionWrapper';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconHeart, IconMap, IconVaccine, IconApple } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

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

const dropdownOptions = [
  { value: 'general-inquiry', label: 'General inquiry' },
  { value: 'customer-support', label: 'Customer support' },
  { value: 'booking-time', label: 'Booking a time'}
];

const switchBlock = [
  { title: 'Messages', description: 'Direct messages you have received from other users' },
  { title: 'Review requests', description: 'Code review requests from your team members' },
  { title: 'Comments', description: 'Daily digest with comments on your posts' },
  {
    title: 'Recommendations',
    description: 'Digest with best community posts from previous week',
  },
];

const imageSrc = 'bg1.jpg';
const fetchURL = 'https://webdragon.dev/contact.php';
const recaptchaSiteKey = '6LeJAGgpAAAAAJMPwrZeB3H5reXW_CdvDJsrMmfg';

export default function HomePage() {
  const markdownText = `# Markdown Heading\n\nThis is some markdown content.`;
  const isMobile = useMediaQuery('(max-width: 768px)');
  const handleSwitchChange = (title: string, checked: boolean) => {
    console.log(`Switch for ${title} changed to ${checked ? 'ON' : 'OFF'}.`);
  };

  return (
    <>
    <Box>
    <Banner
      heading="We have recently moved locations!"
      background="navy"
      color="white"
      icon={<IconMap size={20} />}
    />
        <Navbar
          links={links}
          image="logo.PNG"
          heading="Ancaster Central"
          sticky
        />
        <Box mt="-18.6vh">

          <MarkdownBlock
            markdown={markdownText}
            image="bg2.jpg"
            heading="Main Heading"
            subheading="Subheading Text"
            paragraph="This is a paragraph or an array of paragraphs."
          />
        <SwitchBlock
          data={switchBlock}
          onSwitchChange={handleSwitchChange}
          heading="Title"
          paragraph="This is an example description"
         />
          <Embed
            src="https://example.com/path/to/document.pdf"
            type="pdf"
            margin="10px"
            padding="10px"
            controls={true}
          />
          <Video
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            autoplay={true}
            loop={true}
          />
        </Box>
        <Contact
          dropdown={dropdownOptions}
          image={imageSrc}
          fetchLink={fetchURL}
          captcha
          siteKey={recaptchaSiteKey}
          heading="Get in Touch"
          paragraphs={[
              "Feel free to reach out with any questions you might have. We look forward to hearing from you!",
          ]}
          buttonLabel="Submit"
          button={{ backgroundColor: 'navy', color: '#FFFFFF' }}
      />
      <SectionWrapper
        py={70}
        px={isMobile ? 20 : 200}
      >
      <GoogleMap
        address="1039 Upper James St. Hamilton Ontario"
        title="Ancaster Central Childrens Clinic"
        height={400}
        borderRadius="8px"
      />
      </SectionWrapper>
        <Footer
          data={data}
          image="logo.PNG"
          heading="Ancaster Central Children's Clinic"
          paragraph={["Providing compassionate and comprehensive pediatric care in Ancaster, Ontario. Our team is dedicated to supporting your child's health and well-being."]}
        />
      </Box>
    </>
  );
}
