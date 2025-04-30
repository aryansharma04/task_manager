async function addTask() {
  const task = document.getElementById('taskInput').value;
  if (!task.trim()) return;
  await fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task })
  });
  document.getElementById('taskInput').value = '';
  loadTasks();
}

async function deleteTask(index) {
  await fetch('/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ index })
  });
  loadTasks();
}

async function loadTasks() {
  const res = await fetch('/tasks');
  const data = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  data.forEach((t, i) => {
    list.innerHTML += `<li>${t} <button onclick="deleteTask(${i})">❌</button></li>`;
  });
}

window.onload = loadTasks;