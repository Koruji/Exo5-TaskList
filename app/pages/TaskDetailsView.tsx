import { NavLink, useParams } from "react-router";
import type { Task } from "~/models/task.interface";
import { tasks } from "app/store/task-datas";
import "./TaskDetailsView.css";

export default function TaskDetailsView() {
    const params = useParams();
    const taskId: number = Number(params.taskId);
    if(taskId === 0) { throw new Error("Cette tâche n'existe pas !") };
    
    const task: Task = tasks.filter((task: Task) => Number(task.id) === taskId)[0];

    return (!task ? (
            <section>
                <p>Cette tâche n'a pas de spécifications.</p>
                <NavLink to="/">Retour au menu</NavLink>
            </section>
        ) : (
            <section className="task-item">
                <h1>{task.titre}</h1>
                <p><strong>Description :</strong></p>
                <p>{task.description}</p>
                <NavLink to="/">Retour</NavLink>
            </section>
        )
    );
}