import * as React from "react";
import ModalGallery from "./ModalGallery";
import ModalURL from "./ModalURL";
import clsx from "clsx";
import { RiEditFill, RiDeleteBin2Line } from "react-icons/ri";
import { usePostService } from "@/services/postServices";
import { useSearchParams } from "next/navigation";
import message from "@/components/reusable/message";
import { Spinner } from "@/components/reusable";
import Tooltip from "@/components/reusable/Tooltip";

interface FeaturedImageProps { mutatePost: () => void; post: any; loadingPost: boolean }

const FeaturedImage = ({ mutatePost, post, loadingPost }: FeaturedImageProps) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [toggleDropdown, setToggleDropdown] = React.useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);

  const { action: editPost, isLoading: loadingEditPost } = usePostService();

  React.useEffect(() => {
    if (toggleDropdown) {
      setIsOpenDropdown(true);
    }

    if (!toggleDropdown && isOpenDropdown) {
      const element = dropdownRef.current;
      if (!element) return;
      element.classList.add("closing");
      element.addEventListener(
        "animationend",
        () => {
          setIsOpenDropdown(false);
        },
        { once: true }
      );
    }
  }, [toggleDropdown]);

  React.useEffect(() => {
    document.addEventListener("mousedown", (event: any) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setToggleDropdown(false);
      }
    });
  }, []);

  const deleteFeaturedImage = async () => {
    const res = await editPost({ id, data: { featured_image: null } });
    if (res) {
      message({
        type: "success",
        content: "Berhasil menambahkan Featured Image",
      });
      mutatePost();
    }
  }

  return (
    <div className="relative">
      {loadingPost || loadingEditPost ? (
        <div className="h-[160px] grid place-items-center">
          <Spinner width={24} height={24} />
        </div>
      ) : post?.featured_image ? (
        <div className="rounded-md w-full h-[160px] overflow-hidden relative">
          <img src={post.featured_image} className="w-full h-full object-cover object-center" />
          <div className="absolute top-0 left-0 inset-0 bg-[#00000030] opacity-0 hover:opacity-100 transition-all duration-[300ms] flex items-center justify-center gap-2">
            <Tooltip placement="top" content="Edit">
              <button
                onClick={() => setToggleDropdown(true)}
                className="w-[50px] h-[30px] grid place-items-center rounded-md text-white bg-[#1381ff80] hover:bg-[#1381ff] transition-all"
              >
                <RiEditFill />
              </button>
            </Tooltip>
            <Tooltip placement="top" content="Remove">
              <button
                onClick={deleteFeaturedImage}
                className="w-[50px] h-[30px] grid place-items-center rounded-md text-white bg-[#a1070780] hover:bg-[#a10707] transition-all"
              >
                <RiDeleteBin2Line />
              </button>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setToggleDropdown(true)}
          className="bg-slate-200 hover:bg-slate-300 transition-colors h-[160px] rounded-md grid place-items-center cursor-pointer"
        >
          <div>Add Image</div>
        </div>
      )}

      <div
        ref={dropdownRef}
        className={clsx(
          isOpenDropdown ? "block" : "hidden",
          "dropdown bg-white rounded-md shadow-md shadow-stone-200 absolute p-1 w-full left-0 top-[calc(100%_+_10px)]"
        )}
      >
        <div className="text-center p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all cursor-pointer">
          + Upload
        </div>
        <ModalGallery>
          {({ openModal }) => (
            <div
              onClick={() => {
                openModal();
                setToggleDropdown(false);
              }}
              className="text-center p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all cursor-pointer"
            >
              From Galery
            </div>
          )}
        </ModalGallery>
        <ModalURL mutatePost={mutatePost}>
          {({ openModal }) => (
            <div
              onClick={() => {
                openModal();
                setToggleDropdown(false);
              }}
              className="text-center p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all cursor-pointer"
            >
              From URL
            </div>
          )}
        </ModalURL>
      </div>
    </div>
  );
};

export default FeaturedImage;
