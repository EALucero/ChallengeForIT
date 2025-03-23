import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types'

const TasksContext = createContext();

const TasksProvider = ({children}) => {
    const [ tasks, setTasks ] = useState([]);
    const [ taskId, setTaskId ] = useState(null);

    function handleTaskIdClick(id) {
        setTaskId(id);
    }

    async function getTask(data) {
        try {
            setLoading(true);
            const tasksData = await filterTasksService(data.title, data.decription);
            setTasks(tasksData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const contextValues = {
        tasks,
        handleTaskIdClick,
        getTask,
    }

    return (
        <TasksContext.Provider value={ contextValues }>
            {children}
        </TasksContext.Provider>
    )
}

TasksProvider.propTypes = {
    children : PropTypes.node.isRequired,
};

export { TasksProvider };
export default TasksContext;