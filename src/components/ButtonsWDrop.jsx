import React from "react";

const ButtonsWDrop = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="lg:w-full pr-4 pl-4">
        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
          <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 items-center flex">
            <h4 className="mb-3 mb-0 flex-grow-1">Buttons with dropdowns</h4>
            <div className="flex-shrink-0">
              <div className="relative block mb-2 form-switch form-switch-right form-switch-md">
                <label
                  htmlFor="input-group-dropdown-showcode"
                  className="form-label text-gray-700"
                >
                  Show Code
                </label>
                <input
                  className="absolute mt-1 -ml-6 code-switcher"
                  type="checkbox"
                  id="input-group-dropdown-showcode"
                />
              </div>
            </div>
          </div>
          {/* end card header */}
          <div className="flex-auto p-6">
            <div className="live-preview">
              <div>
                <p className="text-gray-700">
                  You can use a button with the dropdown toggle to set the file
                  input group.
                </p>
                <div className="flex flex-wrap  g-3">
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded">
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
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        aria-label="Text input with dropdown button"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        aria-label="Text input with dropdown button"
                      />
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-end">
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
                    <div className="relative flex items-stretch w-full">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded">
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
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        aria-label="Text input with 2 dropdown buttons"
                      />
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-end">
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
            <div className="hidden code-view">
              <pre className="language-markup" style={{ height: 275 }}>
                <code>
                  &lt;!-- Buttons with dropdowns --&gt;{"\n"}&lt;div
                  class="input-group"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-primary dropdown-toggle"
                  type="button" data-bs-toggle="dropdown"
                  aria-expanded="false"&gt;Dropdown&lt;/button&gt;{"\n"}
                  {"    "}&lt;ul class="dropdown-menu"&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;hr
                  class="dropdown-divider"&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"    "}&lt;/ul&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  aria-label="Text input with dropdown button"&gt;{"\n"}
                  &lt;/div&gt;
                </code>
                {"\n"}
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  aria-label="Text input with dropdown button"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-success dropdown-toggle"
                  type="button" data-bs-toggle="dropdown"
                  aria-expanded="false"&gt;Dropdown&lt;/button&gt;{"\n"}
                  {"    "}&lt;ul class="dropdown-menu dropdown-menu-end"&gt;
                  {"\n"}
                  {"      "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;hr
                  class="dropdown-divider"&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-outline-secondary
                  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false"&gt;Dropdown&lt;/button&gt;{"\n"}
                  {"    "}&lt;ul class="dropdown-menu"&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Action before&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Another action before&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;hr
                  class="dropdown-divider"&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"    "}&lt;/ul&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  aria-label="Text input with 2 dropdown buttons"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-outline-secondary
                  dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false"&gt;Dropdown&lt;/button&gt;{"\n"}
                  {"    "}&lt;ul class="dropdown-menu dropdown-menu-end"&gt;
                  {"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;hr
                  class="dropdown-divider"&gt;&lt;/li&gt;{"\n"}
                  {"        "}&lt;li&gt;&lt;a class="dropdown-item"
                  href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"    "}&lt;/ul&gt;{"\n"}&lt;/div&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      {/*end col*/}
    </div>
  );
};

export default ButtonsWDrop;
