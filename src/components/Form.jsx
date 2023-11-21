import React, { useState } from "react";
import "tailwindcss/utilities.css"; // Include utility classes
import { Calendar } from "primereact/calendar";

const Form = () => {
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  const toggle1 = () => {
    if (hide2) {
      setHide2(false);
    }
    setHide(!hide);
  };

  const toggle2 = () => {
    if (hide) {
      setHide(false);
    }
    setHide2(!hide2);
  };

  return (
    <div className="container mx-auto mt-2 w-[100%] pb-[20px]">
      <div className="text-center text-blue-600 underline p-4">
        <h1 className="text-2xl">Add Job:</h1>
      </div>
      <form className="">
        <div className="mt-2 flex w-[100%]">
          {/* 1st */}
          <div className="cont w-[90%] flex flex-wrap justify-between mx-auto items-center">
            {/* 1st container */}
            <div class="cont-1 input-group flex flex-col items-center w-[35%]">
              <label
                class="input-group-text text-blue-600 mb-[6px]"
                for="inputGroupSelect01"
              >
                Select Client
              </label>
              <select
                class="form-select w-full appearance-none text-blue-600 py-[5px] px-[10px] border border-gray-950"
                id="inputGroupSelect01"
              >
                <option selected>Please Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            {/* 2nd container */}
            <div className="flex flex-col items-center w-[35%] my-[20px]">
              <label
                for="exampleInputrounded"
                class="form-label text-blue-600 mb-[6px]"
              >
                Job Title
              </label>
              <input
                type="text"
                class="cont-1 form-control w-full rounded-pill placeholder:text-blue-600 text-blue-600 py-[5px] px-[10px] border border-gray-950"
                id="exampleInputrounded"
                placeholder="Sales Manager"
              />
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="w-[90%] flex justify-between mx-auto items-start my-[20px]">
          {/* 1st container */}
          <div class="input-group flex flex-col w-[35%]">
            <label
              class="input-group-text text-blue-600 mb-[6px]"
              for="inputGroupSelect01"
            >
              Job Type
            </label>
            <select
              class="form-select w-full appearance-none text-blue-600 py-[5px] px-[10px] border border-gray-950"
              id="inputGroupSelect01"
            >
              <option selected>Please Select</option>
              <option value="1">Full Time</option>
              <option value="2">Part Time</option>
              <option value="3">Intership</option>
            </select>
          </div>
          {/* 2nd container */}
          <div className="flex flex-col items-center w-[35%]">
            <label
              for="exampleInputrounded"
              class="form-label text-blue-600 mb-[6px]"
            >
              Upload JD (pdf, docx)
            </label>
            <input
              type="file"
              id="formFile"
              className="border border-gray-950 p-1 w-full"
            />
          </div>
        </div>
        {/* 3rd */}
        <div className="w-[90%] flex justify-between mx-auto items-start my-[20px]">
          {/* 1st container */}
          <div class="input-group flex flex-col w-[35%]">
            <label
              class="input-group-text text-blue-600 mb-[6px]"
              for="inputGroupSelect01"
            >
              Required Skills
            </label>
            <select
              class="form-select w-full appearance-none text-blue-600 py-[5px] px-[10px] border border-gray-950"
              id="inputGroupSelect01"
            >
              <option selected>Text Box/Drop Down</option>
              <option value="1">Tailwind CSS</option>
              <option value="2">ReactJS</option>
              <option value="3">HTML</option>
              <option value="4">Javascript</option>
              <option value="5">CSS</option>
              <option value="6">NextJS</option>
              <option value="7">MySQL</option>
              <option value="8">MongoDB</option>
            </select>
          </div>
          {/* 2nd container */}
          <div className="flex flex-col items-start w-[35%]">
            <label
              for="exampleInputrounded"
              class="form-label text-blue-600 mx-auto mb-[6px]"
            >
              CTC(in Lakhs)
            </label>
            <div className="w-full">
              <input
                type="number"
                placeholder="Min"
                id="formFile"
                className="border border-gray-950 placeholder:text-gray-950 p-1 w-full w-[50%]"
              />
              <input
                type="number"
                placeholder="Max"
                id="formFile"
                className="border border-gray-950 placeholder:text-gray-950 p-1 w-full e w-[50%]"
              />
            </div>
          </div>
        </div>
        {/* 4th */}
        <div className="w-[90%] flex justify-between mx-auto items-start my-[20px]">
          {/* 1st container */}
          <div class="input-group flex flex-col w-[35%]">
            <label
              class="input-group-text text-blue-600 mb-[6px]"
              for="inputGroupSelect01"
            >
              Work Experience
            </label>
            <select
              class="form-select w-full appearance-none text-blue-600 py-[5px] px-[10px] border border-gray-950"
              id="inputGroupSelect01"
            >
              <option selected>Text Box/Drop Down</option>
              <option value="1">1-2 Years</option>
              <option value="2">2-3 Years</option>
              <option value="3">3-4 Years</option>
              <option value="4">4-5 Years</option>
              <option value="5">5-6 Years</option>
              <option value="6">6-7 Years</option>
              <option value="7">7-8 Years</option>
              <option value="8">8-9 Years</option>
              <option value="8">9-10 Years</option>
              <option value="8">10-11 Years</option>
              <option value="8">11-12 Years</option>
              <option value="8">12-13 Years</option>
              <option value="8">13-14 Years</option>
              <option value="8">14-15 Years</option>
              <option value="8">15-16 Years</option>
              <option value="8">16-17 Years</option>
              <option value="8">17-18 Years</option>
              <option value="8">18-19 Years</option>
              <option value="8">19-20 Years</option>
              <option value="8">20-21 Years</option>
              <option value="8">21-22 Years</option>
              <option value="8">22-23 Years</option>
              <option value="8">23-24 Years</option>
              <option value="8">24-25 Years</option>
              <option value="8">25-26 Years</option>
              <option value="8">26-27 Years</option>
              <option value="8">27-28 Years</option>
              <option value="8">28-29 Years</option>
              <option value="8">29-30 Years</option>
            </select>
          </div>
          {/* 2nd container */}
          <div className="flex flex-col items-start w-[35%]">
            <label
              for="exampleInputrounded"
              class="form-label text-blue-600 mx-auto mb-[6px]"
            >
              Start Date End Date
            </label>
            <div className="w-full">
              <Calendar
                onFocus={toggle1}
                className={`placeholder:text-gray-950 border border-gray-950 placeholder:text-gray-950 p-1 w-full e w-[50%] ${
                  hide ? "mb-[200px]" : "mb-[20px]"
                }`}
                placeholder="Calender"
              />

              <Calendar
                onFocus={toggle2}
                className={`placeholder:text-gray-950 border border-gray-950 placeholder:text-gray-950 p-1 w-full e w-[50%] ${
                  hide2 ? "mb-[200px]" : "mb-[20px]"
                }`}
                placeholder="Calender"
                // onFocus={() => setHide2(!hide2)}
              />
            </div>
          </div>
        </div>
        {/* 5th */}
        <div className="w-[90%] flex justify-between mx-auto items-start my-[20px]">
          {/* 1st container */}
          <div class="input-group flex flex-col w-[35%]">
            <label
              class="input-group-text text-blue-600 mb-[6px]"
              for="inputGroupSelect01"
            >
              Notice Period
            </label>
            <select
              class="form-select w-full appearance-none text-blue-600 py-[5px] px-[10px] border border-gray-950"
              id="inputGroupSelect01"
            >
              <option selected>Text Box/Drop Down</option>
              <option value="1">Immediate</option>
              <option value="2">15</option>
              <option value="3">30</option>
              <option value="4">45</option>
              <option value="5">60</option>
              <option value="6">90</option>
            </select>
          </div>
          {/* 2nd container */}
          <div className="flex flex-col items-start w-[35%]">
            <label
              for="exampleInputrounded"
              class="form-label text-blue-600 mx-auto mb-[6px]"
            >
              Location
            </label>
            <div className="w-full">
              <select
                className="border border-gray-950 placeholder:text-gray-950 p-1 w-full w-[50%]"
                id="inputGroupSelect01"
              >
                <option selected>Text Box/Drop Down</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Pune">Pune</option>
                <option value="Surat">Surat</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Indore">Indore</option>
                <option value="Thane">Thane</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
                <option value="Patna">Patna</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Ludhiana">Ludhiana</option>
                <option value="Agra">Agra</option>
                <option value="Nashik">Nashik</option>
                <option value="Faridabad">Faridabad</option>
              </select>

              <select className="border border-gray-950 placeholder:text-gray-950 p-1 w-full w-[50%]">
                <option value="Meerut">Meerut</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Kalyan-Dombivli">Kalyan-Dombivli</option>
                <option value="Vasai-Virar">Vasai-Virar</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Srinagar">Srinagar</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Dhanbad">Dhanbad</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Allahabad">Allahabad</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Howrah">Howrah</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Vijayawada">Vijayawada</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Madurai">Madurai</option>
                <option value="Raipur">Raipur</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Gujarat">Gujarat</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col mx-auto mb-[10px] mt-[30px]">
          <label
            for="exampleInputrounded"
            class="form-label text-blue-600 mb-[6px]"
          >
            Ideal Candidate Profile:
          </label>
          <textarea
            class="form-control border border-gray-950 p-2"
            aria-label="With textarea"
            rows="2"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
