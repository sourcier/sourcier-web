import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import rangeParser from 'parse-numeric-range';
import clsx from 'clsx';

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const copyToClipboard = (str) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(function (err) {
      console.error('Could not copy text: ', err);
    });
  } else if (window['clipboardData']) {
    // Internet Explorer
    window['clipboardData'].setData('Text', str);
  }
};

const Code = (props) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const className = props.children.props.className || '';
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, '');
  const file = props.children.props.file;
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ''
  );

  return (
    <div className="bg-[#282a36] rounded-lg my-8 pl-6">
      <div className="relative flex">
        <div className="flex items-center justify-center px-2 mr-4 font-bold text-white uppercase rounded-b-lg bg-primary">{`${language}`}</div>
        <div className="flex items-center justify-center font-serif italic text-gray-400">
          {file && `${file}`}
        </div>
        <div className="flex-1" />
        <button
          onClick={() => {
            copyToClipboard(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
          }}
          className="m-2 btn btn-primary btn-sm"
        >
          {isCopied ? '🎉 Copied!' : 'Copy'}
        </button>
      </div>
      <div className="overflow-auto rounded-lg">
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={clsx(className, 'm-0 px-0')} style={style}>
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    background: highlights(i) ? '#44475a' : 'transparent',
                  }}
                  className="block"
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;
