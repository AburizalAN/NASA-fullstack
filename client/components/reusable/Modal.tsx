import * as React from "react";
import clsx from "clsx";

type ModalProps = {
  width?: number | string;
  className?: string;
  visible: boolean;
};

const Modal = ({
  width = 500,
  className,
  children,
  visible,
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const modalWrapperRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (visible) {
      setIsOpen(true);
    } else {
      const modal = modalRef.current;
      const modalWrapper = modalWrapperRef.current;
      if (!modal || !modalWrapper) return;
      modal.classList.add("closing");
      modalWrapper.classList.add("closing");
      modal.addEventListener("animationend", () => {
        setIsOpen(false);
      }, { once: true });
    }
  }, [visible]);

  React.useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    
  }, [modalRef.current]);

  return isOpen ? (
    <div ref={modalWrapperRef} className="modal-wrapper">
      <div
        ref={modalRef}
        className={clsx("p-6 rounded-md border fixed modal bg-white", className)}
        style={{ width }}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
