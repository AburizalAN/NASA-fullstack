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
  const btnRef = React.useRef<HTMLDivElement>(null);
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
      >
        Test tes
        <Button
          className="btn-primary"
          onClick={() => setIsOpen(false)}
        >
          close
        </Button>
      </Modal>
    </>
  )
}

export default ModalAddCategory;