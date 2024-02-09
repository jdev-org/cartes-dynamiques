import ButtonCheck from "./ButtonCheck.js";

class ButtonCheckForm {
    constructor(parent, values = [], title, size) {
        this.parent = parent;
        this.values = values;
        this.id = `form-check-buttons-${ _.uniqueId() }`;
        this.selected = [];
        this.title = title;
        this.size = size;
        this.onClick = null;
    }

    get() {
        return this.element;
    }

    setOnClick(func) {
        this.onClick = func;
    }

    create() {
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("col-xs-12");
        parentDiv.classList.add("form-check-parent");

        const childTitle = document.createElement("h5");
        childTitle.classList.add("area-title");
        childTitle.innerHTML = this.title;

        const childDiv = document.createElement("div");
        childDiv.id = this.id;
        childDiv.classList.add("form-check");

        this.buttons = this.values.forEach(value => {
            const btn = new ButtonCheck(value, "default", this.size);
            btn.create();
            btn.get().addEventListener("click", (e) => {
                btn.click(e);
                this.selected = [...document.getElementById(this.id).querySelectorAll(".selected")].map(x => x.value);
                if (this.onClick) {
                    this.onClick(this.id, e, this.selected);
                };
            })
            childDiv.appendChild(btn.get());
        });


        parentDiv.appendChild(childTitle);
        parentDiv.appendChild(childDiv);
        this.element = parentDiv;
    }
}

export default ButtonCheckForm;