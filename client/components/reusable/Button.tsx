"use client";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  color?: string | undefined | null;
  block?: boolean;
  variant?: string | undefined | null;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({ children, variant, color = "primary", block, size = "md" }) => {
  const mergedClass = clsx(
    variant === "outlined" ? `btn-outlined` : 'btn',
    color && `btn-${color}`,
    block && "block w-full",
    size && `text-${size},` 
  );

  return <button className={mergedClass}>{children}</button>;
};

export default Button;
