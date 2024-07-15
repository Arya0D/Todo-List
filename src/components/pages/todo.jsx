import React, { useState } from "react";
import AddTodo from "../addTodo";
import TodoCard from "../todo-card";
import ClearTodo from "./ClearTodo";

const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [addActive, setAddActive] = useState("hidden");
  const [clearActive, setClearActive] = useState("hidden");

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  todos.sort((a, b) => new Date(a.date) - new Date(b.date));

  const handlAdd = () => {
    setAddActive(addActive === "fixed" ? "hidden" : "fixed");
  };
  const handlClear = () => {
    setClearActive(clearActive === "fixed" ? "hidden" : "fixed");
  };

  return (
    <div>
      <div className="p-3">
        <h1 className="text-center font-semibold text-2xl m-1 ">
          My To do List
        </h1>
        <div className="grid justify-center w-full">
          <button
            className="w-[300px] p-3 bg-slate-500 m-2 rounded-full grid text-white font-semibold"
            onClick={handlClear}
          >
            Clear All
          </button>
        </div>

        <div className="grid gap-3 place-items-center">
          <TodoCard note={""} add={handlAdd} />

          {todos.map((todo, index) => {
            let part = todo.date.split("-");
            let newDate = part[2] + "-" + part[1] + "-" + part[0];
            if (new Date(todo.date) < Date.now()) {
              return (
                <TodoCard
                  key={index}
                  note={todo.text}
                  date={newDate}
                  del={() => deleteTodo(index)}
                  check
                />
              );
            } else {
              return (
                <TodoCard
                  key={index}
                  note={todo.text}
                  date={newDate}
                  del={() => deleteTodo(index)}
                />
              );
            }
          })}
        </div>
      </div>
      <AddTodo className={addActive} add={handlAdd} />
      <ClearTodo className={clearActive} add={handlClear} />
    </div>
  );
};

export default Todo;
