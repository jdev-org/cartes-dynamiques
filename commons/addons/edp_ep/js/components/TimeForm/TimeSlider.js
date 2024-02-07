class TimeSlider {
  constructor(parent, config) {
    this.time = null;
    this.id = "time-slider-" + _.uniqueId();
    this.selector = "slider";
    this.parent = parent;
    this.config = config;
    this.slider = null;
  }

  /**
   * Create slider UI selector
   */
  create() {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("filter");
    parentDiv.classList.add("time-filter");
    const input = document.createElement("input");
    input.id = this.id;
    input.type = "text";
    input.classList.add("slider");
    parentDiv.appendChild(input);
    this.element = parentDiv;
    this.parent.appendChild(parentDiv);
    this.initSlider();
  }

  initSlider() {
    this.slider = new Slider("#" + this.id, {
      min: 1,
      max: 3,
      tooltip: "hide",
      step: 1,
      value: 5,
      ticks: [1, 2, 3, 4, 5],
      ticks_labels: ["Aujourd&#8216hui", "7j", "15j", "21j", "Total"],
      ...this.config,
    });
  }

  /**
   * On selector value change
   */
  changeValue(v) {
    this.value = v;
  }

  clear() {
    this.element.remove();
  }
}

export default TimeSlider;
