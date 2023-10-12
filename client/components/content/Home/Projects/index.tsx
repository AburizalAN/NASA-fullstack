import { RiArrowRightDoubleFill } from "react-icons/ri";
import LandingPageImg from "@/public/images/LandingPage.png";
import FinanceAppImg from "@/public/images/finance-app.png";
import MakanKuyImg from "@/public/images/makan-kuy.png";
import Image from 'next/image'

const Projects = () => {
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
  return (
    <section className="max-w-6xl m-auto">
      <h2 className="font-semibold mb-3">Projects</h2>
      <h1 className="mb-9 font-bold">{"Somethings I've Built"}</h1>
      <div className="grid grid-cols-2 gap-6 justify-end">
        {data.map((item, i) => (
          <div key={i} className="border rounded-lg overflow-hidden flex flex-col">
            <div className="h-[300px] w-full bg-gray-200">
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
              <div className="flex justify-end mt-auto">
                <a className="no-underline cursor-pointer font-semibold text-indigo-600 flex items-center gap-x-2">
                  <span>View Website</span>
                  <span><RiArrowRightDoubleFill /></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;