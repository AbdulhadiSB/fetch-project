const cards = document.getElementById("cards");

const getTodo = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) {
      throw "clint error!!!!";
    }
    const data = await res.json();
    displayTodo(data);
  } catch (error) {
    console.log(error);
  }
};

function displayTodo(todos) {
  todos.forEach((todo) => {
    console.log();

    const { title, completed } = todo;

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.setAttribute("title", "todoCheckbox");
    todoCheckbox.classList.add = "todoCheckbox";
    todoCheckbox.checked = completed;

    todoItem.appendChild(todoCheckbox);

    const todoTitle = document.createElement("p");
    todoTitle.textContent = title;
    todoTitle.classList.add("todo-title");
    todoItem.appendChild(todoTitle);

    cards.appendChild(todoItem);
  });
}

getTodo();

setInterval(() => {
  let hours = document.getElementById("hour");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");

  let h = new Date().getHours();

  if(h > 12) {
    h = h - 12;
  }


  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hours.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
}, 1000);
