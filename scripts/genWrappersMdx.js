import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const mdxDirectory = path.join(process.cwd(), 'mdx/wrappers');
const outputFilePath = path.join(process.cwd(), 'data', 'wrappersArray.js');

fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

const filenames = fs.readdirSync(mdxDirectory);

const markdownArray = filenames
  .filter(filename => filename.endsWith('.mdx'))
  .map(filename => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(mdxDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    return { name: slug, content };
  });

const moduleContent = `export const wrappersArray = ${JSON.stringify(markdownArray, null, 2)};`;
fs.writeFileSync(outputFilePath, moduleContent);
