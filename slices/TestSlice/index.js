import React from 'react';
import { RichText } from 'prismic-reactjs';

import Card, { CardContent } from '../../components/Card';

const TestSlice = ({ slice }) => (
  <section className='w-full'>
    <div className='w-full h-screen flex justify-center items-center'>
      hi this is storybook
      {/* <Card image={slice.primary.image}>
        <div>
          <CardContent bigTitle={RichText.asText(slice.primary.title)}>
            <RichText render={slice.primary.description} />
          </CardContent>
        </div>
      </Card> */}
    </div>
    );
  </section>
);

TestSlice.displayName = TestSlice;

export default TestSlice;
