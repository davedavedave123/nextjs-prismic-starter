import React from 'react';
import useBreakPoints from '../hooks/useBreakPoints';

import Card, { CardContent, CardContentList } from './Card';

const tickIcon = { src: '/icons/tick.svg', alt: 'tick' };

const cardsContent = [
  {
    smallTitle: 'Some small title',
    bigTitle: 'Big Title',
    img: { src: '/images/digger.jpg', alt: 'something' },
    onClick: () => alert('click 1'),
    content: [
      {
        icon: tickIcon,
        text: 'first line description of what we do',
      },
      {
        icon: tickIcon,
        text: 'second line description',
      },
      {
        icon: tickIcon,
        text: 'third line medium description',
      },
    ],
  },
  {
    smallTitle: 'Some other small title',
    bigTitle: 'Another Title',
    img: { src: '/images/quarry.jpg', alt: 'something' },
    onClick: () => alert('click 2'),
    content: [
      {
        icon: tickIcon,
        text: 'first line description of what we do',
      },
      {
        icon: tickIcon,
        text: 'second line description',
      },
      {
        icon: tickIcon,
        text: 'third line medium description',
      },
    ],
  },
  {
    smallTitle: 'Some other small title',
    bigTitle: 'Another Title',
    img: { src: '/images/snow.jpg', alt: 'something' },
    onClick: () => alert('click 2'),
    content: [
      {
        icon: tickIcon,
        text: 'first line description of what we do',
      },
      {
        icon: tickIcon,
        text: 'second line description',
      },
      {
        icon: tickIcon,
        text: 'third line medium description',
      },
    ],
  },
];

export default function Cards() {
  const { isLgDown } = useBreakPoints();

  return (
    <div className='w-full relative flex flex-col items-center lg:flex-row lg:justify-around'>
      {cardsContent.map((card, index) => (
        <Card
          delay={!isLgDown && 0.2 * index}
          key={`card-${index}`}
          src={card.img.src}
          alt={card.img.alt}
        >
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
