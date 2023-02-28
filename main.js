let button = document.querySelector(".add_task");

let input = document.querySelector(".input");

let ull = document.querySelector(".ull");


button.addEventListener("click",() => {
  ull.innerHTML += `<li class="word">${input.value}<button class="dltbtn">Delete</button></li>`;
  let word = document.querySelector(".word");
  let dltbtn = document.querySelector(".dltbtn");

  dltbtn.addEventListener("click", () => {
    word.remove();
  });
});

// delet.addEventListener("click",function(e){
//   const indexToDelete=2;
//   listArr.splice(indexToDelete,1);
// })
// delet.addEventListener("click",()=>{
//   let newListt=new list(input)
//   listArr.pop(newListt)
// })
