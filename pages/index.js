import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  isMobile,
  MobileView,
  isTablet,
  BrowserView,
} from 'react-device-detect';
import Image from 'next/image';

import PhotoModal from '../components/PhotoModal';
import Services from '../components/Services';
import ImageWithText from '../components/ImageWithText1';
import ImageWithText2 from '../components/ImageWithText2';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Button from '../components/Button';

import Card, { CardContent, CardContentList } from '../components/Card';
import Cards from '../components/Cards';
import animateOnScroll from '../utils/animateOnScroll';

const images = [
  // {src: '/images/GOPR9291.jpg', alt: 'rock arch', width: 3000, height: 2250},
  { src: '/images/digger.jpg', alt: 'rock arch', width: 3000, height: 1000 },
  { src: '/images/quarry.jpg', alt: 'big rock', width: 3000, height: 1858 },
  { src: '/images/snow.jpg', alt: 'stoked', width: 3000, height: 2250 },
];

const cardContentList = [
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
];

export default function Home() {
  const [photoModalVisible, setPhotoModalVisible] = useState(false);

  useEffect(() => {
    animateOnScroll();
  }, []);
  return (
    <div>
      <Head>
        <title>Next.js Starter Site</title>
        <meta
          name='description'
          content='A Next.js boilerplate all set up to quickly and efficiently build websites from.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-screen flex flex-col justify-center items-center'>
        <button onClick={() => setPhotoModalVisible(true)}>Show Photos</button>

        <PhotoModal
          images={images}
          visible={photoModalVisible}
          photoIndex={1}
          closeModal={() => {
            // alert('click');
            setPhotoModalVisible(false);
          }}
        />
        <Services />
        <ImageWithText
          img={{ url: '/images/steel.jpg' }}
          title='This is the big title'
        >
          <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            elementum vitae quam ut venenatis. Maecenas at dui non metus pretium
            lobortis. Phasellus vestibulum lacinia lacus id mollis. Fusce
            scelerisque massa nec gravida accumsan. Proin sed felis rutrum,
            imperdiet est non, consectetur odio.
          </p>
          <p className='my-5'>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Etiam dui purus, tristique a elit vel,
            sollicitudin blandit sapien. Duis quis metus et leo dictum posuere.
            Morbi auctor ullamcorper tincidunt. Etiam efficitur ex ac magna
            volutpat, eget sodales massa ultricies. Vestibulum posuere, lectus
            vitae interdum dictum, lorem nunc commodo odio, ac scelerisque nulla
            diam sit amet leo. Fusce imperdiet ornare metus, ut pulvinar orci
            egestas non. Fusce quis sapien vitae velit finibus ullamcorper.
          </p>
          <a href='#' className='underline text-blue-400'>
            Read More
          </a>
        </ImageWithText>
        <ImageWithText2
          img={{ url: '/images/wood-worker.jpg', alt: 'nothing' }}
          title='This is the big title'
          body='Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.'
        >
          <Button
            title='GET IN TOUCH'
            className='mt-5 border-white text-white anim-up'
            data-animdelay={0.4}
          />
        </ImageWithText2>
        {/* <Quote
          body='this is a quote. A very long long quote. this is a quote. A very long long quote. this is a quote. A very long long quote. '
          author='Guy Someone'
          className='p-5'
        />

        <Quotes className='px-10' /> */}

        {/* <div className='parallax w-full h-screen relative z-0'>
          <Image src='/images/GOPR9304.jpg' layout='fill' objectFit='cover' />
        </div> */}

        <Contact />
        {/* <Button title='check' className='text-white bg-black' disabled /> */}
        {/* <Card src='/images/GOPR9291.jpg' alt='something'>
          <CardContent
            smallTitle='Some Small Title'
            bigTitle='Big Title'
            buttonTitle='FIND OUT MORE'
            buttonOnClick={() => alert('click')}
          >
            <CardContentList list={cardContentList} />
          </CardContent>
        </Card> */}
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
