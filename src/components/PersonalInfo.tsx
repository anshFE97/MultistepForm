import { useState } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PersonalInfoProps {
  onClick?: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let error = false;

    if (name === '' || email === '' || phone === '') {
      toast.error('Please fill in all fields');
      error = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email");
      error = true;
    } else if (!/^\d{10}$/.test(phone)) {
      toast.error("Please enter a 10 digit phone number");
      error = true;
    }


    if (!error) {
      console.log(name, email, phone);
      onClick && onClick();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex relative flex-col gap-10">
      <div className="bg-sky-100 md:bg-inherit p-8 left-6  -top-16 rounded-lg md:p-0 md:inset-0 absolute md:relative">
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-[#02295A]">Personal Info</h1>
        <span className="text-sm font-medium opacity-50">
          Please provide your name, email address, and phone number.
        </span>
      </div>
      <div className="flex flex-col gap-4 lg:gap-4">
        <label className="font-semibold text-[#02295A]" htmlFor="username">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 rounded-md px-2 placeholder:opacity-70"
          name="username"
          type="text"
          placeholder="e.g. Stephen King"
        />

        <label className="font-semibold text-[#02295A]" htmlFor="email">
          Email Address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded-md px-2 placeholder:opacity-70"
          name="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />

        <label className="font-semibold text-[#02295A]" htmlFor="phone">
          Phone Number
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-2 rounded-md px-2 placeholder:opacity-70"
          name="phone"
          type="number"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      </div>
      <div className="flex justify-end bottom-4 absolute md:relative md:inset-0 -right-80">
        <Button type="submit" label="Next Step" />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </form>
  );
};

export default PersonalInfo;
