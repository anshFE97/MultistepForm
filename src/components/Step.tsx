import React from "react";

interface StepProps {
  number?: number;
  label?: string
  page?: number
}
const Step: React.FC<StepProps> = ({ number, label, page }) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer">
      <div className={`border-2 rounded-full px-3 py-1 ${ page === number ? "text-black bg-[#BFE2FD]" : "text-white" }`}>
        {number}
      </div>
      <div>
        <div className="hidden md:inline text-xs font-medium text-white opacity-70">
          STEP {number} 
        </div>
        <div className="text-sm hidden md:inline tracking-wide font-semibold text-white">
           &nbsp;{label}
        </div>
      </div>
    </div>
  );
};

export default Step;
