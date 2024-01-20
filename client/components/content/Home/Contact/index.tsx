import * as React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { MdOutlineMyLocation } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = ({ isIntersecting }: { isIntersecting: boolean }) => {
  const container = React.useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (isIntersecting) {
      gsap.from(".tiny-title", { opacity: 0, y: 30, ease: "power4.out", duration: 1 });
      gsap.from(".title", { opacity: 0, y: 30, ease: "power4.out", duration: 1, delay: .2 });
      gsap.from(".paragraph", { opacity: 0, y: 30, ease: "power4.out", duration: 1, delay: .4 });
      gsap.from(".form", { opacity: 0, x: 100, ease: "power4.out", duration: 1, delay: .6 });
      gsap.from(".button-submit", { opacity: 0, x: 100, ease: "power4.out", duration: 1, delay: .8 });
  
      for (let i = 0; i < 3; i++) {
        gsap.from(`.contact-${i + 1}`, { opacity: 0, x: -100, ease: "power4.out", duration: 1, delay: i * 0.2 })
      }
    }
  }, { scope: container, dependencies: [isIntersecting], revertOnUpdate: true })

  const openGmail = () => {
    const payload = {
      fs: "1",
      to: "aburizal853@gmail.com",
      su: "Hello Abu",
      tf: "cm",
    };
    const query = new URLSearchParams(payload).toString();
    window.open(`https://mail.google.com/mail/u/0/?${query}`);
  };

  return (
    <div ref={container} className="max-w-6xl mx-auto my-[200px] max-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <h3 className="tiny-title font-bold mb-2 text-center text-indigo-800">Get In Touch</h3>
        <h1 className="title font-bold text-4xl leading-tight text-center mb-4">{"Let's"} Discuss with <span className="text-indigo-800">Me</span></h1>
        <p className="paragraph text-center mb-10 w-[400px]">
          Whether you have a question or just want to say hi, feel free to reach
          me through the contact below or send the message by filling below form.
        </p>
        <div className="flex w-full gap-x-12 flex-wrap">
          <div className="w-4/12 flex flex-col gap-6">
            <div className="contact-1 flex items-center gap-4 bg-white/30 p-5 rounded-lg shadow-2xl shadow-indigo-400/20">
              <div className="bg-indigo-600 w-[60px] h-[60px] grid place-items-center rounded-lg">
                <FiPhoneCall className="text-white text-[25px]" />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm mb-1">Call Me</div>
                <h6 className="font-semibold text-gray-600">0812-9832-3639</h6>
              </div>
            </div>
            <div className="contact-2 flex items-center gap-4 bg-white/30 p-5 rounded-lg shadow-2xl shadow-indigo-400/20">
              <div className="bg-indigo-600 w-[60px] h-[60px] grid place-items-center rounded-lg">
                <FiMail className="text-white text-[25px]" />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm mb-1">Email Me</div>
                <h6 className="font-semibold text-gray-600">aburizal853@gmail.com</h6>
              </div>
            </div>
            <div className="contact-3 flex items-center gap-4 bg-white/30 p-5 rounded-lg shadow-2xl shadow-indigo-400/20">
              <div className="bg-indigo-600 w-[60px] h-[60px] grid place-items-center rounded-lg">
                <MdOutlineMyLocation className="text-white text-[25px]" />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm mb-1">Address</div>
                <h6 className="font-semibold text-gray-600 leading-tight">Mulyaharja No. 135, South Bogor West Java Indonesia</h6>
              </div>
            </div>
          </div>
          <div className="form flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <input placeholder="Name" className="px-5 py-3 rounded-lg bg-transparent border border-indigo-300/50 outline-none shadow-xl shadow-indigo-200/20" />
              <input placeholder="Email" className="px-5 py-3 rounded-lg bg-transparent border border-indigo-300/50 outline-none shadow-xl shadow-indigo-200/20" />
            </div>
            <div className="flex-1">
              <textarea placeholder="Message" className="w-full h-full px-5 py-3 rounded-lg bg-transparent border border-indigo-300/50 outline-none shadow-xl shadow-indigo-200/20" />
            </div>
          </div>
          <div className="button-submit w-full flex justify-end mt-10">
            <button className="px-5 py-3 bg-indigo-600 rounded-lg text-white">Submit Message</button>
          </div>
        </div>
        {/* <div className="flex justify-center gap-x-8">
          <a
            className="flex items-center justify-center w-[300px] py-5 border border-indigo-800 hover:bg-indigo-800 text-indigo-800 hover:text-white font-semibold no-underline"
            onClick={openGmail}
          >
            Contact Me Via Email
          </a>
          <a
            className="flex items-center justify-center w-[300px] py-5 border border-indigo-800 hover:bg-indigo-800 text-indigo-800 hover:text-white font-semibold no-underline"
            href="https://api.whatsapp.com/send?phone=6281298323639"
            target="_blank"
          >
            Contact Me Via Whatsapp
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
