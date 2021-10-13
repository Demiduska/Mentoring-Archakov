const todo = {
  tasks: ["test 1", "test 2", "test 3"],
  listHTML: document.getElementById("list"),
  init() {
    if (this.tasks.length) {
      this.render();
    }
    document.addEventListener("click", this.action.bind(this));
  },
  action(e) {
    let target = e.target;
    if (target.classList.contains("add__task")) {
      let text = document.querySelector('input[name="task"]').value;
      if (text.trim()) {
        this.handleClickAdd(text);
        document.querySelector('input[name="task"]').value = "";
      }
    }
    if (target.classList.contains("list__item-delete")) {
      let index = target.getAttribute("data-index");
      if (index) {
        this.handleClickRemove(index);
      }
    }
  },
  render() {
    this.listHTML.innerHTML = "";
    this.tasks.forEach((item, index) => {
      this.listHTML.insertAdjacentHTML(
        "beforeend",
        "<li class='list__item'>" +
          item +
          "<span data-index=" +
          index +
          " class='list__item-delete'>Удалить</span></li>"
      );
    });
  },
  handleClickAdd(text) {
    this.tasks.push(text);
    this.render();
  },
  handleClickRemove(index) {
    this.tasks.splice(index, 1);
    this.render();
  },
};
todo.init();
