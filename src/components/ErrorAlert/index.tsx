export const ErrorAlert = () => (
  <div className={"flex justify-center items-center"}>
    <div
      className="bg-red-100 border-l-4 border-red-500 text-orange-700 p-4 w-1/3 text-left mt-5"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>Something not ideal might be happening.</p>
    </div>
  </div>
);
