import * as React from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

interface TooltipProps {
  children: React.ReactNode;
  content?: string | React.ReactNode;
  placement?: Placement;
}


const Tooltip = ({ children, content, placement }: TooltipProps) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = React.useState<HTMLDivElement | null>(null);
  const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const show = () => {
    popperElement?.setAttribute("data-show", "");
    if (update) update()
  };

  const hide = () => {
    popperElement?.removeAttribute("data-show");
    if (update) update()
  };

  return (
    <>
      <div onMouseEnter={show} onMouseLeave={hide} className="inline-block" ref={setReferenceElement}>
        {children}
      </div>

      {content ? (
        <div ref={setPopperElement} className="bg-white py-1 px-2.5 rounded-md tooltip leading-tight text-sm" style={styles.popper} {...attributes.popper}>
          {content}
          <div ref={setArrowElement} style={styles.arrow} className="tooltip-arrow" />
        </div>
      ) : null}
    </>
  )
}

export default Tooltip;