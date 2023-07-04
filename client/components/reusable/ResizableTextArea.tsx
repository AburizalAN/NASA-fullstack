import * as React from "react";

const ResizableTextArea = ({ resize, value, maxRows, disableEnter, ...props }: any) => {
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
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = `${scrollHeight}px`;
      if (maxRows) {
        const lineHeight = window.getComputedStyle(textarea).lineHeight;
        const maxHeight = maxRows * parseFloat(lineHeight);
        textarea.style.maxHeight = `${maxHeight}px`;
      }
    }
  }, [ref?.current, maxRows]);

  const handleKeydown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (disableEnter && event.key === "Enter") {
      event.preventDefault();
      return;
    }
    const textarea = ref.current;
    if (maxRows && textarea) {
      const lineHeight = window.getComputedStyle(textarea).lineHeight;
      const maxHeight = maxRows * parseFloat(lineHeight);
      if (textarea.scrollHeight >= maxHeight && event.key === "Enter") {
        event.preventDefault();
      }
    }
  }

  return (
    <textarea
      {...props}
      value={value}
      ref={ref}
      rows={1}
      style={{ resize: !resize ? "none" : "inherit" }}
      onKeyDown={handleKeydown}
    />
  );
};

export default ResizableTextArea;
