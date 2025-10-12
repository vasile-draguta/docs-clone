'use client';

import { Editor } from './editor';
import { Navbar } from './navbar';
import { Toolbar } from './toolbar';
import { Room } from './room';
import { Preloaded, usePreloadedQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export function Document({ preloadedDocument }: DocumentProps) {
  const document = usePreloadedQuery(preloadedDocument);

  return (
    <Room>
      <div className='min-h-screen bg-[#fafbfd] dark:bg-zinc-950'>
        <div className='flex flex-col px-4 gap-y-2 fixed top-0 left-0 right-0 z-20 bg-[#FAFBFD] print:hidden dark:bg-zinc-950'>
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className='pt-[114px] print:pt-0 dark:bg-zinc-950 h-screen overflow-hidden'>
          <Editor initialConent={document.initialContent} />
        </div>
      </div>
    </Room>
  );
}
