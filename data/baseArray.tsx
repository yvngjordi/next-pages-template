export const gettingStartedMarkdown = `
# Getting Started with Sparkblock UI Kit

Welcome to Sparkblock UI Kit, a powerful and flexible UI library for building beautiful and responsive React applications with ease. Sparkblock UI Kit is designed to work seamlessly with Mantine UI v7.5, extending its capabilities with pre-defined blocks and wrappers that help developers create interfaces quickly without sacrificing quality or design.

## Installation

Before you can use Sparkblock UI Kit in your project, you need to ensure that you have React and Mantine UI v7.5 set up in your project. If you haven't installed Mantine, follow the Mantine documentation to get started. Once Mantine is set up, you can proceed to install Sparkblock UI Kit.

To install Sparkblock UI Kit, open your terminal and run the following command:

\`\`\`bash
npm install @sparkblock/core
\`\`\`

or if you prefer using Yarn:

\`\`\`bash
yarn add @sparkblock/core
\`\`\`

This command installs the core package of Sparkblock UI Kit, which includes all the necessary blocks and wrappers you need to start building your UI.

## Understanding Sparkblock UI Kit

Sparkblock UI Kit is built around the concept of "Blocks" and "Wrappers." Blocks are reusable UI components such as navigation bars, feature sections, footers, etc., that come with predefined styles and functionalities. Wrappers are used to structure and layout these blocks within your application, allowing for consistent spacing, alignment, and theming across different sections of your interface.

### Blocks

Blocks are the building blocks (pun intended) of your UI. Each block is designed for a specific UI element or section, such as a feature block, navbar block, footer block, etc. Blocks come with several props that allow you to customize their appearance and behavior, including these (being the most common across all Block types):

- \`type\`: Defines the type of block (e.g., "feature", "navbar").
- \`heading\`: The heading text for the block.
- \`subheading\`: The heading text for the block.
- \`paragraph\`: The main content text of the block.
- \`image\`: Adds an image inside the block.
- \`textCenter\` & \`textRight\`: aligns all the text in the block to the center or right.
- \`button\` & \`button2\`: Objects defining the properties of buttons within the block, including text, onClick handler, color, backgroundColor, and border.

Keep in mind, almost all props are optional. For example, removing the image prop from the section block will remove the space the image takes up as well to properly fill in the Block. So adding buttons, paragraphs, subheadings etc. are all optional to include.

### Wrappers

Wrappers are used to encapsulate blocks and provide consistent spacing, background colors, or other layout-related styles. They ensure that your blocks are evenly spaced and aligned, making your UI look polished and professional. Wrappers can also be used to create complex layouts, such as grids or carousels, by wrapping multiple blocks.

## Implications and Best Practices

When using Sparkblock UI Kit, keep the following in mind:

- **Consistency**: Sparkblock promotes UI consistency through reusable blocks and wrappers. Stick to the predefined blocks as much as possible to maintain a consistent look and feel across your application.
- **Customization**: While blocks come with predefined styles, they are highly customizable. Use the props to adjust the appearance of your blocks to fit your application's theme.
- **Mantine Integration**: Sparkblock is an extension of Mantine UI v7.5. Take advantage of Mantine's features and components to complement your Sparkblock UI, ensuring a seamless integration between custom blocks and standard Mantine components.

With Sparkblock UI Kit, you're equipped to build beautiful, responsive, and consistent user interfaces for your React applications with minimal effort. Explore the components, experiment with the blocks and wrappers, and create something amazing!
`;

export const usingBlocksMarkdown = `
# Using Blocks in Sparkblock UI Kit

The Sparkblock UI Kit provides a variety of blocks to build your UI in a modular and efficient way. Each block can be customized with different props to suit your specific needs. Let's start with a basic example and then move to a more complex one that includes interactive elements like buttons.

## Basic Example: Section Block

First, we'll create a simple block that displays a heading and a paragraph. This example demonstrates how to use a block without interactive elements, focusing on static content.

\`\`\`jsx
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

In this example, the \`Block\` component is used to create a text block with a heading and a paragraph. The \`textCenter\` prop aligns the text to the center. Notice that we haven't included any interactive elements like buttons in this basic example.

## Advanced Example: Feature Block with Buttons

Next, let's add some visual content and interactivity to our block by including a button and an icon. This example will demonstrate how to use the \`button\` prop to add actionable items to the block and how to use an icon library (we recommend Tabler) to add an icon to the block.

\`\`\`jsx
import { Block } from '@sparkblock/core';
import { IconCube } from '@tabler/icons-react';

const Component = () => {
  return (
    <Block
      type="feature"
      icon={<IconCube size={28} />}
      heading="Explore Sparkblock"
      paragraph="Discover how Sparkblock can accelerate your UI development."
      button={ text: "Get Started", onClick: () => console.log("Get Started Clicked!"), color: "white", backgroundColor: "blue" }
      textCenter
    />
  );
};
\`\`\`

In this little more advanced example, we've added a button to our \`Block\`. The \`button\` prop accepts an array of objects including stylings like \`text\`, \`onClick\` handler, \`color\`, \`backgroundColor\`, and \`border\`. This structure allows for flexibility and block control. Please see the Feature block doc for a preview and more defined example.
`;

export const usingWrappersMarkdown = `
# Using Wrappers in Sparkblock UI Kit

Wrappers in the Sparkblock UI Kit play a crucial role in structuring and organizing the layout of your application. They provide a consistent way to manage spacing, alignment, and background settings across different sections of your UI. Let's explore how to utilize wrappers effectively with an example that demonstrates their capability to enhance the structure and appearance of a UI section.

## Example: Section with Background and Padding

Imagine you want to create a section on your webpage that stands out by having a distinct background and is nicely padded from the rest of your content. Here's how you could use a \`Wrapper\` component from Sparkblock UI Kit to achieve this:

\`\`\`jsx
import { Wrapper, Block } from '@sparkblock/core';

const Component = () => {
  return (
    <Wrapper
      type="section"
      py={120} // Padding top and bottom
      px={200} // Padding left and right
      background="url('bg-image.jpg')" // Background image
      fill={true} // Option to fill the available space
    >
      <Block
        type="section"
        heading="Enhance Your Application"
        subheading="With Structured Layouts"
        paragraph="Use Wrappers to easily manage spacing, alignment, and backgrounds. They help create visually appealing sections that enhance user experience."
        textCenter
      />
    </Wrapper>
  );
};
\`\`\`

In this example, the \`Wrapper\` component is used to create a container for a section of content. We've applied a background image using the \`background\` prop and set the padding on all sides with \`py\` and \`px\` props for vertical and horizontal padding, respectively. Inside the wrapper, a \`Block\` component is used to display the section's content, including a heading, subheading, and paragraph. The \`textCenter\` prop aligns the text to the center of the block.

The use of the \`Wrapper\` component in this way allows for a modular approach to designing your UI. By encapsulating sections of your application within wrappers, you can easily apply consistent styling and spacing rules. This not only makes your UI more structured and visually appealing but also simplifies maintenance and updates.

Wrappers are versatile components in the Sparkblock UI Kit that can be used to enhance the layout and presentation of your application. By understanding and utilizing wrappers, you can create more engaging and cohesive user interfaces.
`;

export const usingMantineMarkdown = `
# Leveraging Mantine in Sparkblock UI Kit

The Sparkblock UI Kit is built on top of Mantine, a powerful and modern React component library. This foundational choice means that all the components and hooks available in Mantine can be seamlessly utilized within Sparkblock. This integration enriches Sparkblock with Mantine's comprehensive suite of UI components and utilities, allowing developers to craft highly interactive and accessible applications with ease. Let's delve into how you can leverage Mantine's components within the Sparkblock ecosystem.

## Example: Incorporating Mantine Components

To demonstrate the seamless integration between Sparkblock and Mantine, let's create a user profile card using Mantine's \`Card\`, \`Avatar\`, and \`Text\` components within a Sparkblock application.

\`\`\`jsx
// Instead of import { Card, Avatar, Text, Group } from '@mantine/core';
// We can use
import { Wrapper, Card, Avatar, Text, Group } from '@sparkblock/core';

const UserProfileCard = () => {
  return (
    <Wrapper
      type="section"
      py={50}
      px={20}
      background="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      fill={true}
    >
      <Card shadow="sm" padding="lg">
        <Group position="apart" style={{ marginBottom: 20, alignItems: 'center' }}>
          <Avatar src="https://avatars.githubusercontent.com/u/username" radius="xl" />
          <Text weight={500}>John Doe</Text>
        </Group>
        <Text size="sm" color="dimmed">
          John is a software engineer with a passion for building scalable web applications and engaging user experiences.
        </Text>
      </Card>
    </Wrapper>
  );
};
\`\`\`

In this example, we wrap the Mantine \`Card\` component within a Sparkblock \`Wrapper\` to ensure consistent spacing and background styling across the application. The \`Card\` itself contains an \`Avatar\` and two \`Text\` components to display the user's profile picture and information. This not only showcases the ease of integrating Mantine components within Sparkblock but also highlights the flexibility and composability of using both libraries together.

## Benefits of Integration

By building Sparkblock on top of Mantine, we provide developers with several key benefits:

- **Comprehensive Component Library:** Access to a wide range of pre-designed components that can be customized and extended to fit your application's needs.
- **Consistent Design System:** Leverage Mantine's design system within Sparkblock to maintain consistency in appearance and behavior across your application.
- **Enhanced Productivity:** Utilize Mantine's hooks and utilities to accelerate development, focusing on building unique features rather than reinventing common UI patterns.
- **Accessibility and Responsiveness:** Mantine components are designed with accessibility and responsiveness in mind, ensuring that applications are accessible and adaptable to various devices.

In conclusion, the integration of Mantine within Sparkblock opens up a vast array of possibilities for building rich, interactive, and accessible web applications. By leveraging the strengths of Mantine, developers can enjoy a streamlined development process, enabling them to deliver high-quality applications faster and more efficiently.
`;

export const communityMarkdown = `
# Join Our Community at Spark Engine

Join the vibrant community behind Sparkblock, Spark Engine, the innovative force propelling our cutting-edge AI technology company. Our journey began with a vision to harness the power of AI in transforming how web applications are developed, making the process faster, more efficient, and accessible to a wider audience. This vision is embodied in our products, including the intuitive Sparkblock UI Kit and Spark Study, our specialized AI for higher education.

## Spark Engine: Innovating AI Technology

At the heart of our endeavors is [Spark Engine AI](https://sparkengine.ai), a platform where our passion for AI technology translates into real-world applications that simplify and enhance web development. The development of the Sparkblock UI Kit is a testament to our commitment to innovation, offering developers a powerful toolset to create stunning and functional web applications with ease.

## Spark Study: Empowering Higher Education

Our commitment to leveraging AI for the betterment of society is further showcased in [Spark Study](https://spark.study), an AI-driven platform dedicated to higher education. By utilizing some aspects of our UI kit, Spark Study stands as a prime example of how our technologies can be applied to specific industries to foster growth, learning, and accessibility.

## Become a Part of Our Growing Community

We invite you to join our journey and become a vital part of our growing community. Whether you're a developer, student, educator, or tech enthusiast, there's a place for you here. By joining our Discord server, you'll connect with like-minded individuals, gain insights into our latest projects, and have the opportunity to contribute to our mission. Your support and contributions are what fuel our continuous innovation and drive towards making a significant impact in the world of AI and web development.

[Join our Discord server](https://discord.gg/sparkengine) today and stay updated as we embark on exciting projects, including using our UI kit to build an AI capable of generating web applications in a flash. As a member of our community, you'll be at the forefront of technological advancements and have the chance to contribute to shaping the future of AI-driven development.

We're more than just a technology company; we're a community of innovators, dreamers, and builders. Join us, and let's create something amazing together.
`;
