import React, { useState } from "react";
import abstract from "../assets/homeAbs.svg";
import pandora from "../assets/PANDORA.png";
import dropdown from '../assets/dropdown.svg'
import Expertcard from "./Expertcard";

function Header() {

  const [drop ,setDrop] = useState(false)
  const clickevent = () => {
    const something = setDrop(!drop)
  }

  return (
    <div>
      <div className="flex justify-evenly items-center w-full h-93vh z-0">
        <div className="flex flex-col justify-center gap-5 h-[93vh] items-center basis-1/2">
          <div className="flex flex-col justify-center items-baseline w-[80%] gap-9">
            <p className="text-5xl font-bold pb-3">Explore Domains!</p>

            <input
              className="h-12 border-gray-500 border  w-[97%] rounded-full pl-6 "
              placeholder="Search here!"
              type="text"
            />

            <div>
              <p className="font-md pl-2 pb-9 pt-14 ">most searched domains!</p>
              <div className=" flex flex-col w-full gap-3">
                <div className="flex gap-3">
                  <p className="font-semibold pt-1 pb-1 pl-20 pr-20 border-gray-300 border rounded-full text-sm">
                    Frontend
                  </p>
                  <p className="font-semibold pt-1 pb-1 pl-20 pr-20 border-gray-300 border bg-[#FFA47A] rounded-full text-sm">
                    Frontend
                  </p>
                  <p className="font-semibold pt-1 pb-1 pl-20 pr-20 border-gray-300 border rounded-full text-sm">
                    Frontend
                  </p>
                </div>
                <div className="flex gap-3">
                  <p className="font-semibold pt-2 pb-2 pl-20 pr-20 border-gray-300 border rounded-full text-sm">
                    Frontend
                  </p>
                  <p className="font-semibold pt-2 pb-2 pl-20 pr-20 border-gray-300 border rounded-full text-sm">
                    Frontend
                  </p>
                  <p className="font-semibold pt-2 pb-2 pl-20 pr-20 border-gray-300 border rounded-full bg-[#D9BFFF] text-sm">
                    Frontend
                  </p>
                </div>
                <div className="flex gap-3 ">
                  <p className="font-semibold pt-2 pb-2 pl-20 pr-20 border-gray-300 border  rounded-full text-sm">
                    Frontend
                  </p>
                  <p className="font-semibold pt-2 pb-2 pl-20 pr-20 border-gray-300 border  rounded-full bg-[#B9E390] text-sm">
                    Frontend
                  </p>
                  <p className="font-semibold pt-2 pb-2 pl-20 pr-20 border-gray-300 border  rounded-full text-sm">
                    Frontend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-[93vh]  basis-1/2">
          <img className="w-[550px]" src={abstract} alt="" />
        </div>
      </div>

      <div className="h-auto pb-24 bg-[#ecf2f4] flex flex-col z-0 relative w-full justify-start items-baseline">
        
        <div className="flex gap-3">
        <p className="font-bold text-xl mt-14 pl-20 pb-2 bg-[E3E3E3]">
          Campuses
        </p>

        <div>
        <div className="bg-[#B9E390] h-8 w-36 mt-14 ml-10 flex justify-between items-center p-3  rounded-md " onClick={clickevent}>Delhi<img  className="cursor-pointer" src={dropdown} alt="" /></div>
        {drop && (<div className="bg-[#B9E390] h-24 w-36  ml-10 flex flex-col justify-between absolute items-center p-3 rounded-md z-10 ">
          <p className="border-b-gray-600 w-full border flex justify-center ">chandigarh</p>
          <p className="border-b-gray-600 w-full border flex justify-center ">Banglore</p>
          <p className="border-b-gray-600 w-full border flex justify-center ">Hyedrabad</p>
        </div>)}
        </div>
        
     

        </div>

        <div className="w-full flex p-8 justify-evenly">
          <div className="flex flex-col bg-white basis-[30%] h-[50vh] border-gray-300 border shadow-md p-3 rounded-md">
            <img src={pandora} className="h-[50%] rounded-md" alt="" />
            <p className="font-semibold mt-5">Chandigarh University</p>
            <p className="text-gray-600 text-md pt-2">
              The ultimate hub for education!
            </p>
            <button className="w-[150px]  h-[45px] mt-auto ml-auto rounded-md flex justify-center text-sm font-semibold border-gray-300 shadow-md border items-center  bg-[#B9E390]">
              explore
            </button>
          </div>
          <div className="flex flex-col bg-white basis-[30%] h-[50vh] border-gray-300 border shadow-md p-3 rounded-md">
            <img src={pandora} className="h-[50%] rounded-md" alt="" />
            <p className="font-semibold mt-5">Chandigarh University</p>
            <p className="text-gray-600 text-md pt-2">
              The ultimate hub for education!
            </p>
            <button className="w-[150px]  h-[45px] mt-auto ml-auto rounded-md flex justify-center text-sm font-semibold border-gray-300 shadow-md border items-center  bg-[#B9E390]">
              explore
            </button>
          </div>
          <div className="flex flex-col bg-white basis-[30%] h-[50vh] border-gray-300 border shadow-md p-3 rounded-md">
            <img src={pandora} className="h-[50%] rounded-md" alt="" />
            <p className="font-semibold mt-5">Chandigarh University</p>
            <p className="text-gray-600 text-md pt-2">
              The ultimate hub for education!
            </p>
            <button className="w-[150px]  h-[45px] mt-auto ml-auto rounded-md flex justify-center text-sm font-semibold border-gray-300 shadow-md border items-center  bg-[#B9E390]">
              explore
            </button>
          </div>
        </div>
        <Expertcard />
      </div>
    </div>
  );
}

export default Header;
