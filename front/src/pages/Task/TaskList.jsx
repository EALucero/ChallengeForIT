import TaskCard from "../../components/TaskCard";
import { useTask } from "../../hooks/useTask";

export default function TasksList() {
    const { tasks } = useTask(TaskCard);

    return (
        <>
            <h1 className="text-4xl font-black">Tareas</h1>
            <div className="bg-white shadow mt-10 rounded-lg ">
                {tasks.length ? (
                    tasks.map((task) => (
                        <TaskCard key={task._id} task={task} />
                    ))
                ) : (
                    <p className=" text-center text-gray-600 uppercase  p-5">
                        No hay tareas!
                    </p>
                )}
            </div>
        </>
    );
};