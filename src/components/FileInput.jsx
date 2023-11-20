import React, { useState } from "react";

const FileInput = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="flex flex-wrap border border-gray-300 rounded m-[20px]">
      <div className="lg:w-full pr-4 pl-4">
        <div className="w-[95%] m-auto py-3 px-6 mb-0 bg-gray-800 border-b-1 border-gray-300 text-white items-center flex justify-between">
          <h4 className="mb-3 mb-0 flex-grow-1 text-[30px] font-bold">
            File Input
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
            <div className="flex flex-wrap items-center g-3">
              <div className="lg:w-1/3 pr-4 pl-4">
                <div>
                  <label
                    htmlFor="formFile"
                    className="form-label text-gray-100 text-[20px]"
                  >
                    Default File Input Example
                  </label>
                  <p className="text-gray-300 pb-[15px]">
                    Use <code className="text-[#FAA0A0] px-[5px]">input</code>{" "}
                    attribute with{" "}
                    <code className="text-[#FAA0A0] px-[5px]">type="file"</code>{" "}
                    tag for default file input
                  </p>
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="lg:w-1/3 pr-4 pl-4">
                <div>
                  <label
                    htmlFor="formFileMultiple"
                    className="form-label text-gray-100 text-[20px]"
                  >
                    Multiple Files Input Example
                  </label>
                  <p className="text-gray-300 pb-[15px]">
                    Use{" "}
                    <code className="text-[#FAA0A0] px-[5px]">multiple</code>{" "}
                    attribute within the input attribute to select multiple
                    files.
                  </p>
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded"
                    type="file"
                    id="formFileMultiple"
                    multiple=""
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="lg:w-1/3 pr-4 pl-4">
                <div>
                  <label
                    htmlFor="formFileDisabled"
                    className="form-label text-gray-100 text-[20px]"
                  >
                    Disabled File Input Example
                  </label>
                  <p className="text-gray-300 pb-[15px]">
                    Use{" "}
                    <code className="text-[#FAA0A0] px-[5px]">disabled</code>{" "}
                    attribute within the input attribute to disable the file
                    input.
                  </p>
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded"
                    type="file"
                    id="formFileDisabled"
                    disabled
                  />
                </div>
              </div>
            </div>
            {/*end row*/}
            <h5 className="mb-3 mb-0 flex-grow-1 text-[30px] text-white font-bold mt-[20px] ml-[15px]">
              File Input Sizing
            </h5>
            <div className="flex flex-wrap mt-4 items-center g-3">
              <div className="lg:w-1/3 pr-4 pl-4">
                <div>
                  <label
                    htmlFor="formSizeSmall"
                    className="form-label text-gray-100 text-[20px]"
                  >
                    Small Size File Input Example
                  </label>
                  <p className="text-gray-300 pb-[15px]">
                    Use{" "}
                    <code className="text-[#FAA0A0] px-[5px]">
                      form-control-sm
                    </code>{" "}
                    class within the form-control class to set a small size file
                    input.
                  </p>
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-8000 border border-gray-200 rounded py-1 px-2 text-sm leading-normal rounded"
                    id="formSizeSmall"
                    type="file"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4">
                <div>
                  <label
                    htmlFor="formSizeDefault"
                    className="form-label text-gray-100 text-[20px]"
                  >
                    Default Size File Input Example
                  </label>
                  <p className="text-gray-300 pb-[15px]">
                    Use{" "}
                    <code className="text-[#FAA0A0] px-[5px]">
                      form-control{" "}
                    </code>
                    class and{" "}
                    <code className="text-[#FAA0A0] px-[5px]">type="file"</code>{" "}
                    attribute within the input attribute to set a default size
                    file input.
                  </p>
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded"
                    id="formSizeDefault"
                    type="file"
                  />
                </div>
              </div>
              <div className="lg:w-1/3 pr-4 pl-4">
                <div>
                  <label
                    htmlFor="formSizeLarge"
                    className="form-label text-gray-100 text-[20px]"
                  >
                    Large Size File Input Example
                  </label>
                  <p className="text-gray-300 pb-[15px]">
                    Use{" "}
                    <code className="text-[#FAA0A0] px-[5px]">
                      form-control-lg
                    </code>{" "}
                    class within the form-control class to set a large size file
                    input.
                  </p>
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal text-gray-300 bg-gray-800 border border-gray-200 rounded py-2 px-4 text-lg leading-normal rounded"
                    id="formSizeLarge"
                    type="file"
                  />
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          <div className="hidden code-view">
            <pre className="language-markup" style={{ height: 275 }}>
              <code>
                &lt;!-- Default File Input Example --&gt;{"\n"}&lt;div&gt;
                {"\n"}
                {"    "}&lt;label for="formFile" class="form-label"&gt;Default
                file input example&lt;/label&gt;{"\n"}
                {"    "}&lt;input class="form-control" type="file"
                id="formFile"&gt;{"\n"}&lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
              <code>
                &lt;!-- Multiple Files Input Example --&gt;{"\n"}&lt;div&gt;
                {"\n"}
                {"    "}&lt;label for="formFileMultiple"
                class="form-label"&gt;Multiple files input example&lt;/label&gt;
                {"\n"}
                {"    "}&lt;input class="form-control" type="file"
                id="formFileMultiple" multiple&gt;{"\n"}&lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
              <code>
                &lt;!-- Disabled File Input Example --&gt;{"\n"}&lt;div&gt;
                {"\n"}
                {"    "}&lt;label for="formFileDisabled"
                class="form-label"&gt;Disabled File Input Example&lt;/label&gt;
                {"\n"}
                {"    "}&lt;input class="form-control" type="file"
                id="formFileDisabled" disabled&gt;{"\n"}&lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
              <code>
                &lt;!-- File Input Sizing Small --&gt;{"\n"}&lt;div&gt;{"\n"}
                {"    "}&lt;input class="form-control form-control-sm"
                id="formFileSm" type="file"&gt;{"\n"}&lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
              <code>
                &lt;!-- File Input Sizing Default --&gt;{"\n"}&lt;div&gt;
                {"\n"}
                {"    "}&lt;input class="form-control" id="formFileSm"
                type="file"&gt;{"\n"}&lt;/div&gt;
              </code>
              {"\n"}
              {"\n"}
              <code>
                &lt;!-- File Input Sizing Large --&gt;{"\n"}&lt;div&gt;{"\n"}
                {"    "}&lt;input class="form-control form-control-lg"
                id="formFileSm" type="file"&gt;{"\n"}&lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      {/*end col*/}
    </div>
  );
};

export default FileInput;
