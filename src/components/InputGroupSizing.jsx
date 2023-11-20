import React, { useState } from "react";

const InputGroupSizing = () => {
  const [isChecked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="flex flex-wrap border border-gray-300 m-[20px] rounded">
      <div className="lg:w-full pr-4 pl-4">
        <div className="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 border-b-1 border-gray-300 text-white items-center flex justify-between">
          <h4 className="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
            Input Group Sizing
          </h4>
          <div className="flex-shrink-0">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="slideCheckbox"
                className="hidden"
                checked={isChecked}
                onChange={handleToggle}
              />
              <label
                htmlFor="slideCheckbox"
                className={`${
                  isChecked ? "bg-blue-500" : "bg-gray-950"
                } cursor-pointer w-10 h-5 relative inline-block rounded-full transition-all duration-300`}
              >
                <span
                  className={`${
                    isChecked ? "translate-x-5" : "translate-x-0"
                  } inline-block w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-300`}
                ></span>
              </label>
              <span className="ml-2 text-gray-400 text-[20px]">Show Code</span>
            </div>
          </div>
        </div>
        <hr />
        {/* end card header */}
        <div className="flex-auto p-6">
          <p className="text-gray-300 mb-[15px]">
            Use <code className="text-[#FAA0A0] px-[5px]">input-group-sm</code>{" "}
            class to set a small size input group and{" "}
            <code className="text-[#FAA0A0] px-[5px]">input-group-lg</code>{" "}
            class to input-group class to set a large size input group
            respectively. no such class is required for a default size input
            group.
          </p>
          <div className="live-preview">
            <div className="flex flex-wrap  items-center g-3">
              <div className="lg:w-1/3 pr-4 pl-4">
                <div className="relative flex items-stretch w-full input-group-sm">
                  <span
                    className="input-group-text border border-gray-300 px-[15px] h-[34px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-center items-center"
                    id="inputGroup-sizing-sm"
                  >
                    Small
                  </span>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 rounded-r-lg border border-gray-200"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4">
                <div className="relative flex items-stretch w-full">
                  <span
                    className="input-group-text border border-gray-300 px-[15px] h-[34px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-center items-center"
                    id="inputGroup-sizing-default"
                  >
                    Default
                  </span>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 rounded-r-lg border border-gray-200"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4">
                <div className="relative flex items-stretch w-full input-group-lg">
                  <span
                    className="input-group-text border border-gray-300 px-[15px] h-[34px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-center items-center"
                    id="inputGroup-sizing-lg"
                  >
                    Large
                  </span>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 rounded-r-lg border border-gray-200"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden code-view"></div>
        </div>
      </div>
    </div>
  );
};

export default InputGroupSizing;
