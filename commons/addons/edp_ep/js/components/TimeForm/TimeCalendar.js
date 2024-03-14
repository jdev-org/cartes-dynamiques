class TimeCalendar {
  constructor(parent, config, className, placeholder) {
    this.id = "datepicker-filter-" + _.uniqueId();
    this.time = null;
    this.parent = parent;
    this.selector = "calendar";
    this.config = config;
    this.datepicker = null;
    this.className = className;
    this.placeholder = placeholder;
    this.onClick = () => {};
  }

  setOnClick(onClick) {
    this.onClick = onClick;
  }

  /**
   * Create slider UI selector
   */
  create() {
    // main div
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("form-group");
    parentDiv.classList.add("time-calendar");
    parentDiv.classList.add("input-group");
    parentDiv.classList.add("filter");
    parentDiv.classList.add("time-filter");
    // calendar input
    const input = document.createElement("input");
    input.id = this.id;
    input.classList.add("datepicker");
    input.classList.add(this.className);
    input.setAttribute('placeholder',this.placeholder);
    parentDiv.appendChild(input);
    this.element = parentDiv;
    this.parent.appendChild(parentDiv);
    this.initDatePicker();
  }

  initDatePicker() {
    $(".datepicker").datepicker({
      format: "mm/dd/yyyy",
      ...this.config,
    });
    this.datepicker = $("#" + this.id);
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

export default TimeCalendar;
