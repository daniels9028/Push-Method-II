import React from "react";
import CardReason from "./CardReason";

const Reason = (props) => {
  const { reasons } = props;
  return (
    <section className="my-12">
      <h3 className="text-4xl font-bold tracking-wide text-gray-500">
        More Reasons to Join
      </h3>

      <div className="grid grid-cols-1 gap-8 mt-8 xl:grid-cols-4 lg:grid-cols-2">
        {reasons.map((reason, index) => (
          <CardReason
            id={reason.id}
            title={reason.title}
            description={reason.description}
            icon={reason.icon}
            key={reason.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Reason;
