const { pageObjects_sample } = inject();

class generateData {
  constructor() {
    if (generateData.instance instanceof generateData) {
      return generateData.instance;
    }

    //Object properties
    this.generateDataObjects = {
      selectedItem_index: this.selectedItem_index(),
      selectedItem_name: this.selectedItem_name(),
    };

    Object.freeze(this.generateDataObjects);
    Object.freeze(this);
    generateData.instance = this;
  }

  get(key) {
    return this.generateDataObjects[key];
  }

  /********************************************************_METHODS_******************************************************************** */
  /**
   *
   */
  selectedItem_name(itemName) {
    return itemName;
  }

  /**
   *
   * @param {*} index
   * @returns
   */
  selectedItem_index(index) {
    return index;
  }
}

module.exports = new generateData();
