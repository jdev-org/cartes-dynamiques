class ButtonCheck {
  constructor(value, style = "", size = "xs", translate = false) {
    this.value = value;
    this.id = _.uniqueId();
    this.selected = false;
    this.element = null;
    this.style = style;
    this.size = size;
    this.translate = translate;
  }

  setValue() {
    this.value = value;
    this.create();
  }

  setSelected() {
    this.selected = !this.selected;
  }

  create() {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("btn");
    if (this.size) {
      btn.classList.add("btn-" + this.size);
    }
    btn.classList.add("btn");
    btn.classList.add("btn-check");
    btn.id = this.id;
    btn.value = this.value;

    btn.innerHTML = this.value;
    if (typeof this.value === "number" && this.translate) {
      btn.innerHTML = mviewer.tr(`edpep.filter.btncheck.${this.value}`);
    } else if (this.translate) {
      btn.innerHTML = mviewer.tr(
        `edpep.filter.btncheck.${this.value.replaceAll(" ", "_")}`
      );
    }
    if (this.style) {
      this.style.split(",").map((cl) => btn.classList.add(cl));
    }
    this.element = btn;
  }

  get() {
    return this.element;
  }

  addClass(cl) {
    this.element.classList.add(cl);
  }

  removeClass(cl) {
    this.element.classList.remove(cl);
  }

  click() {
    this.setSelected();
    this.removeClass("selected");
    this.removeClass("default");
    if (this.selected) this.addClass("selected");
    if (!this.selected) this.addClass("default");
  }

  getColor() {
    return this.selected ? this.colors?.selected : this.colors.default;
  }
}

export default ButtonCheck;
