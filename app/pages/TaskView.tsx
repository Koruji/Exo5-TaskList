import { useState } from "react";
import { NavLink } from "react-router";
import type { Task } from "~/models/task.interface";
import { tasks } from "~/store/task-datas";

export default function TaskView() {

    const [taskList] = useState<Task[]>(tasks);
    
    return (
        <>
        <h1>Liste de tâches</h1>
        {taskList.length === 0 ? (
            <p>Aucune tâches n'a été trouvé !</p>
        ) : (
            <ul>
                {taskList.map((task) => (
                    <li>{task.titre} - <NavLink to="/">Voir plus</NavLink></li>
                ))}
            </ul>
        )}
        </>
    );
}