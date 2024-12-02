import React from "react";
import Card from "./Card";

const Trending = (props) => {
  const { trends } = props;

  return (
    <section className="my-12">
      <h3 className="text-4xl font-bold text-gray-500 tracking-wide">
        Trending Now
      </h3>
      <div className="flex w-full justify-center items-center">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8 place-items-center">
          {trends.map((trend) => (
            <Card id={trend.id} image={trend.image} key={trend.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
