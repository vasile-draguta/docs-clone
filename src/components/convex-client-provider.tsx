'use client';

import { ReactNode } from 'react';
import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from 'convex/react';
import { ClerkProvider, useAuth, SignIn } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { FullscreenLoader } from './fullscreen-loader';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      appearance={resolvedTheme === 'dark' ? dark : undefined}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className='flex justify-center items-center min-h-screen'>
            <SignIn routing='hash' />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <FullscreenLoader label='Page Loading...' />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
