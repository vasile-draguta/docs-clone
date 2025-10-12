import { Liveblocks } from '@liveblocks/node';
import { ConvexHttpClient } from 'convex/browser';
import { auth, currentUser, clerkClient } from '@clerk/nextjs/server';
import { api } from '../../../../convex/_generated/api';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(req: Request) {
  const { sessionClaims } = await auth();
  if (!sessionClaims) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await currentUser();

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { room } = await req.json();
  const document = await convex.query(api.documents.getById, {
    documentId: room,
  });

  if (!document) {
    return new Response('Unauthorised', { status: 401 });
  }

  const isOwner = document.ownerId == user.id;

  let isOrgMember = false;

  if (document.organizationId) {
    try {
      const client = await clerkClient();
      const orgMembershipList =
        await client.users.getOrganizationMembershipList({
          userId: user.id,
        });

      isOrgMember = orgMembershipList.data.some(
        (membership) => membership.organization.id === document.organizationId
      );
    } catch {}
  }

  if (!isOwner && !isOrgMember) {
    return new Response('Unauthorised', { status: 401 });
  }

  const name =
    user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous';

  const nameToNumber = name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = Math.abs(nameToNumber) % 360;
  const color = `hsl(${hue}, 80%, 60%)`;

  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: name,
      avatar: user.imageUrl,
      color: color,
    },
  });

  session.allow(room, session.FULL_ACCESS);
  const { body, status } = await session.authorize();

  return new Response(body, { status });
}
