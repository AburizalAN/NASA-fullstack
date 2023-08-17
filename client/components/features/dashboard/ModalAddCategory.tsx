import * as React from "react";
import Modal from "@/components/reusable/Modal"
import { Button } from "@/components/reusable";

type Props = {
  children: (props: ModalProps) => React.ReactNode;
}

type ModalProps = {
  openModal: () => void;
}

const ModalAddCategory = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalProps: ModalProps = {
    openModal: () => setIsOpen(true),
  }
  return (
    <>
      <div>
        {children(modalProps)}
      </div>
      <Modal
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
      >
        <h5 className="font-bold mb-3">Tambah Kategori</h5>
        <div>
          
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          block
        >
          Tambah Category
        </Button>
      </Modal>
    </>
  )
}

export default ModalAddCategory;