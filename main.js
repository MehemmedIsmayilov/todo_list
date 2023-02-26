let button = document.querySelector(".add_task");
let delet = document.querySelector(".delete");

let listArr = [];
class list {
  constructor(input, button, delet) {
    this.input = input;
    this.button = button;
    this.delet = delet;
  }
}

function addList() {
  let input = document.querySelector(".input").value;
  let tbody = document.querySelector(".tbody");

  let newList = new list(input, button, delet);
  listArr.push(newList);
  listArr.map((list_get) => {
    tbody.innerHTML += `
<li>${list_get.input}</li>
<button class="delete">DELETE</button>
`;
  });
}

button.addEventListener("click", addList);
