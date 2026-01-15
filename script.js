//Task 1
//Task1.1.-----
let shoppingList = [];
//Task1.2.-------
let inputItem = document.getElementById("dataInput");
let list = document.getElementById("list");
let removeButton = document.getElementById("removeItemButton");
//Task2.2----
let searchInput = document.getElementById("searchInput");

//Task3.1-----
let addButton = document.getElementById("addButton");
//Task3.2---
addButton.addEventListener("click", function () {
  addItem();
  createList(shoppingList);
});

function addItem() {
  // Task2.1----
  if (shoppingList.filter((item) => item === inputItem.value).length) return;
  //Task1.2-----
  if (!inputItem.value) return;
  shoppingList.push(inputItem.value);
  inputItem.value = "";
}

//Task 3: Render the List in the Browser
function createList(shopList) {
  //Task3.2---
  list.innerHTML = "";
  for (let index = 0; index < shopList.length; index++) {
    let listItem = document.createElement("li");
    listItem.innerText = shopList[index];
    list.appendChild(listItem);
  }

  displayList();
}
//TASK-1.3-------
removeButton.addEventListener("click", function () {
  removeLastItem();

  //Task3.3----
  createList(shoppingList);
});

function removeLastItem() {
  shoppingList.pop();
}

//Task-1.4--------

function displayList() {
  if (!shoppingList.length) return;
  console.log("Shopping List:");
  shoppingList.forEach((element, index) => {
    console.log(`${index + 1}- ${element}`);
  });
}

//Task 2: Filter and Search an Array
//Task2.2---
function filterItems(searchedItem) {
  let SearchedList = shoppingList.filter((item) =>
    item.toLowerCase().includes(searchedItem.toLowerCase())
  );
  createList(SearchedList);
}

searchInput.addEventListener("input", (e) => {
  let searchedItem = e.target.value;
  filterItems(searchedItem);
});
