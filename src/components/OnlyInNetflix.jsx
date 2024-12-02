import React from "react";
import Card from "./Card";

const OnlyInNetflix = (props) => {
  const { netflixs } = props;
  return (
    <section className="my-12">
      <h3 className="text-4xl font-bold text-gray-500 tracking-wide">
        Only In Netflix
      </h3>
      <div className="flex w-full justify-center items-center">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8 place-items-center">
          {netflixs.map((netflix) => (
            <Card id={netflix.id} image={netflix.image} key={netflix.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlyInNetflix;
