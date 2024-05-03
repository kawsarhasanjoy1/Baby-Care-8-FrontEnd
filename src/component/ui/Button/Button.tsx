import React, { ReactNode } from "react";

const Button = ({
  className,
  children,
  HandleToData,
}: {
  className?: string;
  children: ReactNode;
  HandleToData?: any;
}) => {
  return (
    <div>
      <button
        onClick={HandleToData}
        className={`bg-black px-8 py-3  text-white font-bold hover:border-black hover:border hover:bg-transparent hover:text-black duration-300 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
