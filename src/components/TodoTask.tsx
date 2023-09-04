import './styles.css';
import { iTask } from "../interfaces";
import React, { useState } from 'react';

interface TaskProps {
    task: iTask,
    deleteTask(DeleteTaskById: number): void,
}

function TodoTask({ task, deleteTask }: TaskProps) {
    const [borderColor, setBorderColor] = useState<string>(''); // Estado para a cor da borda

    function statusTask(e: React.ChangeEvent<HTMLSelectElement>) {
        const selectedStatus = e.target.value;
        // Defina a cor da borda com base no status selecionado
        switch (selectedStatus) {
            case 'Em andamento':
                setBorderColor('orange');
                break;
            case 'Bloqueada':
                setBorderColor('red');
                break;
            case 'Finalizada':
                setBorderColor('#80CB27');
                break;
            default:
                setBorderColor('transparent'); // Nenhuma cor de borda
        }
    }

    return (
        <div className="card" style={{ borderLeftColor: borderColor }}>
            <div className='card-content'>
                <p>{task.nameTask}</p>
                Status:
                <select id="card-status" onChange={statusTask}>
                    <option>
                        Selecione o status
                    </option>
                    <option>
                        Em andamento
                    </option>
                    <option>
                        Bloqueada
                    </option>
                    <option>
                        Finalizada
                    </option>
                </select>
            </div>

            <div className="line2">
                <span onClick={() => deleteTask(task.id)} className="btn-card">X</span>
            </div>
        </div>
    );
}

export default TodoTask;
