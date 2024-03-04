import Block from '../components/Block';
import Wrapper from '../components/Wrapper';
import { Box, Flex, Divider } from '@mantine/core';
import { IconStethoscope, IconNotebook, IconMap, IconVaccine, IconApple } from '@tabler/icons-react';
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
      heading="We have recently moved locations!"
      background="navy"
      color="white"
      icon={<IconMap size={20} />}
    />
        <Block
          type="navbar"
          links={links}
          image="logo.png"
          heading="Ancaster Central"
          sticky
          theme
        />
        <Box mt="-18.6vh">
          <Wrapper
            type="section"
            py={120}
            px={isMobile ? 20 : 200}
            background="url('bg4.jpg')"
            fill={true}
          >
            <Block
              type="section"
              heading="Trusted Care"
              subheading="And happy smiles"
              paragraph="At Ancaster Central Children's Clinic, we offer comprehensive pediatric care tailored to the unique needs of children. Our experienced team is here to support your child's health and development."
              button={{ color: 'white', backgroundColor: 'navy', text: 'Learn More', onClick: () => console.log('Learn More Clicked!') }}
              textCenter
              variant="A"
            />
          </Wrapper>
          <Wrapper
            type="section"
            py={20}
            px={isMobile ? 20 : 200}
          >
            <Block
              type="section"
              variant="C"
              heading="About Our Clinic"
              subheading="Committed to Excellence"
              paragraph={["Ancaster Central Children's Clinic has been providing quality pediatric care in Ancaster, Ontario. Our mission is to support your child's health through all stages of development."]}
              list={
                [
                  "Experienced Pediatricians", "Friendly Staff", "Modern Facilities"
                ]
              }
              image="logo-full.png"
              button={{ color: 'white', backgroundColor: 'navy', text: 'Read More', onClick: () => console.log('Read More Clicked!'), border: 'none' }}
              button2={{ color: 'black', backgroundColor: 'gray', text: 'Contact Us', onClick: () => console.log('Contact Us Clicked!'), border: 'none' }}
            />
          </Wrapper>
          <Wrapper
            type="section"
            py={60}
            background="url('bg4.jpg')"

            px={isMobile ? 20 : 240}
            fill={true}
          >
                <Block
                  type="section"
                  heading="Now serving students!"
                  paragraph={["Come by our clinic if you're a student for anything from XYZ to ABC. We'll address what you need help with and work alongside you."]}
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
              heading="Our Services"
              columns={4}
              spacing="md"
              verticalSpacing={{ base: 'sm', lg: 'md' }}
            >
              <Block
                type="feature"
                icon={<IconStethoscope size={44} />}
                textCenter
                stack
                heading="Pediatrics"
                subheading="Comprehensive Care"
                paragraph="We provide a wide range of pediatric care services, from routine checkups to immunizations."
              />
              <Block
                type="feature"
                icon={<IconVaccine size={44} />}
                textCenter
                stack
                heading="Immunizations"
                subheading="Protecting Health"
                paragraph="Our clinic offers all recommended childhood vaccines to protect against various diseases."
              />
              <Block
                type="feature"
                icon={<IconApple size={44} />}
                textCenter
                stack
                heading="Nutrition"
                subheading="Healthy Eating"
                paragraph="Guidance on best nutrition practices to ensure the healthy growth and development of your child."
              />
              <Block
                type="feature"
                icon={<IconNotebook size={44} />}
                textCenter
                stack
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
              heading="Meet Our Team"
              paragraph="Our clinic is staffed by dedicated pediatricians and healthcare professionals who are passionate about children's health. Get to know the faces who will be caring for your child."
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
                  imageCircle
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
                  imageCircle
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
                  imageCircle
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
          button={{ backgroundColor: 'navy', color: '#FFFFFF' }}
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
          image="logo.png"
          heading="Ancaster Central Children's Clinic"
          paragraph={["Providing compassionate and comprehensive pediatric care in Ancaster, Ontario. Our team is dedicated to supporting your child's health and well-being."]}
        />
      </Box>
    </>
  );
}
