/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

function TodoItems({ text, id, deleteTodo, isComplete,toggle }) {
  return (
    <>
      <div className="flex items-center my-3 gap-2">
        <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
          <img src={isComplete ? tick : not_tick} className="w-7" />
          <p className={`text-slate-700 ml-4 text-[17px]  ${isComplete ? "line-through":""}`}>{text}</p>
        </div>
        <div>
          <img
            onClick={() => {
              deleteTodo(id);
            }}
            src={delete_icon}
            className="w-3.5 cursor-pointer "
          />
        </div>
      </div>
    </>
  );
}

export default TodoItems;
