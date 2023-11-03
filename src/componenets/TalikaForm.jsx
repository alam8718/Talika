import React, {useEffect, useState} from "react";
import {useTalika} from "../Contexts/TalikaContext";

function TalikaForm() {
  const [todo, setTodo] = useState("");
  const {addTalika} = useTalika();

  //add talika
  // todo:todo it can be also written like this todo if the name:property is same name than we can only write once todo

  const add = (e) => {
    // e.preventDefault();

    if (!todo) return; // it means if there is no todo than it will comeout from the function

    addTalika({todo, completed: false});
    setTodo("");
    console.log(`I am entering from input ${todo}`);
  };
 
  
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      {/* as the button is type= submit so there is no need for any function it will automatically submit  */}
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
   
        >
        Add
      </button>
    </form>
  );
}

export default TalikaForm;
