import React from "react";
import { PiMicrophoneStageFill } from "react-icons/pi";

const Category = () => {
  return (
    <div>
      <div className="text-center py-10">
        <h3 className="text-4xl font-bold">Browse by category</h3>
        <p className="text-lg text-gray-500">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
      </div>
      <div className=" px-10  py-4 mx-auto w-full ">
        <div className="flex gap-4 row-gap-5 flex-wrap">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <PiMicrophoneStageFill size={50}></PiMicrophoneStageFill>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h6 className="mb-2 text-2xl font-semibold leading-5">
                    Marketing & scale
                  </h6>
                  <p className="mb-2 text-lg text-gray-900">
                    1526 Job Available
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <PiMicrophoneStageFill size={50}></PiMicrophoneStageFill>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 text-2xl font-semibold leading-5">
                    Marketing & scale
                  </h6>
                  <p className="mb-2 text-lg text-gray-900">
                    1526 Job Available
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <PiMicrophoneStageFill size={50}></PiMicrophoneStageFill>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 text-2xl font-semibold leading-5">
                    Marketing & scale
                  </h6>
                  <p className="mb-2 text-lg text-gray-900">
                    1526 Job Available
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <PiMicrophoneStageFill size={50}></PiMicrophoneStageFill>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 text-2xl font-semibold leading-5">
                    Marketing & scale
                  </h6>
                  <p className="mb-2 text-lg text-gray-900">
                    1526 Job Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
