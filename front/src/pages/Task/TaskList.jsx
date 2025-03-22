import TaskCard from "../../components/TaskCard";

const TasksList = () => {
    const { tasks } = useTasks();

    return (
        <>
            <h1 className="text-4xl font-black">Tareas</h1>
            {/* {alert.msg && <Alert {...alert} />} */}
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

export default TasksList;