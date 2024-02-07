export class cqlWfsFactory {
  constructor(source) {
    this.filters = {};
    if (source) {
      this.url = new URLSearchParams(source.getUrl());
      this.url.append("CQL_FILTER", "");
    }
    if (source) {
      this.source = source;
    }

    this.cql = "";
    this.additionnalCql = "";
    this.grouppedFields = {};
  }

  setUrl(url) {
    if (!url) return;
    this.url = new URL(url);
    this.url.searchParams.set("CQL_FILTER", "");
  }

  setSource(source) {
    this.source = source;
    this.setUrl(source.getUrl());
  }

  getSource() {
    return this.source;
  }

  addInFilter(field = "", values = [], operator = "OR") {
    if (_.isEmpty(values)) return;
    let filter = "";
    if (!_.isEmpty(this.filters[field])) {
      filter = ` ${operator} `;
    }
    filter += `${field} IN (`;
    values.forEach((v, i) => {
      if (i > 0) {
        filter += ",";
      }
      filter += typeof v === "string" ? `'${v}'` : v;
    });
    filter += ")";
    if (_.isEmpty(this.filters[field])) {
      this.filters[field] = [];
    }
    this.filters[field].push(filter);
    this.updateCqlParam();
  }

  addEqual(field, value, searchOperator = "=", filterOperator = "OR") {
    const v = typeof value === "string" ? `"${value}"` : value;
    let filter = `${field} ${searchOperator} ${v}`;
    if (!_.isEmpty(this.filters[field])) {
      filter = ` ${filterOperator} `;
    }
    filter += `${field} = ${v}`;
    if (_.isEmpty(this.filters[field])) {
      this.filters[field] = [];
    }
    this.filters[field].push(filter);
    this.updateCqlParam();
  }

  /**
   * Allow to add complete string expression as "field = value OR field = value2"
   * @param {string} exp
   */
  setAdditionnalCql(exp) {
    this.additionnalCql += exp;
  }

  /**
   * Allow to add complete string expression as "field = value OR field = value2"
   * @param {string} exp
   */
  addFieldCql(field, exp) {
    if (_.isEmpty(this.filters[field])) {
      this.filters[field] = [exp];
    } else {
      this.filters[field].push(exp);
    }
    this.updateCqlParam();
  }

  addGroupedFilter(name, fields, exp, compareOperator) {
    let filter = fields
      .map((field, idx) => {
        return `${field} ${exp[idx]}`;
      })
      .join(` ${compareOperator} `);
    filter = `(${filter})`;
    this.grouppedFields[name] = filter;
    this.updateCqlParam();
  }

  getCqlExp(operator = "OR") {
    let filter = "";
    Object.keys(this.filters).forEach((f, i) => {
      if (!_.isEmpty(this.filters[f])) {
        if (filter) {
          filter += ` ${operator} `;
        }
        filter += `(${this.filters[f].join("")})`;
      }
    });
    filter += this?.additionnalCql || "";

    // groupped filters
    Object.keys(this.grouppedFields).forEach((f, i) => {
      if (!_.isEmpty(this.grouppedFields[f])) {
        if (filter) {
          filter += ` ${operator} `;
        }
        filter += this.grouppedFields[f];
      }
    });
    filter += this?.additionnalCql || "";
    return filter;
  }

  updateCqlParam() {
    this.cql = this.getCqlExp("AND");
    if (!this.cql) {
      this.url.searchParams.delete("CQL_FILTER");
    } else {
      this.url.searchParams.set("CQL_FILTER", this.cql);
    }
  }

  updateSourceUrl() {
    const newUrl = this.getUrl();
    this.source.setUrl(newUrl);
    this.source.refresh();
  }

  getUrl() {
    if (!this.url) return;
    return this.url.toString();
  }

  cleanFilters() {
    this.filters = {};
    this.grouppedFields = {};
    this.url.searchParams.set("CQL_FILTER", "");
    this.updateCqlParam();
    this.updateSourceUrl();
  }

  cleanFilter(field) {
    delete this.filters[field];
    delete this.grouppedFields[field];
    this.updateCqlParam();
  }
}
