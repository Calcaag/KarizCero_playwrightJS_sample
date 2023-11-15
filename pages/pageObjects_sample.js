const { I, dataConfig_sample } = inject();

module.exports = {
  //*****************************************_LOCATORS_*************************************************** */
  Inventory_page: {
    sections: {
      item_description: "//div[@class='inventory_item']",
      item_name: "//div[@class='inventory_item_name ']",
    },
    buttons: {
      add_to_cart: `//button[contains(@id, 'add-to-cart')][text()='Add to cart']`,
    },
  },

  //*****************************************_METHODS_*************************************************** */
  /**
   *
   */
  async generate_random_selectedItemData() {
    const randomItem_index = this.generateRandomNumber(
      await this.get_numberOfItemsOnPage_InventoryPage(),
      1
    );
    const randomItem_name =
      this.get_nameOfItemOnPage_InventoryPage(randomItem_index);
    dataConfig_sample.selectedItem_index(randomItem_index);
    dataConfig_sample.selectedItem_name(randomItem_name);
  },

  /**
   *
   */
  async addToCart_anyItem_InventoryPage() {
    const randomItem_index = this.generateRandomNumber(
      await this.get_numberOfItemsOnPage_InventoryPage(),
      1
    );
    I.click(
      this.Inventory_page.sections.item_description +
        `[${randomItem_index}]` +
        this.Inventory_page.buttons.add_to_cart
    );
  },

  /**
   *
   * @param {*} min
   * @param {*} max
   */
  generateRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   *
   * @param {*} index
   * @returns
   */
  async get_nameOfItemOnPage_InventoryPage(index) {
    return await I.grabTextFrom(
      this.Inventory_page.sections.item_description +
        `[${index}]` +
        this.Inventory_page.sections.item_name
    );
  },

  /**
   *
   * @returns
   */
  async get_numberOfItemsOnPage_InventoryPage() {
    return await I.grabNumberOfVisibleElements(
      this.Inventory_page.buttons.add_to_cart
    );
  },
};
