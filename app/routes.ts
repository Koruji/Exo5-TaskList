import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    ...prefix("task", [
        route(":taskId", "routes/task-details.tsx")
    ]),
] satisfies RouteConfig;
