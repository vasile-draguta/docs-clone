interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='flex flex-col gap-y-4'>
      <nav className='w-full bg-blue-500'>auth navbar</nav>
      {children}
    </div>
  );
}
