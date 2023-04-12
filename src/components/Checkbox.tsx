import { useState } from "react";

interface CheckboxProps {
  label: string;
  price?: number;
  subdetail: string;
  onChange: (isChecked: boolean) => void;
  name: string
  duration: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  price,
  subdetail,
  onChange,
  name,
  duration
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div className="flex items-center justify-between gap-1 py-3 px-3 rounded-md border-2  border-sky-300">
      <div className="flex gap-2">
        <input name={name} type="checkbox" checked={isChecked} onChange={handleOnChange} />
        <div>
          <span className="text-[14px] md:text-[16px] font-bold text-[#02295A]">{label}</span>
          <div className="text-[12px] md:text-[14px] font-medium opacity-50">{subdetail}</div>
        </div>
      </div>
      <div>
      {
        duration ? (
          <div className="text-[12px] md:text-[14px] font-[500] text-[#02295A]">+${price}/yr</div>
        ) : (
          <div className="text-[12px] md:text-[14px] font-[500] text-[#02295A]">+${price}/mo</div>
        )
      }
      </div>
    </div>
  );
};

export default Checkbox;
