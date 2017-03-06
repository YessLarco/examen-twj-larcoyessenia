import { BorracherasPage } from './app.po';

describe('borracheras App', () => {
  let page: BorracherasPage;

  beforeEach(() => {
    page = new BorracherasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
