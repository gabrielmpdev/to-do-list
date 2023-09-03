import './styles.css'
import { iTask } from "../interfaces";

interface TaskProps{
    task: iTask,
    deleteTask(DeleteTaskById: number) : void,
}
function TodoTask({task ,deleteTask} : TaskProps) {
	
	return (
		<div className="card">
			<div>
                <p>{task.nameTask}</p>
            </div>

            <div className="line2" >
            <span onClick={() => deleteTask(task.id)} className="btn-card">X</span>
            </div>
		</div>
	);
}

export default TodoTask;