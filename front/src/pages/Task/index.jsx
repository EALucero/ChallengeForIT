import { Nav } from "react-bootstrap";
import TaskCard from "../../components/TaskCard";
import { Link } from "react-router-dom";

const Tasks = () => {
    return (
        <>
            <Nav className="flex justify-evenly">
                <button className="mt-5" type="submit">
                    <Link to={'list'}>Lista</Link>
                </button>
                <button className="mt-5" type="submit">
                    <Link to={'form'}>Agregar</Link>
                </button>
            </Nav>
        </>
    );
};

export default Tasks;

/*<h1 className="text-4xl font-black">Tareas</h1>
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
            </div> */