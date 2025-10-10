'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getUsers(documentId: string) {
  await auth();
  const clerk = await clerkClient();

  // Get the document to find its organization ID
  const document = await convex.query(api.documents.getById, {
    documentId: documentId as Id<'documents'>,
  });

  if (!document) {
    return [];
  }

  // Use the document's organization ID if it exists, otherwise get all users
  const response = document.organizationId
    ? await clerk.users.getUserList({
        organizationId: [document.organizationId],
      })
    : await clerk.users.getUserList();

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous',
    avatar: user.imageUrl,
  }));

  return users;
}

export async function getDocuments(ids: Id<'documents'>[]) {
  return await convex.query(api.documents.getByIds, { ids });
}
