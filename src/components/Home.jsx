import React from 'react'
import { useState } from "react";
import CreateBatchModal from "../CreateBatchModal";
import backgroundUrl from "../assets/images";
import Tabs from "./tabs";

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
         <div className="relative">
        <img
          className="w-full h-full object-cover filter brightness-110 contrast-125 grayscale-20 blur-md"
          src={backgroundUrl}
          alt="Roses"
        />
      
      <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className=" text-white p-4"><Tabs />
            <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
            <p className="mt-2">
              This is a simple example of applying Tailwind CSS styles to a React
              component.
            </p>       
            <div>
              <button
                onClick={() => {
                  setModalOpen(true);
                }}
                className="flex px-6 py-3 mt-4 mx-auto hover:bg-gray-300 hover:text-black text-white hover:font-normal font-bold rounded-lg border"
              >
                Click me
              </button>
            </div>
          </div>
        </div>
        {modalOpen && (
          <CreateBatchModal isOpen={modalOpen} setIsOpen={setModalOpen} />
        )}
      </div>
      
    </>
  )
}

export default Home
