import { Doc } from '../../../convex/_generated/dataModel';
import { TableRow, TableCell } from '@/components/ui/table';
import {
  Building2Icon,
  CircleUserIcon,
  Ghost,
  MoreVertical,
} from 'lucide-react';
import { SiGoogledocs } from 'react-icons/si';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

interface DocumentRowProps {
  document: Doc<'documents'>;
}

export function DocumentRow({ document }: DocumentRowProps) {
  return (
    <TableRow className='cursor-pointer'>
      <TableCell>
        <SiGoogledocs className='size-6 fill-blue-500' />
      </TableCell>
      <TableCell className='font-medium md:w-[45%]'>{document.title}</TableCell>
      <TableCell className='text-muted-foreground translate-y-2 hidden md:flex items-center gap-2'>
        {document.organisationId ? (
          <Building2Icon className='size-4' />
        ) : (
          <CircleUserIcon className='size-4' />
        )}
        {document.organisationId ? 'Organisation' : 'Personal'}
      </TableCell>
      <TableCell className='text-muted-foreground hidden md:table-cell'>
        {format(new Date(document._creationTime), 'MMM dd, yyyy')}
      </TableCell>
      <TableCell className='flex ml-auto justify-end'>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <MoreVertical className='size-4' />
        </Button>
      </TableCell>
    </TableRow>
  );
}
