import Plan from "./Plan";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import Button from "./Button";

interface SelectPlanProps {
  onClick?: () => void;
  handleBack?: () => void;
  duration: boolean;
  setDuration: React.Dispatch<React.SetStateAction<boolean>>;
  setPrice: React.Dispatch<React.SetStateAction<{ label: string; price: number; }>>
  price: { label: string; price: number; }
}

const SelectPlan: React.FC<SelectPlanProps> = ({
  onClick,
  handleBack,
  duration,
  setDuration,
  setPrice,
  price
}) => {

  const handlePlanSelect = (label: string, price: number) => {
    setPrice({ label, price });
  };

  const handleDuration = () => {
    setDuration((prev) => !prev);
  };
  return (
    <div className="relative">
      <div className="flex flex-col md:items-center md:gap-3 
      bg-sky-100 md:bg-inherit -top-14 rounded-lg md:p-0 md:inset-0 absolute md:relative
      ">
        <div className="flex flex-col items-center md:justify-start md:items-start md:w-[380px]">
          <h1 className="text-2xl md:text-3xl font-bold text-[#02295A]">
            Select your plan
          </h1>
          <span className="text-[12px] md:text-sm font-medium opacity-50">
            You have the option of monthly or yearly billing.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 m-4">
          <Plan
            imageSrc={Arcade}
            label="Arcade"
            priceM={9}
            priceY={90}
            duration={duration}
            onSelect={() => handlePlanSelect("Arcade", duration ? 90 : 9)}
            selected={price?.label === "Arcade" ? true : false}
          />
          <Plan
            imageSrc={Advanced}
            label="Advanced"
            priceM={12}
            priceY={120}
            duration={duration}
            onSelect={() => handlePlanSelect("Advanced", duration ? 120 : 12)}
            selected={price?.label === "Advanced" ? true : false}
          />
          <Plan
            imageSrc={Pro}
            label="Pro"
            priceM={15}
            priceY={150}
            duration={duration}
            onSelect={() => handlePlanSelect("Pro", duration ? 150 : 15)}
            selected={price?.label === "Pro" ? true : false}
          />
        </div>
        <div className="flex justify-center ml-4 md:ml-0 md:py-2 my-4 rounded-md w-[300px] md:w-[380px] bg-[#BFE2FD]">
          <div className="flex justify-center items-center gap-3">
            <div
              className={`font-semibold text-[##02295A] ${
                duration ? "opacity-50" : "opacity-100"
              }`}
            >
              Monthly
            </div>
            <div
              className="w-[40px] h-[20px] rounded-full bg-[#02295A] relative cursor-pointer"
              onClick={handleDuration}
            >
              <div
                className={`w-[16px] translate-y-[2px] h-[16px] rounded-full bg-white absolute transition ${
                  duration ? "translate-x-[20px]" : "translate-x-[2px]"
                }`}
              ></div>
            </div>
            <div
              className={`font-semibold text-[##02295A] ${
                duration ? "opacity-100" : "opacity-50"
              }`}
            >
              Yearly
            </div>
          </div>
        </div>
      </div>
      <div className="-bottom-[390px] absolute md:relative md:inset-0 -right-80">
      <div className="flex justify-around gap-36 md:gap-0 pt-6">
        <Button type="button" onClick={handleBack} label="Go Back" />
        <Button type="button" onClick={onClick} label="Next Step" />
      </div>
      </div>
    </div>
  );
};

export default SelectPlan;
