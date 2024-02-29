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
import { NormalComponents, SpecialComponents } from 'react-markdown/lib/ast-to-react';

const TransitionWrapper = dynamic(() => import('./wrappers/TransitionWrapper'), {
  ssr: false,
});

interface CustomComponents extends Omit<NormalComponents, 'code'>, SpecialComponents {
  code: ({ node, inline, className, children, ...props }: {
    node: any;
    inline?: boolean;
    className?: string;
    children: React.ReactNode;
  } & React.HTMLProps<HTMLPreElement>) => React.ReactNode;
}

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

export const MarkdownBlock: React.FC<MarkdownProps> = ({
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

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Box>
      <TransitionWrapper transitionFrom="left">
        {!isMobile && image && (
          <Box p="lg">
            <Image src={image} alt="" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
          </Box>
        )}
      </TransitionWrapper>
      <Box style={{ textAlign: textAlign }} p="md">
        {heading && <Title>{heading}</Title>}
        {subheading && <Text size="lg" color="dimmed">{subheading}</Text>}
        {typeof paragraph === 'string' ? (
          <Text>{paragraph}</Text>
        ) : (
          paragraph?.map((p, index) => <Text key={index}>{p}</Text>)
        )}
      </Box>
      <ReactMarkdown
      components={{
        code({ node, inline = false, className, children, ...props }: CustomComponents['code']) => {
              const match = /language-(\w+)/.exec(className || '');
              const shouldApplySpecialStyling = String(children).startsWith('$$!');
              const contentToDisplay = shouldApplySpecialStyling ?
                  String(children).slice(3) :
                  String(children);
            return !inline && match ? (
              <>
              <Code style={{width: isMobile ? "80vw" : "60vw"}}>
              <Header style={{borderTopLeftRadius:'6px', borderTopRightRadius:'6px', display:'flex'}}>
                <ActionIcon style={{right:'5px', float:'right'}} onClick={() => copyToClipboard(String(children).replace(/\n$/, ''))}>
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
        } as CustomComponents }
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};
