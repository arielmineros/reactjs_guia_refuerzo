import React, { useState } from "react";

function Ejercicio2() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() !== "") {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Nueva tarea"
                />
                <button onClick={addTask}>Agregar</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span
                            className={task.completed ? "completed" : ""}
                            onClick={() => toggleComplete(index)}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(index)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ejercicio2;
