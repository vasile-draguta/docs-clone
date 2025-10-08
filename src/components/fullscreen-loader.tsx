import { LoaderIcon } from 'lucide-react';

interface FullscreenLoaderProps {
  label?: string;
  className?: string;
}

export function FullscreenLoader({ label, className }: FullscreenLoaderProps) {
  return (
    <div className='min-h-screen flex justify-center items-center gap-2'>
      <LoaderIcon className='size-6 text-muted-foreground animate-spin' />
      {label && <p className='text-sm text-muted-foreground'>{label}</p>}
    </div>
  );
}
