import React from 'react';
import { useRouter } from 'next/router';

export default function ErrorPage() {
  const router = useRouter();
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div>Whoops, not sure what happened there.</div>{' '}
      <button onClick={router.back} className='underline'>
        Back to safety
      </button>
    </div>
  );
}
