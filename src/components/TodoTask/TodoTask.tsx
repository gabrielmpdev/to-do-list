import React, { useState, useEffect } from 'react';
import { iTask } from "../../interfaces";
import {
  ButtonSaveDesc,
  ContainerDesc,
  Card,
  TitleCard,
  DivisorCard,
  IconDelete,
  ContainerTitle,
  TextArea,
  BoxStatus,
  SelectStatus,
} from '../../styles/stylesComponents';
import { toast } from 'react-toastify';

interface TaskProps {
  task: iTask,
  deleteTask(DeleteTaskById: number): void,
  updateTaskStatus(taskId: number, newStatus: string): void,
}

function TodoTask({ task, deleteTask, updateTaskStatus }: TaskProps) {
  const [description, setDescription] = useState<string>('');
  const [statusTask, setStatusTask] = useState<string>(task.Status);
  const [cardBorder, setCardBorder] = useState<string>("");

  useEffect(() => {
    const savedDescription = sessionStorage.getItem(`description_${task.id}`);
    const savedBorder = sessionStorage.getItem(`status_${task.id}`);
   
    if (savedBorder) {
      setCardBorder(savedBorder);
    }
    if (savedDescription) {
      setDescription(savedDescription);
    }
  }, [task.id, task.Status]);

  function statusSelectTask(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    let border = "";
    if (newStatus === "Bloqueada") {
      border = "5px solid red";
    } else if (newStatus === "In progress") {
      border = "5px solid orange";
    }
    else if (newStatus === "Finalizada") {
      border = "5px solid green";
    }
    else if (newStatus === "To Do") {
      border = "5px solid gray";
    }
    setCardBorder(border);
    updateTaskStatus(task.id, newStatus);
  
    // Salvamento da borda no sessionStorage
    sessionStorage.setItem(`status_${task.id}`, border);
  }
  

  const cardClass = `card ${statusTask.toLowerCase()}`;

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function saveDescriptionAndComment() {
    if (description) {
      sessionStorage.setItem(`description_${task.id}`, description);
      toast.info("Descrição salva com sucesso.");
    }
  }

  return (
    <Card className={cardClass} style={{ borderTop: cardBorder }}>
      <IconDelete onClick={() => deleteTask(task.id)} className="btn-card">X</IconDelete>
      <ContainerTitle>
        <TitleCard>{task.nameTask}</TitleCard>
      </ContainerTitle>

      <div className='card-content'>
        <DivisorCard/>
        <BoxStatus>
          Status:
          <SelectStatus id="card-status" value={task.Status} onChange={statusSelectTask}>
            <option value="">Selecione</option>
            <option value="To Do">To Do</option>
            <option value="In progress">In progress</option>
            <option value="Bloqueada">Bloqueada</option>
            <option value="Finalizada">Finalizada</option>
          </SelectStatus>
        </BoxStatus>
      </div>

      <div className="line2"></div>
      <ContainerDesc>
        <TextArea style={{ resize: "none", minHeight: "150px", padding: "25px 0px 25px 0px" }} value={description} onChange={handleDescriptionChange}></TextArea>
        <ButtonSaveDesc onClick={saveDescriptionAndComment}>Salvar</ButtonSaveDesc>
      </ContainerDesc>
    </Card>
  );
}

export default TodoTask;
