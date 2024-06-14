import React from "react";

function CreateBatchModal({ isOpen, setIsOpen }) {
  const onSubmitClick = () => {
    console.log("created new batch");
  };

  return (
    <>
      {/* <div className="relative"> */}
      {/* <div className="overlay" /> */}
      <div className="bg-gray-apple lg:w-3/6 fixed z-30 top-1/4 left-2/4 translate-y-1/2 -translate-x-1/2 p-5 rounded-xl">
        {/* <div className="fixed inset-0 flex justify-center items-center ">
        <div className="bg-white w-3/6 mx-8 rounded-lg p-6"> */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Create New Batch</h2>
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            ❌
          </div>
        </div>

        <form className="mt-5">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex justify-end gap-5 mt-5">
              <button
                type="button"
                className="bg-transparent text-black-900 md:text-base text-sm font-normal border border-black-100 rounded-lg px-6 py-1.5"
                onClick={() => setIsOpen(!isOpen)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-violet-900 text-white md:text-base text-sm font-normal border border-black-100 rounded-lg px-8 py-2.5"
                onClick={() => onSubmitClick()}
              >
                Create
              </button>
            </div>
          </div>
        </form>
        {/* </div>
        </div> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default CreateBatchModal;
