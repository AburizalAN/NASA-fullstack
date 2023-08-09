import * as React from "react";
import Modal from "@/components/reusable/Modal";


const FeaturedImage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-slate-200 hover:bg-slate-300 transition-colors h-[160px] rounded-md grid place-items-center cursor-pointer relative"
      >
        <div>Add Image</div>
        <div className="bg-white rounded-md shadow-md absolute p-3 w-full left-0 top-[calc(100%_+_10px)]">
          test test
        </div>
      </div>
      <Modal visible={isOpen} onCancel={() => setIsOpen(false)}>
        Test Modal
      </Modal>
    </>
  )
}

export default FeaturedImage;