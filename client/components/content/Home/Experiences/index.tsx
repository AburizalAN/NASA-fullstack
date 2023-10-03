import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Illustration2 from "../Header/Illustration2";

const Experiences = () => {
  const experiences = [
    {
      company: "Fast 8 Group",
      year: "Jul 2022 - Present",
      title: "Frontend Web Developer ",
      desc: `
        <ul>
          <li>
            Develop E-Commerce app using next.js, redux saga, and next-PWA to Create and Maintenance Product Cart, Multiple Shipping, Payment Method, FlashSale Section Product, and Brand Catalogue Feature on AwalMula e-commerce Progressive Web App
          </li>
        </ul>
      `,
    },
    {
      company: "Awal Mula",
      year: "Nov 2021 - Jun 2022",
      title: "Frontend Web Developer (Freelance)",
      desc: `
        <ul>
          <li>
            Develop E-Commerce app using next.js, redux saga, and next-PWA to Create and Maintenance Product Cart, Multiple Shipping, Payment Method, FlashSale Section Product, and Brand Catalogue Feature on AwalMula e-commerce Progressive Web App
          </li>
        </ul>
      `,
    },
    {
      company: "Doogether",
      year: "Aug 2021 - Mei 2022",
      title: "Junior Front-End Engineer",
      desc: `
              <ul>
                  <li>Develop and Maintenance Dashboard Web App for 
                  Company Management using React, Context, Firebase, and 
                  any other tools</li>
                  <li>Develop and maintenance main website of our company,
                  which cover information about our company, products,
                  and also include booking and transaction feature to our
                  products</li>
                  <li>Develop and maintenance supporting and additional web
                  App</li>
              </ul>
          `,
    },
    {
      year: "Nov 2017 - Aug 2021",
      title: "Graphic Designer at PT. Gilland Ganesha",
      desc: `<ul><li>Working in Digital Marketing Division</li></ul>`,
    },
  ];
  return (
    <section className="max-w-6xl m-auto my-[80px]">
      <div className="flex">
        <div className="flex-1 pr-5">
          <h1 className="font-bold text-[70px] leading-[1]">I am design <br /> and technology enthusiast.</h1>
          <p className="mt-[2rem] mb-[1rem]">
            I like creating cool things on the Computer and Internet, such
            as design or Application that can run interactively.
          </p>
          <p>
            i’m really interested to work on tech industry as an Software
            Engineer, and i hope i’ll be able to provide something useful
            for people around me with technology.
          </p>
          <div className="mt-[2.4rem] pt-3 buttons flex gap-5">
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
          {/* <div className="relative h-[500px]">
            <div className="absolute illustration3d-wrapper h-[500px] w-[500px]">
              <Illustration2 />
            </div>
          </div> */}
        </div>
        <div className="w-6/12">
          <div className="flex">
            <div className="bg-indigo-600 w-[8px] mr-11 rounded-full relative triangle"></div>
            <div className="flex-1">
              <h2 className="mb-9 font-semibold">Experiences</h2>
              <div className="flex flex-col gap-y-6">
                {experiences.map((item, i) => (
                  <div key={i} className="relative border rounded-md p-6">
                    <h4 className="font-semibold mb-2">{item.company}</h4>
                    <h2 className="font-bold mb-2 text-indigo-800">{item.title}</h2>
                    <h4 className="font-semibold mb-4">{item.year}</h4>
                    <div className="experience-item-desc" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences;