import React from 'react';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs';

const CardSlice = ({ slice }) => (
  <section>
    <span className='title'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside the SliceMachine builder!</p>
    )}
    {slice.primary.image ? (
      <div className='w-96 h-20 relative'>
        <Image src={slice.primary.image.url} layout='fill' objectFit='cover' />
      </div>
    ) : (
      <p>Should be image here</p>
    )}
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

CardSlice.displayName = CardSlice;

export default CardSlice;
