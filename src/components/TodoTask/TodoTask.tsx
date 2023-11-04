import React, { useState, useEffect } from 'react';
import { iTask } from "../../interfaces";
import styled from 'styled-components';
interface TaskProps {
    task: iTask,
    deleteTask(DeleteTaskById: number): void,
    updateTaskStatus(taskId: number, newStatus: string): void,
}

function TodoTask({ task, deleteTask, updateTaskStatus  }: TaskProps) {
    const [description, setDescription] = useState<string>('');
    const [statusTask, setStatusTask] = useState<string>(task.Status);

    useEffect(() => {
        const savedDescription = sessionStorage.getItem(`description_${task.id}`);

        if (savedDescription) {
            setDescription(savedDescription);
        }
    }, [task.id]);

    function statusSelectTask(e: React.ChangeEvent<HTMLSelectElement>) {
        const newStatus = e.target.value;

        // Atualize o estado local
        setStatusTask(newStatus);

        // Chame a função para atualizar o estado no componente pai
        updateTaskStatus(task.id, newStatus);
    }
    const ButtonSaveDesc  = styled.button `
    background: green
  `;
  const ContainerDesc  = styled.div `
 display: flex;
 flex-direction:column
`;
const Card  = styled.div `
display: flex;
flex-direction:column;
background: white;
border-radius: 10px;
`;
const TitleCard = styled.h3 `
 color: black;
 font-size: 14px;
 text-align: center;
`;
    const cardClass = `card ${statusTask.toLowerCase()}`;

    function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setDescription(e.target.value);
    }

    function saveDescriptionAndComment() {
        if (description) {
            sessionStorage.setItem(`description_${task.id}`, description);
        }
    }
    return (
    
    <Card className={cardClass}  >
            <span onClick={() => deleteTask(task.id)} className="btn-card">X</span>
            <div className='card-content'>
                <div className='task-title'>
                    <TitleCard>{task.nameTask}</TitleCard>
                </div>
                <div className='box-status'>
    Status:
    <select id="card-status" value={task.Status} onChange={statusSelectTask}>
        <option value="">Selecione</option>
        <option value="To Do">To Do</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Bloqueada">Bloqueada</option>
        <option value="Finalizada">Finalizada</option>
    </select>
</div>

            </div>

            <div className="line2"></div>
            <ContainerDesc>
            <textarea style={{ resize: "none", minHeight: "150px", padding: "25px 0px 25px 0px" }} value={description} onChange={handleDescriptionChange}></textarea>

            <ButtonSaveDesc onClick={saveDescriptionAndComment}>Salvar descrição e comentário</ButtonSaveDesc>
            </ContainerDesc>
        </Card>
    );
}

export default TodoTask;
