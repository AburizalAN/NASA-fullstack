import * as React from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import LandingPageImg from "@/public/images/LandingPage.png";
import FinanceAppImg from "@/public/images/finance-app.png";
import MakanKuyImg from "@/public/images/makan-kuy.png";
import Image from 'next/image'
import Masonry, { MasonryItem } from "@/components/Masonry";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const data = [
  {
    id: 1,
    title: "Personal Finance App",
    description: `This is a personal finance app that I built using Next.js and Redux SAGA. 
            It is a simple app that allows you to track your expenses and incomes. 
            It's responsive and works on mobile devices.`,
    image: FinanceAppImg,
    link: "https://my-finance-app.vercel.app",
    repo: "https://github.com/AburizalAN/Finance-App.git",
    tech: [
      "Typescript",
      "Next.js",
      "Next-PWA",
      "Redux Saga",
      "Material UI",
      "Styled Components",
      "Firebase Firestore",
      "Google Login",
      "Next API",
    ],
  },
  {
    id: 2,
    title: "MakanKuy: Find Restourant App",
    description: `MakanKuy is an app where you can find a Restourant from available Restourant List in Database. You can add the restourant you like to the bookmark/saved page. and you can access the Bookmark page when you are offline. This App is an SPA's Progressive Web App that made with pure Vanilla Javascript.`,
    image: MakanKuyImg,
    link: "https://makankuy-app.netlify.app/",
    repo: "https://github.com/AburizalAN/MakanKuy-restaurant-apps.git",
    tech: [
      "HTML",
      "SCSS",
      "Vanilla Javascript",
      "Webpack",
      "Babel",
      "eslint",
      "Codeceptjs",
    ],
  },
  {
    id: 3,
    title: "Landing Page Website",
    description: `This is the Clean, Modern, and Professional Agency Website Template Based on latest Bootstrap 4 Framework.
            You can use this template for any kind of purpose.`,
    image: LandingPageImg,
    link: "https://bravobuzz-purple.netlify.app",
    repo: "https://github.com/AburizalAN/BravoBuzz.git",
    tech: ["HTML", "SCSS", "Bootstrap", "Javascript"],
  },
];

const Projects = () => {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".tiny-title", { opacity: 0, x: -100, ease: "power4.out", duration: 1 });
    gsap.from(".title", { opacity: 0, x: -100, ease: "power4.out", duration: 1, delay: .2 });

    for (let i = 0; i < data.length; i++) {
      gsap.from(`.masonry-item-${i}`, { opacity: 0, y: 100, scale: .95, ease: "power4.out", duration: 1, delay: (i + 1) * 0.2 })
    }
  }, { scope: container })

  return (
    <section ref={container} className="max-w-7xl m-auto">
      <h3 className="tiny-title font-semibold mb-3 text-indigo-800">Projects</h3>
      <h1 className="title mb-9 font-bold">{"Somethings I've Built"}</h1>
      <Masonry cols={3} className="flex-1 -m-3">
        {data.map((item, i) => (
          <MasonryItem key={i} className="px-3 py-3">
            <div className={`masonry-item-${i} rounded-lg overflow-hidden flex flex-col border-indigo-200/30 shadow-2xl shadow-indigo-500/20`}>
              <div className="w-full bg-gray-200">
                <Image src={item.image} alt={item.title} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6 bg-white flex flex-col flex-1">
                <h3 className="font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                <div className="flex flex-shrink-0 flex-wrap gap-3 mt-5 mb-8">
                  {item.tech.map((tech, i) => (
                    <div key={i} className="text-indigo-400 text-xs px-3 py-1 bg-indigo-50 rounded-md border-indigo-300 border">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href={item.link} className="no-underline cursor-pointer font-semibold text-indigo-400 hover:text-indigo-600 flex items-center gap-x-2">
                    <span>View Website</span>
                    <span><RiArrowRightDoubleFill /></span>
                  </a>
                </div>
              </div>
            </div>
          </MasonryItem>
        ))}
      </Masonry>
    </section>
  )
}

export default Projects;