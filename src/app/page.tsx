'use client';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <h1 className='text-4xl'>Hello World!</h1>
      <Button
        onClick={() => {
          alert('You clicked it!');
        }}
      >
        Click me!
      </Button>
    </div>
  );
}
