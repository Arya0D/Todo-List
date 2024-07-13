import { useState } from "react";

const AddTodo = ({ className, add }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  // localStorage.clear();
  return (
    <div
      className={`w-screen h-screen fixed top-0 flex justify-center items-center p-5 ${className}`}
    >
      <div className="w-[300px] bg-gray-100 rounded-lg h-fit flex items-center justify-center flex-col gap-2 shadow-xl relative p-4">
        <h1 className="text-xl font-semibold">New Todo List</h1>
        <form
          className="grid gap-2"
          onSubmit={() => {
            const todo = JSON.parse(localStorage.getItem("todos")) || [];

            const newTodo = { text, date };
            const updateTodo = [...todo, newTodo];

            localStorage.setItem("todos", JSON.stringify(updateTodo));

            setText("");
            setDate("");
          }}
        >
          <div>
            <label>To do</label>
            <br />
            <input
              type="text"
              value={text}
              required
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Dead line</label>
            <br />
            <input
              type="date"
              value={date}
              required
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <button className="w-full bg-slate-400 p-3 rounded-xl">Add</button>
          <span
            className="absolute top-0 right-5 text-2xl hover:text-rose-600 cursor-pointer"
            onClick={add}
          >
            x
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
