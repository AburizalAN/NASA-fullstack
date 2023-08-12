import * as React from "react";
import Modal from "@/components/reusable/Modal";
import { useGetImages } from "@/services/imageServices";
import { usePostService } from "@/services/postServices";
import { useSearchParams } from "next/navigation";
import Button from "@/components/reusable/Button";
import message from "@/components/reusable/message";
import { RiCheckFill } from "react-icons/ri";

import clsx from "clsx";
import { Spinner } from "@/components/reusable";

interface PropTypes {
  children: (props: { openModal: () => void }) => React.ReactNode;
  mutatePost: () => void;
}

const ModalGallery = ({ children, mutatePost }: PropTypes) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<any>(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: images, isValidating: loadingImages }: any = useGetImages(
    { page: 1, limit: 10 },
    isOpen
  );
  const { action: editPost, isLoading: loadingEditPost } = usePostService();

  const submitFeaturedImage = async () => {
    const res = await editPost({
      id,
      data: { featured_image: selectedImage.url },
    });
    if (res) {
      message({
        type: "success",
        content: "Berhasil menambahkan Featured Image",
      });
      setIsOpen(false);
      mutatePost();
    }
  };

  const modalProps = {
    openModal: () => setIsOpen(true),
  };

  const selectImage = (image: any) => {
    setSelectedImage(image);
  };

  return (
    <>
      {children(modalProps)}
      <Modal width={700} visible={isOpen} onCancel={() => setIsOpen(false)}>
        <div className="font-bold mb-3">Select Image from Gallery</div>
        {loadingImages ? (
          <div className="grid place-items-center h-[100px]">
            <Spinner width={30} height={30} />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-md">
            {images?.map((image: any, i: number) => (
              <div
                key={i}
                onClick={() => selectImage(image)}
                className={clsx(
                  "border cursor-pointer shadow-md bg-white h-[100px] rounded-md overflow-hidden relative",
                  selectedImage?.fileId === image.fileId
                    ? "border-blue-300 shadow-blue-200"
                    : "border-slate-200"
                )}
              >
                <img
                  src={image.thumbnail}
                  className={clsx(
                    "object-cover object-center w-full h-full",
                    selectedImage?.fileId === image.fileId && "blur-[2px]"
                  )}
                />
                <div
                  className={clsx(
                    "absolute inset-0 content-[''] top-0 left-0 bg-[#1475c570] opacity-0 transition-all",
                    "flex items-center justify-center",
                    selectedImage?.fileId === image.fileId && "opacity-100"
                  )}
                >
                  <span className="text-white text-[30px]"><RiCheckFill /></span>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end gap-x-2 mt-4">
          <Button
            className="w-[100px]"
            variant="outlined"
            onClick={() => setIsOpen(false)}
          >
            Batal
          </Button>
          <Button
            className="w-[100px]"
            loading={loadingEditPost}
            onClick={submitFeaturedImage}
          >
            Pilih
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalGallery;
