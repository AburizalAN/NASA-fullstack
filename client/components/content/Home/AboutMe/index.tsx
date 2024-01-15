import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { FaReact, FaSass, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const AboutMe = () => {
  return (
    <section className="max-w-7xl m-auto my-[80px]">
      <div className="flex">
        <div className="flex-1 pr-10">
          <h1 className="font-bold text-[70px] leading-[1]">
            I am <span className="text-indigo-800">design</span>
            <br />& <span className="text-indigo-800">technology</span>{" "}
            enthusiast.
          </h1>
          <p className="mt-[2rem] mb-[1rem]">
            {`I like creating cool things on the Computer and Internet, such
            as design or Application that can run interactively.`}
          </p>
          <p>
            {`i’m really interested to work on tech industry as an Software
            Engineer, and i hope i’ll be able to provide something useful
            for people around me with technology.`}
          </p>
          <div className="mt-[2.4rem] pt-3 buttons flex gap-5">
            <a
              href="https://linkedin.com/in/aburizal-a-n"
              className="no-underline border border-indigo-800 hover:bg-indigo-800 px-5 py-1.5 text-indigo-800 hover:text-white rounded-[0.25rem] flex justify-center items-center gap-2"
            >
              <span>
                <RiLinkedinBoxFill />
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/AburizalAN"
              className="no-underline border border-indigo-800 hover:bg-indigo-800 px-5 py-1.5 text-indigo-800 hover:text-white rounded-[0.25rem] flex justify-center items-center gap-2"
            >
              <span>
                <RiGithubFill />
              </span>
              <span>Github</span>
            </a>
          </div>
          {/* <div className="relative h-[500px]">
            <div className="absolute illustration3d-wrapper h-[500px] w-[500px]">
              <Illustration2 />
            </div>
          </div> */}
        </div>
        <div className="w-6/12 flex items-center justify-center pl-10">
          <div className="flex gap-5 items-center">
            <div className="flex flex-1 flex-col flex-wrap justify-center gap-5">
              <div className="bg-white rounded-xl p-5 shadow-2xl shadow-indigo-500/20">
                <div className="mt-4 inline-flex gap-3">
                  <SiJavascript className="text-indigo-800 text-[30px]" />
                  <SiTypescript className="text-indigo-800 text-[30px]" />
                </div>
                <h4 className="font-bold mt-2">Javascript & TypeScript</h4>
                <p className="mt-1">
                  Strong fundamentals of Programming using JavaScript &
                  TypeScript
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-2xl shadow-indigo-500/20">
                <div className="mt-4 inline-flex gap-3">
                  <FaReact className="text-indigo-800 text-[30px]" />
                  <TbBrandNextjs className="text-indigo-800 text-[30px]" />
                </div>
                <h4 className="font-bold mt-2">React & Next.js</h4>
                <p className="mt-1">
                  Have deep understanding to React & Next.js
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col flex-wrap justify-center gap-5">
              <div className="bg-white rounded-xl p-4 shadow-2xl shadow-indigo-500/20">
                <div className="mt-4 inline-flex gap-3">
                  <FaCss3Alt className="text-indigo-800 text-[30px]" />
                  <FaSass className="text-indigo-800 text-[30px]" />
                </div>
                <h4 className="font-bold mt-2">CSS Styling</h4>
                <p className="mt-1">
                  Able to create amazing website design using CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
