import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const CardQuestion = (props) => {
  const { question, answer } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="transition-all duration-500 bg-gray-800 cursor-pointer hover:bg-gray-700">
      <div
        className="flex items-center justify-between p-4"
        onClick={() => setToggle(!toggle)}
      >
        <h3 className="text-white">{question}</h3>
        {toggle ? (
          <IoClose color="white" size={30} />
        ) : (
          <GoPlus color="white" size={30} />
        )}
      </div>
      <div
        className={`w-full p-4 -mt-2 text-white bg-gray-900 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default CardQuestion;
