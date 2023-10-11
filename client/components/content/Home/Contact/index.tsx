const Contact = () => {
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
    <div className="max-w-6xl m-auto py-[100px] max-h-screen h-[800px] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-[50px] font-bold mb-8 text-center">Get In Touch</h1>
        <p className="text-center mb-8">
          Whether you have a question or just want to say hi, feel free to reach
          me through the contact below
        </p>
        <div className="flex justify-center gap-x-8">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
