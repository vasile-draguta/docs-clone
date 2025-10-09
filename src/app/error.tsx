'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangleIcon } from 'lucide-react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center space-y-6'>
      <div className='text-center space-y-4'>
        <div className='flex justify-center'>
          <div className='bg-red-600 p-3 rounded-full dark:bg-red-600'>
            <AlertTriangleIcon className='bg-red-600 text-white size-10 dark:bg-red-600' />
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold dark:text-white'>
            Something went wrong
          </h2>
          <p>{error.message}</p>
        </div>
      </div>
      <div className='flex items-center gap-x-3'>
        <Button onClick={reset} className='font-medium px-6'>
          Try again
        </Button>
        <Button variant='ghost' asChild className='font-medium px-6'>
          <Link href='/'>Go Back</Link>
        </Button>
      </div>
    </div>
  );
}
