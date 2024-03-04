export const gettingStartedMarkdown = `
# Getting Started with Sparkblocks UI Kit

Welcome to Sparkblocks UI Kit, a powerful and flexible UI library for building beautiful and responsive React applications with ease. Sparkblocks UI Kit is designed to work seamlessly with Mantine UI v7.5, extending its capabilities with pre-defined blocks and wrappers that help developers create interfaces quickly without sacrificing quality or design.

## Installation

Before you can use Sparkblocks UI Kit in your project, you need to ensure that you have React and Mantine UI v7.5 set up in your project. If you haven't installed Mantine, follow the Mantine documentation to get started. Once Mantine is set up, you can proceed to install Sparkblocks UI Kit.

To install Sparkblocks UI Kit, open your terminal and run the following command:

\`\`\`bash
npm install @sparkblocks/core
\`\`\`

or if you prefer using Yarn:

\`\`\`bash
yarn add @sparkblocks/core
\`\`\`

This command installs the core package of Sparkblocks UI Kit, which includes all the necessary blocks and wrappers you need to start building your UI.

## Understanding Sparkblocks UI Kit

Sparkblocks UI Kit is built around the concept of "Blocks" and "Wrappers." Blocks are reusable UI components such as navigation bars, feature sections, footers, etc., that come with predefined styles and functionalities. Wrappers are used to structure and layout these blocks within your application, allowing for consistent spacing, alignment, and theming across different sections of your interface.

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

When using Sparkblocks UI Kit, keep the following in mind:

- **Consistency**: Sparkblocks promotes UI consistency through reusable blocks and wrappers. Stick to the predefined blocks as much as possible to maintain a consistent look and feel across your application.
- **Customization**: While blocks come with predefined styles, they are highly customizable. Use the props to adjust the appearance of your blocks to fit your application's theme.
- **Mantine Integration**: Sparkblocks is an extension of Mantine UI v7.5. Take advantage of Mantine's features and components to complement your Sparkblocks UI, ensuring a seamless integration between custom blocks and standard Mantine components.

With Sparkblocks UI Kit, you're equipped to build beautiful, responsive, and consistent user interfaces for your React applications with minimal effort. Explore the components, experiment with the blocks and wrappers, and create something amazing!
`;

export const usingBlocksMarkdown = `
# Using Blocks in Sparkblocks UI Kit

The Sparkblocks UI Kit provides a variety of blocks to build your UI in a modular and efficient way. Each block can be customized with different props to suit your specific needs. Let's start with a basic example and then move to a more complex one that includes interactive elements like buttons.

## Basic Example: Section Block

First, we'll create a simple block that displays a heading and a paragraph. This example demonstrates how to use a block without interactive elements, focusing on static content.

\`\`\`jsx
import { Block } from '@sparkblocks/core';

const Component = () => {
  return (
    <Block
      heading="Welcome to Sparkblocks"
      paragraph="Sparkblocks UI Kit makes it easy to build beautiful, responsive React applications."
      textCenter
    />
  );
};
\`\`\`

In this example, the \`Block\` component is used to create a text block with a heading and a paragraph. The \`textCenter\` prop aligns the text to the center. Notice that we haven't included any interactive elements like buttons in this basic example.

## Advanced Example: Feature Block with Buttons

Next, let's add some visual content and interactivity to our block by including a button and an icon. This example will demonstrate how to use the \`button\` prop to add actionable items to the block and how to use an icon library (we recommend Tabler) to add an icon to the block.

\`\`\`jsx
import { Block } from '@sparkblocks/core';
import { IconCube } from '@tabler/icons-react';

const Component = () => {
  return (
    <Block
      type="feature"
      icon={<IconCube size={28} />}
      heading="Explore Sparkblocks"
      paragraph="Discover how Sparkblocks can accelerate your UI development."
      button={ text: "Get Started", onClick: () => console.log("Get Started Clicked!"), color: "white", backgroundColor: "blue" }
      textCenter
    />
  );
};
\`\`\`

In this little more advanced example, we've added a button to our \`Block\`. The \`button\` prop accepts an array of objects including stylings like \`text\`, \`onClick\` handler, \`color\`, \`backgroundColor\`, and \`border\`. This structure allows for flexibility and block control. Please see the Feature block doc for a preview and more defined example.
`;

export const usingWrappersMarkdown = `
# Using Wrappers in Sparkblocks UI Kit

Wrappers in the Sparkblocks UI Kit play a crucial role in structuring and organizing the layout of your application. They provide a consistent way to manage spacing, alignment, and background settings across different sections of your UI. Let's explore how to utilize wrappers effectively with an example that demonstrates their capability to enhance the structure and appearance of a UI section.

## Example: Section with Background and Padding

Imagine you want to create a section on your webpage that stands out by having a distinct background and is nicely padded from the rest of your content. Here's how you could use a \`Wrapper\` component from Sparkblocks UI Kit to achieve this:

\`\`\`jsx
import { Wrapper, Block } from '@sparkblocks/core';

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

Wrappers are versatile components in the Sparkblocks UI Kit that can be used to enhance the layout and presentation of your application. By understanding and utilizing wrappers, you can create more engaging and cohesive user interfaces.
`;
