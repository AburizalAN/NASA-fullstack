import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="max-w-6xl m-auto py-[50px]">
      <div className="flex w-full">
        <div className="w-1/2 relative h-[500px]">
          <div className="absolute w-[400px] h-[400px] rounded-[24px] bg-white">

          </div>
        </div>
        <div className="w-1/2">
          <h3 className="mb-2">About Me</h3>
          <h1 className="font-bold">
            I am design & <br />
            technology enthusiast
          </h1>
          <p className="mt-[1.5rem] mb-[1rem]">
            I like creating cool things on the Computer and Internet, such
            as design or Application that can run interactively.
          </p>
          <p>
            i’m really interested to work on tech industry as an Software
            Engineer, and i hope i’ll be able to provide something useful
            for people around me with technology.
          </p>
          <div className="mt-[2.4rem] pt-3 buttons flex gap-3">
            <a
              href="https://linkedin.com/in/aburizal-a-n"
              className="no-underline border border-indigo-800 hover:bg-indigo-800 px-5 py-1.5 text-indigo-800 hover:text-white rounded-[0.25rem] flex justify-center items-center gap-2"
            >
              <span><RiLinkedinBoxFill /></span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/AburizalAN"
              className="no-underline border border-indigo-800 hover:bg-indigo-800 px-5 py-1.5 text-indigo-800 hover:text-white rounded-[0.25rem] flex justify-center items-center gap-2"
            >
              <span><RiGithubFill /></span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;