const DetailBlog = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  return (
    <div className="h-ful">
      <div className="max-w-6xl m-auto py-20 px-4">
        <h1 className="font-bold mb-5 text-indigo-950">
          Next.js 13.4 is finally here and it’s awesome!
        </h1>
        <div className="text-gray-500 text-sm">
          Written by AburizalAN on April 10, 2023
        </div>
        <div className="divider my-5"></div>
        <section className="blog-post-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non. Nam vel
            est ac mauris placerat malesuada. Morbi volutpat dolor sit amet leo
            interdum, at ultricies nibh fermentum. Suspendisse sit amet dapibus
            arcu, quis fringilla tellus. Sed eu orci urna. Etiam sed nulla eu
            lacus porta ultricies. Morbi tempus ligula justo, eget sodales velit
            ultrices a. Integer sit amet nisl in lorem semper mollis. Integer at
            dictum dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non. Nam vel
            est ac mauris placerat malesuada. Morbi volutpat dolor sit amet leo
            interdum, at ultricies nibh fermentum. Suspendisse sit amet dapibus
            arcu, quis fringilla tellus. Sed eu orci urna. Etiam sed nulla eu
            lacus porta ultricies. Morbi tempus ligula justo, eget sodales velit
            ultrices a. Integer sit amet nisl in lorem semper mollis. Integer at
            dictum dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non. Nam vel
            est ac mauris placerat malesuada. Morbi volutpat dolor sit amet leo
            interdum, at ultricies nibh fermentum. Suspendisse sit amet dapibus
            arcu, quis fringilla tellus. Sed eu orci urna. Etiam sed nulla eu
            lacus porta ultricies. Morbi tempus ligula justo, eget sodales velit
            ultrices a. Integer sit amet nisl in lorem semper mollis. Integer at
            dictum dui.
          </p>
          <h4>test Sub title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non. Nam vel
            est ac mauris placerat malesuada. Morbi volutpat dolor sit amet leo
            interdum, at ultricies nibh fermentum. Suspendisse sit amet dapibus
            arcu, quis fringilla tellus. Sed eu orci urna. Etiam sed nulla eu
            lacus porta ultricies. Morbi tempus ligula justo, eget sodales velit
            ultrices a. Integer sit amet nisl in lorem semper mollis. Integer at
            dictum dui.
          </p>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non.</li>
          </ol>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non. Nam vel
            est ac mauris placerat malesuada. Morbi volutpat dolor sit amet leo
            interdum, at ultricies nibh fermentum. Suspendisse sit amet dapibus
            arcu, quis fringilla tellus. Sed eu orci urna. Etiam sed nulla eu
            lacus porta ultricies. Morbi tempus ligula justo, eget sodales velit
            ultrices a. Integer sit amet nisl in lorem semper mollis. Integer at
            dictum dui.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan massa tortor, in tincidunt nulla pellentesque non. Nam vel
            est ac mauris placerat malesuada. Morbi volutpat dolor sit amet leo
            interdum, at ultricies nibh fermentum. Suspendisse sit amet dapibus
            arcu, quis fringilla tellus. Sed eu orci urna. Etiam sed nulla eu
            lacus porta ultricies. Morbi tempus ligula justo, eget sodales velit
            ultrices a. Integer sit amet nisl in lorem semper mollis. Integer at
            dictum dui.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DetailBlog;
