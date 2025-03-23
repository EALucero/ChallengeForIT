import { TasksProvider } from "./context/TaskProvider";
import TaskLayout from "./layout";
import AppRoutes from "./routes"

function App() {
  return (
    <TaskLayout>
      <TasksProvider>
        <AppRoutes />
      </TasksProvider>
    </TaskLayout>
  )
}

export default App