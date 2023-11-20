import React from "react";

const ButChR = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="lg:w-full pr-4 pl-4">
        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
          <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 items-center flex">
            <h4 className="mb-3 mb-0 flex-grow-1">
              Buttons, Checkboxs and Radios Group
            </h4>
            <div className="flex-shrink-0">
              <div className="relative block mb-2 form-switch form-switch-right form-switch-md">
                <label
                  htmlFor="input-group-btncheck-showcode"
                  className="form-label text-gray-700"
                >
                  Show Code
                </label>
                <input
                  className="absolute mt-1 -ml-6 code-switcher"
                  type="checkbox"
                  id="input-group-btncheck-showcode"
                />
              </div>
            </div>
          </div>
          {/* end card header */}
          <div className="flex-auto p-6">
            <div className="live-preview">
              <div>
                <p className="text-gray-700">
                  Use any checkbox, radio, or button option within an input
                  group’s addon instead of text. We recommend adding{" "}
                  <code>mt-0</code> class to the
                  <code>form-check-input</code> when there’s no visible text
                  next to the input.
                </p>
                <div className="flex flex-wrap  g-3">
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <div className="input-group-text">
                        <input
                          className="absolute mt-1 -ml-6 mt-0"
                          type="checkbox"
                          defaultValue=""
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        aria-label="Text input with checkbox"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <div className="input-group-text">
                        <input
                          className="absolute mt-1 -ml-6 mt-0"
                          type="radio"
                          defaultValue=""
                          aria-label="Radio button for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        aria-label="Text input with radio button"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600"
                        type="button"
                        id="button-addon1"
                      >
                        Button
                      </button>
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-green-500 border-green-500 hover:bg-green-500 hover:text-white bg-white hover:green-600"
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                        type="button"
                      >
                        Button
                      </button>
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600"
                        type="button"
                      >
                        Button
                      </button>
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        placeholder=""
                        aria-label="Example text with two button addons"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <input
                        type="text"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        aria-label="Recipient's username with two button addons"
                      />
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                        type="button"
                      >
                        Button
                      </button>
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600"
                        type="button"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden code-view">
              <pre className="language-markup" style={{ height: 275 }}>
                <code>
                  &lt;!-- Checkbox Input --&gt;{"\n"}&lt;div
                  class="input-group"&gt;
                  {"\n"}
                  {"    "}&lt;div class="input-group-text"&gt;{"\n"}
                  {"        "}&lt;input class="form-check-input mt-0"
                  type="checkbox" value="" aria-label="Checkbox for following
                  text input"&gt;{"\n"}
                  {"    "}&lt;/div&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  aria-label="Text input with checkbox"&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                {"\n"}
                <code>
                  &lt;!-- Radio Input --&gt;{"\n"}&lt;div
                  class="input-group"&gt;
                  {"\n"}
                  {"    "}&lt;div class="input-group-text"&gt;{"\n"}
                  {"        "}&lt;input class="form-check-input mt-0"
                  type="radio" value="" aria-label="Radio button for following
                  text input"&gt;
                  {"\n"}
                  {"    "}&lt;/div&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  aria-label="Text input with radio button"&gt;{"\n"}
                  &lt;/div&gt;
                </code>
                {"\n"}
                {"\n"}
                <code>
                  &lt;!-- Buttons Input --&gt;{"\n"}&lt;div
                  class="input-group"&gt;
                  {"\n"}
                  {"    "}&lt;button class="btn btn-outline-primary"
                  type="button" id="button-addon1"&gt;Button&lt;/button&gt;
                  {"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  placeholder="" aria-label="Example text with button addon"
                  aria-describedby="button-addon1"&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-outline-success"
                  type="button" id="button-addon2"&gt;Button&lt;/button&gt;
                  {"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-primary"
                  type="button"&gt;Button&lt;/button&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-success"
                  type="button"&gt;Button&lt;/button&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  placeholder="" aria-label="Example text with two button
                  addons"&gt;{"\n"}
                  &lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;input type="text" class="form-control"
                  aria-label="Recipient's username with two button addons"&gt;
                  {"\n"}
                  {"    "}&lt;button class="btn btn-primary"
                  type="button"&gt;Button&lt;/button&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-success"
                  type="button"&gt;Button&lt;/button&gt;{"\n"}&lt;/div&gt;
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
export default ButChR;
