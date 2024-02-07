import Switch from "./Switch.js";

class SwitchForm {
  constructor(values = [], title = "") {
    this.values = values;
    this.title = title;
  }

  getSwitch() {
    return this.values.map((value) => {
      const switchInstance = new Switch(value);
      switchInstance.create();
      return switchInstance.get();
    });
  }
  create() {
    const childTitle = document.createElement("h5");
    childTitle.classList.add("area-title");
    childTitle.innerHTML = this.title;
    // create parent div
    const parentDiv = document.createElement("div");
    parentDiv.id = this.id;
    parentDiv.classList.add("col-sm-12");
    parentDiv.classList.add("toogle-zone");

    // create all switch
    const childsSwitch = this.getSwitch();

    // create form group
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");
    formGroup.style.display = "flex";

    // add each switch to form group
    childsSwitch.forEach((s) => formGroup.insertAdjacentHTML("beforeend", s));

    // add title
    parentDiv.appendChild(childTitle);
    // add form group to parent div
    parentDiv.appendChild(formGroup);

    this.element = parentDiv;
  }
  get() {
    return this.element;
  }
}
export default SwitchForm;
