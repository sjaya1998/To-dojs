"use strict";
const list = [];
class Todo_Class {
  constructor(item) {
    this.ulelement = item;
  }
  add() {
    const input = document.getElementById("inputtext").value;
    if (input === "") {
      alert("please enter some text");
    } else {
      const todoObject = {
        id: list.length,
        todoText: input,
      };
      document.getElementById("inputtext").value = "";
      list.unshift(todoObject);
      this.display();
      //input = "";
    }
  }
  deleteElement(z) {
    const s = list.findIndex((item) => item.id == z);
    list.splice(s, 1);
    this.display();
  }

  display() {
    this.ulelement.innerHTML = "";
    list.forEach((object_item) => {
      const liElement = document.createElement("li");
      const delbtn = document.createElement("i");
      liElement.innerText = object_item.todoText;
      liElement.setAttribute("data-id", object_item.id);

      delbtn.setAttribute("data-id", object_item.id);
      delbtn.classList.add("far", "fa-trash-alt");

      liElement.appendChild(delbtn);

      delbtn.addEventListener("click", function (e) {
        const deleteId = e.target.getAttribute("data-id");
        mytodo.deleteElement(deleteId);
      });

      this.ulelement.appendChild(liElement);
    });
  }
}

const inputs = document.querySelector("#myul");
var mytodo = new Todo_Class(inputs);
document.querySelector(".addList").addEventListener("click", function () {
  mytodo.add();
});
