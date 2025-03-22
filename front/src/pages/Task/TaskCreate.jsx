import TaskForm from "../../components/TaskForm"

export default function TaskCreate() {
    return (
        <>
            <h2 className="text-4xl font-black">Crear Tarea</h2>
            <div className="mt-10 flex justify-center">
                <TaskForm />
            </div>
        </>
    );
}