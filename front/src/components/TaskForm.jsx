const TaskForm = ({ task }) => {
    useTasks = () => {}
  
    return (
      <div className="border-b p-5 flex justify-between items-center">
        <h2 className="bg-sky-800"></h2>
        <div className="flex flex-col  items-start">
          <p className="mb-1 text-xl">{task.name}</p>
          <p className="mb-1 text-sm text-gray-500 uppercase">
            {task.description}
          </p>
          <p className="mb-1 text-sm">{task.date.split("T")[0]}</p>
          {task.completed && (
            <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">
              Completada
            </p>
          )}
        </div>
      </div>
    );
  };
  
  export default TaskForm;