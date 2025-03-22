import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Tasks from "../pages/Task";
import TaskList from "../pages/Task/TaskList";
import TaskCreate from "../pages/Task/TaskCreate";
import TaskItem from "../pages/Task/TaskItem";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/tasks" element={<Tasks />}>
                <Route path="list" element={<TaskList />} />
                <Route path="form" element={<TaskCreate />} />
                <Route path=":id" element={<Tasks />} />
                <Route path="edit/:id" element={<TaskItem />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}