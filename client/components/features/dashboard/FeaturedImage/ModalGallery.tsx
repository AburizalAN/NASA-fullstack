import * as React from "react";
import Modal from "@/components/reusable/Modal";

const ModalGallery = ({ children }: { children: (props: { openModal: () => void }) => React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);

  const modalProps = {
    openModal: () => setIsOpen(true),
  }
  
  return (
    <>
      {children(modalProps)}
      <Modal visible={isOpen} onCancel={() => setIsOpen(false)}>
        Test Modal <button onClick={() => setIsOpen2(true)}>testtest</button>
      </Modal>
      <Modal visible={isOpen2} onCancel={() => setIsOpen2(false)}>
        Test Modal 2 <button onClick={() => setIsOpen3(true)}>testtest</button>
      </Modal>
      <Modal visible={isOpen3} onCancel={() => setIsOpen3(false)}>
        Test Modal 3
      </Modal>
    </>
  );
}

export default ModalGallery;