import { F5mainPage } from './app.po';

describe('f5main App', function() {
  let page: F5mainPage;

  beforeEach(() => {
    page = new F5mainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
