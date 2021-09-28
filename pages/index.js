import Head from 'next/head';
import { useEffect, useState } from 'react';

import PhotoModal from '../components/PhotoModal';
import Services from '../components/Services';
import ImageWithText from '../components/ImageWithText1';
import ImageWithText2 from '../components/ImageWithText2';
import Contact from '../components/Contact';

import Layout from '../components/Layout';

import Button from '../components/Button';
import Cards from '../components/Cards';
import animateOnScroll from '../utils/animateOnScroll';
import ImageCover from '../components/ImageCover';
import BlogLinks from '../components/BlogLinks';

const images = [
  // {src: '/images/GOPR9291.jpg', alt: 'rock arch', width: 3000, height: 2250},
  { src: '/images/digger.jpg', alt: 'rock arch', width: 3000, height: 1000 },
  { src: '/images/quarry.jpg', alt: 'big rock', width: 3000, height: 1858 },
  { src: '/images/snow.jpg', alt: 'stoked', width: 3000, height: 2250 },
];

const Hero = () => {
  const [spinner, setSpinner] = useState(false);
  return (
    <div className='w-full h-screen relative flex items-center justify-center'>
      <div className='absolute left-0 top-0 w-full h-full'>
        <ImageCover
          src='/images/digger.jpg'
          blurSrc='/images/digger-blur.jpg'
          alt='digger'
          width={5472}
          height={3648}
        />
      </div>
      <div className='w-3/4 h-3/4 relative z-10'>
        <p className='text-orange'>
          Small little message before the big kicker.
        </p>
        <h1 className=''>Big brand message</h1>
        <h3 className='max-w-3xl'>
          Some other message, just a little smaller. We care about things.
        </h3>
        <Button
          title='CALL TO ACTION'
          spinner={spinner}
          disabled={spinner}
          onClick={() => setSpinner(!spinner)}
        />
      </div>
    </div>
  );
};

export default function Home() {
  const [photoModalVisible, setPhotoModalVisible] = useState(false);

  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Next.js Starter Site</title>
        <meta
          name='description'
          content='A Next.js boilerplate all set up to quickly and efficiently build websites from.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full flex flex-col justify-center items-center'>
        <Hero />
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
          img={{
            src: '/images/steel.jpg',
            blurSrc: '/images/steel-blur.jpg',
            alt: 'steel',
            width: 4000,
            height: 6000,
          }}
          title='This is the big title'
        >
          <p className='my-5'>
            Hi this is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi elementum vitae quam ut venenatis. Maecenas at dui non metus
            pretium lobortis. Phasellus vestibulum lacinia lacus id mollis.
            Fusce scelerisque massa nec gravida accumsan. Proin sed felis
            rutrum, imperdiet est non, consectetur odio.
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
          img={{
            src: '/images/wood-worker.jpg',
            blurSrc: '/images/wood-worker-blur.jpg',
            alt: 'nothing',
            width: 6000,
            height: 4000,
          }}
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

        <BlogLinks />

        <Contact />
        <Cards />
        {/* <Footer /> */}
      </div>
    </Layout>
  );
}
