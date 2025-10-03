import { Editor } from './editor';
import { Toolbar } from './toolbar';

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const documentId = (await params).documentId;

  return (
    <div className='min-h-screen bg-[#fafbfd]'>
      <Toolbar />
      <Editor />
    </div>
  );
}
