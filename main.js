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

  let newList = new list(input);
  listArr.push(newList);
  listArr.map((list_get) => {
    tbody.innerHTML += `
<li>${list_get.input}</li>  

`;
  });
}

button.addEventListener("click", addList);



delet.addEventListener("click",function(){
  const indexToDelete=2;
  listArr.splice(indexToDelete,1);
})
// delet.addEventListener("click",()=>{
//   let newListt=new list(input)
//   listArr.pop(newListt)
// })

// delet.addEventListener("click",delete listArr[1])
