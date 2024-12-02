import React from "react";
import Card from "./Card";

const Trending = (props) => {
  const { trends } = props;

  return (
    <section className="my-12">
      <h3 className="text-4xl font-bold text-gray-500 tracking-wide">
        Trending Now
      </h3>
      <div className="grid lg:grid-cols-5 grid-cols-1 place-items-center gap-6 mt-8">
        {trends.map((trend) => (
          <Card trend={trend} key={trend.id} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
