import { TestSitePage } from './app.po';

describe('test-site App', function() {
  let page: TestSitePage;

  beforeEach(() => {
    page = new TestSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
