export class Home {
  constructor(page) {
    this.page = page;
    this.bandSuccessful = "div.p-2";
  }
  async isOnHomePage() {
    await this.page.waitForSelector(this.bandSuccessful);
    return await this.page.isVisible(this.bandSuccessful);
  }
}
