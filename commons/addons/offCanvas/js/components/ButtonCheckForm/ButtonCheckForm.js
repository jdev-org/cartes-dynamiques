import ButtonCheck from "./ButtonCheck.js";
class ButtonCheckForm {
    constructor(parent, values = [], title, size) {
        this.parent = parent;
        this.values = values;
        this.id = `form-check-buttons-${ _.uniqueId() }`;
        this.selected = [];
        this.title = title;
        this.size = size;
    }

    get() {
        return document.getElementById(this.id);
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
            btn.get().addEventListener("click", (e) => btn.click(e))
            childDiv.appendChild(btn.get());
        });


        parentDiv.appendChild(childTitle);
        parentDiv.appendChild(childDiv);
        this.parent.appendChild(parentDiv);
    }
}

export default ButtonCheckForm;