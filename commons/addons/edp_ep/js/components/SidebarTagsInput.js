class SidebarTagsInput {
    defaultConfig = {
        freeInput: false
    };
    /**
     * 
     * @param {object} data 
     * @param {object} style 
     */
    constructor(parent, values = "", colors = {}, config = {}) {
        this.values = values;
        this.colors = {
            selected: "#002ddc",
            default: "#EEEEEE",
            ...colors
        }
        this.parent = parent;

        this.config = {
            ...this.defaultConfig,
            ...config,
            typeahead: {
                source: this.values,
            }
        };

        this.id = _.uniqueId();
    }

    setColors(colors = {}) {
        this.colors = {...this.colors, colors}
    }

    createInput() {
        // create Node Element
        this.input = document.createElement("input");
        this.input.setAttribute("type","text");
        this.input.setAttribute("data-role", "tagsinput");
        this.input.setAttribute("value", this.values);
        this.input.setAttribute("id", this.id);
        // add to DOM
        $(this.parent).append(this.input);
    }

    updateConfig(config = {}) {
        this.config = {...this.config, ...config}
    }

    getId() {
        return this.id;
    }

    get() {
        return document.getElementById(this.id);
    }

    setValues(values = "") {
        this.values = values;
    }

    create() {
        this.createInput();
        $(this.parent).tagsinput(this.config);
    }

    destroy() {
        $("#" + id).tagsinput("destroy");
    }
}

export default SidebarTagsInput;