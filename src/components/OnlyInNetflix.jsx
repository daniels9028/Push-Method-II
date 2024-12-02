import React from "react";
import Card from "./Card";

const OnlyInNetflix = (props) => {
  const { netflixs } = props;
  return (
    <section className="my-12">
      <h3 className="text-4xl font-bold text-gray-500 tracking-wide">
        Only In Netflix
      </h3>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
        {netflixs.map((netflix) => (
          <Card id={netflix.id} image={netflix.image} key={netflix.id} />
        ))}
      </div>
    </section>
  );
};

export default OnlyInNetflix;
