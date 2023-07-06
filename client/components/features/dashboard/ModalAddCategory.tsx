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
        <h4 className="font-bold">Tambah Kategori</h4>
        <Button
          variant="primary"
          onClick={() => setIsOpen(false)}
          block
        >
          close
        </Button>
      </Modal>
    </>
  )
}

export default ModalAddCategory;