import * as React from "react";
import * as ReactDOM from "react-dom";
import clsx from "clsx";

type ModalProps = {
  width?: number | string;
  className?: string;
  visible: boolean;
  onCancel: () => void;
  maskClosable?: boolean;
};

const ModalComp = ({
  width = 500,
  className,
  children,
  visible,
  onCancel,
  maskClosable,
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
      modal.addEventListener(
        "animationend",
        () => {
          setIsOpen(false);
        },
        { once: true }
      );
    }
  }, [visible]);

  React.useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
  }, [modalRef.current]);

  function getClickPosition(e: any) {
    const xPosition = e.clientX;
    const yPosition = e.clientY;
  }

  React.useEffect(() => {
    document.addEventListener("click", getClickPosition, false);
    document.addEventListener("click", (event: any) => {
      if (
        modalWrapperRef.current?.contains(event.target) &&
        !modalRef.current?.contains(event.target) && maskClosable
      ) {
        onCancel();
      }
    });
  }, []);

  return isOpen ? (
    <div ref={modalWrapperRef} className="modal-wrapper">
      <div
        ref={modalRef}
        className={clsx(
          "p-5 rounded-md border modal bg-white m-auto",
          className
        )}
        style={{ width }}
      >
        {children}
      </div>
    </div>
  ) : null;
};

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  React.useEffect(() => {
    let modalRoot = document.querySelector(".modal-root");
    if (!modalRoot && props.visible) {
      modalRoot = document.createElement("div");
      modalRoot.setAttribute("class", "modal-root");
      document.body.appendChild(modalRoot);
    }
    const renderComponent = (
      <ModalComp {...props} />
    );
    if (modalRoot) {
      ReactDOM.render(renderComponent, modalRoot);
    }
  }, [props.visible]);

  return <></>;
}

export default Modal;
