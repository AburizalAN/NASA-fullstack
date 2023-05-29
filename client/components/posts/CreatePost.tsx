import BlockNote from "../BlockNote";

const CreatePost = () => {
  return (
    <div className="gap-x-4 flex h-full">
      <div className="basis-3/4 py-16">
        <div className="pl-12 mb-5">
          <input placeholder="Judul" className="text-5xl font-bold outline-none border-none no-underline" type="text" name="title" />
        </div>
        <BlockNote />
      </div>
      <div className="basis-1/4">
        test test
      </div>
    </div>
  )
};

export default CreatePost;