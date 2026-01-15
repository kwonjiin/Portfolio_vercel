"use client";


interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  content,
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-8">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>

        <p className="whitespace-pre-line text-neutral-700">
          {content}
        </p>

        <button 
        
        onClick={onClose}
        className="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm 
        hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800
         focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800
          active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 
          disabled:shadow-none" type="button">
    close
  </button>
            
      </div>
    </div>
    </div>
  );
}
