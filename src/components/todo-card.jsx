const TodoCard = ({ note, add, date, del }) => {
  return (
    <div
      className="w-full md:w-[500px] h-[130px] bg-slate-300 flex  items-center cursor-pointer  overflow-scroll shadow-xl "
      onClick={add}
    >
      {note ? (
        <div className="p-3 relative flex justify-between w-full items-center">
          <div>
            <h1 className="text-3xl font-semibold">{note}</h1>
            <h1>Dead line: {date}</h1>
          </div>
          <div className="hover:bg-red-700 p-2" onClick={del}>
            <img src="/src/assets/delete.svg" alt="" width={30} />
          </div>
        </div>
      ) : (
        <span className="text-6xl text-center w-full">+</span>
      )}
    </div>
  );
};

export default TodoCard;
