import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Language } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  className: string;
}

export default ({ children, className }: CodeBlockProps) => {
  const language = (className ?? '').toLowerCase();

  return (
    <Highlight
      theme={themes.duotoneDark} // Specify the theme directly from `themes`
      code={children}
      language={language as Language}
    >
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};