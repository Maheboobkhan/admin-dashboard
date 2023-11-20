import React, { useState } from "react";

const ButtonChR = () => {
  const [isChecked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div class="flex flex-wrap ">
      <div class="lg:w-full pr-4 pl-4 bg-gray-800">
        <div class="relative min-w-0 rounded break-words border bg-gray-800 border-1 border-gray-300">
          <div class="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 border-b-1 border-gray-300 text-white items-center flex justify-between">
            <h4 class="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
              Multiple Inputs
            </h4>
            <div class="flex-shrink-0">
              <div class="relative block mb-2 form-switch form-switch-right form-switch-md flex items-center">
                <input
                  type="checkbox"
                  id="slideCheckbox"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <label
                  htmlFor="slideCheckbox"
                  className={`cursor-pointer ${
                    isChecked ? "bg-blue-500" : "bg-gray-950"
                  } relative inline-block w-10 h-5 rounded-full transition-all duration-300`}
                >
                  <span
                    className={`${
                      isChecked ? "translate-x-6" : "translate-x-0"
                    } inline-block w-4 h-4 bg-white absolute top-[1.7px] rounded-full shadow-md transform transition-all duration-300`}
                  ></span>
                </label>
                <span className="ml-2 text-gray-400 text-[20px]">
                  Show Code
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div class="flex-auto p-6">
            <p class="text-gray-300 mb-[15px]">
              While multiple{" "}
              <code className="text-[#FAA0A0] px-[5px]">&lt;input&gt;</code>s
              are supported visually, validation styles are only available for
              input groups with a single{" "}
              <code className="text-[#FAA0A0] px-[5px]">&lt;input&gt;</code>.
            </p>
            <div class="live-preview">
              <div class="relative flex items-stretch w-full mb-3">
                <span class="input-group-text border border-gray-300 text-gray-300 bg-gray-700 flex justify-center items-center px-[15px] h-[33.5px] w-[400px]">
                  First and last name
                </span>
                <input
                  type="text"
                  aria-label="First name"
                  class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                />
              </div>

              <div class="relative flex items-stretch w-full mb-3">
                <span class="input-group-text border border-gray-300 text-gray-300 bg-gray-700 rounded-l-lg flex justify-center items-center px-[15px] h-[33.5px]">
                  $
                </span>
                <span class="input-group-text border border-gray-300 text-gray-300 bg-gray-700 flex justify-center items-center px-[15px] h-[33.5px]">
                  0.00
                </span>
                <input
                  type="text"
                  class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
              </div>

              <div class="relative flex items-stretch w-full">
                <input
                  type="text"
                  class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-l-lg"
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <span class="input-group-text border border-gray-300 text-gray-300 bg-gray-700 flex justify-center items-center px-[15px] h-[33.5px]">
                  $
                </span>
                <span class="input-group-text border border-gray-300 text-gray-300 bg-gray-700 flex justify-center items-center px-[15px] h-[33.5px] rounded-r-lg">
                  0.00
                </span>
              </div>
            </div>
            <div class="hidden code-view"></div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ButtonChR;
