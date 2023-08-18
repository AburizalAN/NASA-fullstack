import * as React from "react";
import Modal from "@/components/reusable/Modal"
import { Button } from "@/components/reusable";
import { useCreateCategory } from "@/services/postServices";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import message from "@/components/reusable/message";

type Props = {
  children: (props: ModalProps) => React.ReactNode;
  callback?: () => void;
}

type ModalProps = {
  openModal: () => void;
}

interface Inputs {
  title: string;
  slug: string;
}

const ModalAddCategory = ({ children, callback = () => {} }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { action: createCategory, isLoading } = useCreateCategory();
  const modalProps: ModalProps = {
    openModal: () => setIsOpen(true),
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (Object.keys(errors).length === 0) {
      try {
        await createCategory(data);
        message({
          type: "success",
          content: "Success",
          duration: 2000,
        });
        callback();
        setIsOpen(false);
      } catch (err: any) {
        message({
          type: "error",
          content: err?.response?.data?.message,
          duration: 2000,
        });
      }
    }
  };

  return (
    <>
      <div>
        {children(modalProps)}
      </div>
      <Modal
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        title="Tambah Kategori"
        maskClosable={false}
      >
        <div>
          <div className="mb-3">
            <Controller
              name="title"
              control={control}
              rules={{
                required: { value: true, message: "Nama Kategori harus diisi" },
              }}
              render={({ field }) => (
                <input
                  placeholder="Nama Kategori"
                  type="text"
                  className="input shadow-none"
                  {...field}
                />
              )}
            />
            {errors?.title ? (
              <div className="text-xs leading-relaxed text-red-500">{errors.title.message}</div>
            ) : null}
          </div>
          <Controller
            name="slug"
            control={control}
            rules={{}}
            render={({ field }) => (
              <input
                placeholder="slug"
                type="text"
                className="input mb-6 shadow-none"
                {...field}
              /> 
            )}
          /> 
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          block
        >
          Tambah Category
        </Button>
      </Modal>
    </>
  )
}

export default ModalAddCategory;