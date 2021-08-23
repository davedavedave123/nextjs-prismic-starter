import React from 'react';
import Image from 'next/image';

import Button from './Button';

const Icon = ({ src, alt }) => (
  <div className='w-5 h-5 mr-2 relative'>
    <Image src={src} alt={alt} layout='fill' objectFit='cover' />
  </div>
);

export const CardContentList = ({ list }) => (
  <ul>
    {list.map((item, index) => (
      <li key={`content-list-${index}`} className='flex items-center'>
        <Icon src={item.icon.src} alt={item.icon.alt} /> {item.text}
      </li>
    ))}
  </ul>
);

export const CardContent = ({
  smallTitle,
  bigTitle,
  BigTitleComponent,
  buttonTitle,
  buttonOnClick,
  children,
}) => {
  return (
    <div className='w-full h-1/2 p-4 flex justify-center items-center relative'>
      <div className='relative flex flex-col items-center'>
        <small className='text-green-700'>{smallTitle}</small>
        <div>
          {BigTitleComponent}
          {bigTitle && (
            <strong>
              <h3 className='inline-block'>{bigTitle}</h3>
              {/* <span className='inline-block'>per hr</span> */}
            </strong>
          )}
        </div>
        <hr className='w-16 mt-2 mb-5 border-bottom border-gray-400' />
        {children}
        {buttonTitle && (
          <Button
            title={buttonTitle}
            onClick={buttonOnClick}
            className='mt-5 bg-blue-300 border-blue-300 text-white hover:text-blue-300'
          />
        )}
      </div>
    </div>
  );
};

export default function Card({ src, alt, children }) {
  return (
    <div
      className='anim-up w-80 h-96 flex-shrink-0 rounded-xl overflow-hidden relative shadow-xl m-20'
      style={{ height: '40rem' }}
    >
      <div className='w-full h-1/2 relative'>
        <Image src={src} alt={alt} layout='fill' objectFit='cover' />
      </div>
      {/* <CardContent /> */}
      {children}
    </div>
  );
}
