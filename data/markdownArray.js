export const markdownArray = [
  {
    "name": "footer",
    "content": "```typescript\r\n// pages/index.tsx\r\nimport type { NextPage } from 'next';\r\nimport Greeting from '../components/Greeting';\r\n\r\nconst Home: NextPage = () => {\r\n  return (\r\n    <div>\r\n      <Greeting name=\"John Doe\" />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Home;\r\n```"
  },
  {
    "name": "navbar",
    "content": "```typescript\r\n// components/Greeting.tsx\r\n\r\nimport React from 'react';\r\n\r\n// Define the props interface\r\ninterface GreetingProps {\r\n  name: string; // Expect a name prop of type string\r\n}\r\n\r\n// Functional component with props type defined\r\nconst Greeting: React.FC<GreetingProps> = ({ name }) => {\r\n  return (\r\n    <div>\r\n      <h1>Hello, {name}!</h1>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Greeting;\r\n```"
  }
];
