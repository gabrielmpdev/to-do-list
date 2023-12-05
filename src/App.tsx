import React, { useState, useEffect } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import './styles/styles.css';
import { iTask } from "./interfaces";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ButtonTest from "./components/Button";
import { ContainerTasks, ResultText ,ContainerFilter, SelectStatus , ContainerList} from './styles/stylesComponents'

function App() {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<iTask[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>(''); // Estado para rastrear o status selecionado
  const [resultCount, setResultCount] = useState<number>(0); // Estado para rastrear o número de resultados

  function addTask(): void {
    if (task === "") {
      toast.error("Digite alguma task.");
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num);
      const newTask = { id: idRandom(999), nameTask: task, Status: '' }; // Remova o status da criação
      setTodoList([...todoList, newTask]);
      console.log(newTask);
      toast.success("Task cadastrada com sucesso!");
      setTask("");
    }
  }

  function updateTaskStatus(taskId: number, newStatus: string): void {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, Status: newStatus };
      }
      return task;
    });
    setTodoList(updatedTodoList);
  }

  function updateResultCount() {
    const filteredTasks = todoList.filter((task) => task.Status === selectedStatus);
    setResultCount(filteredTasks.length);
  }



  // Mova a leitura do sessionStorage para um local onde você tem certeza de que todoList já foi inicializado
  useEffect(() => {
    const storedTodoList = sessionStorage.getItem("todoList");
    console.log("Stored Todo List:", storedTodoList);

    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  // Atualize o sessionStorage sempre que a lista de tarefas mudar
  useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(todoList));
    updateResultCount();
  }, [todoList, selectedStatus]);

  function deleteTask(DeleteTaskById: number): void {
    setTodoList(todoList.filter((task) => task.id !== DeleteTaskById))
    toast.error("Sua tarefa foi apagada.");
  }

  const filteredTasks = selectedStatus
    ? todoList.filter((task) => task.Status === selectedStatus)
    : todoList;

  return (
    <ContainerList>
      <ToastContainer autoClose={2500} pauseOnHover={false} />
      <header className="container-list">
        
        <input
          type="text"
          autoComplete="off"
          placeholder="Escrever task..."
          name="task"
          className="input-list"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
       
        <ButtonTest Class="ButtonAddTask" value="Adicionar task" background="#80CB27" onClick={addTask}/>
          
 
      </header>
      <div className="line"></div>

      <ContainerFilter>
      <p> Filtrar por:</p>
      <SelectStatus
          value={selectedStatus}
          onChange={(event) => {
            setSelectedStatus(event.target.value);
          }}
        >
         
          <option value="">Selecione</option>
          <option value="To Do">To Do</option>
          <option value="In progress">In progress</option>
          <option value="Bloqueada">Bloqueada</option>
          <option value="Finalizada">Finalizada</option>
        </SelectStatus>
      <ResultText id="result">Tarefas encontradas: {resultCount}</ResultText>
      </ContainerFilter>
      <ContainerTasks>
        {filteredTasks.map((task, key) => (
          <TodoTask key={key} task={task} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
        ))}
      </ContainerTasks>
    </ContainerList>
  );
}

export default App;
