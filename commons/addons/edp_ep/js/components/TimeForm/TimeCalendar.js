class TimeCalendar {
  constructor(parent, config) {
    this.id = "datepicker-filter-" + _.uniqueId();
    this.time = null;
    this.parent = parent;
    this.selector = "calendar";
    this.config = config;
    this.datepicker = null;
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
    input.setAttribute('placeholder','Sélectionner une date');
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
