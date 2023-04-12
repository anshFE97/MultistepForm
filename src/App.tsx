import Form from "./components/Form";
import Steps from "./components/Steps";
import BgSide from "./assets/images/bg-sidebar-desktop.svg";
import BgTop from './assets/images/bg-sidebar-mobile.svg'
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="w-full flex flex-col justify-center items-center h-[100vh] bg-[#BFE2FD]">
      <div className="flex flex-col md:flex-row rounded-lg gap-2 p-0 md:p-2 w-[350px] md:w-[800px] h-auto md:h-[500px] bg-white">
        <div className="relative flex w-full md:h-full md:w-[45%]">
          <div className="absolute left-0 h-[100%] z-0">
            <img
              src={BgSide}
              alt="desktopbg"
              className="hidden md:block object-cover w-full h-full"
            />
          </div>
          <div>
          <img
              src={BgTop}
              alt="mobilebg"
              className="md:hidden rounded-t-lg block object-cover w-full h-full"
            />
          </div>
          <Steps page={page} />
        </div>
        <div className="flex w-full px-2  md:pr-4 items-center">
          <Form page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default App;
