const express = require('express');
const app = express();
const PORT = 5000;

let tasks = [];

app.use(express.json());
app.use(express.static('public'));

app.post('/add', (req, res) => {
  tasks.push(req.body.task);
  res.sendStatus(200);
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/delete', (req, res) => {
  const index = req.body.index;
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
  }
  res.sendStatus(200);
});
