import React, { useState } from "react";

const InputGroup = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="flex flex-wrap border border-gray-300 rounded m-[20px]">
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
              <h5 className="form-label text-gray-100 text-[22px]">
                Basic example
              </h5>
              <p className="text-gray-300">
                Use <code className="text-[#FAA0A0] px-[5px]">input-group</code>{" "}
                class to div element which contains input attribute to wrap a
                default input in the group.
              </p>
              <div className="flex flex-wrap  g-3">
                <div className="lg:w-1/2 pr-4 pl-4">
                  <div className="relative flex items-stretch w-full mt-[20px]">
                    <span
                      className="input-group-text border border-gray-300 px-[15px] h-[33px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-center items-center"
                      id="basic-addon1"
                    >
                      @
                    </span>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4">
                  <div className="relative flex items-stretch w-full mt-[20px]">
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-l-lg"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span
                      className="input-group-text border border-gray-300 px-[15px] h-[33px] rounded-r-lg bg-gray-700 text-gray-300 flex justify-center items-center"
                      id="basic-addon2"
                    >
                      @example.com
                    </span>
                  </div>
                </div>
                <div className="lg:w-full pr-4 pl-4">
                  <div className="relative flex items-stretch w-full mt-[20px]">
                    <span className="input-group-text border border-gray-300 px-[15px] h-[33px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-center items-center">
                      $
                    </span>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text border border-gray-300 px-[15px] h-[33px] rounded-r-lg bg-gray-700 text-gray-300 flex justify-center items-center">
                      .00
                    </span>
                  </div>
                </div>
                <div className="lg:w-full pr-4 pl-4">
                  <div className="relative flex items-stretch w-full mt-[20px]">
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-l-lg"
                      placeholder="Username"
                      aria-label="Username"
                    />
                    <span className="input-group-text border border-gray-300 px-[15px] h-[33px] bg-gray-700 text-gray-300 flex justify-center items-center">
                      @
                    </span>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      placeholder="Server"
                      aria-label="Server"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4">
                  <div className="relative flex items-stretch w-full mt-[20px]">
                    <span className="input-group-text border border-gray-300 px-[15px] h-[57.5px] w-[150px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-center items-center">
                      With textarea
                    </span>
                    <textarea
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      aria-label="With textarea"
                      rows={2}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4">
                  <label htmlFor="basic-url" className="form-label text-white">
                    Your vanity URL
                  </label>
                  <div className="relative flex items-stretch w-full mt-[20px]">
                    <span
                      className="input-group-text border border-gray-300 rounded-l-lg px-[15px] h-[33px] bg-gray-700 text-gray-300 flex justify-center items-center"
                      id="basic-addon3"
                    >
                      https://example.com/users/
                    </span>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded-r-lg"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="form-label text-gray-100 text-[22px]">Wrapping</h5>
              <p className="text-gray-300">
                Input groups wrap by default via
                <code className="text-[#FAA0A0] px-[5px]">
                  flex-wrap: wrap
                </code>{" "}
                in order to accommodate custom form field validation within an
                input group. You may disable this with
                <code className="text-[#FAA0A0] px-[5px]">
                  flex-nowrap
                </code>{" "}
                class.
              </p>
              <div className="relative flex items-stretch w-full flex-no-wrap mt-[20px]">
                <span
                  className="input-group-text border border-gray-300 px-[15px] h-[33px] rounded-l-lg bg-gray-700 text-gray-300 flex justify-center items-center"
                  id="addon-wrapping"
                >
                  @
                </span>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800  border border-gray-200 rounded-r-lg"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>
          <div className="hidden code-view"></div>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
