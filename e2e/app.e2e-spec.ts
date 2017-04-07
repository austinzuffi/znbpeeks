import { ZnbpeeksPage } from './app.po';

describe('znbpeeks App', () => {
  let page: ZnbpeeksPage;

  beforeEach(() => {
    page = new ZnbpeeksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
