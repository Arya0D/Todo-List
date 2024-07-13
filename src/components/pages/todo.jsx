import React, { useState } from "react";
import AddTodo from "../addTodo";
import TodoCard from "../todo-card";

const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [active, setActive] = useState("hidden");

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleClick = () => {
    setActive(active === "fixed" ? "hidden" : "fixed");
  };

  return (
    <div>
      <div className="p-3">
        <h1
          className="text-center font-semibold text-2xl m-1 "
          onClick={handleClick}
        >
          My To do List
        </h1>
        <div className="grid gap-3 place-items-center">
          <TodoCard note={""} add={handleClick} />

          {todos.map((todo, index) => {
            let part = todo.date.split("-");
            let newDate = part[2] + "-" + part[1] + "-" + part[0];
            return (
              <TodoCard
                key={index}
                note={todo.text}
                date={newDate}
                del={() => deleteTodo(index)}
              />
            );
          })}
        </div>
      </div>
      <AddTodo className={active} add={handleClick} />
    </div>
  );
};

export default Todo;
