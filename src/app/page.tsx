'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      Click
      <Link href='/documents/123'>
        <span className='italic'>&nbsp;here&nbsp;</span>
      </Link>
      to go to document id page!
    </div>
  );
}
