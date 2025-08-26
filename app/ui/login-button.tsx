import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from './button';

export default function LoginButton({ isPending }: { isPending: boolean }) {
  return (
    <Button className="mt-4 w-full" aria-disabled={isPending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
