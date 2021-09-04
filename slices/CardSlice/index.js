import React, { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';

import Card, { CardContent } from '../../components/Card';

export default function CardSlice({ slice }) {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Card image={slice.primary.image}>
        <div>
          <CardContent bigTitle={RichText.asText(slice.primary.title)}>
            <RichText render={slice.primary.description} />
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
