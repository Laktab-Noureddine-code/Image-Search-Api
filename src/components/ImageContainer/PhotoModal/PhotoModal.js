import React from "react";
import { createPortal } from "react-dom";

export default function PhotoModal({ data, index, open, onClose }) {
  if (!open) return null;
  return createPortal(
    <div>
      hi{index} <button onClick={onClose}>close</button>
    </div>,
    document.body
  );
}
