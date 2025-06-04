import type { Task } from "~/models/task.interface";

export const tasks: Task[] = [
    {
        id: 1,
        titre: "Faire les courses",
        description: "Oeuf, Lait, Fromage, Brioche, etc..."
    },
    {
        id: 2,
        titre: "Faire le ménage",
        description: "Poussière, Aspirateur, Serpillère"
    },
    {
        id: 3,
        titre: "MAJ anime",
        description: "Se tenir à jour sur les derniers épisodes de la semaine."
    },
    {
        id: 4,
        titre: "Suivre les cours",
        description: "Cours de React.js"
    }
]