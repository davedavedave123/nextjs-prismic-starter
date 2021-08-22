import React from 'react';
import ServiceWithImage from './ServiceWithImage';

const SERVICES = [
  {
    img: { url: '/images/GOPR9291.jpg', alt: 'something' },
    title: 'We Do Work',
    body: "This is some text explaining why we're better at doing work",
  },
  {
    img: { url: '/images/GOPR9300.jpg', alt: 'something' },
    title: 'We Do Work',
    body: "This is some text explaining why we're better at doing work",
  },
  {
    img: { url: '/images/GOPR9304.jpg', alt: 'something' },
    title: 'We Do Work',
    body: "This is some text explaining why we're better at doing work",
  },
];

export default function Services() {
  return (
    <div className='w-full relative flex flex-col md:flex-row items-center sm:justify-around'>
      {SERVICES.map((service, index) => (
        <div className='w-60' key={`service-${index}`}>
          <ServiceWithImage
            img={service.img}
            title={service.title}
            body={service.body}
          />
        </div>
      ))}
    </div>
  );
}
