import * as React from "react";
import * as ReactDOM from "react-dom/client";
import clsx from "clsx";

type ModalProps = {
  width?: number | string;
  className?: string;
  visible: boolean;
  onCancel: () => void;
  maskClosable?: boolean;
  centerPosition?: boolean;
};

const ModalComp = ({
  width = 500,
  className,
  children,
  visible,
  onCancel,
  maskClosable = true,
  centerPosition = false,
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

  React.useEffect(() => {
    document.addEventListener("mousedown", (event: any) => {
      if (
        modalWrapperRef.current?.contains(event.target) &&
        !modalRef.current?.contains(event.target) && maskClosable
      ) {
        onCancel();
      }
    });
  }, []);

  return isOpen ? (
    <div
      ref={modalWrapperRef}
      className="modal-wrapper"
    >
      <div
        ref={modalRef}
        className={clsx(
          !centerPosition ? "mx-auto mb-auto mt-[100px]" : "m-auto",
          "p-5 rounded-md border modal bg-white",
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
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [root, setRoot] = React.useState<any>(null);
  React.useEffect(() => {
    if (!ref.current && props.visible) {
      const modalRoot = document.createElement("div");
      modalRoot.setAttribute("class", "modal-root");
      ref.current = modalRoot
      document.body.appendChild(ref.current);
      setRoot(ReactDOM.createRoot(modalRoot));
    }
  }, [props.visible]);

  React.useEffect(() => {
    if (root) {
      const renderComponent = (
        <ModalComp {...props} />
      );
      root.render(renderComponent);
    }
  }, [root, props.visible]);

  return <></>;
}

export default Modal;
