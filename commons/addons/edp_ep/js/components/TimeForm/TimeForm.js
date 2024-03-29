import Switch from "../SwitchForm/Switch.js";
import TimeCalendar from "./TimeCalendar.js";
import TimeSlider from "./TimeSlider.js";

const format = "YYYYMMDDHHmmss";

const getTickAsDays = (v) =>
  ({
    1: moment().format(format),
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
    let inputsSelectorTime = document.querySelectorAll('.switchRadio-time input');
    inputsSelectorTime.forEach((element) => 
      element.addEventListener("click", () => {
        let v = element.value;
        this.resetTime();
        this.showDateControler(v);
      })
    );
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
    this.element.classList.add("form-check-parent");
    this.element.classList.add("filter-form");
    this.element.classList.add("filter-form-time");
    this.element.id = this.id;

    this.element.appendChild(childTitle);

    // switch type selector
    this.selector = `<div class="switchRadio-time" id="switchRadioFilterTime">
    <input
        type="radio"
        id="radio-slider"
        name="switch-radio"
        value="slider" autocomplete="off" checked/>
    <label for="radio-slider">
      <span>Frise</span></label>
      <input
      type="radio"
      id="radio-calendar"
      name="switch-radio"
      value="calendar" autocomplete="off"/>
      <label for="radio-calendar">
      <span>Calendrier</span></label>
    </div>`
    this.element.insertAdjacentHTML("beforeend", this.selector);
    this.parent.insertAdjacentElement("beforeend", this.element);
    this.initSelectorClick();
  }

  createSlider() {
    const timeSlider = new TimeSlider(this.element, { value: 5 });
    timeSlider.create();
    timeSlider.slider.on("change", this.sliderChange);
    this.slider = timeSlider;
  }
  createCalendar(className,placeholder,config) {
    const timeDatePicker = new TimeCalendar(this.element, {
      value: 5,
      startView: 0,
      todayHighlight: true,
      format: 'dd/mm/yyyy',
      language: "fr",
      ...config
    },className,placeholder);
    timeDatePicker.create();
    timeDatePicker.datepicker.on("changeDate", this.datePickerChange);
    timeDatePicker.datepicker.on("show", this.datePickerShow);
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
  datePickerShow = (e) => {
    let dateStartValue = document.querySelector('input.date-start').value;
    if(dateStartValue){
      $('input.date-end').datepicker('setStartDate', dateStartValue);
    }    
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

  showDateControler = (value) => {
    let calendarForm = document.querySelectorAll('#filterArea .time-calendar');
    if (value === "slider") {
      this.slider.element.style.display = "";
      calendarForm.forEach((element) => element.style.display = "none");
      //this.calendar.element.style.display = "none";
    } else {
      calendarForm.forEach((element) => element.style.display = "");
      //this.calendar.element.style.display = "";
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
    this.createCalendar('date-start','Date de début');
    this.createCalendar('date-end','Date de fin');
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