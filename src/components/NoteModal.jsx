import React from "react";

const NoteModal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-neutral-900 text-white rounded-lg shadow-lg max-w-md w-full mx-4 p-5 z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-semibold">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white/70 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="mt-3 text-sm text-white/90">{children}</div>

        {/* <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-white/6 text-sm text-white/90"
          >
            Close
          </button>
        </div> */}

      </div>
    </div>
  );
};

export default NoteModal;
