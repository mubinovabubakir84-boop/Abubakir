import { useState } from "react";
import "./App.css";
import Tasks from "./components/Task";

export interface Task{
     id: number, title: string, status: string 
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "iderfuvndoi", status: "inprogress" },
    { id: 2, title: "a;jnvr", status: "completed" },
    { id: 3, title: "'eorivn", status: "completed" },
    { id: 4, title: "noutbook olgin", status: "completed" },
    { id: 5, title: "noutbook olgin", status: "completed" },
    { id: 6, title: "noutbook olgin", status: "verified" },
  ]);

  const [filter, setFilter] = useState("all");

  function changeTask(id:number,status:string) {
    let newTasks =  tasks.map(t=>{
      if(t.id == id){
        t.status = status
      }
      return t
    })
    setTasks(newTasks)
  }

  const getTasks =
    filter === "all" ? tasks : tasks.filter(task => task.status === filter);
  
  return (
    <div className="container">
      <div className="filter-buttons">
        {["all", "inprogress", "completed", "verified"].map(f => (
          <button
            key={f}
            
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <Tasks changeTask={changeTask}  tasks={getTasks} />
    </div>
  );
}

export default App;
