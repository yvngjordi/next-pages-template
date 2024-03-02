import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const descriptionsPath = path.join(process.cwd(), 'data', 'blockDescriptions.json');
const descriptionsData = JSON.parse(fs.readFileSync(descriptionsPath, 'utf8'));

const mdxDirectory = path.join(process.cwd(), 'mdx/blocks');
const outputFilePath = path.join(process.cwd(), 'data', 'blocksArray.js');

fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

const filenames = fs.readdirSync(mdxDirectory);

const markdownArray = filenames
  .filter(filename => filename.endsWith('.mdx') && !filename.endsWith('-1.mdx'))
  .map(filename => {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(mdxDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);

    const secondaryFilePath = path.join(mdxDirectory, `${slug}-1.mdx`);
    let content2 = '';
    if (fs.existsSync(secondaryFilePath)) {
      const secondaryFileContent = fs.readFileSync(secondaryFilePath, 'utf8');
      const { content: secondaryContent } = matter(secondaryFileContent);
      content2 = secondaryContent;
    }

    const descriptionEntry = descriptionsData.find(desc => desc.name === slug);
    const description = descriptionEntry?.description || '';
    const props = descriptionEntry?.props || [];

    return { name: slug, content, content2, description, props };
  });

const moduleContent = `export const blocksArray = ${JSON.stringify(markdownArray, null, 2)};`;
fs.writeFileSync(outputFilePath, moduleContent);
