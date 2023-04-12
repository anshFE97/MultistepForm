import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

interface AddonsProps {
  onClick?: () => void;
  handleBack?: () => void;
  duration: boolean;
  setServices: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        price: number;
      }[]
    >
  >;
}

const AddOns: React.FC<AddonsProps> = ({
  onClick,
  handleBack,
  duration,
  setServices,
}) => {
  return (
    <div className="flex flex-col relative">
      <div className="bg-sky-100 md:bg-inherit left-2 -top-12 rounded-lg md:p-0 md:inset-0 absolute md:relative">
        <div className="flex w-[320px] md:w-auto flex-col items-center gap-4 py-8 md:py-0">
          <div className="flex flex-col md:w-[60%] justify-start items-start">
            <h1 className="text-2xl md:text-3xl font-bold text-[#02295A]">Pick add-ons</h1>
            <span className="text-[12px] md:text-sm font-medium opacity-50">
              Add-ons help enhance your gaming experience.
            </span>
          </div>
          <div className="flex flex-col gap-4 md:w-[60%] justify-start">
            <Checkbox
              label="Online Services"
              duration={duration}
              price={duration ? 10 : 1}
              name="checkbox1"
              subdetail="Access to multiplayer games."
              onChange={(isChecked) => {
                if (isChecked) {
                  setServices((prev) => [
                    { name: "Online Services", price: duration ? 10 : 1 },
                    ...prev.slice(1),
                  ]);
                } else {
                  setServices((prev) => [
                    { name: "", price: 0 },
                    ...prev.slice(1),
                  ]);
                }
              }}
            />
            <Checkbox
              label="Large Storage"
              duration={duration}
              price={duration ? 20 : 2}
              name="checkbox2"
              subdetail="Extra 1TB of cloud save."
              onChange={(isChecked) => {
                if (isChecked) {
                  setServices((prev) => [
                    prev[0],
                    { name: "Large Storage", price: duration ? 20 : 2 },
                    prev[2],
                  ]);
                } else {
                  setServices((prev) => [
                    prev[0],
                    { name: "0", price: 0 },
                    prev[2],
                  ]);
                }
              }}
            />
            <Checkbox
              label="Customizable profile"
              duration={duration}
              price={duration ? 20 : 2}
              name="checkbox3"
              subdetail="Custom theme on your profile."
              onChange={(isChecked) => {
                if (isChecked) {
                  setServices((prev) => [
                    prev[0],
                    prev[1],
                    { name: "Customizable profile", price: duration ? 20 : 2 },
                  ]);
                } else {
                  setServices((prev) => [
                    prev[0],
                    prev[1],
                    { name: "", price: 0 },
                  ]);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="-bottom-[390px] absolute md:relative md:inset-0 -right-80">
      <div className="flex justify-around gap-28 md:gap-0 pt-6">
        <Button type="button" onClick={handleBack} label="Go Back" />
        <Button type="button" onClick={onClick} label="Next Step" />
      </div>
      </div>
    </div>
  );
};

export default AddOns;
