import * as ReactDOM from "react-dom";
import * as React from "react";
import clsx from "clsx";

type MessageCompProps = {
  children: React.ReactNode;
  type: string;
  duration: number;
  closed: () => void;
};

type MessageProps = {
  type: string;
  content: string | React.ReactNode;
  duration?: number;
};

const MessageComp = ({
  children,
  type,
  duration,
  closed,
}: MessageCompProps) => {
  const [isClosed, setIsClosed] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    setTimeout(() => {
      setIsClosed(true);
    }, duration);
  }, []);

  React.useEffect(() => {
    if (isClosed) {
      const element = ref.current;
      if (element) {
        element.classList.add("closing");
        element.addEventListener(
          "animationend",
          () => {
            closed();
          },
          { once: true }
        );
      }
    }
  }, [isClosed]);

  const classProp = clsx("message", type);
  return (
    <div ref={ref} className={classProp}>
      {children}
    </div>
  );
};

const message = ({ type, content, duration = 4000 }: MessageProps) => {
  const wrapper = document.createElement("div");
  const closed = () => {
    document.body.removeChild(wrapper);
  };
  const renderComponent = (
    <MessageComp type={type} duration={duration} closed={closed}>
      {content}
    </MessageComp>
  );

  document.body.appendChild(wrapper);
  ReactDOM.render(renderComponent, wrapper);
};

export default message;
