import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

function Todo() {
  const inputref = useRef();
  const [todolist, setTodolist] = useState( localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

  const addTask = () => {
    const newTask = inputref.current.value.trim();
    console.log(newTask);
    if (newTask === "") {
      return null;
    }

    const newTodo = {
      id: new Date().getTime(),
      text: newTask,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    inputref.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodolist((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
};

    const toggle = (id) => {
      setTodolist((prev) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isComplete: !todo.isComplete };
          }
          return todo;
        });
      });
    };
 
    useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todolist))
    },[todolist])

  return (
    <>
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        {/* --------------------tile--------------------------------- */}
        <div className="flex items-center mt-7 gap-2">
          <img className="w-8" src={todo_icon} alt="" />
          <h1 className="text-3xl font-semibold">To-do List</h1>
        </div>
        {/* --------------------Input box--------------------------------- */}
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
          <input
            ref={inputref}
            className="bg-transparent border-0 outline-none flex-1 h-14  pl-6 placeholder:text-slate-600"
            type="text"
            placeholder="Add Your Task"
          />
          <button
            onClick={addTask}
            className="border-none  rounded-full w-32 h-14 bg-orange-600 cursor-pointer text-white text-lg font-medium"
          >
            Add +
          </button>
        </div>
        {/* --------------------todo list--------------------------------- */}
        <div>
          {todolist.map((item, index) => {
            return (
              <TodoItems
                key={index}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
