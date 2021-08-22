import React from 'react';

const Quote = ({
  body,
  author,
  className,
  textClassName,
  authorClassName,
  authorWrapperClassName,
  small,
}) => {
  const textSize = small ? 'text-xl' : 'text-4xl';

  return (
    <section
      className={`relative container quote w-full flex justify-center items-center flex-col ${className}`}
    >
      <div className='relative max-w-4xl'>
        <blockquote className={`${textSize} italic ${textClassName}`}>
          {body}
        </blockquote>
        {author && (
          <div
            className={`pt-4 flex justify-end relative w-full ${authorWrapperClassName}`}
          >
            <cite className={`${authorClassName}`}>{author}</cite>
          </div>
        )}
      </div>
      <style jsx>{`
        .quote blockquote:before,
        .quote blockquote:after {
          color: #e9e9e9;
          content: open-quote;
          font-family: 'Lora', Serif;
          font-size: 2.5em;
          font-weight: 900;
          line-height: 0.1em;
          margin-left: 10px;
          margin-right: 10px;
          vertical-align: -0.3em;
        }
        .quote blockquote:after {
          content: close-quote;
        }
        .quote div cite:before {
          content: '-';
          margin: 16px 4px 0px 0px;
        }
      `}</style>
    </section>
  );
};

export default Quote;
