import { useState } from "react";

const TodoCard = ({ note, add, date, del, check }) => {
  const [complete, setComplete] = useState("");

  function handleComplete() {
    setComplete(complete === "line-through" ? "" : "line-through");
  }

  return (
    <div
      className="w-full sm:w-[500px] h-[130px] bg-slate-300 flex  items-center cursor-pointer  overflow-scroll shadow-xl "
      onClick={add}
    >
      {note ? (
        <div className="p-3 relative flex justify-between w-full items-center">
          <div>
            <h1 className={`text-3xl font-semibold ${complete}`}>{note}</h1>
            <h1>
              Dead line:{" "}
              <span className={`${check ? "text-red-700" : "text-green-600"}`}>
                {date}
              </span>
            </h1>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <div className={`hover:bg-red-700 p-2`} onClick={del}>
              <img src="/src/assets/delete.svg" alt="" width={30} />
            </div>
            {complete === "" ? (
              <div className={`bg-green-400 p-2`} onClick={handleComplete}>
                <img src="/src/assets/check.svg" alt="" width={30} />
              </div>
            ) : (
              <div className={`bg-yellow-600 p-2`} onClick={handleComplete}>
                <img src="/src/assets/close-close.svg" alt="" width={30} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <span className="text-6xl text-center w-full">+</span>
      )}
    </div>
  );
};

export default TodoCard;
