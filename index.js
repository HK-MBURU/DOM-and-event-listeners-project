const budget = [
  { id: 1, title: "Transportation", category: "expense", amount: "300Sh" },
  { id: 2, title: "Security", category: "expense", amount: "6700Sh" },
  { id: 3, title: "Selling", category: "income", amount: "93300Sh" },
];
const items = document.querySelector(".display");

const createTask = (budget) => {
  const item = document.createElement("div");
  const title = document.createElement("div");
  title.innerText = budget.title;
  const category = document.createElement("div");
  category.innerText = budget.category;
  const amount = document.createElement("div");
  amount.innerText = budget.amount;
  const btn_delete = document.createElement("button");
  btn_delete.innerText = "Delete";
  // btn_delete.classList.add('action')

  // items.classList('item')
  item.classList.add("items");

  // item.append(item)
  item.append(title, category, amount, btn_delete);
  items.appendChild(item); 
  return budget
};
console.log(createTask(budget[0]));
const mountTasks=(budget)=>{
   let items_elements= budget.map(budget=>createTask(budget))
//    items.append(...items_elements);
//    items.appendChild(items_elements);
   console.log(items_elements);
}
mountTasks(budget)

const delete_btn=document.getElementById('delete_btn');
const btn_add=document.getElementById('addBtn');

const newTitle=document.getElementById('title').value
const category=document.getElementById('category').value
const newAmount=document.getElementById('amount').value

function handleAddTask(e) {
    e.stopPropagation()
    e.preventDefault()


    const item=[id:,title:newTitle.value,amount:newAmount.value]

    console.log(newTitle);
}
btn_add.addEventListener('click',(e)=> handleAddTask(e))
