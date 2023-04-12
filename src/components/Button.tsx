import React from "react";

interface ButtonProps {
  type?: string | any;
  onClick?: () => void;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, label }) => {
  return (
    <button
      className={`${label === "Go Back" ? 'bg-transparent text-black opacity-60' : 'bg-[#02295A] text-white'} text-sm font-[500] px-3 py-2 outline-none hover:opacity-90 rounded-md`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
