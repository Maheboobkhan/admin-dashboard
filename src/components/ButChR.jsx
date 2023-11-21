import React, { useState } from "react";

const ButChR = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="flex flex-wrap border border-gray-300 m-[20px] rounded">
      <div className="lg:w-full pr-4 pl-4">
        <div className="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 border-b-1 border-gray-300 text-white items-center flex justify-between">
          <h4 className="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
            Input Group
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
          <div className="live-preview">
            <div>
              <p className="text-gray-300 pb-[15px]">
                Use any checkbox, radio, or button option within an input
                group's addon instead of text. We recommend adding{" "}
                <code className="text-[#FAA0A0] px-[5px]">mt-0</code> class to
                the
                <code className="text-[#FAA0A0] px-[5px]">
                  form-check-input
                </code>{" "}
                when there's no visible text next to the input.
              </p>
              <div className="flex flex-wrap  g-3">
                <div className="lg:w-1/2 pr-4 pl-4 my-[10px]">
                  <div className="relative flex items-stretch w-full">
                    <div className="input-group-text border px-[20px] border-gray-300 h-[33px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-end items-center">
                      <input
                        className="mt-1 -ml-6 ml-[2px]"
                        type="checkbox"
                        defaultValue=""
                        aria-label="Checkbox for following text input"
                      />
                    </div>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      aria-label="Text input with checkbox"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4 my-[10px] ">
                  <div className="relative flex items-stretch w-full">
                    <div className="input-group-text border px-[20px] border-gray-300 h-[33px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-end items-center">
                      <input
                        className="mt-1 -ml-6 mt-0 ml-[2px]"
                        type="radio"
                        defaultValue=""
                        aria-label="Radio button for following text input"
                      />
                    </div>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      aria-label="Text input with radio button"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4 my-[10px]">
                  <div className="relative flex items-stretch w-full">
                    <button
                      className="inline-block align-middle h-[35px] mt-[-1px] rounded-l-lg text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600"
                      type="button"
                      id="button-addon1"
                    >
                      Button
                    </button>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4 my-[10px]">
                  <div className="relative flex items-stretch w-full">
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-l-lg"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="inline-block h-[35px] mt-[-1px] rounded-r-lg align-middle text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline text-green-500 border-green-500 hover:bg-green-500 hover:text-white bg-white hover:green-600"
                      type="button"
                      id="button-addon2"
                    >
                      Button
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4 my-[10px]">
                  <div className="relative flex items-stretch w-full">
                    <button
                      className="inline-block align-middle text-center h-[35px] mt-[-1px] rounded-l-lg select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                      type="button"
                    >
                      Button
                    </button>
                    <button
                      className="inline-block align-middle text-center select-none border font-normal h-[35px] mt-[-1px] whitespace-no-wrap py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600"
                      type="button"
                    >
                      Button
                    </button>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      placeholder=""
                      aria-label="Example text with two button addons"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4 my-[10px]">
                  <div className="relative flex items-stretch w-full">
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-l-lg"
                      aria-label="Recipient's username with two button addons"
                    />
                    <button
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap h-[35px] mt-[-1px] py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                      type="button"
                    >
                      Button
                    </button>
                    <button
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap h-[35px] mt-[-1px] rounded-r-lg py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600"
                      type="button"
                    >
                      Button
                    </button>
                  </div>
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
export default ButChR;
