import Switch from "./Switch.js";

class SwitchForm {
  constructor(values = [], title = "") {
    this.values = values;
    this.title = title;
    this.onClick = null;
    this.selected;
    this.switch = [];
  }

  createSwitch() {
    this.values.forEach((value) => {
      const switchInstance = new Switch(value);
      switchInstance.create();
      this.switch.push(switchInstance);
    });
  }
  setOnClick(onClick) {
    this.onClick = onClick;
  }

  getSwitch() {
    return this.values.map((value) => {
      const switchInstance = new Switch(value);
      switchInstance.create();
      this.switch.push(switchInstance);
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
    this.createSwitch()

    // create form group
    const formGroup = document.createElement("div");
    formGroup.classList.add("form-group");
    formGroup.style.display = "flex";

    // add each switch to form group
    this.switch.forEach((s) => {
      formGroup.insertAdjacentHTML("beforeend", s.get());
      s.setElement(formGroup.querySelector("#" + s.getId()));
    });

    // add title
    parentDiv.appendChild(childTitle);
    // add form group to parent div
    parentDiv.appendChild(formGroup);

    this.element = parentDiv;

    this.initSwitchClick();
  }

  initSwitchClick() {
    // on switch clicked
    this.switch.forEach(s => {
      const id = s.getId();
      this.element.querySelector("#" + id).addEventListener("click", () => {
        s.click();
        this.selected = [...document.getElementById(this.id).querySelectorAll(".activate")].map(x => x.value);
        if (this.onClick) {
            this.onClick(this.id, e, this.selected);
        };
      })
    })
  }

  get() {
    return this.element;
  }
}
export default SwitchForm;
