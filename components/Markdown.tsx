import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import { FunctionComponent, useState, useEffect } from 'react';
import { IconClipboard } from '@tabler/icons-react';
import { ActionIcon, Box, Text, Title, Image } from '@mantine/core';
import { css } from '@emotion/react';
import { useMediaQuery } from "@mantine/hooks";
import dynamic from 'next/dynamic';

interface CodeComponentProps {
    node?: any;
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Transition = dynamic(() => import('./wrappers/Transition'), {
  ssr: false,
});

const Header = styled.div`
    align-items: center;
    justify-content: flex-end;
    background: #191919;
    height: 2.5rem;
    padding: 0.1rem 0.1rem 0 0.5rem;
`;

const CodeBlockContainer = styled.div`
  max-width: 100%;
  overflow: auto;
`;

const Code = styled.div`
    padding: 0;
    border-radius: 0.25rem;
    overflow: hidden;
`;

interface MarkdownProps {
  markdown: string;
  image?: string;
  heading?: string;
  subheading?: string;
  paragraph?: string | string[];
  textRight?: boolean;
  textCenter?: boolean;
  textLeft?: boolean;
}

const Markdown: React.FC<MarkdownProps> = ({
  markdown,
  image,
  heading,
  subheading,
  paragraph,
  textRight,
  textCenter,
  textLeft,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  let textAlign: React.CSSProperties['textAlign'] = 'left';
  if (textRight) textAlign = 'right';
  else if (textCenter) textAlign = 'center';

  const renderParagraphs = () => {
    if (typeof paragraph === 'string') {
      return <Text>{paragraph}</Text>;
    } else if (Array.isArray(paragraph)) {
      return paragraph.map((p, index) => <Text key={index}>{p}</Text>);
    }
    return null;
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Box>
      <Transition transitionFrom="left">
        {!isMobile && image && (
          <Box p="lg">
            <Image src={image} alt="" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
          </Box>
        )}
      </Transition>
      {(heading || paragraph || subheading) && (
        <Box style={{ textAlign: textAlign }} p="md">
          {heading && <Title>{heading}</Title>}
          {subheading && <Text size="lg" color="dimmed">{subheading}</Text>}
          {renderParagraphs()}
        </Box>
      )}
      <ReactMarkdown
      components={{
        code({ node, inline = false, className, children, ...props }: CodeComponentProps) {
              const match = /language-(\w+)/.exec(className || '');
              const shouldApplySpecialStyling = String(children).startsWith('$$!');
              const contentToDisplay = shouldApplySpecialStyling ?
                  String(children).slice(3) :
                  String(children);
            return !inline && match ? (
              <>
              <Code style={{width: "100%", height:'100%'}}>
              <Header style={{borderTopLeftRadius:'6px', borderTopRightRadius:'6px', display:'flex'}}>
                <ActionIcon variant="transparent" style={{right:'5px', float:'right'}} onClick={() => copyToClipboard(String(children).replace(/\n$/, ''))}>
                  <IconClipboard size="1rem" style={{marginRight:'3px', color:'white'}}/>
                </ActionIcon>
                </Header>
                <Box style={{marginTop:'-1vh'}}>
                <CodeBlockContainer>
                {shouldApplySpecialStyling ? (
                    <SyntaxHighlighter
                      css={css`
                        max-width: 100%;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                        overflow-x: auto;
                        line-height: 0.5;
                        letter-spacing: -2.5px;
                      `}
                      style={vscDarkPlus as any}
                      language={match?.[1] || 'text'}
                      PreTag="div"
                      {...props}
                    >
                        {contentToDisplay}
                    </SyntaxHighlighter>
                ) : (
                    <SyntaxHighlighter
                      css={css`
                        max-width: 100%;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                        overflow-x: auto;
                      `}
                      style={vscDarkPlus as any}
                      language={match?.[1] || 'text'}
                      PreTag="div"
                      {...props}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                )}
                </CodeBlockContainer>
              </Box>
            </Code>
          </>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default Markdown;
