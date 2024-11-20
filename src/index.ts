import { v4 as uuidV4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  addListItem(newTask);
  input.value = "";
  saveTasks(); 
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const deleteButton = document.createElement("button");


  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    label.style.textDecoration = task.completed ? "line-through" : "none"; 
    saveTasks(); 
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;


  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    tasks.splice(tasks.findIndex((t) => t.id === task.id), 1); 
    saveTasks();
    item.remove(); 
  });

  label.append(checkbox, task.title);
  item.append(label, deleteButton);
  list?.append(item);


  if (task.completed) {
    label.style.textDecoration = "line-through";
  }
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null) return [];
  return JSON.parse(taskJSON);
}
