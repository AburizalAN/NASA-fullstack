import * as React from "react";
import Modal from "@/components/reusable/Modal";

const ModalURL = ({ children }: { children: (props: { openModal: () => void }) => React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const modalProps = {
    openModal: () => setIsOpen(true),
  }
  
  return (
    <>
      {children(modalProps)}
      <Modal visible={isOpen} onCancel={() => setIsOpen(false)}>
        Test Modal URL
      </Modal>
    </>
  );
}

export default ModalURL;