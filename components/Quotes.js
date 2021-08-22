import React from 'react';
import Quote from './Quote';

const QUOTES = [
  {
    body: 'this is a quote. A very long long quote. this is a quote. A very long long quote. this is a quote. A very long long quote.',
    author: 'someone',
  },
  {
    body: 'this is a quote. A very long long quote. this is a quote. A very long long quote. this is a quote. A very long long quote.',
    author: 'someone',
  },
  {
    body: 'this is a quote. A very long long quote. this is a quote. A very long long quote. this is a quote. A very long long quote.',
    author: 'someone',
  },
];

export default function Quotes({ className }) {
  return (
    <section
      className={`w-full flex flex-col lg:flex-row lg:justify-around ${className}`}
    >
      {QUOTES.map((quote, index) => (
        <Quote
          key={`quote-${index}`}
          body={quote.body}
          author={quote.author}
          small
          className='px-20 py-10'
        />
      ))}
    </section>
  );
}
