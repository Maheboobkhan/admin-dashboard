import React, { useState } from "react";

const InputSizing = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="flex flex-wrap border border-gray-300 m-[20px] rounded">
      <div className="lg:w-full pr-4 pl-4">
        <div className="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 border-b-1 border-gray-300 text-white items-center flex justify-between">
          <h4 className="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
            Input Sizing
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
          <p className="text-gray-400 pb-[15px]">
            Use <code className="text-[#FAA0A0] px-[5px]">form-control-lg</code>{" "}
            class to set large size input and Use
            <code className="text-[#FAA0A0] px-[5px]">
              form-control-sm
            </code>{" "}
            class to set small size input. No class is needed for default size
            input.
          </p>
          <div className="live-preview">
            <div className="flex flex-wrap items-center g-3">
              <div className="lg:w-1/3 pr-4 pl-4">
                <input
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200 rounded py-1 px-2 text-sm leading-normal rounded"
                  type="text"
                  placeholder=".form-control-sm"
                />
              </div>
              {/*end col*/}
              <div className="lg:w-1/3 pr-4 pl-4">
                <input
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200 rounded"
                  type="text"
                  placeholder=".form-control"
                />
              </div>
              {/*end col*/}
              <div className="lg:w-1/3 pr-4 pl-4">
                <input
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200 rounded py-2 px-4 text-lg leading-normal rounded"
                  type="text"
                  placeholder=".form-control-lg"
                />
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          <div className="hidden code-view">
            <pre className="language-markup">
              <code>
                &lt;!-- Form Control Sm --&gt;{"\n"}&lt;input
                class="form-control form-control-sm" type="text"
                placeholder=".form-control-sm"&gt;
              </code>
              {"\n"}
              {"\n"}
              <code>
                &lt;!-- Form Control Default --&gt;{"\n"}&lt;input
                class="form-control" type="text"
                placeholder=".form-control-sm"&gt;
              </code>
              {"\n"}
              {"\n"}
              <code>
                &lt;!-- Form Control Lg --&gt;{"\n"}&lt;input
                class="form-control form-control-lg" type="text"
                placeholder=".form-control-sm"&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSizing;
