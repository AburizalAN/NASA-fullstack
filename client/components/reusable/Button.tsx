"use client";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  color?: string | undefined | null;
  block?: boolean;
  variant?: string | undefined | null;
}

const Button: React.FC<ButtonProps> = ({ children, variant, color, block }) => {
  const mergedClass = clsx(
    variant === "outlined" ? `btn-outlined` : 'btn',
    color && `btn-${color}`,
    block && "block w-full"
  );

  return <button className={mergedClass}>{children}</button>;
};

Button.defaultProps = {
  color: "primary",
  block: false,
  variant: undefined,
};

export default Button;
