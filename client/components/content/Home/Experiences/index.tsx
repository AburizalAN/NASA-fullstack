import * as React from "react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Illustration2 from "../Header/Illustration2";
import clsx from "clsx";
import Masonry, { MasonryItem } from "@/components/Masonry";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const experiences = [
  {
    company: "Fast 8 Group",
    year: "Jul 2022 - Present",
    title: "Frontend Web Developer ",
    desc: `
    <p>
      Developing E-Commerce app using next.js, redux saga, and next-PWA to Create and Maintenance Product Cart, Multiple Shipping, Payment Method, FlashSale Section Product, and Brand Catalogue Feature on AwalMula e-commerce Progressive Web App.
    </p>
    `,
  },
  {
    company: "Awal Mula",
    year: "Nov 2021 - Jun 2022",
    title: "Frontend Web Developer (Freelance)",
    desc: `
      <p>Developing E-Commerce app using next.js, redux saga, and next-PWA to Create and Maintenance Product Cart, Multiple Shipping, Payment Method, FlashSale Section Product, and Brand Catalogue Feature on AwalMula e-commerce Progressive Web App.</p>
    `,
  },
  {
    company: "Doogether",
    year: "Aug 2021 - Mei 2022",
    title: "Junior Front-End Engineer",
    desc: `
      <p>Developing and Maintenance Dashboard Web App for 
      Company Management using React, Context, Firebase, and 
      any other tools</p>
      <p>Develop and maintenance main website of our company,
      which cover information about our company, products,
      and also include booking and transaction feature to our
      products</p>
      <p>Develop and maintenance supporting and additional web
      App</p>
        `,
  },
  {
    company: "PT. Gilland Ganesha",
    year: "Nov 2017 - Aug 2021",
    title: "Graphic Designer",
    desc: `<p>Working in Digital Marketing Division</p>`,
  },
];

interface PropTypes {
  isIntersecting: boolean
}

const Experiences = ({ isIntersecting }: PropTypes) => {
  const container = React.useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (isIntersecting) {
      gsap.from(".tiny-title", { opacity: 0, x: -100, ease: "power4.out", duration: 1 });
      gsap.from(".title", { opacity: 0, x: -100, ease: "power4.out", duration: 1, delay: .2 });
      gsap.from(".paragraph", { opacity: 0, x: -100, ease: "power4.out", duration: 1, delay: .4 });
  
      for (let i = 0; i < experiences.length; i++) {
        gsap.from(`.masonry-item-${i}`, { opacity: 0, y: 100, scale: .95, ease: "power4.out", duration: 1, delay: (i + 1) * 0.2 })
      }
    }
  }, { scope: container, dependencies: [isIntersecting], revertOnUpdate: true })

  return (
    <section ref={container} className="max-w-7xl m-auto my-[180px]">
      <div className="flex flex-shrink gap-16">
        <div className="w-4/12 flex-shrink-0">
          <h3 className="tiny-title mb-3 font-semibold text-indigo-800">Experiences</h3>
          <h1 className="title mb-7 font-bold text-4xl leading-tight">{"Lorem Ipsum Dolor Sit Amet"}</h1>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ornare dui, eu sollicitudin dolor finibus et. Fusce molestie suscipit arcu, eget ultricies nisi venenatis eu.</p>
        </div>
        <Masonry cols={2} className="flex-1 -m-3">
          {experiences.map((item, i) => (
            <MasonryItem key={i} className={`px-3 py-3`}>
              <div className={`masonry-item-${i} bg-white/40 border rounded-md p-6 w-auto border-indigo-200/30 shadow-2xl shadow-indigo-500/20`}>
                <h5 className="font-semibold mb-1 mt-2 text-pretty">{item.company}</h5>
                <h3 className="font-bold mb-1 text-indigo-800 leading-tight">{item.title}</h3>
                <h5 className="font-semibold mb-5">{item.year}</h5>
                <div
                  className="experience-item-desc"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
              </div>
            </MasonryItem>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Experiences;
