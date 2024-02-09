class Switch {
  constructor(value) {
    this.value = value;
    this.id = "switch-" + _.uniqueId();
    this.activate = false;
    this.stringElement = null;
  }

  setValue() {
    this.value = value;
    this.create();
  }

  setActivate() {
    this.activate = !this.activate;
  }

  create() {

    const switchElement = `
      <div class="col-sm-2" style="display: inline-flex; width: 70px;">
          <input type="checkbox" id="${this.id}" class="custom-switch" value="${ this.value }">
          <label for="${this.id}" class="toggle-label">Toggle</label>
      </div>
      <div class="switch-title">
          <p class="Text">${ this.value }</p>
      </div>
    `;
    this.stringElement = switchElement;
  }

  get() {
    return this.stringElement;
  }

  getId() {
    return this.id;
  }

  addClass(cl) {
    this.element.classList.add(cl);
  }

  removeClass(cl) {
    this.element.classList.remove(cl);
  }

  addEvent(name, func) {
    const el = document.getElementById(this.id);
    if (!el) return;
    el.addEventListener(name, func);
  }

  click() {
    this.setActivate();
    this.removeClass("activate");
    this.removeClass("default");
    console.log(this.activate);
    if (this.activate) this.addClass("activate");
    if (!this.activate) this.addClass("default");
  }

  getColor() {
    return this.activate ? this.colors?.activate : this.colors.default;
  }

  setElement(element) {
    this.element = element;
  }
}

export default Switch;
