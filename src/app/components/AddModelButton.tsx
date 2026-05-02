import { Plus } from 'lucide-react';

interface AddModelButtonProps {
  onClick: () => void;
}

export function AddModelButton({ onClick }: AddModelButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-8 bottom-8 size-14 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20"
      aria-label="Add new model"
    >
      <Plus className="size-6" strokeWidth={2.5} />
    </button>
  );
}
