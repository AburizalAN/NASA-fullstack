import * as React from "react"

interface Props {
  component: (props: ModalProps) => React.JSX.Element
}

interface ModalProps {
  isIntersecting: boolean;
}

const IntersecObserver = ({ component }: Props) => {
  const [isIntersecting, setIsIntersecting] = React.useState<boolean>(false);
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    setIsIntersecting(entries[0].isIntersecting);
  };

  let obeserverOptions = {
    rootMargin: "0px",
  };

  const observer =
    typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(observerCallback, obeserverOptions)
      : undefined;

  const observed = React.useCallback((node: HTMLElement | null) => {
    if (!node || !observer) return;
    observer.observe(node);
  }, []);

  const modalProps: ModalProps = {
    isIntersecting,
  }

  return (
    <div ref={observed}>
      {component(modalProps)}
    </div>
  )
}

export default IntersecObserver;