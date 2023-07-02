import * as React from "react";

const ResizableTextArea = ({ resize, value, ...props }: any) => {
  const ref = React.useRef<HTMLElement>(null);

  const adjustHeight = (element?: HTMLElement) => {
    if (element) {
      element.style.height = "auto";
      element.style.height = `${element.scrollHeight}px`;
    }
  };

  const observer = React.useRef(
    typeof ResizeObserver === "undefined"
      ? undefined
      : new ResizeObserver(() => adjustHeight(ref?.current ?? undefined))
  );

  React.useEffect(() => {
    const textarea = ref.current;
    if (textarea) {
      const resizeObserver = observer.current;
      if (resizeObserver === undefined) return;
      resizeObserver.observe(textarea);
      return () => (resizeObserver ? resizeObserver.disconnect() : undefined);
    }
  }, []);

  React.useEffect(() => {
    const textarea = ref.current;
    if (textarea) {
      textarea.addEventListener("input", () => adjustHeight(textarea));
      return () => {
        textarea.removeEventListener("input", () => {});
      };
    }
  }, []);

  React.useEffect(() => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [ref?.current?.scrollHeight]);

  return <textarea {...props} value={value} ref={ref} rows={1} style={{ resize: !resize ? "none" : "inherit" }} />;
};

export default ResizableTextArea;
