import CardQuestion from "./CardQuestion";

const Asked = (props) => {
  const { askeds } = props;

  return (
    <section className="my-12">
      <h3 className="text-4xl font-bold tracking-wide text-gray-500">
        Frequently Asked Questions
      </h3>

      <div className="grid w-full grid-cols-1 mt-8 space-y-4">
        {askeds.map((asked) => (
          <CardQuestion
            key={asked.id}
            question={asked.question}
            answer={asked.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default Asked;
