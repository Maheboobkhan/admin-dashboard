import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ButtonsWDrop = () => {
  const [isChecked, setChecked] = useState(false);
  const [DropdownOne, setDropdownOne] = useState(false);
  const [DropdownTwo, setDropdownTwo] = useState(false);
  const [DropdownThree, setDropdownThree] = useState(false);
  const [DropdownFour, setDropdownFour] = useState(false);

  const toggleDropdownOne = () => {
    setDropdownOne(!DropdownOne);
  };

  const toggleDropdownTwo = () => {
    setDropdownTwo(!DropdownTwo);
  };

  const toggleDropdownThree = () => {
    setDropdownThree(!DropdownThree);
  };

  const toggleDropdownFour = () => {
    setDropdownFour(!DropdownFour);
  };

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="flex flex-wrap border border-gray-300 m-[20px] rounded">
      <div className="lg:w-full pr-4 pl-4">
        <div className="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 drop border-b-1 border-gray-300 text-white items-center flex justify-between">
          <h4 className="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
            Buttons with dropdowns
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
                You can use a button with the dropdown toggle to set the file
                input group.
              </p>
              <div className="flex flex-wrap g-3">
                <div className="lg:w-1/2 pr-4 pl-4">
                  <div className="relative flex items-stretch w-full my-[10px]">
                    <button
                      className="inline-block w-[150px] px-[10px] h-[32px] flex justify-center items-center rounded-l-lg align-middle select-none border font-normal whitespace-no-wrap ml-1 py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600  inline-block w-0 h-0 align border-b-0 border-t-1 border-r-1 border-l-1"
                      type="button"
                      onClick={toggleDropdownOne}
                    >
                      Dropdown
                    </button>
                    <span
                      onClick={toggleDropdownOne}
                      className="absolute left-[16.5%] top-[10px] cursor-pointer "
                    >
                      <IoMdArrowDropdown color="white" />
                    </span>
                    <ul
                      className={`absolute top-[33px] left-0 z-50 o float-left list-reset py-2 mt-1 text-base bg-white border border-gray-300 rounded ${
                        DropdownOne ? "opacity-100 h-auto" : "h-0 opacity-0"
                      }`}
                    >
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="h-0 my-2 overflow-hidden border-t-1 border-gray-300" />
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Separated link
                        </a>
                      </li>
                    </ul>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200 rounded-r-lg"
                      aria-label="Text input with dropdown button"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 pr-4 pl-4">
                  <div className="relative flex items-stretch w-full my-[10px]">
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200 rounded-l-lg"
                      aria-label="Text input with dropdown button"
                    />
                    <button
                      className="inline-block w-[150px] px-[10px] h-[32.5px] flex justify-center items-center rounded-r-lg align-middle text-center select-none border font-normal whitespace-no-wrap rounded-r-lg py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600 inline-block w-0 h-0 mr-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                      type="button"
                      onClick={toggleDropdownTwo}
                    >
                      Dropdown
                    </button>
                    <span
                      onClick={toggleDropdownTwo}
                      className="absolute left-[96%] top-[10px] cursor-pointer "
                    >
                      <IoMdArrowDropdown color="white" />
                    </span>
                    <ul
                      className={`absolute top-[33px] left-[70%] z-50 o float-left list-reset py-2 mt-1 text-base bg-white border border-gray-300 rounded ${
                        DropdownTwo ? "opacity-100 h-auto" : "h-0 opacity-0"
                      }`}
                    >
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="h-0 my-2 overflow-hidden border-t-1 border-gray-300" />
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-full pr-4 pl-4">
                  <div className="relative flex items-stretch w-full my-[10px]">
                    <button
                      className="inline-block w-[150px] px-[10px] h-[35px] flex justify-center items-center rounded-l-lg align-middle text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline border-gray-600 text-gray-300 bg-gray-700 inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                      type="button"
                      onClick={toggleDropdownThree}
                    >
                      Dropdown
                    </button>
                    <span
                      onClick={toggleDropdownThree}
                      className="absolute left-[8.5%] top-[10px] cursor-pointer"
                    >
                      <IoMdArrowDropdown color="white" />
                    </span>
                    <ul
                      className={`absolute top-[33px] left-[70%] z-50 o float-left list-reset py-2 mt-1 text-base bg-white border border-gray-300 rounded ${
                        DropdownThree ? "opacity-100 h-auto" : "h-0 opacity-0"
                      }`}
                    >
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Action before
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Another action before
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="h-0 my-2 overflow-hidden border-t-1 border-gray-300" />
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Separated link
                        </a>
                      </li>
                    </ul>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-gray-300 border border-gray-200"
                      aria-label="Text input with 2 dropdown buttons"
                    />
                    <button
                      className="inline-block w-[150px] px-[10px] h-[35px] flex justify-center items-center rounded-r-lg align-middle text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline border-gray-600 text-gray-300 bg-gray-700 inline-block w-0 h-0 mr-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                      type="button"
                      onClick={toggleDropdownFour}
                    >
                      Dropdown
                    </button>
                    <span
                      onClick={toggleDropdownThree}
                      className="absolute left-[98%] top-[10px] cursor-pointer"
                    >
                      <IoMdArrowDropdown color="white" />
                    </span>
                    <ul
                      className={`absolute top-[33px] left-[70%] z-50 o float-left list-reset py-2 mt-1 text-base bg-white border border-gray-300 rounded ${
                        DropdownThree ? "opacity-100 h-auto" : "h-0 opacity-0"
                      }`}
                    >
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                      <li>
                        <hr className="h-0 my-2 overflow-hidden border-t-1 border-gray-300" />
                      </li>
                      <li>
                        <a
                          className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0"
                          href="#"
                        >
                          Separated link
                        </a>
                      </li>
                    </ul>
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

export default ButtonsWDrop;
