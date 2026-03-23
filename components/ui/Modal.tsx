export function Modal({ children, isOpen }: { children: React.ReactNode, isOpen: boolean }) {
  if (!isOpen) return null;
  return <div className="modal">{children}</div>;
}