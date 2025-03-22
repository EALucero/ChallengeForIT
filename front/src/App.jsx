import { useState } from 'react'
import TaskLayout from "./layout";
import AppRoutes from "./routes"

function App() {
  const [count, setCount] = useState(0)

  return (
    <TaskLayout>
      <AppRoutes />
    </TaskLayout>
  )
}

export default App