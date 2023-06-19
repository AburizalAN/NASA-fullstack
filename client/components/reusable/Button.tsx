"use client";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  color?: string | null;
  block?: boolean;
  variant?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}

const Button = ({
  children,
  variant,
  color = "primary",
  block,
  size = "md",
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  const mergedClass = clsx(
    variant === "outlined" ? `btn-outlined` : "btn",
    color && `btn-${color}`,
    block && "block w-full",
    size && `text-${size}`,
    className
  );

  return (
    <button onClick={onClick} className={mergedClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
