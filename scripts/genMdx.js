import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const mdxDirectory = path.join(process.cwd(), 'mdx');
const outputFilePath = path.join(process.cwd(), 'data', 'markdownArray.js');

fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

const filenames = fs.readdirSync(mdxDirectory);

const markdownContent = filenames
  .filter(filename => filename.endsWith('.mdx'))
  .reduce((acc, filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(mdxDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    acc[slug] = content;
    return acc;
  }, {});

const moduleContent = `export const markdownArray = ${JSON.stringify(markdownContent, null, 2)};`;
fs.writeFileSync(outputFilePath, moduleContent);
