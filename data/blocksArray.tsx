export const blocksArray = [
  {
    "name": "banner",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Banner component displays a message or content in a styled banner format. It supports customization for background and text color, optional click actions, and the ability to include an icon.",
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
      }
    ]
  },
  {
    "name": "contact",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The ContactForm component provides a comprehensive form for users to fill out and submit contact information. It supports captcha verification for additional security and can be customized with various styles and content.",
    "props": [
      {
        "propName": "dropdown",
        "propType": "{ value: string; label: string }[]",
        "propDescription": "An array of objects for the dropdown select field, each containing a value and a label."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "URL or path to an image displayed within the form."
      },
      {
        "propName": "fetchLink",
        "propType": "string",
        "propDescription": "The endpoint URL to which the form data is submitted."
      },
      {
        "propName": "captcha",
        "propType": "boolean",
        "propDescription": "Determines whether a captcha is required for form submission."
      },
      {
        "propName": "siteKey",
        "propType": "string",
        "propDescription": "The site key for the captcha, required if captcha is enabled."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "The main heading text displayed at the top of the form."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "A subheading text displayed under the main heading."
      },
      {
        "propName": "paragraphs",
        "propType": "string[]",
        "propDescription": "An array of strings for additional paragraphs of text displayed within the form area."
      },
      {
        "propName": "buttonLabel",
        "propType": "string",
        "propDescription": "The label text for the form submission button."
      },
      {
        "propName": "button",
        "propType": "React.CSSProperties",
        "propDescription": "CSS properties to style the submission button."
      }
    ]
  },
  {
    "name": "embed",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Embed component is designed to embed documents like PDF, DOCX, PPTX, or other files into your application using an iframe. It supports customization of the iframe's appearance and functionality through various props.",
    "props": [
      {
        "propName": "src",
        "propType": "string",
        "propDescription": "The source URL of the document to be embedded."
      },
      {
        "propName": "type",
        "propType": "'pdf' | 'docx' | 'pptx' | 'other'",
        "propDescription": "Specifies the type of the document to be embedded. Based on the type, the component decides the embedding strategy."
      },
      {
        "propName": "margin",
        "propType": "string",
        "propDescription": "Optional. Specifies the margin around the iframe. Default is '0'."
      },
      {
        "propName": "padding",
        "propType": "string",
        "propDescription": "Optional. Specifies the padding inside the iframe container. Default is '0'."
      },
      {
        "propName": "controls",
        "propType": "boolean",
        "propDescription": "Optional. Determines whether the embedded document should be allowed to enter full-screen mode. Default is true."
      },
      {
        "propName": "width",
        "propType": "string",
        "propDescription": "Optional. Specifies the width of the iframe. Default is '100%'."
      },
      {
        "propName": "height",
        "propType": "string",
        "propDescription": "Optional. Specifies the height of the iframe container. Default is '80vh'."
      }
    ]
  },
  {
    "name": "feature",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Feature component showcases key features or services with optional icons, headings, subheadings, and descriptive text. It supports customizable buttons for calls to action.",
    "props": [
      {
        "propName": "icon",
        "propType": "ReactNode | string",
        "propDescription": "An optional icon or image to visually represent the feature. Can be a React component or a string URL for an image."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "The heading text for the feature."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "A subheading providing additional information about the feature."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "A paragraph or an array of paragraphs describing the feature in detail."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "URL of an image to visually represent the feature."
      },
      {
        "propName": "variant",
        "propType": "string",
        "propDescription": "A variant prop to alter the visual appearance of the component."
      },
      {
        "propName": "button",
        "propType": "object",
        "propDescription": "An object specifying the properties of a primary action button, including text, color, and click event handler."
      },
      {
        "propName": "button2",
        "propType": "object",
        "propDescription": "An object for a secondary action button similar to the `button` prop."
      },
      {
        "propName": "textRight",
        "propType": "boolean",
        "propDescription": "Aligns the text to the right."
      },
      {
        "propName": "textCenter",
        "propType": "boolean",
        "propDescription": "Centers the text."
      },
      {
        "propName": "textLeft",
        "propType": "boolean",
        "propDescription": "Aligns the text to the left (default alignment)."
      },
      {
        "propName": "list",
        "propType": "string[]",
        "propDescription": "An optional list of items related to the feature, displayed as bullet points."
      }
    ]
  },
  {
    "name": "footer",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Footer component provides a structured area at the bottom of your pages for displaying additional information, links, and social media icons. It supports responsiveness and theming.",
    "props": [
      {
        "propName": "data",
        "propType": "GroupData[]",
        "propDescription": "An array of group data objects, each containing a title and an array of link items for structured footer navigation."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "URL or path to the logo or image to be displayed prominently in the footer."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "The main text or title displayed in the footer, typically the name of the organization or application."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "Additional text or information displayed in the footer. Can be a single string or an array of strings for multiple paragraphs."
      },
      {
        "propName": "linkTwitter",
        "propType": "string",
        "propDescription": "URL for the Twitter social media icon link in the footer."
      },
      {
        "propName": "linkYoutube",
        "propType": "string",
        "propDescription": "URL for the YouTube social media icon link in the footer."
      },
      {
        "propName": "linkInstagram",
        "propType": "string",
        "propDescription": "URL for the Instagram social media icon link in the footer."
      },
      {
        "propName": "linkLinkedin",
        "propType": "string",
        "propDescription": "URL for the LinkedIn social media icon link in the footer."
      },
      {
        "propName": "linkGithub",
        "propType": "string",
        "propDescription": "URL for the GitHub social media icon link in the footer."
      },
      {
        "propName": "linkFacebook",
        "propType": "string",
        "propDescription": "URL for the Facebook social media icon link in the footer."
      },
      {
        "propName": "linkMeta",
        "propType": "string",
        "propDescription": "URL for the Meta (formerly Facebook) social media icon link in the footer."
      },
      {
        "propName": "linkX",
        "propType": "string",
        "propDescription": "URL for an additional social media or external link represented by an 'X' icon in the footer."
      }
    ]
  },
  {
    "name": "map",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Map component renders an interactive map based on a given address. It supports customization of its appearance and dimensions, and it embeds Google Maps to show the specified location with an optional title.",
    "props": [
      {
        "propName": "address",
        "propType": "string",
        "propDescription": "The physical address or location to be displayed on the map. This is a required prop for the component to function."
      },
      {
        "propName": "title",
        "propType": "string",
        "propDescription": "An optional title for the map location which can be used to provide additional context to the map marker."
      },
      {
        "propName": "height",
        "propType": "string | number",
        "propDescription": "The height of the map. It can be specified as a number (pixels) or a string (percentage or any CSS unit). The default value is '600'."
      },
      {
        "propName": "width",
        "propType": "string | number",
        "propDescription": "The width of the map. It can be specified as a number (pixels) or a string (percentage or any CSS unit). The default value is '100%'."
      },
      {
        "propName": "frame",
        "propType": "string | number",
        "propDescription": "The frame border thickness of the map iframe. This can be set to '0' to hide the border."
      },
      {
        "propName": "borderRadius",
        "propType": "number | string",
        "propDescription": "The border radius of the map iframe, allowing for rounded corners. This can be specified as a number (pixels) or a string (any CSS unit)."
      }
    ]
  },
  {
    "name": "markdown",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Markdown component is designed to render markdown content dynamically. It supports custom styling and can render both inline and block code snippets with optional syntax highlighting. The component is versatile, allowing for the inclusion of images, headings, paragraphs, and custom React components.",
    "props": [
      {
        "propName": "markdown",
        "propType": "string",
        "propDescription": "The markdown string to be rendered by the component."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "An optional image URL to be rendered within the markdown content."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "An optional heading text to be displayed above the markdown content."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "An optional subheading text to provide additional context or information."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "Optional paragraph content that can be a single string or an array of strings for multiple paragraphs."
      },
      {
        "propName": "textRight",
        "propType": "boolean",
        "propDescription": "Aligns the text to the right if set to true."
      },
      {
        "propName": "textCenter",
        "propType": "boolean",
        "propDescription": "Centers the text if set to true."
      },
      {
        "propName": "textLeft",
        "propType": "boolean",
        "propDescription": "Aligns the text to the left if set to true. This is the default alignment."
      }
    ]
  },
  {
    "name": "navbar",
    "content": "```typescript\r\n// pages/index.tsx\r\nimport type { NextPage } from 'next';\r\nimport Greeting from '../components/Greeting';\r\n\r\nconst Home: NextPage = () => {\r\n  return (\r\n    <div>\r\n      <Greeting name=\"John Doe\" />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Home;\r\n```\r\n",
    "content2": "```typescript\r\n// pages/index.tsx\r\nimport type { NextPage } from 'next';\r\nimport Greeting from '../components/Greeting';\r\n\r\nconst Home: NextPage = () => {\r\n  return (\r\n    <div>\r\n      <Greeting name=\"John Doe\" />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Home;\r\n```\r\n",
    "description": "The Navbar component serves as the navigation header for your application. It supports responsiveness, theming, and contains links for navigation. Additionally, it can display social media icons and has a mobile-friendly design with a drawer for smaller screens.",
    "props": [
      {
        "propName": "links",
        "propType": "LinkItem[]",
        "propDescription": "An array of objects representing each navigation link. Each object can optionally contain a nested `links` array for dropdown menus."
      },
      {
        "propName": "image",
        "propType": "string",
        "propDescription": "URL or path to the logo image to be displayed in the navbar."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "Text to be displayed alongside the logo as the site or application name."
      },
      {
        "propName": "sticky",
        "propType": "boolean",
        "propDescription": "Determines if the navbar should stick to the top of the viewport when scrolling."
      },
      {
        "propName": "theme",
        "propType": "boolean",
        "propDescription": "Flag to indicate if a theme switcher should be displayed, allowing users to toggle between light and dark modes."
      },
      {
        "propName": "linkTwitter",
        "propType": "string",
        "propDescription": "URL for the Twitter social media icon link."
      },
      {
        "propName": "linkYoutube",
        "propType": "string",
        "propDescription": "URL for the YouTube social media icon link."
      },
      {
        "propName": "linkInstagram",
        "propType": "string",
        "propDescription": "URL for the Instagram social media icon link."
      },
      {
        "propName": "linkLinkedin",
        "propType": "string",
        "propDescription": "URL for the LinkedIn social media icon link."
      },
      {
        "propName": "linkGithub",
        "propType": "string",
        "propDescription": "URL for the Github social media icon link."
      },
      {
        "propName": "linkFacebook",
        "propType": "string",
        "propDescription": "URL for the Facebook social media icon link."
      },
      {
        "propName": "linkMeta",
        "propType": "string",
        "propDescription": "URL for the Meta social media icon link."
      },
      {
        "propName": "linkX",
        "propType": "string",
        "propDescription": "URL for any additional social media icon link, represented by an 'X' icon."
      }
    ]
  },
  {
    "name": "switches",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The SwitchBlock component displays a list of switchable items, each with a title and description. It's designed for toggling settings or features within your application. The component allows for customization of the switches' appearance and provides hooks for handling switch changes.",
    "props": [
      {
        "propName": "data",
        "propType": "SwitchDataItem[]",
        "propDescription": "An array of objects representing the switchable items. Each item can have a title, description, optional background color, and disabled state."
      },
      {
        "propName": "onSwitchChange",
        "propType": "function",
        "propDescription": "A function called when any switch changes state. It receives the title of the switch and the new checked state as arguments."
      },
      {
        "propName": "heading",
        "propType": "string",
        "propDescription": "The heading text displayed above the switch items."
      },
      {
        "propName": "subheading",
        "propType": "string",
        "propDescription": "A subheading text displayed under the heading."
      },
      {
        "propName": "paragraph",
        "propType": "string | string[]",
        "propDescription": "A paragraph or array of paragraphs displayed under the subheading. Provides additional information or context."
      },
      {
        "propName": "textRight",
        "propType": "boolean",
        "propDescription": "Aligns the text to the right. This flag is mutually exclusive with textCenter and textLeft."
      },
      {
        "propName": "textCenter",
        "propType": "boolean",
        "propDescription": "Centers the text. This flag is mutually exclusive with textRight and textLeft."
      },
      {
        "propName": "textLeft",
        "propType": "boolean",
        "propDescription": "Aligns the text to the left. This is the default alignment and is overridden by textRight and textCenter if they are set to true."
      }
    ]
  },
  {
    "name": "table",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "A flexible and reusable table component that displays data in a tabular format. It extends Mantine's Table component with additional functionality to dynamically generate rows based on provided data and headers.",
    "props": [
      {
        "propName": "data",
        "propType": "Element[]",
        "propDescription": "An array of objects representing each row's data in the table. Each object must include the properties `position`, `name`, `symbol`, and `mass`."
      },
      {
        "propName": "headers",
        "propType": "string[]",
        "propDescription": "An array of strings representing the column headers of the table."
      },
      {
        "propName": "TableProps",
        "propType": "TableProps",
        "propDescription": "Props inherited from Mantine's Table component. This allows for customization of the table's appearance and functionality as defined by Mantine's Table API."
      }
    ]
  },
  {
    "name": "video",
    "content": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "content2": "```typescript\r\nimport { Block } from '@sparkblock/core';\r\n\r\nconst links = [\r\n  { link: '/', label: 'Home' },\r\n  { link: '/about', label: 'About' },\r\n  {\r\n    link: '#1',\r\n    label: 'Resources',\r\n    links: [\r\n      { link: '/resource-1', label: 'Resource 1' },\r\n      { link: '/resource-2', label: 'Resource 2' },\r\n    ],\r\n  },\r\n  { link: '/contact', label: 'Contact' },\r\n];\r\n\r\nconst Docs() {\r\n  return (\r\n    <Block\r\n      type={name}\r\n      data={data}\r\n      heading={`Footer title`}\r\n      paragraph=\"This is some example paragraph text for this block type. Copy the code in the tab above!\"\r\n      image=\"logo.PNG\"\r\n      linkTwitter=\"#\"\r\n      linkInstagram=\"#\"\r\n      linkFacebook=\"#\"\r\n      linkLinkedin=\"#\"\r\n      linkX=\"#\"\r\n      linkGithub=\"#\"\r\n      linkMeta=\"#\"\r\n      linkYoutube=\"#\"\r\n    />\r\n  );\r\n}\r\n```\r\n",
    "description": "The Video component is designed to embed video content into your application. It supports both direct video file sources and YouTube video links, with options to control playback settings such as autoplay, loop, and mute. Additional styling options like width, height, padding, and margin can be customized.",
    "props": [
      {
        "propName": "src",
        "propType": "string",
        "propDescription": "The source URL of the video. This can be a direct video file link or a YouTube video URL."
      },
      {
        "propName": "autoplay",
        "propType": "boolean",
        "propDescription": "Sets whether the video should start playing automatically on load."
      },
      {
        "propName": "controls",
        "propType": "boolean",
        "propDescription": "Determines whether video controls should be displayed."
      },
      {
        "propName": "loop",
        "propType": "boolean",
        "propDescription": "Sets whether the video should loop back to the beginning once it reaches the end."
      },
      {
        "propName": "muted",
        "propType": "boolean",
        "propDescription": "Sets whether the video's sound should be muted."
      },
      {
        "propName": "poster",
        "propType": "string",
        "propDescription": "URL for an image to be shown while the video is downloading, or until the user hits the play button."
      },
      {
        "propName": "width",
        "propType": "string",
        "propDescription": "Sets the width of the video player. This can be any CSS value (e.g., px, %, vh)."
      },
      {
        "propName": "height",
        "propType": "string",
        "propDescription": "Sets the height of the video player. This can be any CSS value (e.g., px, %, vh)."
      },
      {
        "propName": "className",
        "propType": "string",
        "propDescription": "A className for applying custom CSS styles to the video player."
      },
      {
        "propName": "padding",
        "propType": "string | number",
        "propDescription": "Sets the padding around the video player. This can be a numeric value (interpreted as pixels) or any other valid CSS padding value."
      },
      {
        "propName": "margin",
        "propType": "string | number",
        "propDescription": "Sets the margin around the video player. This can be a numeric value (interpreted as pixels) or any other valid CSS margin value."
      }
    ]
  }
];