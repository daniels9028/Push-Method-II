import React from "react";

const CardReason = (props) => {
  const { title, description, icon } = props;

  return (
    <div className="h-[350px] text-white bg-gray-700 w-full rounded-3xl overflow-hidden px-4 py-8 relative">
      <h3 className="text-3xl">{title}</h3>
      <p className="mt-4 text-lg">{description}</p>
      <div className="absolute text-5xl text-black bottom-4 right-4">
        {icon}
      </div>
    </div>
  );
};

export default CardReason;
