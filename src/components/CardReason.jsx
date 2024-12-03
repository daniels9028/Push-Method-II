import React from "react";

const CardReason = (props) => {
  const { title, description, icon } = props;

  return (
    <>
      <div className="h-[350px] w-full rounded-3xl overflow-hidden px-4 py-8 relative bg-[#1D182E]">
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        <h3 className="text-3xl text-gray-300">{title}</h3>
        <p className="mt-4 text-lg text-gray-400">{description}</p>
        <div className="absolute text-5xl text-gray-600 bottom-4 right-4">
          {icon}
        </div>
      </div>
    </>
  );
};

export default CardReason;
