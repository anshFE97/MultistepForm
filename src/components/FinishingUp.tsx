import React from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";

interface FinishingUpProps {
  onClick?: () => void;
  handleBack?: () => void;
  duration: boolean;
  price: { label: string; price: number };
  services: {
    name: string;
    price: number;
  }[];
}

const FinishingUp: React.FC<FinishingUpProps> = ({
  onClick,
  handleBack,
  duration,
  price,
  services,
}) => {
  const total =
    services.reduce((sum, item) => sum + item.price, 0) + price.price;

  const handleSubmit = () => {
    if (price?.label === "" || total === 0) {
      toast.error("Please select a plan");
    } else {
      onClick && onClick();
    }
  };

  return (
    <div className="relative">
      <div className="bg-sky-100 md:bg-inherit left-2 -top-12 rounded-lg py-4 md:py-0 md:p-0 md:inset-0 absolute md:relative">
        <div className="flex text-[#02295A] flex-col w-[320px] md:w-auto items-center gap-2 text-[15px]">
          <div className="flex flex-col w-[60%] justify-start items-start">
            <h1 className="text-2xl md:text-3xl font-bold">Finishing up</h1>
            <span className="text-[12px] md:text-sm font-medium opacity-50">
              Double-check everything looks OK before confirming.
            </span>
          </div>
          <div className="flex flex-col gap-4 md:w-[60%] justify-start">
            <div className="flex justify-between border-2 p-4 rounded-md bg-opacity-40 bg-[#BFE2FD] border-slate-300">
              {price?.label && (
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold">
                    {price.label} ({duration ? "Yearly" : "Monthly"})
                  </span>
                </div>
              )}
              {price?.label && (
                <div className="text-[14px] font-semibold">
                  ${price.price}/{duration ? "yr" : "mo"}
                </div>
              )}
            </div>
            <hr />
            <div className="flex flex-col gap-2 border-2 p-4 rounded-md bg-opacity-40 bg-[#BFE2FD] border-slate-300">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-[12px] md:text-[14px]">
                    {service.name}
                  </span>
                  {service.name && (
                    <span className="text-[12px] md:text-[14px] font-[400]">
                      +{service.price}$/{duration ? "yr" : "mo"}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className=" text-[14px] flex justify-between p-4">
              <span>Total (per {duration ? "year" : "month"})</span>
              <span className="text-[14px]">
                +${total}/{duration ? "yr" : "mo"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="-bottom-[390px] absolute md:relative md:inset-0 -right-80">
        <div className="flex justify-around gap-40 md:gap-0 pt-6">
          <Button type="button" onClick={handleBack} label="Go Back" />
          <Button type="submit" onClick={handleSubmit} label="Confirm" />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </div>
  );
};

export default FinishingUp;
