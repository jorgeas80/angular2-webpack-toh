import { Angular2WebpackTohPage } from './app.po';

describe('angular2-webpack-toh App', function() {
  let page: Angular2WebpackTohPage;

  beforeEach(() => {
    page = new Angular2WebpackTohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
