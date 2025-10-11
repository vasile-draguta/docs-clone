import { auth } from '@clerk/nextjs/server';
import { Id } from '../../../../convex/_generated/dataModel';
import { api } from '../../../../convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import { Document } from './document';

interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<'documents'> }>;
}

export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const documentId = (await params).documentId;
  const { getToken } = await auth();
  const token = (await getToken({ template: 'convex' })) ?? undefined;

  if (!token) {
    throw new Error('Unauthorized');
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    {
      documentId: documentId,
    },
    { token }
  );

  return <Document preloadedDocument={preloadedDocument} />;
}
