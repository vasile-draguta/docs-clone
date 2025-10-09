import { Editor } from './editor';
import { Navbar } from './navbar';
import { Toolbar } from './toolbar';

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const documentId = (await params).documentId;

  return (
    <div className='min-h-screen bg-[#fafbfd] dark:bg-black'>
      <div className='flex flex-col px-4 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden dark:bg-black'>
        <Navbar />
        <Toolbar />
      </div>
      <div className='pt-[114px] print:pt-0 dark:bg-black'>
        <Editor />
      </div>
    </div>
  );
}
