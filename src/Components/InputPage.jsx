import React from "react";

function InputPage() {
  return (
    <div className="w-1/2 h-full">
      <div className="m-10">
        <label for="input" className="block font-medium text-gray-100 mb-2">
          Card Number
        </label>
        <input
          type="text"
          placeholder="Enter Card Number"
          className=" w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:outline-brand-bg focus:border-none"
        />
      </div>
      <div className="m-10">
        <label for="input" className="block font-medium text-gray-100 mb-2">
          Name of the Card Holder
        </label>
        <input
          type="text"
          placeholder="Name as it is on the Card"
          className=" w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:outline-brand-bg focus:border-none"
        />
      </div>
     <div className="flex">
     <div className="ml-10 w-2/4">
        <label for="input" className="block font-medium text-gray-100 mb-2">
         ValiDate
        </label>
        <input
          type="Date"
          placeholder="mm/aa"
          className=" w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:outline-brand-bg focus:border-none"
        />
      </div>
      <div className="ml-8 w-1/4">
        <label for="input" className="block font-medium text-gray-100 mb-2">
         CVV
        </label>
        <input
          type="text"
          placeholder="***"
          className=" w-full p-3 border border-gray-700 rounded-md bg-gray-900 focus:outline-none focus:outline-brand-bg focus:border-none"
        />
      </div>
     </div>
    </div>
  );
}

export default InputPage;
