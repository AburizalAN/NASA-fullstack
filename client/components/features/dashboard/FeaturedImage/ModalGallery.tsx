import * as React from "react";
import Modal from "@/components/reusable/Modal";

const ModalGallery = ({ children }: { children: (props: { openModal: () => void }) => React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  console.log("isOpen", isOpen);

  const modalProps = {
    openModal: () => setIsOpen(true),
  }
  
  return (
    <>
      {children(modalProps)}
      <Modal visible={isOpen} onCancel={() => setIsOpen(false)}>
        Test Modal
      </Modal>
    </>
  );
}

export default ModalGallery;