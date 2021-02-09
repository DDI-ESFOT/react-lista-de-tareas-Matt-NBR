import { useState } from "react";

const TodoList = ({ chores }) => {
    const[todoList, setTodoList] = useState(chores);
    const[doneList, setDoneList] = useState([]);

    const handleAddChore = (event) => {
        const choreToAdd = document.querySelector("#chore").value;
        const newChore = {
            name: choreToAdd,
            id: Math.random(),
        }
        console.log("Agregar", newChore);
        setTodoList((prevTodoList) => {
            return [...prevTodoList, newChore];
        });
        document.querySelector("#chore").value = "";
    };

    const handleDeleteChore = (id) => {
        console.log(id, " id de tarea eliminada");
        const updatedList = todoList.filter((chore) => chore.id !== id);
        setTodoList((todoList) => {
            return [...updatedList];
        });
    }

    const handleCompleteChore = (id, name) => {
        console.log(id, " id de tarea completada");
        console.log(name, " nombre de tarea completada");
        handleDeleteChore(id);
        setDoneList((prevDoneList) => {
            return [...doneList, name];
        });
    };

    return (
        <>
            <h1>Lista de Tareas - {todoList.length} tareas pendientes</h1>
            <input type="text" id="chore" placeholder="Ingrese una tarea" />
            <button onClick={handleAddChore}>Agregar</button>
            <ul>
                {todoList.map(chore => 
                    <li key={chore.id}>
                    {chore.name}
                    <button onClick={() => handleCompleteChore(chore.id, chore.name)}>Completada</button>
                    <button onClick={() => handleDeleteChore(chore.id)}>Eliminar</button>
                </li>)}
            </ul>
            <h2>Tareas Completadas - {doneList.length}</h2>
            <ul>
                {doneList.map((chore, index) => {
                    return <li key={index}>{chore}</li>
                })}
            </ul>
        </>
    );
};


export default TodoList;