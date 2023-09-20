import { useSpring, animated, easings } from '@react-spring/web';
import styled from '@emotion/styled';

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
`

export const TextAnimation = ({ text }: any) => {
    const arrayText = text.split('');
    return (
        arrayText.map((char: any, i: any) => (
            <SpanAnimation key={i} index={i}>{char}</SpanAnimation>
        ))
    )
}


export const FadeNimation = ({ children, delay, duration, left = true, className }: any) => {
  const springProps = useSpring({ 
      to: { opacity: 1, x: 0 },
      from: { opacity: 0, x: left ? -100 : 100 },
      delay: delay ?? 0,
      config: {
          duration: duration,
          easing: easings.easeOutQuart,
      }
  })

  return (
      <animated.div className={className} style={springProps}>{children}</animated.div>
  )
}