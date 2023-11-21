import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t">
      <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
        <div className="flex flex-wrap justify-between w-[100%]">
          <div className="sm:w-1/2 pr-4 pl-4 text-white text-[20px] mt-[5px]">
            2023 © Velzon.
          </div>
          <div className="sm:w-1/2 pr-4 pl-4">
            <div className="text-sm-end hidden sm:block text-white text-[20px] mt-[5px] text-end">
              Design &amp; Develop by Themesbrand
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
