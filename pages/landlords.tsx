import Section from '../components/Section';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import Contact from '../components/Contact';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconUserCheck, IconTrendingUp, IconShieldCheck, IconCalendarEvent, IconMap, IconVaccine, IconSoup, IconBed, IconWifi, IconApple, IconHome, IconBuildingSkyscraper } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import Map from '../components/Map';

const links = [
  { link: '/', label: 'Home' },
  { link: '/#about', label: 'About' },
  { link: '/landlords', label: 'Landlords' },
  { link: '#contact', label: 'Contact' },
];

const data = [
  {
    title: 'Sitemap',
    links: [
      { label: 'About', link: '/#about' },
      { label: 'Landlords', link: '/landlords' },
      { label: 'Contact', link: '#contact' },
    ],
  },
];


const dropdownOptions = [
  { value: 'general-inquiry', label: 'General inquiry' },
  { value: 'customer-support', label: 'Customer support' },
  { value: 'booking-time', label: 'Booking a time'}
];

const imageSrc = 'bg1.jpg';
const fetchURL = 'https://webdragon.dev/contact.php';
const recaptchaSiteKey = '6LeJAGgpAAAAAJMPwrZeB3H5reXW_CdvDJsrMmfg';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const placeholderImages = [
    'https://via.placeholder.com/1024',
    'bg2.jpg',
    'bg1.jpg',
    'bg3.jpg',
    'bg4.jpg',
    'https://via.placeholder.com/1024',
    'bg2.jpg',
    'bg1.jpg',
    'bg3.jpg',
    'https://via.placeholder.com/1024',
    'bg2.jpg',

  ];

  return (
    <>
    <Box>
    <Block
      type="banner"
      heading="Check out our listings!"
      background="linear-gradient(90deg, #AE8625, #F7EF8A 40%, #D2AC47 80%, #EDC967)"
      color="#000"
      icon={<IconHome size={20} />}
    />
        <Block
          type="navbar"
          links={links}
          image="xp/logo.png"
          imageDarkMode="xp/logo-light.png"
          sticky
          theme
        />
        <Box mt="-22.6vh">
        <Wrapper
          type="section"
          py={120}
          px={isMobile ? 20 : 200}
        >
          <Block
            type="section"
            variant="C"
            heading="Why Choose Us?"
            subheading="For our landlords"
            paragraph={["At the heart of our service lies a commitment to providing an unparalleled experience for our guests. We meticulously handpick and maintain each of our properties to meet the highest standards of quality and comfort, ensuring that every moment of someone's stay is nothing short of perfect."]}
            list={
              [
                "Frequent high quality cleaning", "Dedicated 24/7 support", "Trustworthy and verified listings", "Always ready to collaborate"
              ]
            }
            image="xp/bg6.jpg"
            button={{
              color: '#000',
              backgroundColor: '#AE8625',
              text: 'Read More',
              onClick: () => window.location.href = '#features',
              border: 'none'
            }}
            button2={{
              color: 'black',
              backgroundColor: 'gray',
              text: 'Contact Us',
              onClick: () => window.location.href = '#contact',
              border: 'none'
            }}
            />
        </Wrapper>
          <Wrapper
            type="section"
            py={50}
            px={isMobile ? 30 : 200}
          >
          <div id="features"></div>
          <Wrapper
            type="grid"
            heading="Why Partner With Us..."
            columns={4}
            spacing="md"
            verticalSpacing={{ base: 'sm', lg: 'md' }}
          >
            <Block
              type="feature"
              icon={<IconTrendingUp size={44} />}
              textCenter
              stack
              heading="Maximize Your Earnings"
              subheading="Optimize Rental Income"
              paragraph="Leverage our pricing strategies and market insights to ensure you're earning the maximum possible from your property."
            />
            <Block
              type="feature"
              icon={<IconUserCheck size={44} />}
              textCenter
              stack
              heading="Thoroughly Vetted Tenants"
              subheading="Quality & Security"
              paragraph="Gain peace of mind through our tenant vetting process, ensuring reliable and respectful occupants for your property."
            />
            <Block
              type="feature"
              icon={<IconCalendarEvent size={44} />}
              textCenter
              stack
              heading="Hassle-Free Management"
              subheading="We Handle Everything"
              paragraph="From marketing your property to handling check-ins and maintenance, we take care of all the details so you don't have to."
            />
            <Block
              type="feature"
              icon={<IconShieldCheck size={44} />}
              textCenter
              stack
              heading="Property Protection"
              subheading="Safe & Secure"
              paragraph="Our comprehensive insurance policies and proactive property management practices protect your investment at all times."
            />
          </Wrapper>

          </Wrapper>

        </Box>
        <div id="contact"></div>
        <Wrapper
          type="section"
          py={20}
          px={isMobile ? 10 : 100}
        >
        <Block
          type="contact"
          dropdown={dropdownOptions}
          image={imageSrc}
          fetchLink={fetchURL}
          captcha
          siteKey={recaptchaSiteKey}
          heading="Get in Touch"
          paragraph={[
              "Feel free to reach out with any questions you might have. We look forward to hearing from you!",
          ]}
          buttonLabel="Submit"
          button={{ backgroundColor: '#AE8625', color: '#000' }}
      />
      </Wrapper>
      <Block
        type="footer"
        data={data}
        imageDarkMode="xp/logo-light.png"
        image="xp/logo.png"
        copyright="Xclusive Properties © 2024 | All rights reserved"
        paragraph={["Join us for a stay at our premium properties and experience unparalleled hospitality and comfort."]}
      />
      </Box>
    </>
  );
}
