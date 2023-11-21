import React, { useState } from "react";

const CustomForm = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="flex flex-wrap border border-gray-300 m-[20px] rounded">
      <div className="lg:w-full pr-4 pl-4">
        <div className="lg:w-full pr-4 pl-4">
          <div className="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 border-b-1 border-gray-300 text-white items-center flex justify-between">
            <h4 className="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
              Custom Forms
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
                <span className="ml-2 text-gray-400 text-[20px]">
                  Show Code
                </span>
              </div>
            </div>
          </div>
          <hr />
          {/* end card header */}
          <div className="flex-auto p-6">
            <p className="text-gray-300 pb-[15px]">
              Input groups include support for custom selects and custom file
              inputs. Browser default versions of these are not supported.
            </p>
            <div className="live-preview">
              <div>
                <h5 className="text-[22px] text-white font-bold mb-3">
                  Select
                </h5>
                <div className="flex flex-wrap g-3">
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full my-[10px]">
                      <label
                        className="input-group-text rounded-l-lg border border-gray-300 px-[10px] text-gray-300 flex justify-center items-center"
                        htmlFor="inputGroupSelect01"
                      >
                        Options
                      </label>
                      <select
                        className="form-select border border-gray-300 w-[100%] bg-gray-800 text-gray-300 p-2 rounded-r-lg"
                        id="inputGroupSelect01"
                      >
                        <option selected="">Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full my-[10px]">
                      <select
                        className="form-select border border-gray-300 w-[100%] bg-gray-800 text-gray-300 p-2 rounded-l-lg"
                        id="inputGroupSelect02"
                      >
                        <option selected="">Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      <label
                        className="input-group-text rounded-r-lg border border-gray-300 px-[10px] text-gray-300 flex justify-center items-center"
                        htmlFor="inputGroupSelect02"
                      >
                        Options
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full my-[10px]">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-l-lg py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600"
                        type="button"
                      >
                        Button
                      </button>
                      <select
                        className="form-select border border-gray-300 w-[100%] bg-gray-800 text-gray-300 p-2 rounded-r-lg"
                        id="inputGroupSelect03"
                        aria-label="Example select with button addon"
                      >
                        <option selected="">Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full my-[10px]">
                      <select
                        className="form-select border border-gray-300 w-[100%] bg-gray-800 text-gray-300 p-2 rounded-l-lg]"
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                      >
                        <option selected="">Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-r-lg py-1 px-3 leading-normal no-underline text-gray-400 border-gray-600 hover:bg-gray-600 hover:text-white bg-gray-700 hover:bg-gray-400"
                        type="button"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="text-[22px] text-white font-bold mb-3">
                  File Input
                </h5>
                <div className="flex flex-wrap g-3">
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full my-[10px]">
                      <label
                        className="input-group-text rounded-l-lg border border-gray-300 px-[10px] h-[38px] text-gray-300 flex justify-center items-center"
                        htmlFor="inputGroupFile01"
                      >
                        Upload
                      </label>
                      <input
                        type="file"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal border border-gray-200 text-gray-300 bg-gray-800 rounded-r-lg"
                        id="inputGroupFile01"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full my-[10px]">
                      <input
                        type="file"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal border border-gray-200 text-gray-300 bg-gray-800 rounded-l-lg"
                        id="inputGroupFile02"
                      />
                      <label
                        className="input-group-text rounded-r-lg border border-gray-300 px-[10px] h-[38px] text-gray-300 flex justify-center items-center"
                        htmlFor="inputGroupFile02"
                      >
                        Upload
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600 h-[38px] rounded-l-lg"
                        type="button"
                        id="inputGroupFileAddon03"
                      >
                        Button
                      </button>
                      <input
                        type="file"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200 rounded-r-lg"
                        id="inputGroupFile03"
                        aria-describedby="inputGroupFileAddon03"
                        aria-label="Upload"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <input
                        type="file"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200 rounded-l-lg"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-r-lg h-[38px] py-1 px-3 leading-normal no-underline text-green-500 border-green-500 hover:bg-green-500 hover:text-white bg-white hover:green-600"
                        type="button"
                        id="inputGroupFileAddon04"
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
      {/*end col*/}
    </div>
  );
};

export default CustomForm;
