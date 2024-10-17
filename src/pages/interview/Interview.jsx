import React, { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { TbEye } from "react-icons/tb";
import ViewInterview from "./ViewInterview";

const Interview = () => {
  const [isModal2, setIsModal2] = useState(false);

  const handleopenViewEnq = () => {
    setIsModal2(true);
  };

  const handleCloseViewEnq = () => {
    setIsModal2(false);
  };

  return (
    <>
    <div>
      <p className="font-Exo my-3 font-semibold text-3xl font">Interviews</p>
      <table className="w-full  items-center overflow-auto ">
        <thead className=" items-center border-b-2">
          <tr className="  ">
            <th className=" p-4 font-semibold bg-slate-200 rounded-l-lg ">
              <p className="flex gap-1 items-center">
                {" "}
                S.No <HiArrowsUpDown className="text-gray-400"/>
              </p>
            </th>

            <th className="font-semibold py-2  bg-slate-200">
              <p className="flex gap-1 items-center">
                {" "}
                Interview ID <HiArrowsUpDown  className="text-gray-400" />
              </p>
            </th>

            <th className="font-semibold bg-slate-200">
              <p className="flex gap-1 items-center">
                {" "}
                Room No
                <HiArrowsUpDown  className="text-gray-400"/>
              </p>
            </th>

            <th className="font-semibold items-center px-14 bg-slate-200">
              <p className="flex gap-1 items-center">
                {" "}
                User ID <HiArrowsUpDown className="text-gray-400"/>
              </p>
            </th>

            <th className="font-semibold bg-slate-200">
              <p className="flex gap-1 items-center">
                {" "}
                User Name <HiArrowsUpDown className="text-gray-400" />
              </p>
            </th>

            <th className=" items-center font-semibold pl-12 bg-slate-200">
              <p className="flex gap-1">
                {" "}
                Date <HiArrowsUpDown className="text-gray-400" />
              </p>
            </th>

            <th className="items-center font-semibold pl-6 bg-slate-200">
              <p className="flex gap-1 items-center">
                {" "}
                Slot Time <HiArrowsUpDown className="text-gray-400"/>
              </p>
            </th>
            <th className="items-center font-semibold pl-6 bg-slate-200">
              <p className="flex gap-1 items-center">
                {" "}
                Status <HiArrowsUpDown className="text-gray-400"/>
              </p>
            </th>

            <th className="font-semibold bg-slate-200">
              <p className="items-center">Action</p>
            </th>

            <th className="font-semibold bg-slate-200 rounded-r-lg">
              <p className="items-center"></p>
            </th>
          </tr>
        </thead>
        <tbody className=" text-start ">
          <tr className=" text-sm  text-gray-400 border-b-2">
            <td className="py-4  bg-white rounded-l-lg pl-4 ">
              <p>123</p>
            </td>
            <td className="bg-white">
              <p>#123131313</p>
            </td>
            <td className="px-5 bg-white">
              <p>asdda </p>
            </td>
            <td className="bg-white">
              <p>vishvanth202005@gmail.com</p>
            </td>
            <td className="bg-white">
              <p>Sathyabama</p>
            </td>
            <td className="text-center bg-white ">
              <p>18 June 24, 02.23 PM</p>
            </td>
            <td className="text-center bg-white ">
              <p>100</p>
            </td>
            <td className=" text-center bg-white">
              <p className="bg-violet-100 text-violet-500  rounded-lg p-0.5 text-base font-semibold">
                active
              </p>
            </td>
            <td className=" px-2 bg-white">
              <p className="bg-green-100 rounded-md text-green-700  pl-2.5 py-0.5 " onClick={handleopenViewEnq}>
                <TbEye className="text-2xl " />
              </p>
            </td>
            <td className="pr-2  bg-white rounded-r-lg ">
              <p className="bg-red-200 rounded-md text-red-700 pl-1.5 py-1 ">
                {" "}
                <RiDeleteBin6Line className="text-lg" />
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className=" m-4 flex justify-between text-sm font-Source_Sans_Pro text-gray-400">
        <p>showing result for 1 out of 1 </p>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center p text-orange">
            <GoArrowLeft /> Previous
          </p>
          <div className="flex items-center gap-4">
            <p className="bg-orange px-2 p-0.5 rounded-md text-white">1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
          </div>
          <p className="flex gap-1 items-center text-orange">
            Next
            <GoArrowRight />
          </p>
        </div>
      </div>
    </div>
    {isModal2&& <ViewInterview/>}
    </>
  );
};

export default Interview;
