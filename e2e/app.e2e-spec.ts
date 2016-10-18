import { Demo1019Page } from './app.po';

describe('demo1019 App', function() {
  let page: Demo1019Page;

  beforeEach(() => {
    page = new Demo1019Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
