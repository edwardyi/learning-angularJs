import { FirstNgProjectPage } from './app.po';

describe('first-ng-project App', function() {
  let page: FirstNgProjectPage;

  beforeEach(() => {
    page = new FirstNgProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
