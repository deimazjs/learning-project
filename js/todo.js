var todoInput = document.getElementById("todo-input");  // get INPUT element
var addList = document.getElementById("add-list");  // get add BUTTON element
var shopList = document.getElementById("shop-ol");  // get list OL element
var counterSpan = document.getElementById("counter") // get SPAN element for counting list items
var itemCount = shopList.children.length;

window.onload = shopListLength();

function shopListLength() {
  var itemCount = shopList.children.length;
  var newCountNode = document.createTextNode(itemCount);
  counterSpan.textContent = "";
  counterSpan.appendChild(newCountNode);
}

function addListItem() {
  var newItemLi = document.createElement("li"); // creates new LI element
  var newInputNode = document.createTextNode(todoInput.value);  // creates VALUE for text node from INPUT
  var newItemButton = document.createElement("button"); // creates BUTTON element
  var newButtonNode = document.createTextNode("×"); // adds text NODE to BUTTON element
  newItemButton.setAttribute("type", "button"); // creates attribute to BUTTON element
  newItemButton.setAttribute("class", "close"); // creates attribute to BUTTON element
  newItemButton.setAttribute("aria-label", "Close"); // creates attribute to BUTTON element
  newItemButton.appendChild(newButtonNode); // adds text NODE element to BUTTON
  newItemLi.appendChild(newInputNode);  // adds text NODE with INPUT value to LI element
  newItemLi.appendChild(newItemButton); // adds BUTTON element to new LI element
  shopList.appendChild(newItemLi);  // adds LI element to the OL list
  todoInput.value = ""; // clears INPUT element after new element is added
}

function addToList() {
  if ( todoInput.value.length > 0) {  // checks if there is text inside INPUT field
    addListItem()
    shopListLength();
  }
}

function addToListEnter(e) {
  if ( todoInput.value.length > 0 && e.keyCode === 13) {  // checks if there is text inside INPUT field and keypress matches
    addListItem()
    shopListLength();
  }
}

 function doneItem(e) {
  var target = e.target;
  var targetParent = target.parentElement;
  if (targetParent === shopList) {
    target.classList.toggle("done");
  }
}

function removeItem(e) {
  var target = e.target;
  var targetParent3 = target.parentElement.parentElement;
  if (targetParent3 === shopList) {
    shopList.removeChild(target.parentElement);
    shopListLength();
  } else {
    return
  }
}

addList.addEventListener("click", addToList); // adds event listener for add BUTTON
todoInput.addEventListener("keypress", addToListEnter); // adds event listener for ENTER keypress
shopList.addEventListener("click", function(e) { 
  doneItem(e);
  removeItem(e);
}, false); // adds event listener for LI elements