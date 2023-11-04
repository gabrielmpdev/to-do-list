import React, { useState, useEffect } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import './styles/styles.css';
import { iTask } from "./interfaces";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ButtonTest from "./components/Button";
import styled from "styled-components";

function App() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<iTask[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>(''); // Estado para rastrear o status selecionado

  function addTask(): void {
    if (task === "") {
      toast.error("Digite alguma task.");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);
      const newTask = { id: idRandom(999999999999999), nameTask: task, Status: '' }; // Remova o status da criação
      setTodoList([...todoList, newTask]);
      console.log(newTask);
      toast.success("Task cadastrada com sucesso!");
      setTask("")
    }
  }
 const ContainerTasks = styled.section `
 display: flex;
 flex-wrap: wrap;
 width: calc(100% - 40px);
 margin: 0 auto;
 justify-content: center;
 gap: 20px

 `

  function updateTaskStatus(taskId: number, newStatus: string): void {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, Status: newStatus };
      }
      return task;
    });
    setTodoList(updatedTodoList);
  }

  function handleClickButton() {
    alert("botão clicado");
  }

  useEffect(() => {
    const storedTodoList = sessionStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function deleteTask(DeleteTaskById: number): void {
    setTodoList(todoList.filter((task) => task.id !== DeleteTaskById));
    console.log(DeleteTaskById);
  }

  const filteredTasks = selectedStatus
    ? todoList.filter((task) => task.Status === selectedStatus)
    : todoList;

  return (
    <div className="App">
      <ToastContainer autoClose={2500} pauseOnHover={false} />
      <header className="container-list">
        <h2>Lists</h2>
        <input
          type="text"
          autoComplete="off"
          placeholder="Escrever task..."
          name="task"
          className="input-list"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <ButtonTest value="Listar" onClick={handleClickButton} background="red"/>
        <select
          value={selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
        >
          <option value="">Filtrar por Status</option>
          <option value="To Do">To Do</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Bloqueada">Bloqueada</option>
          <option value="Finalizada">Finalizada</option>
        </select>
        <button type="submit" onClick={addTask} className="btn-header">
          Adicionar Task
        </button>
      </header>
      <div className="line"></div>
      <ContainerTasks>
        {filteredTasks.map((task, key) => (
          <TodoTask key={key} task={task} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus}  />
        ))}
      </ContainerTasks>
    </div>
  );
}

export default App;
