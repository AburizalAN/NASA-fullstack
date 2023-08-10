import * as React from "react";
import Modal from "@/components/reusable/Modal";
import { Button } from "@/components/reusable";
import { useEditPost } from "@/services/postServices";
import { useSearchParams } from "next/navigation";
import message from "@/components/reusable/message";

const ModalURL = ({
  children,
  mutatePost,
}: {
  children: (props: { openModal: () => void }) => React.ReactNode;
  mutatePost: () => void,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [urlImage, setUrlImage] = React.useState<string>("");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { action: editPost, isLoading: loadingPost } = useEditPost();

  const modalProps = {
    openModal: () => setIsOpen(true),
  };

  const submitFeaturedImage = async () => {
    const res = await editPost({ id, data: { featured_image: urlImage } });
    if (res) {
      message({
        type: "success",
        content: "Berhasil menambahkan Featured Image",
      });
      setIsOpen(false);
      mutatePost();
    }
  };

  const handleChangeUrlImage = (e: { target: { value: string } }) => {
    const value = e.target.value;
    console.log("hellooo", value);
    setUrlImage(value);
  };

  return (
    <>
      {children(modalProps)}
      <Modal visible={isOpen} onCancel={() => setIsOpen(false)}>
        <input
          type="text"
          value={urlImage}
          onChange={handleChangeUrlImage}
          placeholder="masukkan url"
          className="input"
        />
        <Button block className="mt-5" onClick={submitFeaturedImage}>
          Submit
        </Button>
      </Modal>
    </>
  );
};

export default ModalURL;
