import ButtonCheck from "./ButtonCheck.js";

class ButtonCheckForm {
  constructor(parent, values = [], title, size, translate, isAccordion) {
    this.parent = parent;
    this.values = values;
    this.id = `form-check-buttons-${_.uniqueId()}`;
    this.selected = [];
    this.title = title;
    this.size = size;
    this.onClick = null;    
    this.translate = translate;
    this.isAccordion = isAccordion;
  }

  get() {
    return this.element;
  }

  setOnClick(func) {
    this.onClick = func;
  }

  create() {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("form-check-parent");
    parentDiv.classList.add("filter-form");   

    const childTitle = document.createElement("h5");
    childTitle.classList.add("area-title");
    if(this.isAccordion){
      let button = `<button class="form-accordion-button" onclick="displayFormBlock(this);" type="button">
      <span>${this.title}</span>
      <span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor">
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
              </span>
      </button>`
      childTitle.innerHTML = button;
    } else {
      childTitle.innerHTML = this.title;
    }
    

    const childDiv = document.createElement("div");
    childDiv.id = this.id;
    childDiv.classList.add("form-check");

    this.buttons = this.values.forEach((value) => {
      const btn = new ButtonCheck(value, "default", this.size, this.translate);
      btn.create();
      btn.get().addEventListener("click", (e) => {
        btn.click(e);
        this.selected = [
          ...document.getElementById(this.id).querySelectorAll(".selected"),
        ].map((x) => x.value);
        if (this.onClick) {
          this.onClick(this.id, e, this.selected);
        }
      });
      childDiv.appendChild(btn.get());
    });

    if(this.isAccordion){
      parentDiv.classList.add("form-accordion");   
      childTitle.classList.add("form-accordion-title");
      childDiv.classList.add("form-accordion-block");
    }

    parentDiv.appendChild(childTitle);
    parentDiv.appendChild(childDiv);
    this.element = parentDiv;
  }
}

export default ButtonCheckForm;
