import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",Done:false});
  //const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]); // add the input into the list
    setTodo({name:"",Done:false}); // clear the input
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        placeholder="Add a new todo..."
        onChange={(e) => setTodo({name:e.target.value,Done:false})}
        value={todo.name}
        type="text"
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
