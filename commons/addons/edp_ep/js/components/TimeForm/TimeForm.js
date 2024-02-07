import Switch from "../SwitchForm/Switch.js";
import TimeCalendar from "./TimeCalendar.js";
import TimeSlider from "./TimeSlider.js";

const format = "YYYYMMDDHHmmss";

const getTickAsDays = (v) =>
  ({
    1: moment(),
    2: moment().add(7, "d").format(format),
    3: moment().add(15, "d").format(format),
    4: moment().add(21, "d").format(format),
    5: null,
  }[v]);

class TimeForm {
  constructor(parent, values, title, defaultValue) {
    this.id = "time-filter-" + _.uniqueId();
    this.parent = parent;
    this.selectorValue = "slider";
    this.value = defaultValue || values[0];
    this.values = values;
    this.title = title;
    this.date = null;
    this.onClick = null;
    this.format = format;
    this.calendar;
    this.slider;
  }

  getDateFormat() {
    return this.format;
  }
  setDate(date) {
    this.date = date;
    this.changeDate();
  }

  initSelectorClick() {
    const selectorId = this.selector.getId();
    document.getElementById(selectorId).addEventListener("click", (e) => {
      this.selector.setActivate();
      this.changeValue(this.values.filter((v) => v != this.value)[0]);
    });
  }

  setOnClick(func) {
    this.onClick = func;
  }
  /**
   * Create slider UI selector
   */

  createArea() {
    // title
    const childTitle = document.createElement("h5");
    childTitle.classList.add("area-title");
    childTitle.innerHTML = this.title;
    this.element = document.createElement("div");
    this.element.classList.add("col-xs-12");
    this.element.classList.add("form-check-parent");
    this.element.classList.add("filter-form");
    this.element.id = this.id;

    this.element.appendChild(childTitle);

    // switch type selector
    this.selector = new Switch(this.value);
    this.selector.create();
    this.element.insertAdjacentHTML("beforeend", this.selector.get());
    this.parent.insertAdjacentElement("beforeend", this.element);
    this.initSelectorClick();
  }

  createSlider() {
    const timeSlider = new TimeSlider(this.element, { value: 5 });
    timeSlider.create();
    timeSlider.slider.on("change", this.sliderChange);
    this.slider = timeSlider;
  }
  createCalendar() {
    const timeDatePicker = new TimeCalendar(this.element, {
      value: 5,
      startView: 0,
      todayHighlight: true,
    });
    timeDatePicker.create();
    timeDatePicker.datepicker.on("changeDate", this.datePickerChange);
    this.calendar = timeDatePicker;
  }

  /**
   * array function keep "this" as TimeForm scope
   * @param {object} e event params callback
   */
  datePickerChange = (e) => {
    this.date = moment(e.date).format(format);
    this.onClick(this, e, this.getDate());
  };
  /**
   * array function keep "this" as TimeForm scope
   * @param {object} e event params callback
   */
  sliderChange = (e) => {
    if (e?.newValue) {
      this.date = getTickAsDays(e?.newValue);
      this.onClick(this, e, this.getDate());
    } else {
      this.onClick(this, e, null);
    }
  };

  showDateControler = () => {
    if (this.value === "slider") {
      this.slider.element.style.display = "";
      this.calendar.element.style.display = "none";
    } else {
      this.calendar.element.style.display = "";
      this.slider.element.style.display = "none";
    }
  };

  getDate() {
    return this.date;
  }

  resetTime() {
    this.date = null;
    this.calendar = null;
    this.slider = null;
    [...document.querySelectorAll(".time-filter")].forEach((el) => el.remove());
    this.createSlider();
    this.createCalendar();
    this.onClick(this, null, null);
  }

  /**
   * On selector value change
   */
  changeValue(v) {
    this.resetTime();
    this.selector.setValue(v);
    this.value = v;

    this.element.querySelector("input").value = v;
    this.element.querySelector(".switch-title").innerHTML = mviewer.tr(
      "edpep.filter.switch." + v
    );
    this.showDateControler();
  }

  clear() {
    this.element.remove();
  }
}

export default TimeForm;
