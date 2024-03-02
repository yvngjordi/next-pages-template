import Section from '../components/Section';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import Contact from '../components/Contact';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconMap, IconVaccine, IconApple, IconHome } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import Map from '../components/Map';

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

const imageSrc = 'bg1.jpg';
const fetchURL = 'https://webdragon.dev/contact.php';
const recaptchaSiteKey = '6LeJAGgpAAAAAJMPwrZeB3H5reXW_CdvDJsrMmfg';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');

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
            button={{ color: '#000', backgroundColor: '#AE8625', text: 'Explore Now', onClick: () => console.log('Explore Now Clicked!') }}
            textCenter
            variant="A"
          />
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
              button={{ color: '#000', backgroundColor: '#AE8625', text: 'Read More', onClick: () => console.log('Read More Clicked!'), border: 'none' }}
              button2={{ color: 'black', backgroundColor: 'gray', text: 'Contact Us', onClick: () => console.log('Contact Us Clicked!'), border: 'none' }}
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
            image="https://via.placeholder.com/150"
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
              button={{ color: '#000', backgroundColor: '#AE8625', text: 'Get in touch', onClick: () => console.log('Discover More Clicked!'), border: 'none' }}
            >
              <Block
                type="feature"
                icon={<IconStethoscope size={44} />}
                textCenter
                heading="General Pediatrics"
                subheading="Comprehensive Care"
                paragraph="We provide a wide range of pediatric care services, from routine checkups to immunizations."
              />
              <Block
                type="feature"
                icon={<IconVaccine size={44} />}
                textCenter
                heading="Immunizations"
                subheading="Protecting Health"
                paragraph="Our clinic offers all recommended childhood vaccines to protect against various diseases."
              />
              <Block
                type="feature"
                icon={<IconApple size={44} />}
                textCenter
                heading="Nutrition Advice"
                subheading="Healthy Eating"
                paragraph="Guidance on best nutrition practices to ensure the healthy growth and development of your child."
              />
              <Block
                type="feature"
                icon={<IconNotebook size={44} />}
                textCenter
                heading="Screening"
                subheading="Monitoring Growth"
                paragraph="Early detection and intervention for developmental disorders to keep your child happy and healthy."
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
            <Wrapper
              type="carousel"
              seconds={10}
              fill
              transitionEffect="opacity"
              >
              <Flex direction="column">
                <Block
                  type="section"
                  variant="B"
                  heading="Dr. Smith"
                  subheading="Lead Pediatrician"
                  paragraph={["With years of experience, Dr. Smith leads our team with passion and dedication to pediatric care."]}
                  image="https://via.placeholder.com/150"
                />
              </Flex>
              <Flex direction="column">
                <Block
                  type="section"
                  variant="B"
                  heading="Dr. Jones"
                  subheading="Pediatric Nurse Practitioner"
                  paragraph={["Dr. Jones specializes in pediatric nursing, providing compassionate care and support to our patients."]}
                  image="https://via.placeholder.com/150"
                />
              </Flex>
              <Flex direction="column">
                <Block
                  type="section"
                  variant="B"
                  heading="Dr. Lee"
                  subheading="Child Development Specialist"
                  paragraph={["Dr. Lee offers specialized care in child development, helping children reach their full potential."]}
                  image="https://via.placeholder.com/150"
                />
              </Flex>
            </Wrapper>
            </Flex>
          </Wrapper>
        </Box>
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
          paragraphs={[
              "Feel free to reach out with any questions you might have. We look forward to hearing from you!",
          ]}
          buttonLabel="Submit"
          button={{ backgroundColor: '#AE8625', color: '#000' }}
      />
      </Wrapper>
      <Wrapper
        type="section"
        py={40}
        px={isMobile ? 20 : 200}
      >
        <Block
          type="map"
          address="1039 Upper James St. Hamilton Ontario"
          title="Ancaster Central Childrens Clinic"
          height={400}
          borderRadius="8px"
        />
      </Wrapper>
      <Block
        type="footer"
        data={data}
        imageDarkMode="xp/logo-light.png"
        image="xp/logo.png"
        paragraph={["Join us for a stay at our premium properties and experience unparalleled hospitality and comfort."]}
      />
      </Box>
    </>
  );
}
