import Section from '../components/Section';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Block from '../components/Block';
import GridWrapper from '../components/wrappers/GridWrapper';
import Contact from '../components/Contact';
import CarouselWrapper from '../components/wrappers/CarouselWrapper';
import SectionWrapper from '../components/wrappers/SectionWrapper';
import { Box, Flex, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { GoogleMap } from '../components/GoogleMap';
import React from 'react';
import { IconBriefcase, IconCertificate, IconWorld, IconUserCheck, IconBuilding } from '@tabler/icons-react';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About Us' },
  { link: '/services', label: 'Services' },
  { link: '/contact', label: 'Contact' },
];

const dropdownOptions = [
  { value: 'startup-legal', label: 'Startup Legal Inquiry' },
  { value: 'government-lobbying', label: 'Government Lobbying' },
  { value: 'education-consultancy', label: 'Tertiary Education Consultancy' },
  { value: 'procurement-advice', label: 'Procurement Advice' },
];

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Box>
        <Banner
          heading="Empowering Startups Globally"
          background="burgundy"
          color="white"
          icon={<IconWorld size={20} />}
        />
        <Navbar
          links={links}
          image="https://via.placeholder.com/100x50"
          heading="Luo Consulting"
          sticky
        />
        <SectionWrapper
          py={120}
          px={isMobile ? 20 : 200}
          background="black"
          fill={true}
        >
          <Section
            heading="Vaelyn Luo - Bridging Law and Technology"
            subheading="About Us"
            paragraph="Luo and Associates is dedicated to taking the fear out of entrepreneurship. Specializing in startup legal, government lobbying, tertiary education, and procurement, we stand with founders to navigate the complexities of starting and growing a business."
            button={{ color: 'white', backgroundColor: 'burgundy', text: 'Learn More' }}
            textCenter
            variant="A"
            image="https://via.placeholder.com/150"
          />
        </SectionWrapper>
        <SectionWrapper
          py={60}
          px={isMobile ? 20 : 200}
          background="url('https://via.placeholder.com/1024x768')"
          fill={true}
        >
          <GridWrapper
            heading="Our Services"
            columns={isMobile ? 2 : 4}
            spacing="md"
            verticalSpacing={{ base: 'sm', lg: 'md' }}
          >
            <Block
              icon={<IconBriefcase size={44} />}
              textCenter
              heading="Startup Legal"
              paragraph="Expert legal advice to navigate corporate, commercial, and regulatory landscapes."
            />
            <Block
              icon={<IconBuilding size={44} />}
              textCenter
              heading="Government Lobbying"
              paragraph="Strategic lobbying for policies that benefit startups and foster growth."
            />
            <Block
              icon={<IconCertificate size={44} />}
              textCenter
              heading="Tertiary Education"
              paragraph="Guidance on leveraging educational initiatives for startup success."
            />
            <Block
              icon={<IconBuilding size={44} />}
              textCenter
              heading="Procurement Advice"
              paragraph="Navigating government procurement to unlock new opportunities."
            />
          </GridWrapper>
        </SectionWrapper>
        <SectionWrapper
          py={40}
          px={isMobile ? 20 : 200}
        >
          <Contact
            dropdown={dropdownOptions}
            image="https://via.placeholder.com/350x250"
            fetchLink="https://webdragon.dev/contact.php"
            captcha
            siteKey="6LeJAGgpAAAAAJMPwrZeB3H5reXW_CdvDJsrMmfg"
            heading="Get in Touch"
            paragraphs={[
                "Looking to make a bold move in the tech, AI, or blockchain space? Let's discuss how we can support your vision."
            ]}
            buttonLabel="Submit"
            button={{ backgroundColor: 'burgundy', color: 'white' }}
          />
        </SectionWrapper>
        <Footer
          data={[
            {
              title: 'Quick Links',
              links: [
                { label: 'Home', link: '/' },
                { label: 'About Us', link: '/about' },
                { label: 'Services', link: '/services' },
                { label: 'Contact', link: '/contact' },
              ],
            },
          ]}
          image="https://via.placeholder.com/100x50"
          heading="Luo Consulting"
          paragraph={["Dedicated to supporting startup growth through legal expertise, advocacy, and strategic advice."]}
        />
      </Box>
    </>
  );
}
