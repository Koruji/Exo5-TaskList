import TaskDetailsView from "~/pages/TaskDetailsView";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Détails d'une tâche'"},
        {name: "description", content: "Description de la tâche en cours"}
    ];
}

export default function TaskDetails()  {
    return <TaskDetailsView/>;
}