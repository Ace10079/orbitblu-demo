import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Leads from './Leads';

const AddLeads = ({onClose}) => {
  return (
    <>
    <div className=" font-Source_Sans_Pro fixed inset-0 flex justify-center  items-center bg-opacity-25 backdrop-blur-sm">
      <div className=" shadow-lg bg-white rounded-lg">
        
        <div className="flex justify-end">
              <p
                className="text-gray-500 p-3 -m-3 rounded-full shadow-lg  bg-white w-fit items-center"
                onClick={onClose}
              >
                ✖
              </p>
            </div>
            <div className="grid  px-4">
          <h1 className="grid justify-center py-4 mb-4 text-[#383E49]  border-b-2 mx-4 font-bold text-xl">
              Add Leads </h1>
          <form className="grid  mx-4 my-2 items-center gap-4 ">
              <label className=" text-[#48505E] text-base font-normal col-span-4 ">
                Complaint Raised from
            </label>
              <select defaultValue="from" className=" border border-[#D0D5DD] text-grey rounded-md w-[273px] h-11 px-2 col-span-8 ">
              <option value='from'disabled>From</option>
                <option value='call'>Call</option>
                <option value='email'>Email</option>
                <option value='sms'>From</option>
              </select>
            
             <label className="col-span-4  text-[#48505E] text-base font-normal">
                Email Id{" "}
              </label>
              <input
                type="email"
                placeholder=" Enter your Email"
                className="  text-grey border border-[#D0D5DD] w-[273px] rounded-md  h-11 px-2 col-span-8"
              />
            
            <label className="  col-span-4  text-[#48505E] text-base font-normal ">
                Address 
                </label>
              <input
                type="text"
                placeholder="Enter your Address"
                className=" text-grey border border-[#D0D5DD] rounded-md w-[273px] h-11  px-2 col-span-8"
              />
           
            <label className="  col-span-4 text-[#48505E] text-base font-normal ">
                City
            </label>
              <input
                type="text"
                placeholder="Enter your City"
                className=" text-grey border border-[#D0D5DD] rounded-md  w-[273px] h-11 px-2 col-span-8 "
              />
            
            <label className="col-span-4 text-[#48505E] text-base font-normal">
                State
                </label>
              <input
                type="text"
                placeholder="Enter your State"
                className="  text-grey border border-[#D0D5DD] rounded-md  w-[273px] h-11 px-2 col-span-8"
              />
            
            <label className="col-span-4  text-[#48505E] text-base font-normal ">
                Note</label>
              <textarea
                rows={4}
                className="text-grey border border-[#D0D5DD] rounded-md  w-[273px] h-32 px-2 py-3 col-span-8"
                placeholder="Type a messages"
              />
            

            <div className=" flex col-span-12 justify-center gap-3 my-5 ">
              <button className="text-red-600 border-red-600 border px-8 py-2 rounded">
                Cancel
              </button>
              <button className="bg-orange px-10 py-2 rounded text-white">
                Save
              </button>
            </div> 
          </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default AddLeads