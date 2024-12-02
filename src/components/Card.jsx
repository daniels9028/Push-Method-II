import React from "react";

const Card = (props) => {
  const { id, image } = props;

  return (
    <div className="h-[350px] w-[250px] rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500">
      <img src={image} alt={image} className="object-cover w-full h-full" />
    </div>
  );
};

export default Card;
