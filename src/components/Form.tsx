import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import Result from "./Result";

interface FormProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const Form: React.FC<FormProps> = ({ page, setPage }) => {
    const [duration, setDuration] = useState(false);

    const [price, setPrice] = useState({
        label: "",
        price: 0,
      });

      const [services, setServices] = useState([
        { name: "", price: 0 },
        { name: "", price: 0 },
        { name: "", price: 0 },
      ]);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  console.log(page);
  return (
    <div className={`md:w-full h-[400px] md:h-auto ${page === 1 ? "flex justify-center" : ""}`}>
      {page === 1 ? (
        <PersonalInfo onClick={handleNext} />
      ) : page === 2 ? (
        <SelectPlan price={price} setPrice={setPrice} onClick={handleNext} handleBack={handleBack} duration={duration} setDuration={setDuration} />
      ) : page === 3 ? (
        <AddOns setServices={setServices} onClick={handleNext} handleBack={handleBack} duration={duration} />
      ) : page === 4 ? (
        <FinishingUp services={services} price={price} duration={duration} onClick={handleNext} handleBack={handleBack} />
      ) : (
        <Result />
      )}
    </div>
  );
};

export default Form;
