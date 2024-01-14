import * as React from "react";
import { useSpring, animated, easings } from "@react-spring/web";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

const SpanAnimation = styled.span<{ index: number }>`
  position: relative;
  animation-name: span-animation;
  animation-duration: 0.5s;
  animation-delay: ${({ index }) => index * 0.1}s;
  animation-fill-mode: backwards;

  @keyframes span-animation {
    0% {
      opacity: 0;
      top: -30px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }
`;

export const TextAnimation = ({ text }: any) => {
  const arrayText = text.split("");
  return arrayText.map((char: any, i: any) => (
    <SpanAnimation key={i} index={i}>
      {char}
    </SpanAnimation>
  ));
};

export const FadeNimation = ({
  children,
  delay,
  duration = 1,
  left = true,
  className,
}: any) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(itemRef.current, { x: left ? -100 : 100, opacity: 0, delay: delay ?? 0, duration: duration })
  }, { dependencies: [left, delay, duration] });

  return (
    <div ref={itemRef} className={clsx(className, "animation")}>{children}</div>
  );
};
