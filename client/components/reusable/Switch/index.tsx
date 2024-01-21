import styles from "./switch.module.scss";
import clsx from "clsx";
import * as React from "react";

interface SwitchProps {
  position?: "left" | "right";
  content: (props: { status: "left" | "right" }) => any;
  onChange?: (position: "left" | "right") => any;
  renderIcon?: (props: { status: "left" | "right" }) => any;
}

const Switch = ({
  position = "left",
  content,
  onChange = () => {},
  renderIcon = () => "icon",
}: SwitchProps) => {
  const baseRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = React.useState(position == "left" ? false : true);
  const [isClicking, setIsClicking] = React.useState(false);

  React.useEffect(() => {
    const button = buttonRef.current;
    const base = baseRef.current;
    if (!button || !base) return;

    const width = button.clientWidth;
    const height = button.clientHeight;

    base.style.width = width + "px";
    base.style.height = height + "px";
  }, [buttonRef.current]);

  const handleSwitch = () => {
    if (!isClicking) {
      setIsClicking(true);
      switching().then(() => {
        setIsClicking(false);
      });
    }
  };

  const switching = () =>
    new Promise((resolve) => {
      const newStatus = toggle ? false : true;
      setToggle(newStatus);
      const switchComponent = buttonRef.current;
      if (switchComponent) {
        switchComponent.setAttribute("animate", newStatus ? "right" : "left");
        switchComponent.addEventListener(
          "animationend",
          () => {
            switchComponent.removeAttribute("animate");
            onChange(newStatus ? "right" : "left");
            resolve(newStatus);
          },
          { once: true }
        );
      }
    });

  return (
    <div
      onClick={handleSwitch}
      className={clsx(styles.switch, toggle && styles.active)}
    >
      <div
        ref={buttonRef}
        className={clsx(
          styles.switch__button,
          toggle ? styles.switch_right : styles.switch_left
        )}
      >
        {renderIcon({ status: toggle ? "right" : "left" })}
      </div>
      <div ref={baseRef}></div>
      <div className={styles.switch__text}>{content({ status: toggle ? "right" : "left" })}</div>
    </div>
  );
};

export default Switch;
