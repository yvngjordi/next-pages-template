import Section from '../components/Section';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import Contact from '../components/Contact';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconMap, IconVaccine, IconSoup, IconBed, IconWifi, IconApple, IconHome, IconBuildingSkyscraper } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import Map from '../components/Map';

const links = [
  { link: '/', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '/landlords', label: 'Landlords' },
  { link: '#contact', label: 'Contact' },
];

const data = [
  {
    title: 'Sitemap',
    links: [
      { label: 'About', link: '#about' },
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
        <Box mt="-18.6vh">
          <Wrapper
            type="section"
            py={120}
            px={isMobile ? 20 : 200}
            background="url('xp/bg4.jpg')"
            fill={true}
          >
          <Block
            type="section"
            heading="Discover Your Perfect Getaway"
            subheading="Home Away From Home"
            paragraph="Explore our exclusive range of properties tailored to ensure your comfort and satisfaction. From beachfront villas to cozy mountain cabins, find the perfect setting for your next vacation."
            button={
              {
                color: '#000',
                backgroundColor: '#AE8625',
                text: 'Explore Now',
                onClick: () => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }
            }
            textCenter
            variant="A"
          />
          <div id="about"></div>
          </Wrapper>
          <Wrapper
            type="section"
            py={120}
            px={isMobile ? 20 : 200}
          >
            <Block
              type="section"
              variant="C"
              heading="About Our Properties"
              subheading="Exceeding Expectations"
              paragraph={["Each of our properties is carefully selected and maintained to ensure the highest standards of quality and comfort. Enjoy the amenities and personalized service that make our rentals stand out."]}
              list={
                [
                  "Prime Locations", "Luxury Amenities", "Personalized Services"
                ]
              }
              image="xp/bg5.jpg"
              button={{ color: '#000', backgroundColor: '#AE8625', text: 'Read More',     onClick: () => window.location.href = '/about', border: 'none' }}
              button2={{ color: 'black', backgroundColor: 'gray', text: 'Contact Us',                onClick: () => {
                                const conSection = document.getElementById('contact');
                                if (conSection) {
                                  conSection.scrollIntoView({ behavior: 'smooth' });
                                }
                              }, border: 'none' }}
            />
          </Wrapper>
          <Wrapper
            type="section"
            py={60}
            background="url('xp/bg7.jpg')"

            px={isMobile ? 20 : 240}
            fill={true}
          >
          <Block
            type="section"
            heading="Special Offers for Early Bookings!"
            paragraph={["Book your next holiday in advance and save! Check out our early bird specials and exclusive offers for an unforgettable getaway."]}
            image="xp/so.png"
            textCenter
          />
          </Wrapper>
          <Wrapper
            type="section"
            py={50}
            px={isMobile ? 30 : 200}
          >
          <Wrapper
            type="grid"
            heading="Your stay will feature..."
            columns={4}
            spacing="md"
            verticalSpacing={{ base: 'sm', lg: 'md' }}
            button={{ color: '#000', backgroundColor: '#AE8625', text: 'Get in touch', onClick: () => {
                              const con2Section = document.getElementById('contact');
                              if (con2Section) {
                                con2Section.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, border: 'none' }}
          >
            <Block
              type="feature"
              icon={<IconWifi size={44} />}
              textCenter
              stack
              heading="High-Speed Internet"
              subheading="Stay Connected"
              paragraph="Enjoy uninterrupted browsing, streaming, and work with our high-speed internet connection available in every home."
            />
            <Block
              type="feature"
              icon={<IconBed size={44} />}
              textCenter
              stack
              heading="Comfortable Lodging"
              subheading="Rest & Relax"
              paragraph="Experience ultimate comfort with premium bedding in all bedrooms, ensuring a restful night's sleep."
            />
            <Block
              type="feature"
              icon={<IconSoup size={44} />}
              textCenter
              stack
              heading="Fully Equipped Kitchen"
              subheading="Dine In"
              paragraph="Prepare your favorite meals with ease using our fully equipped kitchens, complete with modern appliances."
            />
            <Block
              type="feature"
              icon={<IconMap size={44} />}
              textCenter
              stack
              heading="Visit Key Locations"
              subheading="Explore with Ease"
              paragraph="Our properties are located in prime areas, giving you easy access to local attractions, dining, and shopping."
            />
          </Wrapper>
          </Wrapper>
          <Wrapper
            type="section"
            py={60}
            px={isMobile ? 20 : 200}
          >
          <Flex direction="column">
            <Block
              type="section"
              heading="Our listings"
              paragraph="View some of our listings on AirBnb and book a beautiful stay in a beautiful place of your choosing."
              textCenter
            />
            <Flex direction={isMobile ? 'column' : 'row'}>
            <Box p="5px">
              <Block
                type="card"
                heading="Skyline Studio"
                badge="Featured"
                tags={["City Views", "Modern", "Central"]}
                paragraph="Nestled in the bustling heart of the downtown district, Skyline Studio offers breathtaking views of the city skyline. Its prime location ensures you're only steps away from premium dining, entertainment, and shopping experiences."
                image="xp/props/4.jpg"
                button={{ color: '#000', backgroundColor: '#AE8625', text: 'Get in touch', onClick: () => {
                                  const conSection = document.getElementById('contact');
                                  if (conSection) {
                                    conSection.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }, border: 'none' }}
              />
            </Box>
            <Box p="5px">
              <Block
                type="card"
                heading="Metropolitan Haven"
                tags={["Luxury", "Exclusive", "Secure"]}
                paragraph="Metropolitan Haven is a luxury retreat in the heart of the city. Offering exclusivity and unparalleled comfort, this property is a sanctuary amidst the urban excitement, with top-tier amenities and security."
                image="xp/props/2.jpg"
                button={{ color: '#000', backgroundColor: '#AE8625', text: 'Get in touch', onClick: () => {
                                  const conSection = document.getElementById('contact');
                                  if (conSection) {
                                    conSection.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }, border: 'none' }}
              />
            </Box>
            <Box p="5px">
              <Block
                type="card"
                heading="Cultural Loft"
                tags={["Artsy", "Vibrant", "Spacious"]}
                paragraph="Cultural Loft stands at the intersection of comfort and culture, located near iconic art galleries, theaters, and music venues. Its spacious, art-filled interiors mirror the creative spirit of the surrounding neighborhood."
                image="xp/props/1.jpg"
                button={{ color: '#000', backgroundColor: '#AE8625', text: 'Get in touch', onClick: () => {
                                  const conSection = document.getElementById('contact');
                                  if (conSection) {
                                    conSection.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }, border: 'none' }}
              />
            </Box>
            </Flex>
            </Flex>
          </Wrapper>
        </Box>
        <Block
          type="gallery"
          images={placeholderImages}
          spacing={16}
          columns={4}
        />
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
