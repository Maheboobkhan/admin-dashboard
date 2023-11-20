import React from "react";

const CustomForm = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="lg:w-full pr-4 pl-4">
        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
          <div className="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 items-center flex">
            <h4 className="mb-3 mb-0 flex-grow-1">Custom Forms</h4>
            <div className="flex-shrink-0">
              <div className="relative block mb-2 form-switch form-switch-right form-switch-md">
                <label
                  htmlFor="input-group-custom-showcode"
                  className="form-label text-gray-700"
                >
                  Show Code
                </label>
                <input
                  className="absolute mt-1 -ml-6 code-switcher"
                  type="checkbox"
                  id="input-group-custom-showcode"
                />
              </div>
            </div>
          </div>
          {/* end card header */}
          <div className="flex-auto p-6">
            <p className="text-gray-700">
              Input groups include support for custom selects and custom file
              inputs. Browser default versions of these are not supported.
            </p>
            <div className="live-preview">
              <div>
                <h5 className="fs-15 mb-3">Select</h5>
                <div className="flex flex-wrap  g-3">
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupSelect01"
                      >
                        Options
                      </label>
                      <select className="form-select" id="inputGroupSelect01">
                        <option selected="">Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <select className="form-select" id="inputGroupSelect02">
                        <option selected="">Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupSelect02"
                      >
                        Options
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600"
                        type="button"
                      >
                        Button
                      </button>
                      <select
                        className="form-select"
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
                    <div className="relative flex items-stretch w-full">
                      <select
                        className="form-select"
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                      >
                        <option selected="">Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white bg-white hover:bg-gray-700"
                        type="button"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="fs-15 mb-3">File Input</h5>
                <div className="flex flex-wrap  g-3">
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupFile01"
                      >
                        Upload
                      </label>
                      <input
                        type="file"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        id="inputGroupFile01"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <input
                        type="file"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        id="inputGroupFile02"
                      />
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupFile02"
                      >
                        Upload
                      </label>
                    </div>
                  </div>
                  <div className="lg:w-1/2 pr-4 pl-4">
                    <div className="relative flex items-stretch w-full">
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white bg-white hover:bg-blue-600"
                        type="button"
                        id="inputGroupFileAddon03"
                      >
                        Button
                      </button>
                      <input
                        type="file"
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
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
                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button
                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-green-500 border-green-500 hover:bg-green-500 hover:text-white bg-white hover:green-600"
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
            <div className="hidden code-view">
              <pre className="language-markup" style={{ height: 275 }}>
                <code>
                  &lt;!-- Select --&gt;{"\n"}&lt;div class="input-group"&gt;
                  {"\n"}
                  {"    "}&lt;label class="input-group-text"
                  for="inputGroupSelect01"&gt;Options&lt;/label&gt;{"\n"}
                  {"    "}&lt;select class="form-select"
                  id="inputGroupSelect01"&gt;
                  {"\n"}
                  {"        "}&lt;option selected&gt;Choose...&lt;/option&gt;
                  {"\n"}
                  {"        "}&lt;option value="1"&gt;One&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="2"&gt;Two&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="3"&gt;Three&lt;/option&gt;{"\n"}
                  {"    "}&lt;/select&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;select class="form-select"
                  id="inputGroupSelect02"&gt;
                  {"\n"}
                  {"        "}&lt;option selected&gt;Choose...&lt;/option&gt;
                  {"\n"}
                  {"        "}&lt;option value="1"&gt;One&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="2"&gt;Two&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="3"&gt;Three&lt;/option&gt;{"\n"}
                  {"        "}&lt;/select&gt;{"\n"}
                  {"    "}&lt;label class="input-group-text"
                  for="inputGroupSelect02"&gt;Options&lt;/label&gt;{"\n"}
                  &lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-outline-primary"
                  type="button"&gt;Button&lt;/button&gt;{"\n"}
                  {"    "}&lt;select class="form-select" id="inputGroupSelect03"
                  aria-label="Example select with button addon"&gt;{"\n"}
                  {"        "}&lt;option selected&gt;Choose...&lt;/option&gt;
                  {"\n"}
                  {"        "}&lt;option value="1"&gt;One&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="2"&gt;Two&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="3"&gt;Three&lt;/option&gt;{"\n"}
                  {"    "}&lt;/select&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;select class="form-select" id="inputGroupSelect04"
                  aria-label="Example select with button addon"&gt;{"\n"}
                  {"        "}&lt;option selected&gt;Choose...&lt;/option&gt;
                  {"\n"}
                  {"        "}&lt;option value="1"&gt;One&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="2"&gt;Two&lt;/option&gt;{"\n"}
                  {"        "}&lt;option value="3"&gt;Three&lt;/option&gt;{"\n"}
                  {"    "}&lt;/select&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-outline-secondary"
                  type="button"&gt;Button&lt;/button&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                {"\n"}
                <code>
                  &lt;!-- File Input --&gt;{"\n"}&lt;div class="input-group"&gt;
                  {"\n"}
                  {"    "}&lt;label class="input-group-text"
                  for="inputGroupFile01"&gt;Upload&lt;/label&gt;{"\n"}
                  {"    "}&lt;input type="file" class="form-control"
                  id="inputGroupFile01"&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;input type="file" class="form-control"
                  id="inputGroupFile02"&gt;{"\n"}
                  {"    "}&lt;label class="input-group-text"
                  for="inputGroupFile02"&gt;Upload&lt;/label&gt;{"\n"}
                  &lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-outline-primary"
                  type="button"
                  id="inputGroupFileAddon03"&gt;Button&lt;/button&gt;{"\n"}
                  {"    "}&lt;input type="file" class="form-control"
                  id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"
                  aria-label="Upload"&gt;{"\n"}&lt;/div&gt;
                </code>
                {"\n"}
                <code>
                  &lt;div class="input-group"&gt;{"\n"}
                  {"    "}&lt;input type="file" class="form-control"
                  id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"&gt;{"\n"}
                  {"    "}&lt;button class="btn btn-outline-success"
                  type="button"
                  id="inputGroupFileAddon04"&gt;Button&lt;/button&gt;{"\n"}
                  &lt;/div&gt;
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

export default CustomForm;
