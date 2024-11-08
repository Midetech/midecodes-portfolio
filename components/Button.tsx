import React from "react";

const Button = ({
  className,
  children,
  type = "button",
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} font-sans lg:h-[47px] lg:w-[176px] border border-[#4d4d4d] text-black dark:text-white dark:border-white rounded-[34px]`}
    >
      {children}
    </button>
  );
};

export default Button;
