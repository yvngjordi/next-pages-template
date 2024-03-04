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
