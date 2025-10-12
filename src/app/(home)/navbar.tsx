'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SearchInput } from './search-input';
import {
  UserButton,
  OrganizationSwitcher,
  useAuth,
  useOrganization,
} from '@clerk/nextjs';
import { useEffect } from 'react';
import { ThemeSelector } from '@/components/theme-selector';

export function Navbar() {
  const { getToken } = useAuth();
  const { organization } = useOrganization();

  useEffect(() => {
    if (organization) {
      getToken({ skipCache: true });
    }
  }, [organization, getToken]);

  return (
    <nav className='flex items-center justify-between h-full w-full dark:bg-zinc-950'>
      <div className='flex gap-3 items-center shrink-0 pr-6'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={36}
            height={36}
            className='dark:invert'
          />
        </Link>
        <h3 className='text-xl'>Docs</h3>
      </div>
      <SearchInput />
      <div className='flex gap-3 items-center pl-6'>
        <OrganizationSwitcher
          afterCreateOrganizationUrl='/'
          afterLeaveOrganizationUrl='/'
          afterSelectOrganizationUrl='/'
          afterSelectPersonalUrl='/'
        />
        <UserButton />
        <ThemeSelector />
      </div>
    </nav>
  );
}
