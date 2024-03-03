export const blocksArray = [
  {
    "name": "banner",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\nimport { IconCube } from '@tabler/icons-react';\r\n\r\nconst Component() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"banner\"\r\n      heading=\"Banner Title\"\r\n      leftIcon={<IconCube />}\r\n      color=\"white\"\r\n      background=\"black\"\r\n      onClick={() => console.log('Banner clicked')}\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Banner component displays a message or content in a styled banner format. It leverages the Flex component from Mantine for alignment and optionally includes icons from Tabler Icons. It supports customization for background and text color, an optional click action, custom styles, and the ability to include an icon.",
    "props": [
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Defines the main text displayed in the banner."
      },
      {
        "propName": "icon",
        "propType": "React.ReactNode",
        "propDescription": "Optional icon displayed alongside the banner text. Accepts any React node, typically used for SVG icons."
      },
      {
        "propName": "color",
        "propType": "string",
        "propDescription": "Sets the text color of the banner content."
      },
      {
        "propName": "background",
        "propType": "string",
        "propDescription": "Specifies the background color of the banner."
      },
      {
        "propName": "onClick",
        "propType": "function",
        "propDescription": "Optional click event handler that is called when the banner is clicked. Can be used to navigate, open a modal, etc."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Optional style object to apply custom styles to the banner."
      }
    ]
  },
  {
    "name": "contact",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst Component() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"contact\"\r\n      dropdown={[{ value: \"feedback\", label: \"Feedback\" }, { value: \"support\", label: \"Support\" }]}\r\n      image=\"https://via.placeholder.com/1024\"\r\n      fetchLink=\"https://path/to/contact.php\"\r\n      captcha={true}\r\n      siteKey=\"your-reCAPTCHA-site-key\"\r\n      heading=\"Contact Title\"\r\n      paragraph={[\"This is some example paragraph text for this block type. Copy the code in the tab above!\"]}\r\n      buttonLabel=\"Send Message\"\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst Contact() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"contact\"\r\n      dropdown={[{ value: \"feedback\", label: \"Feedback\" }, { value: \"support\", label: \"Support\" }]}\r\n      image=\"https://via.placeholder.com/1024\"\r\n      fetchLink=\"https://path/to/contact.php\"\r\n      captcha={true}\r\n      siteKey=\"your-reCAPTCHA-site-key\"\r\n      heading=\"Contact Title\"\r\n      paragraph={[\"This is some example paragraph text for this block type. Copy the code in the tab above!\"]}\r\n      buttonLabel=\"Send Message\"\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "description": "The Contact component is a comprehensive form designed for gathering user inputs, including name, email, message, and purpose, with the option to include a captcha for security. It utilizes Mantine's useForm for form state management and various UI components for a rich user interface. The component is responsive, adjusting layout based on the device's screen size. It supports customization through props for dropdown options, image display, reCAPTCHA integration, and styling. Additionally, it includes optional headings, subheadings, and paragraphs for more detailed content presentation.",
    "props": [
      {
        "propName": "dropdown",
        "propType": "{ value: string; label: string }[]",
        "propDescription": "Options for the dropdown select component."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "URL of the image to display in the contact form."
      },
      {
        "propName": "fetchLink",
        "propType": "string",
        "propDescription": "Endpoint URL to which the form data is submitted."
      },
      {
        "propName": "captcha",
        "propType": "boolean",
        "propDescription": "Determines whether a reCAPTCHA is included in the form for security."
      },
      {
        "propName": "siteKey",
        "propType": "string",
        "propDescription": "Site key for the reCAPTCHA integration."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Optional heading text for the contact form."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "Optional subheading text for the contact form."
      },
      {
        "propName": "paragraphs",
        "propType": "string[]",
        "propDescription": "Optional paragraphs of text to provide additional information."
      },
      {
        "propName": "buttonLabel",
        "propType": "string",
        "propDescription": "Label for the submit button."
      },
      {
        "propName": "button",
        "propType": "React.CSSProperties",
        "propDescription": "Custom styles for the submit button."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Custom styles for the main component wrapping the contact form."
      }
    ]
  },
  {
    "name": "document",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst Component() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"document\"\r\n      file=\"https://example.com/document.pdf\"\r\n      fileType=\"pdf\"\r\n      margin=\"10px\"\r\n      padding=\"20px\"\r\n      controls={true}\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Document component is designed to embed different types of documents such as PDFs, DOCX, PPTX, or other file types into a React application. It allows for the customization of the embedded view through various props such as source URL, document type, margins, padding, display controls, and dimensions. This component utilizes an iframe to display the content and supports integration with Google Docs Viewer for DOCX and PPTX files, providing a seamless viewing experience without requiring the user to leave the application.",
    "props": [
      {
        "propName": "file",
        "propType": "string",
        "propDescription": "The source URL of the document file to be embedded."
      },
      {
        "propName": "fileType",
        "propType": "'pdf' | 'docx' | 'pptx' | 'other'",
        "propDescription": "The type of document file being embedded. Supports 'pdf', 'docx', 'pptx', or 'other'."
      },
      {
        "propName": "margin",
        "propType": "string",
        "propDescription": "Optional margin around the embed container. Defaults to '0'."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Optional CSSProperties object to apply custom styles to the embed container."
      },
      {
        "propName": "padding",
        "propType": "string",
        "propDescription": "Optional padding inside the embed container. Defaults to '0'."
      },
      {
        "propName": "controls",
        "propType": "boolean",
        "propDescription": "Determines if the embedded document should display controls (if applicable). Defaults to true."
      },
      {
        "propName": "width",
        "propType": "string",
        "propDescription": "The width of the iframe containing the embedded document. Defaults to '100%'."
      },
      {
        "propName": "height",
        "propType": "string",
        "propDescription": "The height of the iframe containing the embedded document. Defaults to '80vh'."
      }
    ]
  },
  {
    "name": "feature",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\nimport { IconCube } from '@tabler/icons-react';\r\n\r\nconst Component() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"feature\"\r\n      icon={<IconCube />}\r\n      heading=\"Feature Title\"\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      button={{ text: \"Learn More\", onClick: () => console.log(\"Clicked!\"), color: \"white\", backgroundColor: \"blue\" }}\r\n      button2={{ text: \"Contact Us\", onClick: () => console.log(\"Contact Clicked!\"), color: \"blue\", backgroundColor: \"transparent\", border: \"1px solid blue\" }}\r\n      textCenter\r\n      stack\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Feature component showcases key highlights or services with an option for icons, headings, subheadings, paragraphs, and one or two buttons for call-to-action. It supports responsive design, adjusting layout for mobile screens, and allows for text alignment customization. The component can display content in a stacked format or side-by-side, and it has the flexibility to include a list of items. Styling can be customized through CSS properties, and the component utilizes Mantine's theming for consistent design elements.",
    "props": [
      {
        "propName": "icon",
        "propType": "any",
        "propDescription": "Optional icon displayed at the top of the feature component. Can be an image URL or a React component."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Optional heading text for the feature."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "Optional subheading text, displayed below the heading."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "Optional paragraph or array of paragraphs with detailed text."
      },
      {
        "propName": "button",
        "propType": "{ color?: string; backgroundColor?: string; text?: string; onClick?: () => void; border?: string; }",
        "propDescription": "Optional primary button with customizable text, color, background color, border, and click handler."
      },
      {
        "propName": "button2",
        "propType": "{ color?: string; backgroundColor?: string; text?: string; onClick?: () => void; border?: string; }",
        "propDescription": "Optional secondary button with customizable text, color, background color, border, and click handler."
      },
      {
        "propName": "textRight",
        "propType": "boolean",
        "propDescription": "Aligns text to the right. Default alignment is left."
      },
      {
        "propName": "textCenter",
        "propType": "boolean",
        "propDescription": "Centers the text. Overrides textRight if both are true."
      },
      {
        "propName": "textLeft",
        "propType": "boolean",
        "propDescription": "Aligns text to the left. This is the default behavior and is included for explicit configuration."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Optional custom styles applied to the feature component."
      },
      {
        "propName": "stack",
        "propType": "boolean",
        "propDescription": "Stacks the icon and text vertically. Useful for mobile responsiveness."
      },
      {
        "propName": "list",
        "propType": "string[]",
        "propDescription": "Optional list of items to display in a bullet list format."
      }
    ]
  },
  {
    "name": "footer",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Component() {\r\n  return (\r\n    <Block\r\n      type=\"footer\"\r\n      data={data}\r\n      heading=\"Footer title\"\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.png\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Footer component provides a comprehensive structure for a website's footer section, incorporating dynamic content such as images, headings, paragraphs, and links. It supports responsive design for mobile devices, theme-based image switching for light and dark modes, and a variety of social media links. The footer is divided into sections that can include grouped links with titles and individual links. The component leverages Mantine's useMediaQuery hook for responsiveness and useMantineColorScheme for theme detection. It also utilizes dynamic importing for non-server-side rendering components like Transition, enhancing the user experience with animations.",
    "props": [
      {
        "propName": "data",
        "propType": "GroupData[]",
        "propDescription": "Optional array of groups, each containing a title and an array of links, to display in the footer."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "URL of the default image to display in the footer."
      },
      {
        "propName": "imageDarkMode",
        "propType": "string",
        "propDescription": "URL of the image to display in the footer when in dark mode."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Optional heading text for the footer."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "Optional paragraph or array of paragraphs with detailed text."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Optional custom styles applied to the footer component."
      },
      {
        "propName": "linkTwitter",
        "propType": "string",
        "propDescription": "URL for the Twitter social media link."
      },
      {
        "propName": "linkYoutube",
        "propType": "string",
        "propDescription": "URL for the YouTube social media link."
      },
      {
        "propName": "linkInstagram",
        "propType": "string",
        "propDescription": "URL for the Instagram social media link."
      },
      {
        "propName": "linkLinkedin",
        "propType": "string",
        "propDescription": "URL for the LinkedIn social media link."
      },
      {
        "propName": "linkGithub",
        "propType": "string",
        "propDescription": "URL for the GitHub social media link."
      },
      {
        "propName": "linkFacebook",
        "propType": "string",
        "propDescription": "URL for the Facebook social media link."
      },
      {
        "propName": "linkMeta",
        "propType": "string",
        "propDescription": "URL for the Meta social media link."
      },
      {
        "propName": "linkX",
        "propType": "string",
        "propDescription": "URL for an additional social media or external link."
      }
    ]
  },
  {
    "name": "map",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst Component() {\r\n  return (\r\n  <Block\r\n    type=\"map\"\r\n    address=\"Old Toronto, Canada\"\r\n    title=\"Map Title\"\r\n    width=\"100%\"\r\n  />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Map component is designed to embed a Google Map into a React application, allowing users to visually locate an address or point of interest. It supports customization of dimensions, border radius, and additional styling through CSS properties. The map can be titled, and its address query is dynamically encoded to ensure proper display. The component seamlessly integrates into any UI, providing a visual reference point for locations mentioned or needed within the application.",
    "props": [
      {
        "propName": "address",
        "propType": "string",
        "propDescription": "The address or location to display on the map. This is dynamically encoded into the map query."
      },
      {
        "propName": "title",
        "propType": "string",
        "propDescription": "Optional title for the map, included in the address search query."
      },
      {
        "propName": "height",
        "propType": "string | number",
        "propDescription": "The height of the map iframe. Defaults to '600' if not specified."
      },
      {
        "propName": "width",
        "propType": "string | number",
        "propDescription": "The width of the map iframe. Defaults to '100%' if not specified."
      },
      {
        "propName": "frame",
        "propType": "string | number",
        "propDescription": "The frame border of the map iframe. Defaults to '0' if not specified."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Custom styles to be applied to the map container."
      },
      {
        "propName": "borderRadius",
        "propType": "number | string",
        "propDescription": "The border radius of the map iframe, allowing for rounded corners."
      }
    ]
  },
  {
    "name": "markdown",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst Component() {\r\n\r\n  const markdownData = \"## Welcome to Our Platform\\nHere's some **Markdown** content with `code` snippets and more.\\n```js\\nconsole.log('Hello, world!');\\n```\"\r\n\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"markdown\"\r\n      markdown={data}\r\n      image=\"logo.png\"\r\n      heading=\"Markdown Title\"\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      textCenter\r\n      syntaxTheme=\"vs\"\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Markdown component enhances the presentation of Markdown content in a React application, incorporating custom code blocks with syntax highlighting and dynamic content rendering. It features configurable settings for text alignment, styling, and syntax theme selection from predefined options, ensuring versatility in appearance. The component can display associated images, headings, subheadings, and paragraphs, offering a comprehensive content display solution. Additionally, it includes an action icon for easy code snippet copying and supports responsive design adjustments.",
    "props": [
      {
        "propName": "markdown",
        "propType": "string",
        "propDescription": "Markdown content to be rendered, supporting standard Markdown syntax for dynamic text presentation."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "Optional image URL to be displayed, enhancing the visual appeal of the content section."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Optional heading text, providing a title or introduction to the content area."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "Optional subheading text, offering additional context or information below the heading."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "Optional descriptive text or array of texts, complementing the main content with detailed paragraphs."
      },
      {
        "propName": "textRight",
        "propType": "boolean",
        "propDescription": "Aligns text to the right side, enabling layout customization."
      },
      {
        "propName": "textCenter",
        "propType": "boolean",
        "propDescription": "Centers text within the component, suitable for headings or central-focused content."
      },
      {
        "propName": "textLeft",
        "propType": "boolean",
        "propDescription": "Aligns text to the left side, the default text alignment."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Custom CSS properties to style the component container, offering design flexibility."
      },
      {
        "propName": "syntaxTheme",
        "propType": "keyof typeof themeOptions",
        "propDescription": "Specifies the syntax highlighting theme for code blocks within the Markdown content, selectable from predefined options."
      }
    ]
  },
  {
    "name": "navbar",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '#', label: 'Home' },\r\n  { link: '#', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Services',\r\n    links: [\r\n      { link: '#', label: 'Marketing' },\r\n      { link: '#', label: 'Graphic design' },\r\n    ],\r\n  },\r\n  { link: '#', label: 'Contact' },\r\n];\r\n\r\nconst Component() {\r\n  return (\r\n    <Block\r\n      type=\"navbar\"\r\n      links={links}\r\n      heading=\"Navbar title\"\r\n      image=\"logo.png\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      sticky\r\n      theme\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\n// pages/index.tsx\r\nimport type { NextPage } from 'next';\r\nimport Greeting from '../components/Greeting';\r\n\r\nconst Home: NextPage = () => {\r\n  return (\r\n    <div>\r\n      <Greeting name=\"John Doe\" />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Home;\r\n```\r\n",
    "description": "The Navbar component serves as a navigational header for web applications, featuring dynamic content rendering and responsive design. It includes a collapsible drawer for mobile views, theme switching capabilities, and social media action icons for enhanced user engagement. This component supports sticky positioning for persistent visibility, custom styling via CSS properties, and dynamic importing for transition effects, providing a smooth and adaptable user experience. Additionally, it accommodates an optional image or logo, which can be adjusted for dark mode, and a structured list of navigation links, including dropdown menus for hierarchical organization.",
    "props": [
      {
        "propName": "links",
        "propType": "LinkItem[]",
        "propDescription": "Array of navigation links to display in the navbar, each potentially containing a nested array of sub-links for dropdown menus."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Optional heading text to display in the navbar, typically used for branding or the application title."
      },
      {
        "propName": "sticky",
        "propType": "boolean",
        "propDescription": "Determines if the navbar should use sticky positioning, making it remain visible at the top of the viewport as the user scrolls."
      },
      {
        "propName": "theme",
        "propType": "boolean",
        "propDescription": "Enables a theme switcher within the navbar, allowing users to toggle between light and dark modes."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Custom styles to apply to the navbar container, offering design flexibility."
      },
      {
        "propName": "linkTwitter",
        "propType": "string",
        "propDescription": "URL for the Twitter social media link."
      },
      {
        "propName": "linkYoutube",
        "propType": "string",
        "propDescription": "URL for the YouTube social media link."
      },
      {
        "propName": "linkInstagram",
        "propType": "string",
        "propDescription": "URL for the Instagram social media link."
      },
      {
        "propName": "linkLinkedin",
        "propType": "string",
        "propDescription": "URL for the LinkedIn social media link."
      },
      {
        "propName": "linkGithub",
        "propType": "string",
        "propDescription": "URL for the GitHub social media link."
      },
      {
        "propName": "linkFacebook",
        "propType": "string",
        "propDescription": "URL for the Facebook social media link."
      },
      {
        "propName": "linkMeta",
        "propType": "string",
        "propDescription": "URL for the Meta social media link."
      },
      {
        "propName": "linkX",
        "propType": "string",
        "propDescription": "URL for an additional custom social media link."
      },
      {
        "propName": "imageDarkMode",
        "propType": "string",
        "propDescription": "Optional image URL to display in the navbar when dark mode is active, providing a visual adaptation to theme changes."
      }
    ]
  },
  {
    "name": "switches",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst data = [\r\n  { title: \"Enable Notifications\", description: \"Turn on notifications to stay updated.\", backgroundColor: \"#f0f2f5\", disabled: false },\r\n  { title: \"Dark Mode\", description: \"Enable dark mode for a better night-time reading experience.\", disabled: false }\r\n];\r\n\r\nconst Component() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"switches\"\r\n      data={data}\r\n      onSwitchChange={(title, checked) => console.log(`${title} is now ${checked ? 'enabled' : 'disabled'}`)}\r\n      heading=\"Switches Title\"\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      textCenter\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The switches block is a customizable and responsive UI block that presents a series of switchable options, each with a title and description. It supports dynamic interaction through an optional callback function for switch state changes. The component can include a heading, subheading, and paragraphs for additional context, with text alignment customizable via props. Designed for flexibility, it allows for the customization of the switch's background color and disabled state on a per-item basis. The use of dynamic imports and responsive design techniques ensures a smooth user experience across device sizes.",
    "props": [
      {
        "propName": "data",
        "propType": "SwitchDataItem[]",
        "propDescription": "An array of items to be displayed, each with a title, description, optional background color, and disabled state."
      },
      {
        "propName": "onSwitchChange",
        "propType": "function",
        "propDescription": "Optional callback function that is called when any switch is toggled, receiving the title of the switched item and its new state."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Optional heading text for the switch block."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "Optional subheading text, providing additional context."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "Optional paragraph or array of paragraphs to accompany the heading and subheading."
      },
      {
        "propName": "textRight",
        "propType": "boolean",
        "propDescription": "Aligns the text to the right. Default alignment is left."
      },
      {
        "propName": "textCenter",
        "propType": "boolean",
        "propDescription": "Centers the text. Overrides textRight if both are true."
      },
      {
        "propName": "textLeft",
        "propType": "boolean",
        "propDescription": "Aligns the text to the left. This is the default behavior and is included for explicit configuration."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Custom styles to be applied to the switch block container."
      }
    ]
  },
  {
    "name": "table",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst data = [\r\n  { id: '1', name: 'John Doe', email: 'john@doe.com', role: 'Administrator' },\r\n  { id: '2', name: 'Jane Doe', email: 'jane@doe.com', role: 'User' }\r\n];\r\n\r\nconst headers = [\r\n  { key: 'id', label: 'ID' },\r\n  { key: 'name', label: 'Name' },\r\n  { key: 'email', label: 'Email' },\r\n  { key: 'role', label: 'Role' }\r\n];\r\n\r\nconst Component() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"table\"\r\n      data={data}\r\n      headers={headers}\r\n      striped\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The table block is designed to render tabular data, providing flexibility through customizable headers, styling options, and interactive features like row highlighting on hover and striped rows for enhanced readability. It utilizes the Mantine Table component as its foundation, allowing for the seamless integration of Mantine's design system and features. The component accepts an array of data items and headers, where each header defines a column in the table, and each data item corresponds to a row with values mapped to each column.",
    "props": [
      {
        "propName": "data",
        "propType": "DataItem[]",
        "propDescription": "An array of objects where each object represents a row in the table, with key-value pairs corresponding to column data."
      },
      {
        "propName": "headers",
        "propType": "{ key: string; label: string }[]",
        "propDescription": "Defines the columns of the table. Each header object should contain a 'key' matching data object keys and a 'label' for the column header."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Custom CSS styles to be applied to the table."
      },
      {
        "propName": "striped",
        "propType": "boolean",
        "propDescription": "If true, rows will have alternating background colors. Defaults to false."
      },
      {
        "propName": "highlightOnHover",
        "propType": "boolean",
        "propDescription": "If true, rows will be highlighted when hovered over. Defaults to false."
      }
    ]
  },
  {
    "name": "video",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst Component() {\r\n  return (\r\n  <>\r\n    <Block\r\n      type=\"video\"\r\n      video=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"\r\n      autoplay={false}\r\n      controls={true}\r\n      loop={true}\r\n      muted={false}\r\n    />\r\n  </>\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Video block is designed to embed a video within a React application, supporting both direct video file sources and YouTube links. It offers various playback options such as autoplay, loop, and mute, along with control visibility. The component can be styled using CSS properties and also allows for specifying dimensions. For YouTube videos, it automatically constructs the appropriate embed URL. Additional visual customization can be applied via className, padding, and margin properties.",
    "props": [
      {
        "propName": "video",
        "propType": "string",
        "propDescription": "The source URL of the video. Can be a direct link to a video file or a YouTube link."
      },
      {
        "propName": "autoplay",
        "propType": "boolean",
        "propDescription": "If true, the video will start playing as soon as it is ready. Defaults to false."
      },
      {
        "propName": "controls",
        "propType": "boolean",
        "propDescription": "Determines whether video controls should be displayed. Defaults to true."
      },
      {
        "propName": "loop",
        "propType": "boolean",
        "propDescription": "If true, the video will start over again, every time it is finished. Defaults to false."
      },
      {
        "propName": "muted",
        "propType": "boolean",
        "propDescription": "If true, the video will be muted. Defaults to false."
      },
      {
        "propName": "poster",
        "propType": "string",
        "propDescription": "The image to be shown while the video is downloading, or until the user hits the play button."
      },
      {
        "propName": "style",
        "propType": "CSSProperties",
        "propDescription": "Custom CSS styles to be applied to the video container."
      },
      {
        "propName": "width",
        "propType": "string",
        "propDescription": "The width of the video, which can be in percentages or pixels. Defaults to '100%'."
      },
      {
        "propName": "height",
        "propType": "string",
        "propDescription": "The height of the video, which can be in percentages or pixels. Defaults to '80vh'."
      },
      {
        "propName": "className",
        "propType": "string",
        "propDescription": "Custom class name to be applied to the video container for further styling."
      },
      {
        "propName": "padding",
        "propType": "string | number",
        "propDescription": "Padding around the video within its container."
      },
      {
        "propName": "margin",
        "propType": "string | number",
        "propDescription": "Margin around the video container."
      }
    ]
  }
];