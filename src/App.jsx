import {useEffect, useState} from "react";
import {TalikaProvider} from "./Contexts/Index";
import "./App.css";
import TalikaForm from "./componenets/TalikaForm";
import TalikaItem from "./componenets/TalikaItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTalika = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  };
  const updateTalika = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        return prevTodo.id === id ? todo : prevTodo;
      })
    );
  };
  const deleteTalika = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) => {
        return prevtodo.id === id
          ? {...prevtodo, completed: !prevtodo.completed}
          : prevtodo;
      })
    );
  };
  //starting locale storage
  // useEffect for loading the previous or say already present todos
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // setting the todos to the locale storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TalikaProvider
      value={{todos, addTalika, updateTalika, deleteTalika, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-4xl  sm:text-7xl uppercase tracking-[60px]  font-bold text-center mb-8 mt-2">
            Talika
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TalikaForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div keys={todo.id} className="w-full">
                <TalikaItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TalikaProvider>
  );
}

export default App;
