import React from 'react';

import Card, { CardContent, CardContentList } from './Card';

// const cardContentList = [
//   {
//     icon: { src: '/icons/tick.svg', alt: 'tick' },
//     text: 'first line description of what we do',
//   },
//   {
//     icon: { src: '/icons/tick.svg', alt: 'tick' },
//     text: 'second line description',
//   },
//   {
//     icon: { src: '/icons/tick.svg', alt: 'tick' },
//     text: 'third line medium description',
//   },
// ];

const cardsContent = [
  {
    smallTitle: 'Some small title',
    bigTitle: 'Big Title',
    img: { src: '/images/GOPR9291.jpg', alt: 'something' },
    onClick: () => alert('click 1'),
    content: [
      {
        icon: { src: '/icons/tick.svg', alt: 'tick' },
        text: 'first line description of what we do',
      },
      {
        icon: { src: '/icons/tick.svg', alt: 'tick' },
        text: 'second line description',
      },
      {
        icon: { src: '/icons/tick.svg', alt: 'tick' },
        text: 'third line medium description',
      },
    ],
  },
  {
    smallTitle: 'Some other small title',
    bigTitle: 'Another Title',
    img: { src: '/images/GOPR9300.jpg', alt: 'something' },
    onClick: () => alert('click 2'),
    content: [
      {
        icon: { src: '/icons/tick.svg', alt: 'tick' },
        text: 'first line description of what we do',
      },
      {
        icon: { src: '/icons/tick.svg', alt: 'tick' },
        text: 'second line description',
      },
      {
        icon: { src: '/icons/tick.svg', alt: 'tick' },
        text: 'third line medium description',
      },
    ],
  },
];

export default function Cards() {
  return (
    <div className='w-full relative flex flex-col items-center md:flex-row md:justify-center'>
      {cardsContent.map((card, index) => (
        <Card key={`card-${index}`} src={card.img.src} alt={card.img.alt}>
          <CardContent
            smallTitle={card.smallTitle}
            bigTitle={card.bigTitle}
            buttonTitle='FIND OUT MORE'
            buttonOnClick={card.onClick}
          >
            <CardContentList list={card.content} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
