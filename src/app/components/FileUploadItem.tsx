import { FileText, Trash2 } from 'lucide-react';

interface FileUploadItemProps {
  id: number;
  name: string;
  status: string;
  onRemove: (id: number) => void;
}

export function FileUploadItem({ id, name, status, onRemove }: FileUploadItemProps) {
  return (
    <div className="flex items-center gap-3 bg-background/50 border border-border rounded-[8px] hover:border-primary/30 transition-all p-[10px]">
      <div className="size-10 bg-secondary/50 rounded-[8px] flex items-center justify-center shrink-0">
        <FileText className="size-5 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-medium text-[#161616] truncate">{name}</p>
        <p className="text-[12px] text-[#6F6F6F]">{status}</p>
      </div>
      <button 
        onClick={() => onRemove(id)}
        className="p-2 hover:bg-secondary/50 rounded-[8px] transition-colors"
        aria-label="Remove file"
      >
        <Trash2 className="size-4 text-[#6F6F6F] hover:text-[#161616]" />
      </button>
    </div>
  );
}