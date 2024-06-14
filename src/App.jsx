import "./App.css";
import { useState } from "react";
import CreateBatchModal from "./createBAtchModal";
import backgroundUrl from "./assets/images";
import Tabs from "./components/Tabs";

function App() {
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
                className="flex px-20 py-9 mt-4 mx-auto bg-green-500 hover:bg-green-600 text-white font-bold rounded border-orange-800 border-8"
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
  );
}

export default App;
