import React, { useState } from "react";

const InputExample = () => {
  const [isChecked, setChecked] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#212529");
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setFocused] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <div class="flex flex-wrap ">
        <div class="lg:w-full pr-4 pl-4 bg-gray-800">
          <h1 className="text-white bg-gray-800 text-[30px] font-bold">
            Basic Element
          </h1>
          <div class="relative min-w-0 rounded break-words border bg-gray-800 border-1 border-gray-300">
            <div class="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 border-b-1 border-gray-300 text-white items-center flex justify-between">
              <h4 class="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
                Input Example
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

            <div class="flex-auto p-6 bg-gray-800 text-white lg:flex lg:flex-row md:flex md:flex-col">
              <div class="live-preview">
                <div class="flex flex-wrap gy-4 md:items-center">
                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4">
                    <div className="mt-[15px]">
                      <label for="basiInput" class="form-label">
                        Basic Input
                      </label>
                      <input
                        type="password"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="basiInput"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="labelInput" class="form-label">
                        Input with Label
                      </label>
                      <input
                        type="password"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="labelInput"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="placeholderInput" class="form-label">
                        Input with Placeholder
                      </label>
                      <input
                        type="password"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="placeholderInput"
                        placeholder="Placeholder"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="valueInput" class="form-label">
                        Input with Value
                      </label>
                      <input
                        type="text"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="valueInput"
                        value="Input value"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label
                        for="readonlyPlaintext"
                        class="form-label bg-gray-800 text-white"
                      >
                        Readonly Plain Text Input
                      </label>
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="readonlyInput" class="form-label">
                        Readonly Input
                      </label>
                      <input
                        type="text"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="readonlyInput"
                        value="Readonly input"
                        readonly
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="disabledInput" class="form-label">
                        Disabled Input
                      </label>
                      <input
                        type="text"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="disabledInput"
                        value="Disabled input"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="iconInput" class="form-label">
                        Input with Icon
                      </label>
                      <div class="form-icon">
                        <input
                          type="email"
                          class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded form-control-icon"
                          id="iconInput"
                          placeholder="example@gmail.com"
                        />
                        <i class="ri-mail-unread-line"></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="iconrightInput" class="form-label">
                        Input with Icon Right
                      </label>
                      <div class="form-icon right">
                        <input
                          type="email"
                          class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded form-control-icon"
                          id="iconrightInput"
                          placeholder="example@gmail.com"
                        />
                        <i class="ri-mail-unread-line"></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="exampleInputdate" class="form-label">
                        Input Date
                      </label>
                      <input
                        type="date"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="exampleInputdate"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="exampleInputtime" class="form-label">
                        Input Time
                      </label>
                      <input
                        type="time"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="exampleInputtime"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="exampleInputpassword" class="form-label">
                        Input Password
                      </label>
                      <input
                        type="password"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="exampleInputpassword"
                        value="44512465"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label
                        for="exampleFormControlTextarea5"
                        class="form-label"
                      >
                        Example Textarea
                      </label>
                      <textarea
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="exampleFormControlTextarea5"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="formtextInput" class="form-label">
                        Form Text
                      </label>
                      <input
                        type="password"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="formtextInput"
                      />
                      <div id="passwordHelpBlock" class="block mt-1">
                        Must be 8-20 characters long.
                      </div>
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="colorPicker" class="form-label">
                        Color Picker
                      </label>
                      <input
                        type="color"
                        value={selectedColor}
                        onChange={handleColorChange}
                        className="w-[100%] h-[50px] bg-gray-800 rounded-md p-2 border border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="borderInput" class="form-label">
                        Input Border Style
                      </label>
                      <input
                        type="text"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                        id="borderInput"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <label for="exampleDataList" class="form-label">
                      Datalist example
                    </label>
                    <input
                      class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded"
                      list="datalistOptions"
                      id="exampleDataList"
                      placeholder="Search your country..."
                    />
                    <datalist id="datalistOptions">
                      <option value="Switzerland"></option>
                      <option value="New York"></option>
                      <option value="France"></option>
                      <option value="Spain"></option>
                      <option value="Chicago"></option>
                      <option value="Bulgaria"></option>
                      <option value="Hong Kong"></option>
                    </datalist>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div>
                      <label for="exampleInputrounded" class="form-label">
                        Rounded Input
                      </label>
                      <input
                        type="text"
                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-gray-800 text-white border border-gray-200 rounded rounded-full py-2 px-4"
                        id="exampleInputrounded"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div class="col-xxl-3 md:w-1/2 pr-4 pl-4 mt-[15px]">
                    <div class="form-floating relative">
                      <input
                        type="text"
                        className="text-white bg-gray-800 w-full py-4 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                      <label
                        className={`absolute top-4 left-3 transition-all duration-300 ${
                          isFocused || inputValue
                            ? "top-[-12px] pt-[12px] text-sm text-gray-500"
                            : "top-2/4 text-base"
                        } pointer-events-none`}
                      >
                        Floating Input
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden code-view"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputExample;
