const ColorPalet = () => {
  return (
    <div
      className={
        "max-w-full mx-auto items-center flex justify-center space-x-4 pb-4 bg-gray-500"
      }
    >
      <h1 className={"text-2xl text-primary-MoreLight mt-4"}>Primary</h1>
      <h1 className={"text-2xl text-primary-Light mt-4"}>Primary</h1>
      <h1 className={"text-2xl text-primary mt-4"}>Primary</h1>
      <h1 className={"text-2xl text-primary-Dark mt-4"}>Primary</h1>

      <h1 className={"text-2xl text-secondary-MoreLight mt-4"}>Secondary</h1>
      <h1 className={"text-2xl text-secondary-Light mt-4"}>Secondary</h1>
      <h1 className={"text-2xl text-secondary mt-4"}>Secondary</h1>
      <h1 className={"text-2xl text-secondary-Dark mt-4"}>Secondary</h1>

      <h1 className={"text-2xl text-section-MoreLight mt-4"}>Section</h1>
      <h1 className={"text-2xl text-section-Light mt-4"}>Section</h1>
      <h1 className={"text-2xl text-section mt-4"}>Section</h1>
      <h1 className={"text-2xl text-section-Dark mt-4"}>Section</h1>
    </div>
  );
};

export default ColorPalet;
