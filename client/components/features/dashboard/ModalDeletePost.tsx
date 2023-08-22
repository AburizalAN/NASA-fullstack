import * as React from "react";
import Modal from "@/components/reusable/Modal";
import Button from "@/components/reusable/Button";
import { useDeletePost } from "@/services/postServices";
import { message } from "@/components/reusable";

interface PropTypes {
  id: number | string;
  children: (props: ModalProps) => React.ReactNode;
  callback?: () => void;
}

interface ModalProps {
  openModal: () => void;
}

const ModalDeletePost = ({ children, id, callback = () => {} }: PropTypes) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { action: deletePost } = useDeletePost();

  const modalProps: ModalProps = {
    openModal: () => setIsOpen(true),
  };

  const handleDeletePost = async () => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        message({
          type: "success",
          content: "Post telah dihapus",
          duration: 2000,
        });
        callback();
        setIsOpen(false);
      }
    } catch (err: any) {
      message({
        type: "error",
        content: err?.response?.data?.message ?? "Something went wrong",
        duration: 2000,
      });
    }
  };

  return (
    <>
      {children(modalProps)}
      <Modal
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        closeIcon={null}
      >
        <div>
          <p className="font-bold mb-5">
            Apakah kamu yakin ingin menghapus post ini?
          </p>
          <div className="flex gap-2 justify-end">
            <Button
              className="w-[100px]"
              size="sm"
              variant="outlined"
              onClick={() => setIsOpen(false)}
            >
              Batal
            </Button>
            <Button
              className="w-[100px]"
              size="sm"
              color="primary"
              onClick={handleDeletePost}
            >
              Ya
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalDeletePost;
