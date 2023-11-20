import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const [DashboardDropdownOpen, setDashboardDropdownOpen] = useState(false);
  const [AppsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [LayoutDropdownOpen, setLayoutDropdownOpen] = useState(false);
  const [authDropdownOpen, setauthDropdownOpen] = useState(false);
  const [LandingDropdownOpen, setLandingDropdownOpen] = useState(false);
  const [PagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [BaseDropdownOpen, setBaseDropdownOpen] = useState(false);
  const [AdvanceDropdownOpen, setAdvanceDropdownOpen] = useState(false);
  const [FormDropdownOpen, setFormDropdownOpen] = useState(false);
  const [TableDropdownOpen, setTableDropdownOpen] = useState(false);
  const [ChartDropdownOpen, setChartDropdownOpen] = useState(false);
  const [IconDropdownOpen, setIconDropdownOpen] = useState(false);
  const [MapDropdownOpen, setMapDropdownOpen] = useState(false);
  const [MultiDropdownOpen, setMultiDropdownOpen] = useState(false);

  const toggleDashboardDropdown = () => {
    setDashboardDropdownOpen(!DashboardDropdownOpen);
  };

  const toggleAppsDropdown = () => {
    setAppsDropdownOpen(!AppsDropdownOpen);
  };

  const toggleLayoutDropdown = () => {
    setLayoutDropdownOpen(!LayoutDropdownOpen);
  };

  const toggleAuthDropdown = () => {
    setauthDropdownOpen(!authDropdownOpen);
  };

  const toggleLandingDropdown = () => {
    setLandingDropdownOpen(!LandingDropdownOpen);
  };

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!PagesDropdownOpen);
  };

  const toggleBaseDropdown = () => {
    setBaseDropdownOpen(!BaseDropdownOpen);
  };

  const toggleAdvanceDropdown = () => {
    setAdvanceDropdownOpen(!AdvanceDropdownOpen);
  };

  const toggleFormDropdown = () => {
    setFormDropdownOpen(!FormDropdownOpen);
  };

  const toggleTableDropdown = () => {
    setTableDropdownOpen(!TableDropdownOpen);
  };

  const toggleChartDropdown = () => {
    setChartDropdownOpen(!ChartDropdownOpen);
  };

  const toggleIconDropdown = () => {
    setIconDropdownOpen(!IconDropdownOpen);
  };

  const toggleMapDropdown = () => {
    setMapDropdownOpen(!MapDropdownOpen);
  };

  const toggleMultiDropdown = () => {
    setMultiDropdownOpen(!MultiDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 w-[20%] p-4 min-h-screen">
      <ul className="h-[100%]">
        {/* Add dropdown for Analytics with arrow icon */}
        {/* 1st dropwdown */}
        <li className="">
          <div className="">
            <button className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600">
              <span>Menu</span>
            </button>
          </div>
        </li>
        <li className="">
          <div className="">
            <button
              onClick={toggleDashboardDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Dashboards</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  DashboardDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            DashboardDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            DashboardDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-2 w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="flex items-center text-blue-600 hover:bg-stone-800 py-[6px] px-[10px] rounded-[10px]"
          >
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:bg-stone-800 py-[6px] px-[10px] rounded-[10px]"
          >
            CRM
          </a>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:bg-stone-800 py-[6px] px-[10px] rounded-[10px]"
          >
            Ecommerce
          </a>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:bg-stone-800 py-[6px] px-[10px] rounded-[10px]"
          >
            Crypto
          </a>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:bg-stone-800 py-[6px] px-[10px] rounded-[10px]"
          >
            Projects
          </a>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:bg-stone-800 py-[6px] px-[10px] rounded-[10px]"
          >
            NFT
          </a>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:bg-stone-800 py-[6px] px-[10px] rounded-[10px]"
          >
            Jobs
          </a>
        </div>
        {/* 2nd dropdown */}
        <li className="mt-[-20px]">
          <div className="">
            <button
              onClick={toggleAppsDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Apps</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  AppsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            AppsDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            AppsDropdownOpen ? "scale-y-100" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Calender
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Chat
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Email
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Ecommerce
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Tasks
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            CRM
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Crypto
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Invoices
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Support Tickets
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            NFT Marketplace
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            File Manager
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            To do
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Jobs
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            API Key
          </a>
        </div>

        {/* 3rd dropdown */}
        <li className="mt-[-20px]">
          <div className="">
            <button
              onClick={toggleLayoutDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Layout</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  LayoutDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            LayoutDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            LayoutDropdownOpen ? "scale-y-100" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Horizontal
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Detached
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Two Column
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Hovered
          </a>
        </div>
        {/* 4th dropwdown */}
        <li className="mt-[-25px]">
          <button className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600">
            <span>Pages</span>
          </button>
        </li>
        {/* 5th dropdown */}
        <li className="">
          <div className="">
            <button
              onClick={togglePagesDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Authentication</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  PagesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            PagesDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            PagesDropdownOpen ? "scale-y-100" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Password Reset
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Password create
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Lock Screen
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Logout
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Success Message
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Two Step Verification
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Errors
          </a>
        </div>

        {/* 6th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleAuthDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Pages</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  authDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            authDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            authDropdownOpen ? "scale-y-100" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Starter
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Profile
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Timeline
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Maintenance
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Coming soon
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Sitemap
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Search Results
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Terms & Conditions
          </a>
        </div>

        {/* 7th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleLandingDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Landing</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  LandingDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            LandingDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            LandingDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            One Page
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            NFT Landing
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Job
          </a>
        </div>

        {/* 8th dropdown */}
        <li className="mt-[-25px]">
          <button className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600">
            <span>Components</span>
          </button>
        </li>

        {/* 9th dropdown */}
        <li className="">
          <div className="">
            <button
              onClick={toggleBaseDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Base UI</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  BaseDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            BaseDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            BaseDropdownOpen ? "scale-y-100" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Alerts
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Badges
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Buttons
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Colors
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Cards
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Carousel
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Dropdowns
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Grid
          </a>
        </div>

        {/* 10th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleAdvanceDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Advance UI</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  AdvanceDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            AdvanceDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            AdvanceDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Sweet Alerts
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Nestable List
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Scrollbar
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Animation
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Tours
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Swiper Slider
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Rating
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Highlight
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            ScrollSpy
          </a>
        </div>

        {/* 11th dropdown */}
        <li className="mt-[-25px]">
          <button className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600">
            <span>Widgets</span>
          </button>
        </li>

        {/* 12th dropdown */}
        <li className="">
          <div className="">
            <button
              onClick={toggleFormDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Forms</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  FormDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            FormDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            FormDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Basic Elements
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Form Select
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Checkboxs & Radios
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Pickers
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Input Masks
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Advanced
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Range Slider
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Validation
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Wizard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Editors
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            File Uploads
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Form Layouts
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Select2
          </a>
        </div>
        {/* 13th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleTableDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Tables</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  TableDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            TableDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            TableDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Basic Table
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Grid JS
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            List JS
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Datatables
          </a>
        </div>

        {/* 14th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleChartDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Charts</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  ChartDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            ChartDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            ChartDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Apexcharts
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Chartjs
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Echarts
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Datatables
          </a>
        </div>
        {/* 15th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleIconDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Icons</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  IconDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            IconDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            IconDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Remix
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Boxicons
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Material Design
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Line Awesome
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Feather
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Crypto SVG
          </a>
        </div>

        {/* 16th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleMapDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Maps</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  MapDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            MapDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            MapDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Google
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Vector
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Leaflet
          </a>
        </div>

        {/* 17th dropdown */}
        <li className="mt-[-25px]">
          <div className="">
            <button
              onClick={toggleMultiDropdown}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white hover:bg-stone-700 py-[5px] px-[10px] rounded-[10px] active:bg-blue-600"
            >
              <span>Multi Level</span>
              <IoIosArrowDown
                className={`h-5 w-5 ml-2 transition-transform transform ${
                  MultiDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </li>
        <div
          className={`transition-all duration-300 ${
            MultiDropdownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
          } transform ${
            MultiDropdownOpen ? "scale-y-100 mb-[30px]" : "scale-y-0"
          } origin-top mt-[10px] w-48 bg-gray-700 p-2 space-y-2`}
        >
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Level 1.1
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white flex items-center hover:text-white hover:bg-stone-900 py-[6px] px-[10px] rounded-[10px]"
          >
            Level 1.2
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
