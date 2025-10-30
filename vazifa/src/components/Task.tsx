import type { Task } from "../App"

interface Props{
    tasks : Task[]
    changeTask : (id:number,status:string)=>void
}



function Tasks(props:Props) {
  return (
    <table>
        <thead>
          <tr>
            <th>T/r</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>
                {["inprogress", "completed", "verified"].map(status => (
                  <button
                    key={status}
                    className={`status-btn ${
                      task.status === status ? "active-status" : ""
                    }`}
                    onClick={() => props.changeTask(task.id, status)}
                  >
                    {status}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default Tasks
